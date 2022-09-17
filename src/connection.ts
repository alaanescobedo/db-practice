import { Pool } from 'pg'
import { DB } from './config';

const credentials = {
  user: DB.user,
  host: DB.host,
  database: DB.name,
  password: DB.password,
  port: DB.port,
};

export const pool = new Pool(credentials);