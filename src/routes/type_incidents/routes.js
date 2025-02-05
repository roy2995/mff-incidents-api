import express from 'express';
import { getTypesIncidents } from './controller.js';

const router = express.Router();

router.get('/', getTypesIncidents);

export default router;
