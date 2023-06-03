import express, { Request, Response } from 'express';
import path from 'path';

const router = express.Router();

const graphQlStaticPath = process.env.GRAPH_QL_STATIC_PATH || '';

router.use(express.static(path.join(__dirname, graphQlStaticPath)));
router.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, `${graphQlStaticPath}/index.html`));
});

export default router;