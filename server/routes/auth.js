import { Router } from 'express';
const router = Router();
router.all('*', (_req, res) => res.status(501).json({ message: 'Auth endpoints are scaffolded, not implemented.' }));
export default router;
