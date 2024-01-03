import Tasks from "../models/task.js";

export const createTask = async (req, res, next) => {
  try {
    const { task } = req.body;
    await Tasks.create({ task, user: req.user });
    res.status(201).json({ success: true, message: "task added..." });
  } catch (error) {
    next(error);
  }
};

export const myTask = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const task = await Tasks.find({ user: userid });

    res.json({ success: true, task });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) return next(new Error("Task not found"));

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({ success: true, message: "Task updated..." });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) return next(new Error());

    await task.deleteOne();

    res.status(200).json({ success: true, message: "Task deleted..." });
  } catch (error) {
    next(error);
  }
};
