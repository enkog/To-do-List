import { tasks } from './addTask.js';

export default function clearCompleted(index) {
  return tasks.filter((task) => task.completed === false);
}
