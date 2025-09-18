import { login } from '@controllers/auth';
import express from 'express';

const router = express.Router();

router.get('/login', login);

export default router;
