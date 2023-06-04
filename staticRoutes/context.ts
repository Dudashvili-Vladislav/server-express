import express, { Request, Response } from 'express';
import path from 'path';

const router = express.Router();

const ContextStaticPath = process.env.CONTEXT_STATIC_PATH || '';
const parentPath = __dirname.replace('/staticRoutes', '');

const staticMiddleWare = (req, res, next) => express.static(path.join(parentPath, ContextStaticPath))(req, res, next);
router.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(parentPath, `${ContextStaticPath}/index.html`));
});

export {
  router,
  staticMiddleWare,
};