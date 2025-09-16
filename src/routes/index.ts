// /src/routes/index.ts
import { Router } from 'express';
import footerRoutes from './footer';
import headerRoutes from './header';
import componentRoutes from './component';
import sendResponse from '@utils/sendResponse';
const router = Router();

router.use('/footer', footerRoutes);
router.use('/header', headerRoutes);
router.use ('/component', componentRoutes);

router.get('/', (req, res) => {
  sendResponse(res, 200, { message: 'API Obelisco' });
});

export default router;
