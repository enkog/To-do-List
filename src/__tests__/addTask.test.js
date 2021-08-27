/**
 * @jest-environment jsdom
 */
import addTask, { tasks } from '../__mocks__/addTask.js';
import displayTodo from '../__mocks__/displayTodo.js';

jest.mock('../taskUtils.js');

const task = { description: 'Task 1', completed: false, index: 1 };

describe('add exactly one <li> element to the list in the DOM', () => {
  document.body.innerHTML = '<div>'
    + '<ul id="list"></ul>'
    + '</div>';

  addTask(task);
  displayTodo(tasks);
  test('that the length of the list is 1', () => {
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });

  test('that the length of the list is not zero', () => {
    const list = document.querySelectorAll('#list li');
    expect(list).not.toHaveLength(0);
  });

  test('that the description is Task 1', () => {
    expect(tasks[0].description).toEqual('Task 1');
  });

  test('that the description is not Task 3', () => {
    expect(tasks[0].description).not.toEqual('Task 3');
  });

  test('that completed is false', () => {
    expect(tasks[0].completed).toBeFalsy();
  });
});