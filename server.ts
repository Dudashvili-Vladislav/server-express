import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import graphQlStatic from './staticRoutes/graphQl';
import contextStatic from './staticRoutes/context';

dotenv.config();

const app: Express = express();
const port = process.env.HTTP_PORT || 8080;

app.use('/graphql', graphQlStatic);
app.use('/context', contextStatic);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});