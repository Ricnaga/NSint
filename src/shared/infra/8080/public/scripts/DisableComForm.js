document.querySelector('.disable').onclick = function deactivated() {
  const divForms = document.querySelector('.forms');
  divForms.innerHTML = '';

  const formElement = createFormBtn(
    'form',
    'action',
    '/company/update',
    'method',
    'POST',
    'UpdateCompany',
    'animate-up',
  );

  const btnForms = createFormBtn(
    'button',
    'type',
    'submit',
    'form',
    'UpdateCompany',
    'deactivateButton',
    'animate-appear',
  );

  appendDiv(
    createDiv(),
    createLabel('cnpj', 'cnpj'),
    createInput('text', 'cnpj', 'cnpj'),
    divForms,
    formElement,
  );

  btnForms.appendChild(document.createTextNode('Desativar'));

  divForms.appendChild(formElement);
  divForms.appendChild(btnForms);
};

function createPElement(divCreated, textName) {
  const PElement = document.createElement('p');
  PElement.setAttribute('class', 'dataform');
  PElement.appendChild(document.createTextNode(textName));
  divCreated.appendChild(PElement);

  return PElement;
}
