require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const { promisify } = require('util');

app.use(express.json());

let refreshTokens = [];

app.post('/token', async (req, res, next) => {
  try {
    const refreshToken = req.body.token;
    if (refreshToken === null)
      res.sendStatus(401).json({ error: 'Provide a token' });
    console.log(refreshTokens);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    const REFRESH_TOKEN_PUB_KEY = readFileSync(
      './certs/refreshTokenPubliKey.pem',
      'utf8'
    );

    /** use the refresh Token public key to verify the JWT refresh token that was signed with the private key */
    jwt.verify(
      refreshToken,
      REFRESH_TOKEN_PUB_KEY,
      {
        algorithms: ['RS256'],
      },
      (err, user) => {
        if (err) res.sendStatus(403).json({ message: err.message });
        const accessToken = generateAccessToken(user.name);
        res.json({ accessToken: accessToken });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

app.post('/login', async (req, res) => {
  try {
    // Authenticate User
    const username = req.body.username;
    const user = { name: username };

    const REFRESH_TOKEN_PRIV_KEY = readFileSync(
      './certs/refreshTokenPrivateKey.pem',
      'utf8'
    );

    const accessToken = generateAccessToken(user);

    /** Use the Refresh Token Private Key to sign a JWT refresh token*/
    const refreshToken = jwt.sign({ user }, REFRESH_TOKEN_PRIV_KEY, {
      algorithm: 'RS256',
      expiresIn: '60s',
    });

    refreshTokens.push(refreshToken);
    console.log(refreshTokens);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (err) {
    console.log(err.message);
  }
});

function generateAccessToken(user) {
  const ACCESS_TOKEN_PRIV_KEY = readFileSync(
    './certs/accessTokenPrivateKey.pem',
    'utf8'
  );

  /** Use the Access Token Private Key to sign a JWT access token*/
  return jwt.sign({ user }, ACCESS_TOKEN_PRIV_KEY, {
    algorithm: 'RS256',
    expiresIn: '1hr',
  });
}

app.listen(4000, () => console.log(`App is running at http://localhost:4000`));
