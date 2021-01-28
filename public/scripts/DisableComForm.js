document.querySelector('.disable').onclick = function deactivated() {
  const divForms = document.querySelector('.forms');
  divForms.innerHTML = '';

  const formElement = createFormBtn(
    'form',
    'action',
    '/disable_company',
    'method',
    'POST',
    'deactivate_company',
    'animate-up',
  );

  const btnForms = createFormBtn(
    'button',
    'type',
    'submit',
    'form',
    'deactivate_company',
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
