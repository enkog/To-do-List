export default class TaskUtils {
  constructor(actions) {
    this.actions = actions;
  }

  getTasks() {
    return this.actions.get();
  }

  addTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.actions.add(tasks);
  }
}