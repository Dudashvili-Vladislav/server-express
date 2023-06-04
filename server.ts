import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { staticMiddleWare as graphQlStatic, router as graphQlRouter} from './staticRoutes/graphQl';
import { staticMiddleWare as contextStatic, router as contextRouter} from './staticRoutes/context';

dotenv.config();

const app: Express = express();
const port = process.env.HTTP_PORT || 8080;

app.use('/graphql', graphQlStatic);
app.use('/graphql', graphQlRouter);
app.use('/context', contextStatic);
app.use('/context', contextRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});