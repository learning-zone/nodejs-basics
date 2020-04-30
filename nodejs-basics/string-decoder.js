/**
 * String Decoder
 * 
 * The Node.js StringDecoder is used to decode buffer into string. 
 * It is similar to buffer.toString() but provides extra support to UTF.
 * 
 */

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');


const rupee = Buffer.from([0xE2, 0x82, 0xB9]);
console.log(decoder.write(rupee)); // ₹


const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // €
