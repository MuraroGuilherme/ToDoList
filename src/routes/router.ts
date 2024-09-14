import express from "express";
import { defaultRoute } from "./default-route";
import { returnTask, returnById } from "./endpoints/get-routes";
import { createTask } from "./endpoints/post-routes";
import { updateTask } from "./endpoints/put-routes";
import { deleteTask } from "./endpoints/delete-routes";

export const routes = express.Router();

routes.use(defaultRoute)

// GET
routes.use(returnTask, returnById)

// POST
routes.use(createTask)

// PUT
routes.use(updateTask)

// DELETE
routes.use(deleteTask)
