const { CreditCard } = require("@jsamos/creditcard");

test("Credit card with 16 digits", () => {
    expect(() => {
        let creditcard = new CreditCard("Rick", "4916119711304546");
    }).not.toThrow();
    
    expect(() => {
        let creditcarddos = new CreditCard("Morty", "491611971130454");
    }).toThrow();
});

test("Check name getter", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");

    expect(creditcard.getName()).toBe("Rick");
});

test("Check code getter", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");

    expect(creditcard.getCode()).toBe("4916119711304546");
});

test("Check credit getter", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");

    expect(creditcard.getCredit()).toBe(3000);
});

test("Check credit getter after pay", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");

    creditcard.pay(1000);

    expect(creditcard.getCredit()).toBe(2000);
});

test("Check pay function is true", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");

    expect(creditcard.pay(200)).toBeTruthy();
});

test("Check pay function is false", () => {
    let creditcard = new CreditCard("Rick", "4916119711304546");

    creditcard.pay(3000);

    expect(creditcard.pay(200)).toBeFalsy();
});