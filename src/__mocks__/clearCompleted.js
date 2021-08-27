import { tasks } from './addTask.js';

export default function clearCompleted() {
  return tasks.filter((task) => task.completed === false);
}
