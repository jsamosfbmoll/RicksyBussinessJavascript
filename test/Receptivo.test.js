const { Receptivo } = require("@jsamos/receptivo");
const { RickMenuDispatcher } = require("@jsamos/rickmenudispatcher");
const { CrystalExpender } = require("@jsamos/crystalexpender");
const { CreditCard } = require("@jsamos/creditcard");

test("Add dispatcher to receptivo", () => {
    let receptivo = new Receptivo();
    receptivo.registra(new RickMenuDispatcher(5, 1000));
    receptivo.registra(new CrystalExpender(3, 2000));

    expect(receptivo.getServices().length).toBe(2);
});

test("Dispatch services", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");
    let receptivo = new Receptivo();
    receptivo.registra(new RickMenuDispatcher(5, 1000));
    receptivo.registra(new CrystalExpender(3, 2000));

    receptivo.dispatch(creditcard);

    expect(creditcard.getCredit()).toBe(0);
    expect(receptivo.services[0].getStock()).toBe(4);
    expect(receptivo.services[1].getStock()).toBe(2);
});