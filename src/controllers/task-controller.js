export default {
  

  async getTasksList(req, res, next) {

    return res.status(200).send({
      msg: "getTasksList work!",
    });
  },


  async addTask(req, res, next) {
        
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
  }
};
