function mostrarReserva(card, expender, ufos) {
    console.log(card.toString());
    console.log("Packs: " + expender.stock);
    console.log("Ovni: " + ufos.getUfoOf(card.number()));
}

var abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");
console.log("\nTarjeta de Abradolph\n====================");
console.log(abradolph.toString());

var ufosPark = new UfosPark();
var ufosID = ["unx", "dox"];
for (let ovni of ufosID) {
    ufosPark.add(ovni);
}

ufosPark.dispatch(abradolph);
console.log("\nOvni de Abradolph\n=================");
console.log(ufosPark.getUfoOf(abradolph.number()));
console.log("Credito de Abradolph: " + abradolph.credit());
console.log("\nAbradolph quiere otro ovni\n==========================");
ufosPark.dispatch(abradolph);
console.log("Su credito no ha cambiado: " + abradolph.credit());
console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph.number()));

console.log("\nLLega GearHead!\n===============");
var gearHead = new CreditCard("Gearhead", "8888888888888888");
gearHead.pay(3000);
ufosPark.dispatch(gearHead);
console.log("Su credito es cero: " + gearHead.credit());
console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead.number()));

console.log("\nLLega Squanchy!\n==============");
var squanchy = new CreditCard("Squanchy", "4444444444444444");
ufosPark.dispatch(squanchy);
console.log("Su credito es: " + squanchy.credit());
console.log("Su ovni es: " + ufosPark.getUfoOf(squanchy.number()));

console.log("\nAlgun ovni para Morty?\n======================");
var morty = new CreditCard("Morty", "0000000000000000");
ufosPark.dispatch(morty);
console.log("Su credito no ha cambiado: " + morty.credit());
console.log("No hay ovni Morty: " + ufosPark.getUfoOf(morty.number()));

console.log("\nFlota de ovnis\n==============");
ufosPark.add("trex");
console.log(ufosPark.toString());

var packExpender = new CrystalExpender(3, 50);
console.log("\nPacks\n=====");
console.log(packExpender.toString());

packExpender.dispatch(abradolph);
console.log("\nAbradolph compra su pack\n========================");
console.log("Packs\n" + packExpender.toString());
console.log("Credito de Abradolph: " + abradolph.credit());

console.log("\nGearHead sin credito para su pack\n=================================");
packExpender.dispatch(gearHead);
console.log("Packs\n" + packExpender.toString());
console.log("Credito de GearHead: " + gearHead.credit());

var receptivo = new Receptivo();
receptivo.registra(packExpender);
receptivo.registra(ufosPark);

console.log("\nLLega Squanchy!\n===============");
receptivo.dispatch(squanchy);
mostrarReserva(squanchy, packExpender, ufosPark);

console.log("\nLLega GearHead!\n===============");
gearHead.pay(3000);
receptivo.dispatch(gearHead);
mostrarReserva(gearHead, packExpender, ufosPark);

console.log("\nLLega Birdpearson!\n==================");
var birdpearson = new CreditCard("Birdpearson", "1111111111111111");
receptivo.dispatch(birdpearson);
mostrarReserva(birdpearson, packExpender, ufosPark);

console.log("\nMorty quiere pack y ovni pero no quedan :(\n==========================================");
morty = new CreditCard("Morty", "0000000000000000");
receptivo.dispatch(morty);
mostrarReserva(morty, packExpender, ufosPark);

var MenuDispatcher = new RickMenuDispatcher();
receptivo.registra(MenuDispatcher);

var cards = [abradolph, squanchy, morty, gearHead, birdpearson];
for (let card of cards) {
    receptivo.dispatch(card);
}

console.log("\nPedidos de RickMenus:\n=====================");
console.log(MenuDispatcher.toString());
console.log("\nCreditos de los invitados/as:\n=============================");

for (let card of cards) {
    console.log(card.toString() + "\n");
}