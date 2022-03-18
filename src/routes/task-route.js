
import { Router } from "express";
import { catchAsync } from "../middlewares/errors.js";
import tastkController from "../controllers/task-controller.js"

export default () => {
    
    const api = Router();

    api.get('/all', catchAsync(tastkController.getTasksList));

    api.post('', catchAsync(tastkController.addTask));

    api.delete('', catchAsync(tastkController.removeTask));

    api.put('', catchAsync(tastkController.updateTask));

    return api;
}