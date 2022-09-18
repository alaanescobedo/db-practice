import { pool } from "../connection";

export const cleanAll = async () => {
  await pool.query(`DELETE FROM users`);
}