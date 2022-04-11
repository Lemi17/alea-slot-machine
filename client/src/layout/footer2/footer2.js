import * as PIXI from 'pixi.js';
import { autostart } from './autostart';
import { stake } from './stake/stake';
import { start } from './start';

const footer2 = function (app) {
    const footer2 = new PIXI.Container();
    footer2.x = app.view.width * 0.179;
    footer2.y = app.view.height - 78;

    autostart(footer2);
    stake(footer2);
    start(footer2);

    app.stage.addChild(footer2);
};

export default footer2;
