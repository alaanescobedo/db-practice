import { pool } from "../connection"

export class CrudRepository {

  constructor(private tableName: string) { }

  async getAll() {
    const { rows } = await pool.query(`SELECT * FROM ${this.tableName}`)
    return rows
  }

  async create(data: any) {
    const cols = Object.keys(data)
    const values: any[] = []

    for (const key in data) {
      const value = data[key]
      values.push(`'${value}'`)
    }

    const { rows } = await pool.query(`INSERT INTO ${this.tableName} (${cols}) VALUES (${values})`)
    return rows[0]
  }

}
