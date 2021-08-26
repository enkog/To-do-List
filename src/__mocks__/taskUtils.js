const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  addTask(task) {
    tasks.push(task);
  },
}));

export default mock;
