import 'dotenv/config';
import express from 'express';
import { PORT } from './config';
import { usersRoutes } from './routes';

const app = express();

app.use(usersRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})