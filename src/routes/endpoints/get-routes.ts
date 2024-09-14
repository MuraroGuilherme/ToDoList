import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';

export const returnTask = express.Router();
returnTask.get('/tasks', (req: Request, res: Response) => {
    taskController.returnAllTask(req, res);
})

export const returnById = express.Router();
returnById.get('/tasks/:id', (req: Request, res: Response) => {
    taskController.returnById(req, res);
})
