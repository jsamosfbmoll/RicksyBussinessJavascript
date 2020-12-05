const { getUfosPark, UfosPark, Ufo } = require("../dependencies/UfosPark");

test("Check getUfosPark is singleton", () => {
    let ufosPark = getUfosPark();
    let ufosParkDos = getUfosPark();
    expect(ufosPark).toBeInstanceOf(UfosPark);
    expect(ufosPark).toMatchObject(ufosParkDos);
});

test("Add ufo", () => {
    let ufo = new Ufo("Marca", "Modelo", 100, "Color", "Gama", 6, ["Caracteristicas"]);
    let ufosPark = getUfosPark();
    ufosPark.addUfo(ufo);
    expect(ufosPark.getUfos()).toContain(ufo);
});

test("Remove ufo", () => {
    let ufo = new Ufo("Marca", "Modelo", 100, "Color", "Gama", 6, ["Caracteristicas"]);
    let ufosPark = getUfosPark();
    ufosPark.addUfo(ufo);
    expect(ufosPark.getUfos()).toContain(ufo);
    ufosPark.remove(ufo);
    expect(ufosPark.getUfos()).not.toContain(ufo);
});