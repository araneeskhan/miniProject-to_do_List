const input = document.querySelector('.entered-list');
const addBtn = document.querySelector('.add-list');
const tasks = document.querySelector('.tasks');

addBtn.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const newItem = document.createElement('div');
    newItem.classList.add('item');

    newItem.innerHTML = `
      <p>${input.value}</p>
      <div class="item-btn">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
      </div>
    `;

    tasks.appendChild(newItem);
    input.value = '';

  } 
  else {
    alert('Please Enter a Task');
  }
});

tasks.addEventListener('click', function(e) {
  const target = e.target;

  if (target.classList.contains('fa-trash')) {
    target.closest('.item').remove();
  } 
   
  else if (target.classList.contains('fa-pen-to-square')) {
    const taskItem = target.closest('.item');
    const taskText = taskItem.querySelector('p').textContent;
    const newText = prompt('Enter new task text:', taskText);

    if (newText.trim() !== '') {
      taskItem.querySelector('p').textContent = newText;
    }

  } 
  
  else if (target.tagName === 'P') {
    target.closest('.item').classList.toggle('completed');
  }

});
