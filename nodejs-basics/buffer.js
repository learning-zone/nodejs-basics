/**
 * Buffer Object
 * 
 * Buffer objects are used to represent binary data in the form of a sequence of bytes.
 * 
 * Buffer class is used because pure javascript, while great with unicode-encoded strings, 
 * does not handle straight binary data very well.  
 * 
 */

// Example: Creates a zero-filled Buffer of length 10
const buf = Buffer.alloc(10); 
console.log(buf);  
// Output: <Buffer 00 00 00 00 00 00 00 00 00 00>



// Example: Buffer with Data
const buf1 = Buffer.alloc(10);
count = buf1.write("Alex");  
console.log("Octets written: "+  count);  
// Output: Octets written: 4


// Example: Buffers and Character Encodings
const buf2 = Buffer.from('Hello World', 'utf8');
console.log(buf2); 
// Output: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

console.log(buf2.toString('hex'));
// Output: 48656c6c6f20576f726c64

console.log(buf2.toString('base64'));
// Output: SGVsbG8gV29ybGQ=


// Example: Buffers and iteration
const buf3 = Buffer.from([1, 2, 3]);

for (let b of buf3) {
  console.log(b);
}
// Output:
//   1
//   2
//   3