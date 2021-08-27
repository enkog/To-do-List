const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  editTaskDescription(task) {
    const index = task.index - 1;
    tasks[index].description = task.description;
  },
  completed(task) {
    task.completed = !task.completed;
  },
  clearCompleted() {
    return tasks.filter((task) => task.completed === false);
  },
}));

export default mock;
