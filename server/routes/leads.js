import { Router } from 'express';
const router = Router();
router.all('*', (_req, res) => res.status(501).json({ message: 'Lead endpoints are scaffolded, not implemented.' }));
export default router;
