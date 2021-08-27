/**
 * @jest-environment jsdom
 */
import deleteTask from '../__mocks__/deleteTask.js';
import TaskUtils from '../__mocks__/taskUtils.js';
import displayTodo from '../__mocks__/displayTodo.js';

jest.mock('../taskUtils.js');

const taskUtils = new TaskUtils();
describe('delete exactly one <li> element from the list', () => {
  const taskDescription = document.querySelectorAll('#list li').textContent;
  const currentTask = taskUtils.getTasks().filter((task) => task.description === taskDescription);
  deleteTask(currentTask.index);
  const tasks = taskUtils.getTasks();
  displayTodo(tasks);
  const uList = document.querySelector('ul');
  if (uList) {
    while (uList.firstChild) {
      uList.removeChild(uList.firstChild);
    }
  }
  displayTodo(tasks);
  const list = document.querySelectorAll('#list li');
  test('delete one element of the list', () => {
    expect(list).toHaveLength(0);
  });
  test('delete one element ', () => {
    expect(list).not.toHaveLength(1);
  });
});
