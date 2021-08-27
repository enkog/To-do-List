const tasks = [];

const mock = jest.fn().mockImplementation(() => ({
  getTasks() {
    return tasks;
  },
  deleteTask(index) {
    tasks.filter((todo, i) => i !== index);
    tasks.splice(index, 1);
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
