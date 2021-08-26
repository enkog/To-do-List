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
  arr.forEach((e) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = e.description;
    li.appendChild(checkBox);
    li.appendChild(label);
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

describe('delete exactly one <li> element from the list', () => {
  test('delete one element of the list', () => {
    const taskDescription = document.querySelectorAll('#list li').textContent;
    const currentTask = taskUtils.getTasks().filter((task) => task.description === taskDescription);
    taskUtils.deleteTask(currentTask.index);
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
    expect(list).toHaveLength(0);
    expect(list).not.toHaveLength(1);
  });
});
