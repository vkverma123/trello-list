const { List, Task, ListTaskMembership } = require("../../models");

const TaskMutations = {
  createTask: async (_, { title, status, listId }) => {
    const list = await List.findByPk(listId);
    if (!list) {
      throw new Error(`List with id ${listId} not found`);
    }
    const newTask = await Task.create({ title, status });
    const tasks = await ListTaskMembership.findAll({
      where: {
        ListId: listId,
      },
      order: [["order", "ASC"]],
    });
    const taskIds = tasks.map((task) => task.dataValues.TaskId);
    taskIds.splice(0, 0, newTask.dataValues.id);
    taskIds.map(async (taskId, idx) => {
      await ListTaskMembership.upsert({
        order: idx + 1,
        TaskId: taskId,
        ListId: listId,
      });
    });
    return newTask;
  },

  updateTaskOrder: async (_, { order, taskId, listId }) => {
    const taskMembership = await ListTaskMembership.findOne({
      raw: true,
      where: { ListId: listId, TaskId: taskId },
    });
    if (!taskMembership) {
      throw new Error(`Task not found`);
    }
    const tasks = await ListTaskMembership.findAll({
      where: {
        ListId: listId,
      },
      order: [["order", "asc"]],
    });
    if (!tasks || tasks.length == 0 || order > tasks.length) {
      throw new Error(`No Task exists or Invalid Order`);
    }
    const taskIds = tasks.map((task) => task.dataValues.TaskId);
    const [removed] = taskIds.splice(taskMembership.order - 1, 1);
    taskIds.splice(order - 1, 0, removed);
    taskIds.map(async (taskId, idx) => {
      await ListTaskMembership.update(
        {
          order: idx + 1,
        },
        {
          where: {
            TaskId: taskId,
            ListId: listId,
          },
        }
      );
    });
    return true;
  },
  updateTask: async (_, { id, title, status }) => {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    task.set("title", title);
    task.set("status", status);
    task.save();
    return true;
  },
};

module.exports = TaskMutations;
