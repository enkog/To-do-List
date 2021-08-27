import { tasks } from './addTask.js';

export default function editTask(todo) {
  const index = todo.index - 1;
  tasks[index].description = todo.description;
}
