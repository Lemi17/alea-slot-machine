
export function lerp(a1, a2, t) {
    return a1 * (1 - t) + a2 * t;
}


export function backout(amount) {
    return (t) => --t * t * ((amount + 1) * t + amount) + 1;
}

export function animationUpdate(delta) {
    const now = Date.now();
    const remove = [];

    for (let i = 0; i < tweening.length; i++) {
        const t = tweening[i];
        const phase = Math.min(1, (now - t.start) / t.time);

        t.object[t.property] = lerp(
            t.propertyBeginValue,
            t.target,
            t.easing(phase)
        );
        if (t.change) {
            t.change(t);
        }
        if (phase === 1) {
            t.object[t.property] = t.target;
            if (t.complete) t.complete(t);
            remove.push(t);
        }
    }
    for (let i = 0; i < remove.length; i++) {
        tweening.splice(tweening.indexOf(remove[i]), 1);
    }
}

const tweening = [];
export function tweenTo(
    object,
    property,
    target,
    time,
    easing,
    onchange,
    oncomplete
) {
    const tween = {
        object,
        property,
        propertyBeginValue: object[property],
        target,
        easing,
        time,
        change: onchange,
        complete: oncomplete,
        start: Date.now(),
    };

    tweening.push(tween);
    return tween;
}

export function countTimeout(options) {
    let time = 200;
    let reelBigger;
    if (options.reelExecutionTime[0] >= options.reelExecutionTime[1] - 5) {
        reelBigger = 0;
    } else {
        reelBigger = 1;
    }
    if (
        options.reelExecutionTime[reelBigger] - reelBigger * 5 >
        options.reelExecutionTime[2] - 10
    ) {
        const addTime =
            options.reelExecutionTime[reelBigger] -
            reelBigger * 5 -
            (options.reelExecutionTime[2] - 10);
        time = time + addTime * 1000;
    }

    return time;
}
