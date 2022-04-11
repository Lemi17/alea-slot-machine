import * as PIXI from 'pixi.js';
import {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    BACKGROUND_COLOR,
} from './game/constants';
import { options, updateSymbols } from './game/options';
import { animationUpdate } from './game/animations';
import { createLayout } from './layout/layout';
import { errorComponent } from './layout/errorComponent';

const app = new PIXI.Application({
    antialias: true,
});

app.renderer.backgroundColor = BACKGROUND_COLOR;

app.renderer.resize(SCREEN_WIDTH, SCREEN_HEIGHT);

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add('gameJson', './assets/sprites/GAME.json')
    .add('p1Json', './assets/sprites/P_1.json')
    .add('p2Json', './assets/sprites/P_2.json')
    .add('p3Json', './assets/sprites/P_3.json')
    .add('p4Json', './assets/sprites/P_4.json')
    .add('p5Json', './assets/sprites/P_5.json')
    .add('p6Json', './assets/sprites/P_6.json')
    .add('p7Json', './assets/sprites/P_7.json')
    .add('p8Json', './assets/sprites/P_8.json')
    .add('p9Json', './assets/sprites/P_9.json')
    .add('uiJson', './assets/sprites/UI.json')
    .add('gameModified', './assets/sprites/game-modified.png')
    .load(setup);

function setup() {
    createLayout(app);
    errorComponent(app);
    app.ticker.add(() => {
        const error = app.stage.children[app.stage.children.length - 1];
        if (options.serverError) {
            error.alpha = 1;
        } else {
            error.alpha = 0;
        }
    });
}
app.ticker.add(updateSymbols);
app.ticker.add(animationUpdate);
