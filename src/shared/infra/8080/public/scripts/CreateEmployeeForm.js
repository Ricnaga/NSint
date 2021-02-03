document.querySelector('.register').onclick = function signUp() {
  const divForms = document.querySelector('.forms');
  divForms.innerHTML = '';

  const formElement = createFormBtn(
    'form',
    'action',
    '/employee/create',
    'method',
    'POST',
    'createEmployee',
    'animate-up',
  );

  const btnForms = createFormBtn(
    'button',
    'type',
    'submit',
    'form',
    'createEmployee',
    'signUpButton',
    'animate-appear',
  );

  btnForms.appendChild(document.createTextNode('Cadastrar'));

  const arrayElement = [
    [
      createLabel('name', 'Nome completo'),
      createLabel('cpf', 'CPF'),
      createLabel('phone', 'telefone'),
      createLabel('money', 'salário'),
      createLabel('admission', 'data de admissão'),
      createLabel('job', 'cargo'),
    ],
    [
      createInput('text', 'name', 'name'),
      createInput('text', 'cpf', 'cpf'),
      createInput('phone', 'phone', 'tel'),
      createInput('number', 'money', 'money'),
      createInput('date', 'admission', 'admission'),
      createInput('text', 'job', 'job'),
    ],
  ];

  for (let i = 0; i < arrayElement[0].length; i += 1) {
    const labelName = arrayElement[0][i];
    const inputElemnt = arrayElement[1][i];
    appendDiv(createDiv(), labelName, inputElemnt, divForms, formElement);
  }

  divForms.appendChild(btnForms);
};

function createFormBtn(
  type,
  typeAction,
  destinyType,
  methodsndForm,
  POSTsndID,
  typeId,
  nameClass,
) {
  const formbtnCreated = document.createElement(type);
  formbtnCreated.setAttribute(typeAction, destinyType);
  formbtnCreated.setAttribute(methodsndForm, POSTsndID);
  formbtnCreated.setAttribute('id', typeId);
  formbtnCreated.setAttribute('class', nameClass);

  return formbtnCreated;
}

function createDiv() {
  const containerInput = document.createElement('div');
  containerInput.setAttribute('class', 'container_input');

  return containerInput;
}

function createLabel(attr, text) {
  const newLabel = document.createElement('label');
  newLabel.setAttribute('for', attr);
  newLabel.appendChild(document.createTextNode(text));

  return newLabel;
}

function createInput(attr, name, id) {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', attr);
  newInput.setAttribute('name', name);
  newInput.setAttribute('id', id);
  newInput.setAttribute('required', '');

  return newInput;
}

function appendDiv(
  appendDivContainerInput,
  appendLabelName,
  appendInputElemnt,
  appendDivForms,
  appendFormElement,
) {
  appendDivContainerInput.appendChild(appendLabelName);
  appendDivContainerInput.appendChild(appendInputElemnt);
  appendFormElement.appendChild(appendDivContainerInput);
  appendDivForms.appendChild(appendFormElement);
}
