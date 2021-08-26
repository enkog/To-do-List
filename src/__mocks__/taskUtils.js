const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  addTask(task) {
    tasks.push(task);
  },
}));

export default mock;
