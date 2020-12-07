function Receptivo() {
    this.services = [];
}

Receptivo.prototype.registra = function(servicio) {
    this.services.push(servicio);
}

Receptivo.prototype.getServices = function() {
    return this.services;
}

Receptivo.prototype.dispatch = function(card) {
    for (let service of this.services) {
        service.dispatch(card);
    }
}

module.exports = {
    Receptivo: Receptivo
}