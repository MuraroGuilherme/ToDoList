import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';
import { logger } from '../../utils/log';

export const returnTask = express.Router();
returnTask.get('/tasks', (req: Request, res: Response) => {
    logger.info(`GET method (task) ${new Date().toUTCString()}`)
    taskController.returnAllTask(req, res);
})

export const returnById = express.Router();
returnById.get('/tasks/:id', (req: Request, res: Response) => {
    logger.info(`GET by ID method (Task, ID: ${req.params.id}) ${new Date().toUTCString()}`)
    taskController.returnById(req, res);
})

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Returns all the list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of all tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: boolean
 */
/**
 * @swagger
 * /tasks/:id:
 *   get:
 *     summary: Returns a specific task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the task to return
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The task with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: boolean
 *       404:
 *         description: Task not found
 */
