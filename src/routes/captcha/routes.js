import express from 'express';
import { getCaptcha, validateCaptchaMiddleware } from './controller.js';

const router = express.Router();

router.get('/captcha', getCaptcha);

export { router as captchaRouter, validateCaptchaMiddleware };
