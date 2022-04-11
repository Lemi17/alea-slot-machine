import * as PIXI from 'pixi.js';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../game/constants';

const bottomLine = new PIXI.Graphics();
bottomLine
    .lineStyle(20, 0x2f2000, 1)
    .moveTo(0, SCREEN_HEIGHT - 1)
    .lineTo(SCREEN_WIDTH, SCREEN_HEIGHT);

export default bottomLine;
