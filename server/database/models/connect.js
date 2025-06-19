import 'dotenv/config';
import { Sequelize } from 'sequelize';

console.log('this is database username=', process.env.DATABASE_USERNAME);
console.log('this is database password=', process.env.DATABASE_PASSWORD);

export const sequelize = new Sequelize(
  'server_tips_db',
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  { host: process.env.DATABASE_HOST, dialect: 'mysql' }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('it synced');
  })
  .catch((error) => {
    console.log('unable to connect', error);
  });
