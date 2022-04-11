import * as PIXI from 'pixi.js';
import { playerResources } from './resources';

const textStyle = {
    fontSize: 35,
    fill: 0xffff00,
    align: 'center',
    fontWeight: 600,
};

export const walletAmount = new PIXI.Text(
    `${playerResources.balance}`,
    textStyle
);

export const lastWinAmount = new PIXI.Text(`${playerResources.win}`, textStyle);

export const stakeText = new PIXI.Text(`${playerResources.stake}`, textStyle);
