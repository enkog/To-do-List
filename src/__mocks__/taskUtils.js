let tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  setItems(arr) {
    tasks = [...arr];
  },
  addTask(task) {
    tasks.push(task);
  },
  deleteTask(index) {
    tasks.filter((todo, i) => i !== index);
    tasks.splice(index, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
  },
}));

export default mock;
