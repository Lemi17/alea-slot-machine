import * as PIXI from 'pixi.js';
import { options } from '../../game/options';

const header = function (app) {
    const header = new PIXI.Container();
    const logoTexture = PIXI.Texture.from('logo');
    const logoSprite = new PIXI.Sprite(logoTexture);
    logoSprite.x = app.view.width / 2;
    logoSprite.anchor.x = 0.5;
    logoSprite.width = app.view.width * 0.4;
    logoSprite.height = app.view.height * 0.12;
    logoSprite.y = 5;
    logoSprite.scale.set(1, 0.9);

    const soundTextureOn = PIXI.Texture.from('soundsSelectedEnabled');
    const soundTextureOff = PIXI.Texture.from('soundsEnabled');
    const soundSprite = new PIXI.Sprite(soundTextureOn);

    soundSprite.x = 1860;
    soundSprite.y = 100;
    soundSprite.scale.set(1.5, 1.5);

    soundSprite.interactive = true;
    soundSprite.buttonMode = true;
    soundSprite.addListener('pointerdown', () => {
        if (options.soundAllowed) {
            soundSprite.texture = soundTextureOff;
            options.soundAllowed = false;
        } else {
            soundSprite.texture = soundTextureOn;
            options.soundAllowed = true;
        }
    });

    header.addChild(soundSprite);
    header.addChild(logoSprite);
    app.stage.addChild(header);
};
export default header;
