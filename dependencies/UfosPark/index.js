function UfosPark() {
    this.ufos = [];
    this.cards = new Map();
}

UfosPark.prototype.add = function(ufoId) {
    this.ufos.push(ufoId);
}

UfosPark.prototype.dispatch = function(card) {
    this.cards.set(card, "ufo")
}

UfosPark.prototype.getUfoOf = function(card) {
    return this.cards.get(card);
}

UfosPark.prototype.toString = function() {
    return this.ufos.toString();
}

module.exports = {
    UfosPark: UfosPark
}