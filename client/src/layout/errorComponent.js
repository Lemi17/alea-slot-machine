import * as PIXI from 'pixi.js';

export function errorComponent(app) {
    const errorTexture = PIXI.Texture.from('betHighlight');
    const errorSprite = new PIXI.Sprite(errorTexture);
    errorSprite.scale.set(3, 1.5);
    errorSprite.x = app.view.width / 2;
    errorSprite.y = app.view.height / 2;

    errorSprite.anchor.set(0.5, 0.5);

    const textStyle = {
        fontSize: 28,
        fill: 0xffffff,
        align: 'center',
        stroke: 0x000000,
        strokeThickness: 2.5,
        fontWeight: 800,
    };
    const errorText = new PIXI.Text('Connection Error...', textStyle);
    errorText.scale.set(0.33, 0.75);
    errorText.anchor.set(0.5, 0.5);

    errorSprite.addChild(errorText);

    app.stage.addChild(errorSprite);

    return errorSprite;
}
