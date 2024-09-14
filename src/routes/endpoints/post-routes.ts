import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';

export const createTask = express.Router();
createTask.post('/tasks', (req: Request, res: Response) => {
    taskController.createTask(req, res);
})