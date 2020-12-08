function CreditCard(name, code) {
    if (code.length != 16) throw "Invalid code"; 
    this.name = name;
    this.code = code;
    this.money = 3000;
}

CreditCard.prototype.toString = function() {
    return this.name;
}

CreditCard.prototype.getName = function() {
    return this.name;
}

CreditCard.prototype.getCode = function() {
    return this.code;
}

CreditCard.prototype.getCredit = function() {
    return this.money;
}

CreditCard.prototype.pay = function(qty) {
    let finalMoney = this.money - qty;
    if (finalMoney >= 0) {
        this.money = finalMoney;
        return true;
    }
    return false;
}

module.exports = {
    CreditCard: CreditCard
}