import express, { Request, Response, request, response } from 'express';
import { PrismaClient } from '@prisma/client';
import { taskController } from './controller/task-controller';
import { routes } from './routes/router';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
