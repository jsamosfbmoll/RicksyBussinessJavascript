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

UfosPark.prototype.getUfos = function() {
    return this.ufos;
}

UfosPark.prototype.remove = function(ufo) {
    let index = this.ufos.indexOf(ufo);
    if (index != -1) this.ufos.splice(index, 1);
}

UfosPark.prototype.toString = function() {
    return this.ufos.toString();
}

module.exports = {
    UfosPark: UfosPark
}