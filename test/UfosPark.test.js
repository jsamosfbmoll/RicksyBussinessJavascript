const { getUfosPark, Ufo } = require("@jsamos/ufospark");

test("Check getUfosPark is singleton", () => {
    let ufosPark = getUfosPark();
    let ufosParkDos = getUfosPark();
    expect(Object.is(ufosPark, ufosParkDos)).toBeTruthy();
});

test("Add ufo", () => {
    let ufo = new Ufo("Marca", "Modelo", 100, "Color", "Gama", 6, ["Caracteristicas"]);
    let ufosPark = getUfosPark();
    ufosPark.add(ufo);
    expect(ufosPark.getUfos()).toContain(ufo);
});

test("Remove ufo", () => {
    let ufo = new Ufo("Marca", "Modelo", 100, "Color", "Gama", 6, ["Caracteristicas"]);
    let ufosPark = getUfosPark();
    ufosPark.add(ufo);
    expect(ufosPark.getUfos()).toContain(ufo);
    ufosPark.remove(ufo);
    expect(ufosPark.getUfos()).not.toContain(ufo);
});

test("Check if ufo has elements", () => {
    let ufo = new Ufo("marca", "modelo", 300, "azul", "gama", 12, ["laser"]);
    expect(ufo.getMarca()).toBe("marca");
    expect(ufo.getModelo()).toBe("modelo");
    expect(ufo.getPrecio()).toBe(300);
    expect(ufo.getColor()).toBe("azul");
    expect(ufo.getGama()).toBe("gama");
    expect(ufo.getPlazas()).toBe(12);
    expect(ufo.getCaracteristicas()).toStrictEqual(["laser"]);
});

test("Set values to ufo", () => {
    let ufo = new Ufo();

    ufo.setMarca("citroen");
    ufo.setModelo("modelito");
    ufo.setPrecio(200);
    ufo.setColor("rojo");
    ufo.setGama("gamba");
    ufo.setPlazas(2);
    ufo.setCaracteristicas(["radio", "lavabo"]);

    expect(ufo.getMarca()).toBe("citroen");
    expect(ufo.getModelo()).toBe("modelito");
    expect(ufo.getPrecio()).toBe(200);
    expect(ufo.getColor()).toBe("rojo");
    expect(ufo.getGama()).toBe("gamba");
    expect(ufo.getPlazas()).toBe(2);
    expect(ufo.getCaracteristicas()).toStrictEqual(["radio", "lavabo"]);
});