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

    returnAll = async (status: boolean) => {
        if (status != null)
            return await prisma.task.findMany({
                where: {
                    status: status
                }
            })
        else {
            return await prisma.task.findMany()
        }
    }

    returnById = async (id: number) => {
        return await prisma.task.findUnique({
            where: {
                id: id,
            },
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


