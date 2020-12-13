document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const choreListItem = createChoreListItem(event.target);
    const choreList = document.querySelector('#chore-list');
    choreList.appendChild(choreListItem);
  
    event.target.reset();
  }
  
  const createChoreListItem = function (form) {
    const choreListItem = document.createElement('li');
    choreListItem.classList.add('chore-list-item');
  
    const chore = document.createElement('h2');
    chore.textContent = form.chore.value;
    choreListItem.appendChild(chore);
  
    const description = document.createElement('h3');
    description.textContent = form.description.value;
    choreListItem.appendChild(description);
  
    const due_day = document.createElement('p');
    due_day.textContent = form.due_day.value;
    choreListItem.appendChild(due_day);

    const done_btn = document.createElement('button');
    done_btn.textContent = "Done!";
    done_btn.classList.add("done_btn");
    choreListItem.appendChild(done_btn);
    done_btn.addEventListener('click', handleDoneClick);
    done_btn.addEventListener('mouseover', handleDoneHover);
    done_btn.addEventListener('mouseout', handleDoneMouseOut);

    return choreListItem;
  }

  const handleDeleteAllClick = function (event) {
    const choreList = document.querySelector('#chore-list');
    choreList.innerHTML = '';
  }

  const handleDoneClick = function (event) {
    this.parentNode.outerHTML = '';
  }

  const handleDoneHover = function (event) {
    this.parentNode.style.backgroundColor = 'green';
  }
  const handleDoneMouseOut = function (event) {
    this.parentNode.style.backgroundColor = 'red';
  }