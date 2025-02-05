import express from 'express';
import { getIncidencias, createIncidencia } from './controller.js';
import { publicRateLimit } from '../../middlewares/rateLimit.js';
import { validateCaptchaMiddleware } from '../captcha/routes.js';

const router = express.Router();

router.get('/incidents', publicRateLimit, getIncidencias);
router.post('/incidents', publicRateLimit, validateCaptchaMiddleware, createIncidencia);

export default router;