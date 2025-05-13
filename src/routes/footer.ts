import { getComplete, getLegales } from '@controllers/footer';
import express from 'express';

const router = express.Router();

router.get('/complete', getComplete);
router.get('/legales', getLegales);

export default router;
