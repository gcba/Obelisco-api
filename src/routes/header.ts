import { getComplete, getHTML } from '@controllers/headeer';
import express from 'express';

const router = express.Router();

router.get('/complete', getComplete);
router.get('/html', getHTML);

export default router;
