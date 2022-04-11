import * as PIXI from 'pixi.js';
import { stakeText } from '../../../game/state';

export function stakeSprite(footer2) {
    const stakeTexture = PIXI.Texture.from('betPerLine');
    const stakeSprite = new PIXI.Sprite(stakeTexture);

    stakeSprite.scale.set(1.4, 1.4);
    stakeSprite.x = 535;
    stakeSprite.alpha = 0.8;

    stakeText.alpha = 100;
    stakeText.x = stakeSprite.width / 1.4 / 2;
    stakeText.y = stakeSprite.height / 1.4 / 2;
    stakeText.anchor.set(0.5, 0.5);
    stakeSprite.addChild(stakeText);

    footer2.addChild(stakeSprite);
}
