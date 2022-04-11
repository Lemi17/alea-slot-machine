import * as PIXI from 'pixi.js';

export function messageBox(footer1) {
    const messageTexture = PIXI.Texture.from('status');
    const messageBoxSprite = new PIXI.Sprite(messageTexture);
    messageBoxSprite.x = 220;
    messageBoxSprite.alpha = 0.9;
    footer1.addChild(messageBoxSprite);

    const messageText = new PIXI.Text('Please place your bet', {
        fontSize: 35,
        fill: 0xffff00,
        align: 'center',
        fontWeight: 600,
    });
    messageText.alpha = 10;
    messageText.x = messageBoxSprite.width / 2;
    messageText.y = messageBoxSprite.height / 2;
    messageText.anchor.set(0.5, 0.5);
    messageBoxSprite.addChild(messageText);
}
