import * as PIXI from 'pixi.js';
import { REEL_WIDTH, SYMBOL_SIZE } from '../../game/constants';
import { options, addTextures } from '../../game/options';

export function reels(app) {
    addTextures();

    const reelContainer = new PIXI.Container();
    reelContainer.y = 130;
    reelContainer.x = 420;
    for (let i = 0; i < 3; i++) {
        const rc = new PIXI.Container();
        rc.x = i * REEL_WIDTH;
        reelContainer.addChild(rc);

        const reel = {
            container: rc,
            symbols: [],
            position: 0,
            previousPosition: 0,
            blur: new PIXI.filters.BlurFilter(),
        };
        reel.blur.blurX = 0;
        reel.blur.blurY = 0;
        rc.filters = [reel.blur];

        for (let j = 0; j < 4; j++) {
            const symbol = new PIXI.Sprite(
                options.slotTextures[
                    Math.floor(Math.random() * options.slotTextures.length)
                ]
            );
            symbol.y = (j * SYMBOL_SIZE) / 1.5;
            symbol.scale.x = symbol.scale.y = Math.min(
                SYMBOL_SIZE / symbol.width,
                SYMBOL_SIZE / symbol.height
            );
            symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
            reel.symbols.push(symbol);
            rc.addChild(symbol);
        }
        options.reels.push(reel);
    }
    app.stage.addChild(reelContainer);
}
