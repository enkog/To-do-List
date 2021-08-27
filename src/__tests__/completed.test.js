import addTask from '../__mocks__/addTask.js';
import completed from '../__mocks__/completed.js';

jest.mock('../taskUtils.js');

describe('Edit task description', () => {
  const firstTask = { description: 'Get ready for school', completed: false, index: 1 };
  const secondTask = { description: 'Task 1', completed: false, index: 1 };

  addTask(firstTask);
  addTask(secondTask);

  completed(secondTask);

  test('that task completed value is true', () => {
    expect(secondTask.completed).toBeTruthy();
  });

  test('that task completed value is not false', () => {
    expect(secondTask.completed).not.toBeFalsy();
  });

  test('that task completed value for firstTask is false', () => {
    expect(firstTask.completed).toBeFalsy();
  });
});