import Tasks from "../models/task.js";

export const createTask = async (req, res, next) => {
  const { task } = req.body;
  await Tasks.create({ task, user: req.user });
  res.status(201).json({ success: true, message: "task added..." });
};

export const myTask = async (req, res, next) => {
  const userid = req.user._id;
  const tasks = await Tasks.find({ user: userid });
  res.json({ success: true, tasks });
};

export const updateTask = async (req, res, next) => {
  const task = await Tasks.findById(req.params.id);
  if (task)
    return res
      .status(404)
      .json({ success: false, message: "Task doen't exist." });

  task.isCompleted = !task.isCompleted;
  await task.save();

  res.status(200).json({ success: true, message: "Task updated..." });
};

export const deleteTask = async (req, res, next) => {
  const task = await Tasks.findById(req.params.id);
  if (!task)
    return res
      .status(404)
      .json({ success: false, message: "Task doen't exist." });

  await task.deleteOne();

  res.status(200).json({ success: true, message: "Task deleted..." });
};
