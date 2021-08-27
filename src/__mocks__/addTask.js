import TaskUtils from '../taskUtils.js';

const taskUtils = new TaskUtils();
export const tasks = taskUtils.getTasks();
export default function addTask(task) {
  tasks.push(task);
}