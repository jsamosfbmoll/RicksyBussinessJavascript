const { CrystalExpender } = require("@jsamos/crystalexpender");
const { CreditCard } = require("@jsamos/creditcard");

test("Get Cost", () => {
    let crystal = new CrystalExpender(20, 100);
    expect(crystal.getCost()).toBe(100);
});

test("Get Stock", () => {
    let crystal = new CrystalExpender(20, 100);
    expect(crystal.getStock()).toBe(20);
});

test("Dispatch pack success", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");
    let crystal = new CrystalExpender(20, 100);

    expect(crystal.dispatch(creditcard)).toBeTruthy();
});

test("Dispatch pack no stock", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");
    let crystal = new CrystalExpender(0, 100);

    expect(crystal.dispatch(creditcard)).toBeFalsy();
});

test("Dispatch pack no money in card", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");
    let crystal = new CrystalExpender(20, 100);

    creditcard.pay(3000);

    expect(crystal.dispatch(creditcard)).toBeFalsy();
});