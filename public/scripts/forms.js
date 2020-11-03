    document.querySelector('.register').onclick =  function signUp(){

        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''
    
        var divContainerInput = createDiv()
        var labelName = createLabel('name', "Nome completo")
        var inputElemnt = createInput('text', 'name', 'name')

        appendDiv(divContainerInput, labelName, inputElemnt, divForms)

        var divContainerInput = createDiv()
        var labelName = createLabel('cpf', "CPF")
        var inputElemnt = createInput('text', 'cpf', 'cpf')

        appendDiv(divContainerInput, labelName, inputElemnt, divForms)

        var divContainerInput = createDiv()
        var labelName = createLabel('phone', "telefone")
        var inputElemnt = createInput('phone', 'phone', 'tel')

        appendDiv(divContainerInput, labelName, inputElemnt, divForms)

        var divContainerInput = createDiv()
        var labelName = createLabel('money', "salário")
        var inputElemnt = createInput('number', 'money', 'money')

        appendDiv(divContainerInput, labelName, inputElemnt, divForms)

        var divContainerInput = createDiv()
        var labelName = createLabel('admission', "data de admissão")
        var inputElemnt = createInput('date', 'admission', 'admission')

        appendDiv(divContainerInput, labelName, inputElemnt, divForms)

        var divContainerInput = createDiv()
        var labelName = createLabel('job', "cargo")
        var inputElemnt = createInput('text', 'job', 'job')

        appendDiv(divContainerInput, labelName, inputElemnt, divForms)
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

        return newInput
    }

    function appendDiv(appendDivContainerInput, appendLabelName, appendInputElemnt, appendDivForms){
        appendDivContainerInput.appendChild(appendLabelName)
        appendDivContainerInput.appendChild(appendInputElemnt)
        appendDivForms.appendChild(appendDivContainerInput)
    }
