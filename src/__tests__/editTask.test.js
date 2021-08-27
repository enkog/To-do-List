import editTask from '../__mocks__/editTask.js';
import addTask, { tasks } from '../__mocks__/addTask.js';

jest.mock('../taskUtils.js');

const task = { description: 'Get lunch', completed: false, index: 1 };
addTask(task);

describe('Edit task description', () => {
  const newTaskDesc = { description: 'Do the laundry', completed: false, index: 1 };
  editTask(newTaskDesc);

  test('that task description is Do the laundry', () => {
    expect(task.description).toEqual('Do the laundry');
  });

  test('that task description is not Get lunch', () => {
    expect(task.description).not.toEqual('Get lunch');
  });

  test('that the first element in tasks array has description as Do the laundry', () => {
    expect(tasks[0].description).toEqual('Do the laundry');
  });

  test('that the first element in tasks array has description not equal to Get lunch', () => {
    expect(tasks[0].description).not.toEqual('Get lunch');
  });
});