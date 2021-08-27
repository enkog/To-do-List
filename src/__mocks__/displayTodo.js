export default function displayTodo(arr) {
  const ul = document.getElementById('list');
  arr.forEach((e) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    ul.appendChild(li);
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = e.description;
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.appendChild(li);
  });
}