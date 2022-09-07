'use strict';

const getText = () => {
  const text = prompt('Введите значение li');
  return text;
}

const getCheck = (item) => {
  if ((item === 'exit') || (item === null)) {
    return;
  }
}

const choiceAction = (value, list) => {
  switch (true) {
    case (value === 'del'):
      list.lastChild.remove();
      break;
    case (value === 'clear'):
      list.innerHTML = "";
      break;
    case (value === '') || (!value.trim()):
      break;
    default:
      let li = document.createElement('li');
      li.textContent = value;
      list.append(li);
      break;
  }
}

const ul = document.createElement('ul');
document.body.append(ul);

const completionList = () => {
  while (true) {
    const liText = getText();
    getCheck(liText);
    choiceAction(liText, ul);
  }
}

completionList();
