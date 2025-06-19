import express from 'express';
import bcrypt from 'bcrypt';

import {
  createUser,
  findUserByEmail,
  findUserByUsername,
} from '../database/users.database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, username, password, confirmPassword, occupation } = req.body;

  if (!email) return res.status(400).send('Email missing');
  if (!username) return res.status(400).send('Username missing');
  if (!password) return res.status(400).send('Password missing');
  if (!confirmPassword) return res.status(400).send('Confirm password missing');
  if (!occupation) return res.status(400).send('Occupation missing');

  if (password !== confirmPassword)
    return res.status(406).send('Passwords do not match');

  try {
    // check if username or email exists
    const isEmail = await findUserByEmail(email);
    console.log('this is findUserByEmail', isEmail);
    if (isEmail) {
      console.log('inside find user email if statement');
      return res.status(409).send('email exists');
    }
    if (await findUserByUsername(username)) {
      console.log('inside find username if statement');
      return res.status(409).send('username exists');
    }

    console.log('passed all if statements');

    // if not then hash password and save user to database
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(email, username, hashedPassword);

    if (newUser) {
      return res.status(201).send('user created');
    } else return res.status(500).send('Server error, could not make new user');
  } catch (error) {
    console.log('could not make new user \n', error);
    return res.status(500).send('Server error, could not make new user');
  }
});

export default router;
