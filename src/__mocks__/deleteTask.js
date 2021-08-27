import TaskUtils from '../taskUtils.js';
import displayTodo from './displayTodo.js';

const taskUtils = new TaskUtils();
export const tasks = taskUtils.getTasks();
export default function deleteTask(index) {
  tasks.filter((todo, i) => i !== index);
  tasks.splice(index, 1);
}