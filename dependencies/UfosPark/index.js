const { UfosPark } = require("./UfosPark");
const { Ufo } = require("./Ufo");

function getUfosPark() {
    let instance = null;

    return function() {
        if (instance == null) {
            instance = new UfosPark();
        }
        return instance;
    }
}

module.exports = {
    getUfosPark: getUfosPark(),
    Ufo: Ufo
}
