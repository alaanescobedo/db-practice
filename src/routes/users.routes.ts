import {Router} from 'express';
import { usersController } from '../controller';

const router = Router();

router.get('/users', usersController.getUsers);

export default router