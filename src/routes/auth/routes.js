import express from 'express';
import { generateToken } from './controller.js';

const router = express.Router();

router.get('/generate', generateToken);

export default router;
