import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';
import { logger } from '../../utils/log';

export const updateTask = express.Router();
updateTask.put('/tasks/:id', (req: Request, res: Response) => {
    logger.info(`PUT method (Task, ID: ${req.params.id}) ${new Date().toUTCString()}`)
    taskController.updateTask(req, res);
})
/**
 * @swagger
 * /tasks/:id:
 *   put:
 *     summary: Updates a task
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the task to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 status:
 *                   type: boolean
 *     responses:
 *       201:
 *         description: Task successfully updated
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
 *                 status:
 *                   type: boolean
 *       500:
 *         description: Error on updating task
 */