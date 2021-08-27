/**
 * @jest-environment jsdom
 */

import addTask, { tasks } from '../__mocks__/addTask.js';

jest.mock('../taskUtils.js');

document.body.innerHTML = '<div>'
    + '<ul id="list"></ul>'
    + '</div>';
const task = { description: 'Task 1', completed: false, index: 1 };

describe('Edit one <li> element to the list in the DOM', () => {
  test('that the input of the list is editing', () => {
    const task = { description: 'Task 2', completed: false, index: 1 };
    task.description = 'Task 3';
    taskUtils.editTaskDescription(task);
    taskUtils.getTasks();
    expect(task.description).toEqual('Task 3');
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

describe('Updating an items completed status', () => {
  test('completed is true', () => {
    const task = { description: 'Task 1', completed: false, index: 1 };
    taskUtils.addTask(task);
    const tasks = taskUtils.getTasks();
    displayTodo(tasks);

    taskUtils.completed(task);
    expect(task.completed).toBeTruthy();
  });
});

describe('Clear all completed <li> element from the list', () => {
  test('Clear all completed list', () => {
    const task = { description: 'Task 2', completed: false, index: 2 };
    taskUtils.addTask(task);
    const tasks = taskUtils.getTasks();
    displayTodo(tasks);

    const completedTask = taskUtils.clearCompleted();
    expect(completedTask).toHaveLength(1);
  });
});