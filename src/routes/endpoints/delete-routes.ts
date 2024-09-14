import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';

export const deleteTask = express.Router();
deleteTask.delete('/tasks/:id', (req: Request, res: Response) => {
    taskController.deleteTask(req, res)
})