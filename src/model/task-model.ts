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

    returnById = async (id: number) => {
        return await prisma.task.findUnique({
            where: {
                id: id,
            },
        })
    }

    returnFinished = async (status: boolean) => {
        return await prisma.task.findMany({
            where: {
                status: status,
            }
        })
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

    delete = async (id: number) => {
        return await prisma.task.delete({
            where: {
                id: id
            }
        })
    }

}

export const taskModels = new TaskModels();


