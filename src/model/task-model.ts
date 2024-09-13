import { prisma } from "../database/prisma-client";
import { Request, Response } from "express";

class TaskModels {
    create = async (name: string, description: string, status: boolean) => {
        return await prisma.task.create({
            data: {
                name: name,
                description: description,
                status: status
            }
        })
    }

    returnAll = async () => {
        return await prisma.task.findMany()
    }

    update = async (id: number, data: object) => {
        return await prisma.task.update({
            where: {
                id: id,
            },
            data,
        })
    }

    returnById = async (data: number) => {
        return await prisma.task.findUnique({
            where: {
                id: data,
            },
        })
    }

    returnFinished = async (data: number) => {
        return await prisma.task.findMany({
            where: {
                status: data,
            }
        })
    }

}

export const taskModels = new TaskModels();


