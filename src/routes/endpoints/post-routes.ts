import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';
import { logger } from '../../utils/log';

export const createTask = express.Router();
createTask.post('/tasks', (req: Request, res: Response) => {
    logger.info(`POST method (Task) ${new Date().toUTCString()}`)
    taskController.createTask(req, res);
})
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Creates a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Task succesfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       500:
 *         description: Error on creating the task
 */