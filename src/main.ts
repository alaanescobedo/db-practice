import 'dotenv/config';
import express from 'express';
import { PORT } from './config';
import { seedsRoutes, usersRoutes } from './routes';

const app = express();

app.use(usersRoutes)
app.use(seedsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})