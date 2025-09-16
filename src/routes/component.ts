import { getComponent } from '@controllers/component';
import express from 'express';

const router = express.Router();

router.get('/:name', getComponent);

export default router;
