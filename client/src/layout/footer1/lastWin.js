import * as PIXI from 'pixi.js';
import { lastWinAmount } from '../../game/state';

export function lastWin(footer1) {
    const lastWinTexture = PIXI.Texture.from('wallet');
    const lastWinSprite = new PIXI.Sprite(lastWinTexture);
    lastWinSprite.x = 1016;
    lastWinSprite.alpha = 0.9;
    footer1.addChild(lastWinSprite);

    const lastWinText = new PIXI.Text('Last Win:', {
        fontSize: 20,
        fill: 0xffffff,
        align: 'center',
        fontWeight: 600,
    });
    lastWinText.x = lastWinSprite.width / 2;
    lastWinText.anchor.x = 0.5;
    lastWinText.y = 7.5;
    lastWinSprite.addChild(lastWinText);

    lastWinAmount.x = lastWinSprite.width / 2;
    lastWinAmount.y = lastWinSprite.height / 2 + 12.5;
    lastWinAmount.anchor.set(0.5, 0.5);
    lastWinSprite.addChild(lastWinAmount);
}
