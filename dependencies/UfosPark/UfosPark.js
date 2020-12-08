function UfosPark() {
    this.ufos = [];
    this.cards = new Map();
}

UfosPark.prototype.add = function(ufo) {
    this.ufos.push(ufo);
}

UfosPark.prototype.dispatch = function(card) {
    if (this.cards.has(card) || this.ufos.length == 0) return;

    this.cards.set(card.getCode(), this.ufos[0]);

    if (card.pay(this.ufos[0].getPrecio())) {
        this.cards.set(card.getCode(), this.ufos[0]);
        this.ufos.shift();
    }
}

UfosPark.prototype.getUfoOf = function(card) {
    if (this.cards.has(card.getCode())) return this.cards.get(card.getCode());
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