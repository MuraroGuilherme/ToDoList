import { empty } from "@prisma/client/runtime/library";
import { taskModels } from "../model/task-model";
import { Request, Response } from "express";


class TaskController {

    createTask = async (req: Request, res: Response) => {
        try {
            const { name, description, status } = req.body
            if (name.trim() !== "") {
                const createTask = await taskModels.create(name, description, status);

                res.status(201).json(createTask);
            } else {
                res.json({ message: "Missing parameters" })
            }

        } catch {
            res.status(500).json({ error: 'Error on creating the task' });
        }
    }

    returnAllTask = async (req: Request, res: Response) => {
        try {
            const { status } = req.body
            const returnAllTask = await taskModels.returnAll(status);

            res.status(200).json(returnAllTask)
        } catch {
            res.status(500).json({ error: 'Error on calling the tasks' })
        }
    }
    returnById = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            if (id) {
                const returnbyId = await taskModels.returnById(id);

                res.status(200).json(returnbyId)
            }
            else {
                res.json({ message: 'Missing parameters' })
            }

        } catch {
            res.status(404).json({ error: 'Task not found' })
        }
    }


    updateTask = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const { name, description, status } = req.body
            if (id && (name.trim() !== "")) {
                const updateTask = await taskModels.update(id, name, description, status)

                res.status(200).json(updateTask)
            } else {
                res.json({ message: 'Missing parameters' })
            }

        } catch {
            res.status(500).json({ error: 'Error on updating the task' })
            res.status(404).json({ error: 'Not found' })
        }
    }

    deleteTask = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            if (id) {
                const deleteTask = await taskModels.delete(id)

                res.status(200).json({ message: 'Task successfully deleted' })

            } else {
                res.json({ message: 'Missing parameters' })
            }

        } catch {
            res.status(404).json({ error: 'Task not found' })
        }
    }
}

export const taskController = new TaskController();