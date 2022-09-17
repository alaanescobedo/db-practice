export const DB = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || "5432"),
  name: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
}

export const PORT = process.env.PORT || 3000