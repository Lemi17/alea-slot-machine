import * as PIXI from 'pixi.js';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../game/constants';

const background = (app) => {
    const backgroundTexture = PIXI.Texture.from('gameModified');
    const backgroundSprite = new PIXI.Sprite(backgroundTexture);

    backgroundSprite.scale.set(
        SCREEN_WIDTH / backgroundSprite.width,
        SCREEN_HEIGHT / backgroundSprite.height - 0.005
    );

    app.stage.addChild(backgroundSprite);
};
export default background;
