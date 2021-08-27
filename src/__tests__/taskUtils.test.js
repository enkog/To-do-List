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