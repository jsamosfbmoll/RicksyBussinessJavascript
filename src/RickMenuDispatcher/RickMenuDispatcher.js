function RickMenuDispatcher() {
    this.stock = 100;
    this.cost = 10;
}

RickMenuDispatcher.prototype.toString = function() {
    return "Stock: " + this.stock + " cost: " + this.cost;
}

RickMenuDispatcher.prototype.dispatch = function(card) {
    if (this.stock > -1 && card.pay(this.cost)) {
        this.stock -= 1;
        return true;
    }
    return false;
}

module.exports = {
    RickMenuDispatcher: RickMenuDispatcher
}