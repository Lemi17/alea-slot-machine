import background from './background/background';
import bottomLine from './bottomLine';
import footer1 from './footer1/footer1';
import footer2 from './footer2/footer2';
import header from './header/header';
import { reels } from './reels/reels';

export function createLayout(app) {
    reels(app);

    app.stage.addChild(bottomLine);

    background(app);

    header(app);

    footer1(app);

    footer2(app);
}
