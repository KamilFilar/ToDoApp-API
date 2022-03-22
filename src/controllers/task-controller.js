import pool from "./../config/dbConfig";

export default {
  
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

  async addTask(req, res, next) {
    const TASK_NAME = req.body;
    
    return res.status(200).send({
      msg: "Add task work!",
    });
  },

  async removeTask(req, res, next) {
    return res.status(200).send({
      msg: "Remove task work!",
    });
  },

  async updateTask(req, res, next) {
    return res.status(200).send({
      msg: "Update task work!",
    });
  },

  async changePriority(req, res, next) {
    return res.status(200).send({
      msg: "Change priority task work!",
    });
  },
};
