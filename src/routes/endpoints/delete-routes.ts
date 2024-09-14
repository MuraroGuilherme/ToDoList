import express, { Request, Response } from 'express';
import { taskController } from '../../controller/task-controller';
import { logger } from '../../utils/log';

export const deleteTask = express.Router();
deleteTask.delete('/tasks/:id', (req: Request, res: Response) => {
    logger.info(`DELETE method (Task, ID: ${req.params.id}) ${new Date().toUTCString()}`)
    taskController.deleteTask(req, res)
})

/**
 * @swagger
 * /tasks/:id:
 *   delete:
 *     summary: Deletes a task by it's ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task successfully deleted
 *       404:
 *         description: Task not found
 */