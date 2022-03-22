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
    const TASK_PRIORITY = req.body.priority;
    const TASK_NAME = req.body.name;
    const TASK_STATE = 'to-do';
    const ADD_DATE = new Date();

    const queryINSERT = "INSERT INTO `tasks` (`priority`, `name`, `state`, `add_date`) VALUES (?, ?, ? , ?);";
  
    // Check correct priority value
    if (TASK_PRIORITY != 10 && TASK_PRIORITY != 5 && TASK_PRIORITY !== 1) {
      return res.status(401).send({
        error: "Wrong value of param: priority!",
        avalible_states: {
          low: 1,
          medium: 5,
          high: 10
        }
      })
    }
    
    // Open connect with db
    pool.getConnection((err, connection) => {
      if (err) throw err;

      connection.query(queryINSERT, [TASK_PRIORITY, TASK_NAME, TASK_STATE, ADD_DATE], (err) => {
        if (!err) {
          return res.status(200).send({
            msg: "Added task successful!"
          })
        } 
        else {
          console.log(err);
          return res.status(400).send(err);
        }
      });
      connection.release(); // end connection
    });
  },

  // Remove all tasks
  async removeAllTasks(req, res, next) {
    const queryREMOVE = "DELETE FROM tasks";

    // Open connect with db
    pool.getConnection( (err, connection) => {
      if (err) throw err;
      else {
        connection.query(queryREMOVE, (err) => {
          if(!err) {
            return res.status(200).send({
              msg: "Remove all tasks successful!"
            })
          }
          else {
            console.log(err);
            return res.status(400).send(err);
          }
        });
        connection.release(); // end connection
      }
    });
  },

  // Remove existing task from db
  async removeTask(req, res, next) {
    const TASK_ID = req.body.id;
    const TASK_NAME = req.body.name;

    const queryREMOVE = "DELETE FROM tasks WHERE `id` = ? AND `name` = ?";
    
    // Open connect with db
    pool.getConnection( (err, connection) => {
      if (err) throw err;
      else {
        connection.query(queryREMOVE, [TASK_ID, TASK_NAME], (err) => {
          if (!err) {
            return res.status(200).send({
              msg: `Task: "${TASK_NAME}" has been removed successful!`
            })
          }
          else {
            console.log(err);
            return res.status(400).send(err);
          }
        })
      }
      connection.release(); // end connection
    })
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
