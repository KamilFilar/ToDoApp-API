import pool from "./../config/dbConfig";

export default {
  // Return all tasks from db
  async getTasksList(req, res, next) {
    let query = "SELECT * FROM tasks";

    pool.getConnection((err, connection) => {
      if (err) throw err;

      connection.query(query, (err, rows) => {
        if (!err) return res.status(200).send(rows);
        else {
          console.log(err);
          return res.status(400).send(err);
        }
      });
      connection.release();
    });
  },

  // Add new task to db
  async addTask(req, res, next) {
    const TASK_NAME = req.body;
    
    return res.status(200).send({
      msg: "Add task work!",
    });
  },

  // Remove existing task from db
  async removeTask(req, res, next) {
    return res.status(200).send({
      msg: "Remove task work!",
    });
  },

  // Update concrete task in db
  async updateTask(req, res, next) {
    return res.status(200).send({
      msg: "Update task work!",
    });
  },

  // Change priority of task
  async changePriority(req, res, next) {
    return res.status(200).send({
      msg: "Change priority task work!",
    });
  },
};
