import TaskUtils from '../taskUtils.js';

jest.mock('../taskUtils.js');
const taskUtils = new TaskUtils();

test('adding new input', () => {
  const tasks = taskUtils.getTasks();
  const task = 2;
  taskUtils.addTask(task);
  expect(tasks).toContain(task);
});