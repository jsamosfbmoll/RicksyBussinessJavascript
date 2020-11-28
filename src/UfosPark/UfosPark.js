function UfosPark() {
    this.ufos = [];
    this.cards = new Map();
}

UfosPark.prototype.add = function(UfoId) {
    this.ufos.push(ufoID);
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