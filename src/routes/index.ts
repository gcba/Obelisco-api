// /src/routes/index.ts
import { Router } from 'express';
import footerRoutes from './footer';
import headerRoutes from './header';
import authRoutes from './auth';
import sendResponse from '@utils/sendResponse';
const router = Router();

router.use('/footer', footerRoutes);
router.use('/header', headerRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  sendResponse(res, 200, { message: 'API Obelisco: Service 🟢' });
});

export default router;
