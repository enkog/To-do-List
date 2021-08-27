const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
}));

export default mock;
