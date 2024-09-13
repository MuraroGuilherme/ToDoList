import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { taskController } from './controller/task-controller';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/tasks', (req: Request, res: Response) => {
  taskController.createTask(req, res);
});

app.get('/tasks', (req: Request, res: Response) => {
  taskController.returnAllTask(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
