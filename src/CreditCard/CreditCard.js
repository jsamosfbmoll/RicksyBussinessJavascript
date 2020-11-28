function CreditCard(name, code) {
    this.name = name;
    this.code = code;
    this.money = 3000;
}

CreditCard.prototype.toString = function() {
    return this.name;
}

CreditCard.prototype.number = function() {
    return this.code;
}

CreditCard.prototype.credit = function() {
    return this.money;
}

CreditCard.prototype.pay = function(qty) {
    let finalMoney = this.money - qty;
    if (finalMoney < 0) {
        this.money = finalMoney;
        return true;
    }
    return false;
}