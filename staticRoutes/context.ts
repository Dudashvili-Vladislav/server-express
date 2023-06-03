import express, { Request, Response } from 'express';
import path from 'path';

const router = express.Router();

const ContextStaticPath = process.env.CONTEXT_STATIC_PATH || '';

router.use(express.static(path.join(__dirname, ContextStaticPath)));
router.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, `${ContextStaticPath}/index.html`));
});

export default router;