import * as PIXI from 'pixi.js';
import { messageBox } from './messageBox';
import { wallet } from './wallet';
import { lastWin } from './lastWin';

const footer1 = function (app) {
    const footer1 = new PIXI.Container();
    footer1.x = app.view.width * 0.179;
    footer1.y = app.view.height * 0.815;

    wallet(footer1);

    messageBox(footer1);

    lastWin(footer1);

    app.stage.addChild(footer1);
};

export default footer1;
