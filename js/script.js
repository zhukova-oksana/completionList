'use strict';

const getText = () => {
  const text = prompt('Введите значение li');
  return text;
}

const deleteElem = (list) => {
  list.lastChild.remove();
}

const clearList = (list) => {
  list.innerHTML = "";
}

const addElem = (list, value) => {
  let li = document.createElement('li');
  li.textContent = value;
  list.append(li);
}

const completionList = (list) => {
  let yes = false;
  while (true) {
    const liText = getText();
    if (liText === null || liText === 'exit') { return; }
    switch (true) {
    case (liText === 'del'):
      deleteElem(list);
      break;
    case (liText === 'clear'):
      clearList(list);
      break;
    case (liText === '') || (!liText.trim()):
      break;
    default:
      addElem(list, liText);
      break;
    }
  }
}

const ul = document.createElement('ul');
document.body.append(ul);

completionList(ul);
