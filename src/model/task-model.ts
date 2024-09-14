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

    update = async (id: number, name: string, description: string, status: boolean) => {
        return await prisma.task.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                description: description,
                status: status
            }
        })
    }

    returnById = async (id: number) => {
        return await prisma.task.findUnique({
            where: {
                id: id,
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


