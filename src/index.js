const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const { CreditCard } = require("@jsamos/creditcard");
const { UfosPark } = require("@jsamos/ufospark");
const { CrystalExpender } = require("@jsamos/crystalexpender");
const { RickMenuDispatcher } = require("@jsamos/rickmenudispatcher");
const { Receptivo } = require("@jsamos/receptivo");

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

var crystalExpender = setCrystalExpender();
var rickMenu = setRickMenuDispatcher();