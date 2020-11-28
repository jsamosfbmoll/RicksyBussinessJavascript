function CrystalExpender(stock, cost) {
    this.stock = stock;
    this.cost = cost;
}

CrystalExpender.prototype.toString = function() {
    return "Stock: " + this.stock + " cost: " + this.cost;
}

CrystalExpender.prototype.dispatch = function(card) {
    if (this.stock > -1 && card.pay(this.cost)) {
        this.stock -= 1;
        return true;
    }
    return false;
}