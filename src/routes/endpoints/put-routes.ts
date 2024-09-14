import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';

export const updateTask = express.Router();
updateTask.put('/tasks/:id', (req: Request, res: Response) => {
    taskController.updateTask(req, res);
})