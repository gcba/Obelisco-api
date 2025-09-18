import { getComplete } from '@controllers/header';
import { verifyToken } from '@middlewares/jwt';
import express from 'express';

const router = express.Router();

router.get('/complete', /**/ verifyToken, getComplete);

export default router;
