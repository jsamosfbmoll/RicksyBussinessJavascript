function CreditCard(name, code) {
    this.name = name;
    this.code = code;
    this.money = 3000
    this.toString = () => { return this.name; }
    this.number = () => { return this.code }
    this.credit = () => { return this.money; }
    this.pay = (qty) => { this.money -= qty };
}

function UfosPark() {
    this.ufos = [];
    this.cards = [];
    this.add = (ufoID) => { this.ufos.push(ufoID); }
    this.dispatch = (card) => { this.cards.push(card); }
    this.getUfoOf = (card) => { return this.ufos[0] }
    this.toString = () => { return this.ufos.toString(); }
}

function CrystalExpender(stock, cost) {
    this.stock = stock;
    this.cost = cost;
    this.toString = () => { return "Stock: " + this.stock + " cost: " + this.cost; }
    this.dispatch = (card) => { this.stock -= 1; }
}

function RickMenuDispatcher() {
    this.stock = 100;
    this.cost = 10;
    this.toString = () => { return "Stock: " + this.stock + " cost: " + this.cost; }
    this.dispatch = (card) => { this.stock -= 1; }
}

function Receptivo() {
    this.services = [];
    this.registra = (service) => { this.services.push(service); }
    this.dispatch = (card) => { for (let service of this.services) { service.dispatch(card); } }
}

module.exports = {
    CreditCard: CreditCard,
    UfosPark: UfosPark,
    CrystalExpender: CrystalExpender,
    RickMenuDispatcher: RickMenuDispatcher,
    Receptivo: Receptivo
}