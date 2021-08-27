const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  completed(task) {
    task.completed = !task.completed;
  },
  clearCompleted() {
    return tasks.filter((task) => task.completed === false);
  },
}));

export default mock;
