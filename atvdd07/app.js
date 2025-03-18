const { converterDiasParaMinutos, converterGigabytesParaBytes } = require('./convert');

const dias = 3; 
const minutos = converterDiasParaMinutos(dias);
console.log(`${dias} dias são ${minutos} minutos.`);

const gigabytes = 2; 
const bytes = converterGigabytesParaBytes(gigabytes);
console.log(`${gigabytes} GB são ${bytes} bytes.`);
