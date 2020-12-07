function RickMenuDispatcher(stock, cost) {
    this.stock = stock;
    this.cost = cost;
}

RickMenuDispatcher.prototype.toString = function() {
    return "Stock: " + this.stock + " cost: " + this.cost;
}

RickMenuDispatcher.prototype.getCost = function() {
    return this.cost;
}

RickMenuDispatcher.prototype.getStock = function() {
    return this.stock;
}

RickMenuDispatcher.prototype.dispatch = function(card) {
    if (this.stock > 0 && card.pay(this.cost)) {
        this.stock -= 1;
        return true;
    }
    return false;
}

module.exports = {
    RickMenuDispatcher: RickMenuDispatcher
}