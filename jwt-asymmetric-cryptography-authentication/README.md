# Express and JSON Web Token Authentication Using Asymetric Encryption Algorithm (RSA256)

When creating jsonwebtoken rather than signing and verifying tokens with a secret key use Asymetric encryption instead using pubic and private key pairs

<br>

- `cd` into jwt-authentication folder in your terminal run `mkdir certs`, then type `cd certs`.
- Generate a public and private key for both access and refresh tokens:

```bash
/** To generate a public and private key for access tokens */

// Private Key
>> openssl genrsa -out accessTokenPrivatekey.pem 4096

// Public Key
>> openssl rsa -pubout -in accessTokenPrivatekey.pem -out accessTokenPublickey.pem
```

```bash
/** To generate a public and private key for refresh tokens */

// Private Key
>> openssl genrsa -out refreshTokenPrivatekey.pem 4096

// Public Key
>> openssl rsa -pubout -in refreshTokenPrivatekey.pem -out refreshTokenPublickey.pem
```
