require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

app.use(express.json());

const posts = [
  {
    username: 'admin',
    title: 'Post 1',
  },
  {
    username: 'root',
    title: 'Post 2',
  },
];

app.get('/posts', authenticateToken, (req, res) => {
  const { name } = req.user;
  console.log(req.user.name);
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  )
    token = req.headers.authorization.split(' ')[1];
  if (!token) res.status(401).json({ message: 'Opps! you need to login' });

  const ACCESS_TOKEN_PUB_KEY = readFileSync(
    './certs/accessTokenPubliKey.pem',
    'utf-8'
  );

  /** Use the Access token Public Key to verify the JWT access token */
  jwt.verify(
    token,
    ACCESS_TOKEN_PUB_KEY,
    {
      algorithms: ['RS256'],
    },
    (err, user) => {
      console.log(err);
      if (err) res.status(403);
      console.log(user);
      req.user = user.user;
      next();
    }
  );
}

app.listen(3000, () => console.log(`App is running`));
