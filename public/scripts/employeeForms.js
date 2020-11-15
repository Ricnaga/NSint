    document.querySelector('.register').onclick = function signUp(){
// {/* <form action="/save-classes" id="create-class" method="POST"></form> */}
// <button type="submit" form="create-class"></button>
        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

        var formElement = document.createElement('form')
        formElement.setAttribute('action', '/signUp_employee')
        formElement.setAttribute('method', 'POST')
        formElement.setAttribute('id', 'sign_employee')

        var btnForms = document.createElement('button')
        btnForms.setAttribute('type', 'submit')
        btnForms.setAttribute('form', 'sign_employee')
        btnForms.setAttribute('id', 'signUpButton')
        btnForms.appendChild(document.createTextNode("Cadastrar"))

        var arrayElement = [
            [
             createLabel('name', "Nome completo"),
             createLabel('cpf', "CPF"),
             createLabel('phone', "telefone"),
             createLabel('money', "salário"),
             createLabel('admission', "data de admissão"),
             createLabel('job', "cargo")
            ],
            [
             createInput('text', 'name', 'name'),
             createInput('text', 'cpf', 'cpf'),
             createInput('phone', 'phone', 'tel'),  
             createInput('number', 'money', 'money'),
             createInput('date', 'admission', 'admission'),
             createInput('text', 'job', 'job')
            ]
        ]

        for(var i = 0; i < arrayElement[0].length; i++){
            var labelName = arrayElement[0][i], inputElemnt = arrayElement[1][i];
            appendDiv(createDiv(), labelName, inputElemnt, divForms, formElement)
        }

        divForms.appendChild(btnForms)
    }

    document.querySelector('.disable').onclick = function deactivated(){
        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

        var formElement = document.createElement('form')
        formElement.setAttribute('action', '/disable_employee')
        formElement.setAttribute('method', 'GET')
        formElement.setAttribute('id', 'deactivate_employee')

        var btnForms = document.createElement('button')
        btnForms.setAttribute('type', 'submit')
        btnForms.setAttribute('form', 'deactivate_employee')
        btnForms.setAttribute('id', 'deactivateButton')
        btnForms.appendChild(document.createTextNode("Desativar"))
        
        appendDiv(createDiv(), createLabel('cpf', "CPF"), createInput('text', 'name', 'name'), divForms, formElement)
        divForms.appendChild(btnForms)
    }

    function createDiv(){
        var containerInput = document.createElement('div')
        containerInput.setAttribute('class', 'container_input')

        return containerInput
    }

    function createLabel(attr, text){
        var newLabel = document.createElement('label')
        newLabel.setAttribute('for', attr)
        newLabel.appendChild(document.createTextNode(text))

        return newLabel
    }

    function createInput(attr, name, id){
        var newInput = document.createElement('input')
        newInput.setAttribute('type', attr)
        newInput.setAttribute('name', name)
        newInput.setAttribute('id', id)
        newInput.setAttribute('required', "")
           
        return newInput
    }

    function appendDiv(appendDivContainerInput, appendLabelName, appendInputElemnt, appendDivForms, appendFormElement){
        appendDivContainerInput.appendChild(appendLabelName)
        appendDivContainerInput.appendChild(appendInputElemnt)
        appendFormElement.appendChild(appendDivContainerInput)
        appendDivForms.appendChild(appendFormElement)
    }