const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");

router.get("/tasks/:slug", (req, res, next) => {
  const { slug } = req.params;
  Task.find({}, '_id text', (err, tasks) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const result = [];
      tasks.forEach(task => result.push({id: task._id, text: task.text}));
      res.send({tasks: result});
    }
  }).sort({_id: -1});
});

router.post("/tasks/:slug", (req, res, next) => {
  const { slug } = req.params;
  const { task } = req.body;

  const newTask = new Task({
    text: task.text,
  });

  newTask.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        id: data._id,
        text: data.text
      });
    }
  });
});

router.delete(
  "/tasks/:slug/:id",
  (req, res, next) => {
    const { slug, id } = req.params;
    dbMock[slug].splice(id, 1);
    console.log(slug, id);
    const resp = dbMock[slug];
    res.send(resp);
  }
);

module.exports = router;