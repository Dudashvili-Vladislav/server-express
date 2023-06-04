import express, { Request, Response } from 'express';
import path from 'path';

const router = express.Router();

const graphQlStaticPath = process.env.GRAPH_QL_STATIC_PATH || '';
const parentPath = __dirname.replace('/staticRoutes', '');

const staticMiddleWare = (req, res, next) => express.static(path.join(parentPath, graphQlStaticPath))(req, res, next);
router.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(parentPath, `${graphQlStaticPath}/index.html`));
});

export {
  router,
  staticMiddleWare,
};