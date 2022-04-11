import { options } from './options';
import { playerResources } from './resources';
import { backout, tweenTo, countTimeout } from './animations';
import { SYMBOL_SIZE } from './constants';
import { walletAmount, lastWinAmount } from './state';
import { fetchData } from '../service/fetchData';
import { coins, running, win } from './sounds';

export function startPlay() {
    if (options.running || playerResources.balance - playerResources.stake <= 0)
        return;

    fetchData()
        .then((res) => {
            options.wantedReelPosition = res.data;
            options.serverError = false;

            options.serverError = false;
            options.running = true;
            if (playerResources.win > 0) {
                coins.play();
            }

            playerResources.reduceBalance();
            walletAmount.text = playerResources.balance;

            if (options.running) {
                if (options.soundAllowed) {
                    running.play();
                }
            }

            for (let i = 0; i < options.reels.length; i++) {
                const r = options.reels[i];
                const extra = Math.floor(Math.random() * 2000);
                const target =
                    r.position + 10 + i * 5 + Math.round(extra / 1000);
                const time = extra + 3000;
                options.reelExecutionTime[i] =
                    Math.round(time / 1000) + 8 + i * 5;

                tweenTo(
                    r,
                    'position',
                    target,
                    time,
                    backout(0.5),
                    null,
                    i === options.reels.length - 1 ? reelsComplete : null
                );
            }

            options.timeout = countTimeout(options);
        })
        .catch((err) => {
            options.serverError = true;
        });
}

function reelsComplete() {
    setTimeout(() => {
        let lastWin = 0;
        if (
            options.wantedReelPosition[0][1] ===
                options.wantedReelPosition[1][1] &&
            options.wantedReelPosition[1][1] ===
                options.wantedReelPosition[2][1]
        ) {
            if (options.soundAllowed) {
                win.play();
            }

            for (let i = 0; i < 3; i++) {
                options.reels[i].symbols.map((symbol, index) => {
                    if (
                        symbol.y > SYMBOL_SIZE / 1.5 - 50 &&
                        symbol.y < SYMBOL_SIZE / 1.5 + 50
                    ) {
                        options.reels[i].symbols[index].texture =
                            options.winSlotTextures[
                                options.wantedReelPosition[0][1]
                            ];
                    }
                });
            }
            lastWin = playerResources.stake * 20;
        } else if (
            options.wantedReelPosition[0][1] ===
            options.wantedReelPosition[1][1]
        ) {
            win.play();
            for (let i = 0; i < 2; i++) {
                options.reels[i].symbols.map((symbol, index) => {
                    if (
                        symbol.y > SYMBOL_SIZE / 1.5 - 50 &&
                        symbol.y < SYMBOL_SIZE / 1.5 + 50
                    ) {
                        options.reels[i].symbols[index].texture =
                            options.winSlotTextures[
                                options.wantedReelPosition[0][1]
                            ];
                    }
                });
            }
            lastWin = playerResources.stake * 5;
        }
        options.running = false;
        lastWinAmount.text = lastWin;
        playerResources.win = lastWin;
        playerResources.balance += lastWin;

        if (options.autoRunning) {
            const pause = playerResources.lastWin > 0 ? 600 : 300;
            setTimeout(() => {
                startPlay();
            }, pause);
        }
    }, options.timeout);
}
