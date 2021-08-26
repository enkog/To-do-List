import TaskUtils from '../taskUtils.js';

jest.mock('../taskUtils.js');

const taskUtils = new TaskUtils();

document.body.innerHTML = '<div>'
    + '  <ul id="list"></li>'
    + '</div>';

describe('add exactly one <li> element to the list in the DOM', () => {
  test('adding new input', () => {
    const tasks = taskUtils.getTasks();
    const task = 2;
    taskUtils.addTask(task);
    expect(tasks).toContain(task);
  });
});
