import * as PIXI from 'pixi.js';
import { startPlay } from '../../game/game';
import { options } from '../../game/options';
import { click } from '../../game/sounds';

export function start(footer2) {
    const startTexture = PIXI.Texture.from('b_start_C');
    const startSprite = new PIXI.Sprite(startTexture);
    startSprite.x = 1057;
    footer2.addChild(startSprite);

    const startText = new PIXI.Text('Start', {
        fontSize: 28,
        fill: 0x000000,
        align: 'center',
        stroke: 0xffffff,
        strokeThickness: 2.5,
        fontWeight: 600,
    });
    startText.alpha = 10;
    startText.x = startSprite.width / 2;
    startText.y = startSprite.height / 2;
    startText.anchor.set(0.5, 0.5);
    startSprite.addChild(startText);

    startSprite.interactive = true;
    startSprite.buttonMode = true;
    startSprite.addListener('pointerdown', () => {
        if (!options.running) {
            click.play();
            startPlay();
        }
    });
}
