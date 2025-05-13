import { getComplete } from '@controllers/headeer';
import express from 'express';

const router = express.Router();

router.get('/complete', getComplete);

export default router;
