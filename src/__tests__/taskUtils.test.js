/**
 * @jest-environment jsdom
 */

import TaskUtils from '../taskUtils.js';

jest.mock('../taskUtils.js');

const taskUtils = new TaskUtils();

document.body.innerHTML = '<div>'
    + '  <ul id="list"></ul>'
    + '</div>';

const displayTodo = (arr) => {
  const ul = document.getElementById('list');
  arr.forEach(() => {
    const li = document.createElement('li');
    ul.appendChild(li);
  });
};
describe('add exactly one <li> element to the list in the DOM', () => {
  const task = { description: 'Task 1', completed: false, index: 1 };
  taskUtils.addTask(task);
  const tasks = taskUtils.getTasks();
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
});
