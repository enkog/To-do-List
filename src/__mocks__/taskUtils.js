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
    const filteredTasks = tasks.filter((task, i) => i !== index);
    const indexedTasks = this.reIndexTasks(filteredTasks);
    this.setItems(indexedTasks);
  },
  reIndexTasks(todos) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < todos.length; i++) {
      todos[i].index = i + 1;
    }
    return todos;
  },
}));

export default mock;
