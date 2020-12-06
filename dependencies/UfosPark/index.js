const { UfosPark } = require("./UfosPark");
const { Ufo } = require("./Ufo");

function getUfosPark() {
    let instace = null;

    return function() {
        if (instace == null) {
            instace = new UfosPark();
        }
        return instace;
    }
}

module.exports = {
    getUfosPark: getUfosPark(),
    Ufo: Ufo
}