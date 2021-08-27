/**
 * @jest-environment jsdom
 */
import addTask, { tasks } from '../__mocks__/addTask.js';
import deleteTask from '../__mocks__/deleteTask.js';
import displayTodo from '../__mocks__/displayTodo.js';

jest.mock('../taskUtils.js');

describe('delete exactly one <li> element from the list', () => {
  const task = { description: 'Hello world', completed: false, index: 1 };
  document.body.innerHTML = '<div>'
    + '<ul id="list"></ul>'
    + '</div>';

  const currTaskIndex = task.index - 1;

  addTask(task);
  deleteTask(currTaskIndex);
  displayTodo(tasks);

  const list = document.querySelectorAll('#list li');

  test('that length of the list is zero', () => {
    expect(list).toHaveLength(0);
  });

  test('that length of the list is not one', () => {
    expect(list).not.toHaveLength(1);
  });

  test('that length of the tasks array is one', () => {
    expect(tasks.length).toBe(0);
  });

  test('that the index of the deleted task is 0', () => {
    expect(currTaskIndex).toBe(0);
  });
});