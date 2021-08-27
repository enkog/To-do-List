/**
 * @jest-environment jsdom
 */
import addTask from '../__mocks__/addTask.js';
import deleteTask, { tasks } from '../__mocks__/deleteTask.js';
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

  test('the length of the list is zero', () => {
    expect(list).toHaveLength(0);
  });

  test('the length of the list is not one', () => {
    expect(list).not.toHaveLength(1);
  });
  test('the length of the list is not one', () => {
    expect(tasks.length).toBe(0);
  });
  test('the length of the list is not one', () => {
    expect(currTaskIndex).toBe(0);
  });
});