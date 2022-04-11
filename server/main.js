const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    const wantedReelPosition = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            wantedReelPosition[i][j] = Math.floor(Math.random() * 8) + 1;
        }
    }
    console.log(wantedReelPosition);
    res.send(wantedReelPosition);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
