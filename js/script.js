'use strict';

const ul = document.createElement('ul');
document.body.append(ul);

const completionList = () => {
  while (true) {
    const liText = prompt('Введите значение li');

    if ((liText === 'exit') || (liText === null)) {
      break;
    }

    switch (true) {
      case (liText === 'del'):
        ul.lastChild.remove();
        break;
      case (liText === 'clear'):
        ul.innerHTML = "";
        break;
      case (liText === '') || (!liText.trim()):
        break;
      default:
        let li = document.createElement('li');
        li.textContent = liText;
        ul.append(li);
        break;
    }
  }
}

completionList();
