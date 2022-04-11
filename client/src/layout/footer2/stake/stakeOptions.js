import * as PIXI from 'pixi.js';
import { playerResources } from '../../../game/resources';
import { stakeText } from '../../../game/state';
import { options } from '../../../game/options';
import { click } from '../../../game/sounds';

export function stakeOptions(footer2) {
    const stakeTextureOff = PIXI.Texture.from('b_plus_D');
    const stakeTextureOn = PIXI.Texture.from('b_plus_C');
    const stakeSpriteMinus = new PIXI.Sprite(stakeTextureOff);
    const stakeSpritePlus = new PIXI.Sprite(stakeTextureOn);

    stakeSpritePlus.x = 692;
    stakeSpriteMinus.x = 490;
    stakeSpritePlus.y = stakeSpriteMinus.y = 10;
    footer2.addChild(stakeSpriteMinus);
    footer2.addChild(stakeSpritePlus);

    const textStyle = {
        fontSize: 28,
        fill: 0x000000,
        align: 'center',
        stroke: 0xffffff,
        strokeThickness: 2.5,
        fontWeight: 800,
    };
    const stakeTextPlus = new PIXI.Text('-', textStyle);
    const stakeTextMinus = new PIXI.Text('+', textStyle);
    stakeTextPlus.x = stakeSpriteMinus.width / 2;
    stakeTextPlus.y = stakeSpriteMinus.height / 2;
    stakeTextPlus.anchor.set(0.5, 0.5);
    stakeTextMinus.x = stakeSpritePlus.width / 2;
    stakeTextMinus.y = stakeSpritePlus.height / 2;
    stakeTextMinus.anchor.set(0.5, 0.5);

    stakeSpritePlus.interactive = true;
    stakeSpritePlus.buttonMode = true;
    stakeSpritePlus.addListener('pointerdown', () => {
        if (options.running) {
            return;
        }
        if (playerResources.stake <= 9) {
            playerResources.addStake();
        }
        if (playerResources.stake >= 10) {
            stakeSpritePlus.texture = stakeTextureOff;
        }
        if (playerResources.stake >= 2) {
            stakeSpriteMinus.texture = stakeTextureOn;
        }

        stakeText.text = playerResources.stake;
        click.play();
    });

    stakeSpriteMinus.interactive = true;
    stakeSpriteMinus.buttonMode = true;
    stakeSpriteMinus.addListener('pointerdown', () => {
        if (options.running) {
            return;
        }
        if (playerResources.stake >= 2) {
            playerResources.minusStake();
        }
        if (playerResources.stake === 1) {
            stakeSpriteMinus.texture = stakeTextureOff;
        }
        if (playerResources.stake <= 9) {
            stakeSpritePlus.texture = stakeTextureOn;
        }

        stakeText.text = playerResources.stake;
        click.play();
    });

    stakeSpriteMinus.addChild(stakeTextPlus);
    stakeSpritePlus.addChild(stakeTextMinus);
}
