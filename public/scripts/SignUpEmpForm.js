    document.querySelector('.register').onclick = function signUp(){
        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

        var formElement = createFormBtn('form', 'action', '/signUp_employee', 'method', 'POST', 'sign_employee', 'animate-up')
        var btnForms = createFormBtn('button','type', 'submit', 'form', 'sign_employee', 'signUpButton', 'animate-appear')
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
    
    function createFormBtn(type, typeAction, destinyType, methodsndForm, POSTsndID, typeId, nameClass){

        var formbtnCreated = document.createElement(type)
        formbtnCreated.setAttribute(typeAction, destinyType)
        formbtnCreated.setAttribute(methodsndForm, POSTsndID)
        formbtnCreated.setAttribute('id', typeId)
        formbtnCreated.setAttribute('class', nameClass)

        return formbtnCreated
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