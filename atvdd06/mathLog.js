const math = require('mathjs');

function calcularLogaritmo(numero, base) {
    return math.log(numero, base);
}

module.exports = { calcularLogaritmo };
