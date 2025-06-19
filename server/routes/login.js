import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).send('Email missing');
  if (!password) return res.status(400).send('Password missing');

  // now that I have password and email, search the database to find user
  // TODO build database and have input for database
});
