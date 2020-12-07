const { RickMenuDispatcher } = require("../dependencies/RickMenuDispatcher");
const { CreditCard } = require("@jsamos/creditcard");

test("Get Cost", () => {
    let menu = new RickMenuDispatcher(20, 100);
    expect(menu.getCost()).toBe(100);
});

test("Get Stock", () => {
    let menu = new RickMenuDispatcher(20, 100);
    expect(menu.getStock()).toBe(20);
});

test("Dispatch pack success", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");
    let menu = new RickMenuDispatcher(20, 100);

    expect(menu.dispatch(creditcard)).toBeTruthy();
});

test("Dispatch pack no stock", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");
    let menu = new RickMenuDispatcher(0, 100);

    expect(menu.dispatch(creditcard)).toBeFalsy();
});

test("Dispatch pack no money in card", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");
    let menu = new RickMenuDispatcher(20, 100);

    creditcard.pay(3000);

    expect(menu.dispatch(creditcard)).toBeFalsy();
});