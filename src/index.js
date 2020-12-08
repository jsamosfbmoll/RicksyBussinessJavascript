const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const { CreditCard } = require("@jsamos/creditcard");
const { getUfosPark, Ufo } = require("@jsamos/ufospark");
const { CrystalExpender } = require("@jsamos/crystalexpender");
const { RickMenuDispatcher } = require("@jsamos/rickmenudispatcher");
const { Receptivo } = require("@jsamos/receptivo");

function mostrarReserva(card, expender, ufos) {
    console.log(card.toString());
    console.log("Packs: " + expender.stock);
    console.log("Ovni: " + ufos.getUfoOf(card));
}

function setCrystalExpender() {
    let pathToJson = path.resolve(__dirname, "data/crystals.json");
    let fileReaded = fs.readFileSync(pathToJson);
    let jsonParsed = JSON.parse(fileReaded);
    return new CrystalExpender(jsonParsed.stock, jsonParsed.cost);
}

function setRickMenuDispatcher() {
    let pathToJson = path.resolve(__dirname, "data/menus.json");
    let fileReaded = fs.readFileSync(pathToJson);
    let jsonParsed = JSON.parse(fileReaded);
    return new RickMenuDispatcher(jsonParsed.stock, jsonParsed.cost);
}

async function setUfosPark() {
    let ufosParkInstance = getUfosPark();
    await fetch("https://my-json-server.typicode.com/AntoniPizarro/bd_proyecto/db")
        .then((response) => response.json())
        .then((json) => {
            for (let ufo of json.ufos) {
                let ufoInstance = new Ufo(
                    ufo.marca,
                    ufo.modelo,
                    ufo.tasa,
                    ufo.color,
                    ufo.gama,
                    ufo.plazas,
                    ufo.caracteristicas
                );
                ufosParkInstance.add(ufoInstance);
            }
        });
    return ufosParkInstance;
}

async function main() {

    var crystalExpender = setCrystalExpender();
    var rickMenu = setRickMenuDispatcher();
    var ufosPark = await setUfosPark();

    var abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");
    console.log("\nTarjeta de Abradolph\n====================");
    console.log(abradolph.toString());

    ufosPark.dispatch(abradolph);
    console.log("\nOvni de Abradolph\n=================");
    console.log(ufosPark.getUfoOf(abradolph).toString());
    console.log("Credito de Abradolph: " + abradolph.getCredit());
    console.log("\nAbradolph quiere otro ovni\n==========================");
    ufosPark.dispatch(abradolph);
    console.log("Su credito no ha cambiado: " + abradolph.getCredit());
    console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph).toString());

    console.log("\nLLega GearHead!\n===============");
    var gearHead = new CreditCard("Gearhead", "8888888888888888");
    gearHead.pay(3000);
    ufosPark.dispatch(gearHead);
    console.log("Su credito es cero: " + gearHead.getCredit());
    console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead).toString());

    console.log("\nLLega Squanchy!\n==============");
    var squanchy = new CreditCard("Squanchy", "4444444444444444");
    ufosPark.dispatch(squanchy);
    console.log("Su credito es: " + squanchy.getCredit());
    console.log("Su ovni es: " + ufosPark.getUfoOf(squanchy).toString());

    console.log("\nAlgun ovni para Morty?\n======================");
    var morty = new CreditCard("Morty", "0000000000000000");
    ufosPark.dispatch(morty);
    console.log("Su credito no ha cambiado: " + morty.getCredit());
    console.log("No hay ovni Morty: " + ufosPark.getUfoOf(morty));

    console.log("\nFlota de ovnis\n==============");
    console.log(ufosPark.toString());

    var packExpender = new CrystalExpender(3, 50);
    console.log("\nPacks\n=====");
    console.log(packExpender.toString());

    packExpender.dispatch(abradolph);
    console.log("\nAbradolph compra su pack\n========================");
    console.log("Packs\n" + packExpender.toString());
    console.log("Credito de Abradolph: " + abradolph.getCredit());

    console.log("\nGearHead sin credito para su pack\n=================================");
    packExpender.dispatch(gearHead);
    console.log("Packs\n" + packExpender.toString());
    console.log("Credito de GearHead: " + gearHead.getCredit());

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
}

main();