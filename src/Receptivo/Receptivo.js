function aaReceptivo() {
    this.services = [];
    this.registra = (service) => { this.services.push(service); }
    this.dispatch = (card) => { for (let service of this.services) { service.dispatch(card); } }
}

function Receptivo() {
    this.service = [];
}

Receptivo.prototype.registra = function(servicio) {
    this.services.push(servicio);
}

Receptivo.prototype.dispatch = function(card) {
    for (let service of this.services) {
        service.dispatch(card);
    }
}