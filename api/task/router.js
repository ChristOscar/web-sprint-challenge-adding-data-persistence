// build your `/api/tasks` router here
const router = require("express").Router();
const { checkTaskId, checkTaskPayload } = require("./middleware");
const Tasks = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkTaskId, (req, res) => {
  res.json(req.task);
});

router.post("/", checkTaskPayload, async (req, res, next) => {
  try {
    const newTask = await Tasks.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});


// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: "Something inside the recipes router went wrong",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;