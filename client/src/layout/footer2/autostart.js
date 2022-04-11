import { options } from '../../game/options';
import * as PIXI from 'pixi.js';

import { startPlay } from '../../game/game';
import { click } from '../../game/sounds';

export function autostart(footer2) {
    const autostartTextureOff = PIXI.Texture.from('b_skip_C');
    const autostartTextureOn = PIXI.Texture.from('b_skip_A');
    const autostartSprite = new PIXI.Sprite(autostartTextureOff);

    autostartSprite.interactive = true;
    autostartSprite.buttonMode = true;
    autostartSprite.addListener('pointerdown', () => {
        if (!options.autoRunning) {
            autostartSprite.texture = autostartTextureOn;
            options.autoRunning = true;
        } else {
            autostartSprite.texture = autostartTextureOff;
            options.autoRunning = false;
        }

        startPlay();

        click.play();
    });

    footer2.addChild(autostartSprite);

    const autostartText = new PIXI.Text('Autostart', {
        fontSize: 28,
        fill: 0x000000,
        align: 'center',
        stroke: 0xffffff,
        strokeThickness: 2.5,
        fontWeight: 600,
    });
    autostartText.alpha = 10;
    autostartText.x = autostartSprite.width / 2;
    autostartText.y = autostartSprite.height / 2;
    autostartText.anchor.set(0.5, 0.5);
    autostartSprite.addChild(autostartText);
}
