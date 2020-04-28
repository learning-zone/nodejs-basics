/**
 * Crypto Module 
 * 
 * It provides cryptographic functionality that includes a set of wrappers 
 * for open SSL's hash HMAC, cipher, decipher, sign and verify functions.
 * 
 **/

const crypto = require('crypto');  


// Example: Encryption using Hash and HMAC
const secret = 'abc';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to Cryptographic')  
                   .digest('hex');  
console.log(hash);  




// Example: Encryption using Cipher 
const cipher = crypto.createCipher('aes192', 'a password');  
var encrypted = cipher.update('Hello World!', 'utf8', 'hex');  
encrypted += cipher.final('hex');  
console.log(encrypted);   



// Example: Decryption using Decipher 
const decipher = crypto.createDecipher('aes192', 'a password');  
var encrypted = '9b1ade607555ef67592fa7334713cebd';  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted);  