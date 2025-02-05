import express from 'express';
import { getPaises } from './controller.js';
import { publicRateLimit } from '../../middlewares/rateLimit.js';

const router = express.Router();

router.get('/', publicRateLimit, getPaises);

export default router;