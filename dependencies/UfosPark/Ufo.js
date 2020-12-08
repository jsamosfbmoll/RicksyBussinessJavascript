function Ufo(marca, modelo, precio, color, gama, plazas, caracteristicas) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.color = color;
    this.gama = gama;
    this.plazas = plazas;
    this.caracteristicas = caracteristicas;
}

// Setters

Ufo.prototype.setMarca = function(marca) {
    this.marca = marca;
}

Ufo.prototype.setModelo = function(modelo) {
    this.modelo = modelo;
}

Ufo.prototype.setPrecio = function(precio) {
    this.precio = precio;
}

Ufo.prototype.setColor = function(color) {
    this.color = color;
}

Ufo.prototype.setGama = function(gama) {
    this.gama = gama;
}

Ufo.prototype.setPlazas = function(plazas) {
    this.plazas = plazas;
}

Ufo.prototype.setCaracteristicas = function(caracteristicas) {
    this.caracteristicas = caracteristicas;
}

// Getters

Ufo.prototype.getMarca = function() {
    return this.marca;
}

Ufo.prototype.getModelo = function() {
    return this.modelo;
}

Ufo.prototype.getPrecio = function() {
    return this.precio;
}

Ufo.prototype.getColor = function() {
    return this.color;
}

Ufo.prototype.getGama = function() {
    return this.gama;
}

Ufo.prototype.getPlazas = function() {
    return this.plazas;
}

Ufo.prototype.getCaracteristicas = function() {
    return this.caracteristicas;
}

Ufo.prototype.toString = function() {
    return "Marca: " + this.marca + " Modelo: " + this.modelo;
}

module.exports = {
    Ufo: Ufo
}