const convert = require('convert-units');

function converterDiasParaMinutos(dias) {
    return dias * 1440;
}

function converterGigabytesParaBytes(gb) {
    return convert(gb).from('GB').to('B');
}

module.exports = { converterDiasParaMinutos, converterGigabytesParaBytes };
