
import { Router } from "express";
import { catchAsync } from "../middlewares/errors.js";
import tastkController from "../controllers/task-controller.js"

export default () => {
    
    const api = Router();

    api.get('/all', catchAsync(tastkController.getTasksList));

    api.post('/new', catchAsync(tastkController.addTask));

    api.delete('/all', catchAsync(tastkController.removeAllTasks));

    api.delete('/:id', catchAsync(tastkController.removeTask));

    api.put('/:id', catchAsync(tastkController.updateTask));

    return api;
}