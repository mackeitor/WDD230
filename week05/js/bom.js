const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const chapter = input.value;
  input.value = '';  

  const chapterName = document.createElement('li');
  const chapterList = document.createElement('span');
  const deleteButton = document.createElement('button');

  chapterName.appendChild(chapterList);
  chapterList.textContent = chapter;
  chapterName.appendChild(deleteButton);
  deleteButton.textContent = 'X';
  list.appendChild(chapterName);

  deleteButton.addEventListener('click', () => {
    list.removeChild(chapterName);
  });

  input.focus();
});

