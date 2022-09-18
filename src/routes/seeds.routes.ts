import {Router} from 'express';
import { seedsController } from '../controller';

const router = Router();

router.get('/seeds/generate', seedsController.generate);
router.get('/seeds/clean', seedsController.clean);

export default router