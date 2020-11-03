    document.querySelector('.register').onclick = function signUp(){

        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

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
            var divContainerInput = createDiv()
            var labelName = arrayElement[0][i];
            var inputElemnt = arrayElement[1][i];
            appendDiv(divContainerInput, labelName, inputElemnt, divForms)
        }
 
        var btnForms = document.createElement('button')
        btnForms.setAttribute('type', 'submit')
        btnForms.setAttribute('class', 'sendForm')
        btnForms.appendChild(document.createTextNode("Enviar"))
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

    function appendDiv(appendDivContainerInput, appendLabelName, appendInputElemnt, appendDivForms){
        appendDivContainerInput.appendChild(appendLabelName)
        appendDivContainerInput.appendChild(appendInputElemnt)
        appendDivForms.appendChild(appendDivContainerInput)
    }

    document.querySelector('.disable').onclick = function deactivated(){
        alert('check')
    }