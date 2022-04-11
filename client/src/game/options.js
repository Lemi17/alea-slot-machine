import * as PIXI from 'pixi.js';
import { SYMBOL_SIZE } from './constants';
class Options {
    constructor() {
        this.reels = [];
        this.running = false;
        this.autoRunning = false;
        this.slotTextures = [];
        this.winSlotTextures = [];
        this.reelExecutionTime = [];
        this.wantedReelPosition = [];
        this.timeout = 0;
        this.soundAllowed = true;
        this.serverError = false;
    }
}

export const options = new Options();
export function addTextures() {
    options.slotTextures.push(
        PIXI.Texture.from('P_1_A'),
        PIXI.Texture.from('P_2_A'),
        PIXI.Texture.from('P_3_A'),
        PIXI.Texture.from('P_4_A'),
        PIXI.Texture.from('P_5_A'),
        PIXI.Texture.from('P_6_A'),
        PIXI.Texture.from('P_7_A'),
        PIXI.Texture.from('P_8_A'),
        PIXI.Texture.from('P_9_A')
    );

    options.winSlotTextures.push(
        PIXI.Texture.from('P_1_B'),
        PIXI.Texture.from('P_2_B'),
        PIXI.Texture.from('P_3_B'),
        PIXI.Texture.from('P_4_B'),
        PIXI.Texture.from('P_5_B'),
        PIXI.Texture.from('P_6_B'),
        PIXI.Texture.from('P_7_B'),
        PIXI.Texture.from('P_8_B'),
        PIXI.Texture.from('P_9_B')
    );
}

export const updateSymbols = () => {
    for (let i = 0; i < options.reels.length; i++) {
        const r = options.reels[i];
        r.blur.blurY = (r.position - r.previousPosition) * 8;
        r.previousPosition = r.position;

        for (let j = 0; j < r.symbols.length; j++) {
            const s = r.symbols[j];
            const prevy = s.y;
            s.y =
                (((r.position + j) % r.symbols.length) * SYMBOL_SIZE -
                    SYMBOL_SIZE) /
                1.5;
            if (s.y < 0 && prevy > SYMBOL_SIZE) {
                if (
                    options.reelExecutionTime[i] >= 6 ||
                    options.reelExecutionTime[i] <= 2
                ) {
                    s.texture =
                        options.slotTextures[
                            Math.floor(
                                Math.random() * options.slotTextures.length
                            )
                        ];

                    options.reelExecutionTime[i]--;
                } else {
                    s.texture =
                        options.slotTextures[
                            options.wantedReelPosition[i][
                                options.reelExecutionTime[i] - 3
                            ]
                        ];

                    options.reelExecutionTime[i]--;
                }

                s.scale.x = s.scale.y = Math.min(
                    SYMBOL_SIZE / s.texture.width,
                    SYMBOL_SIZE / s.texture.height
                );

                s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
            }
        }
    }
};
