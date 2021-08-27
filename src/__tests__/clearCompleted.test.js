import addTask from '../__mocks__/addTask.js';
import completed from '../__mocks__/completed.js';
import clearCompleted from '../__mocks__/clearCompleted.js';

jest.mock('../taskUtils.js');

const task1 = { description: 'Task 1', completed: false, index: 1 };
const task2 = { description: 'Task 2', completed: false, index: 2 };
const task3 = { description: 'Task 3', completed: false, index: 3 };

addTask(task1);
addTask(task2);
addTask(task3);
completed(task2);
completed(task3);

const currTask = clearCompleted();

describe('Clear all completed <li> element from the list', () => {
  test('Clear all completed list', () => {
    expect(currTask).toHaveLength(1);
  });

  test('Clear all completed list', () => {
    expect(currTask).not.toHaveLength(0);
  });
});