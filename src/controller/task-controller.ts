import { taskModels } from "../model/task-model";
import { Request, Response } from "express";


class TaskController {

    createTask = async (req: Request, res: Response) => {
        try {
            const { name, description, status } = req.body
            const createTask = await taskModels.create(name, description, status);

            res.status(201).json(createTask);
        } catch {
            res.status(500).json({ error: 'Erro ao criar a tarefa' });
        }
    }

    returnAllTask = async (req: Request, res: Response) => {
        try {
            const returnAllTask = await taskModels.returnAll();

            res.status(200).json(returnAllTask)
        } catch {
            res.status(500).json({ error: 'Erro ao chamar as tarefas' })

        }
    }
    returnById = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const returnbyId = await taskModels.returnById(id);

            res.status(200).json(returnbyId)
        } catch {
            res.status(500).json({ error: 'Erro ao chamar a tarefa' })
        }
    }

    updateById = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const { name, description, status } = req.body
            const updateById = await taskModels.update(id, name, description, status)

            res.status(200).json(updateById)
        } catch {
            res.status(500).json({ error: 'Erro ao atualizar tarefa' })
        }
    }
}

export const taskController = new TaskController();