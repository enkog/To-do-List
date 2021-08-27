const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  clearCompleted() {
    return tasks.filter((task) => task.completed === false);
  },
}));

export default mock;
