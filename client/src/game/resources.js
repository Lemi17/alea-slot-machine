class Resources {
    constructor(balance, stake, win) {
        this.balance = 500;
        this.stake = 1;
        this.win = 0;
        this.addStake = function () {
            //Add stake with one point till it equals to three
            if (playerResources.stake >= 1 && playerResources.stake <= 10) {
                playerResources.stake++;
            }
        };
        this.minusStake = function minusStake() {
            //Reduce stake one point till it equals to 1
            if (playerResources.stake > 1) {
                playerResources.stake--;
            }
        };
        this.reduceBalance = function () {
            //Reduce Balance when player prss on spin button
            this.balance = this.balance - this.stake;
        };
    }
}

export const playerResources = new Resources();
