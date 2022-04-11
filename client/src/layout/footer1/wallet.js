import * as PIXI from 'pixi.js';
import { walletAmount } from '../../game/state';

export function wallet(footer1) {
    const walletTexture = PIXI.Texture.from('wallet');
    const walletSprite = new PIXI.Sprite(walletTexture);
    walletSprite.alpha = 0.9;
    footer1.addChild(walletSprite);

    const walletText = new PIXI.Text('Wallet:', {
        fontSize: 20,
        fill: 0xffffff,
        align: 'center',
        fontWeight: 600,
    });
    walletText.x = walletSprite.width / 2;
    walletText.anchor.x = 0.5;
    walletText.y = 7.5;
    walletSprite.addChild(walletText);

    walletAmount.x = walletSprite.width / 2;
    walletAmount.y = walletSprite.height / 2 + 12.5;
    walletAmount.anchor.set(0.5, 0.5);
    walletSprite.addChild(walletAmount);
}
