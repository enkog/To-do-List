import { tasks } from './addTask.js';

export default function deleteTask(index) {
  tasks.filter((todo, i) => i !== index);
  tasks.splice(index, 1);
}
