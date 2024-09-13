import { taskModels } from "../model/task-model";
import { Request, Response } from "express";


class TaskController {

    createTask = async (req: Request, res: Response) => {
        try {
            const { name, description, status } = req.body
            const newTask = await taskModels.create(name, description, status);

            res.status(201).json(newTask);
        } catch {
            res.status(500).json({ error: 'Erro ao criar a tarefa' });
        }
    }

    returnAllTask = async (req: Request, res: Response) => {
        try {
            const allTask = await taskModels.returnAll();

            res.status(200).json(allTask)
        } catch {
            res.status(500).json({ error: 'Erro ao chamar as tarefas' })

        }
    }
}

export const taskController = new TaskController();