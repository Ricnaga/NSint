    document.querySelector('.disable').onclick = function deactivated(){
        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

        var formElement = createFormBtn(
            'form', 
            'action', '/disable_employee', 
            'method', 'POST', 
            'deactivate_employee', 
            'animate-up'
            )

        var btnForms = createFormBtn(
            'button', 
            'type', 'submit', 
            'form', 'deactivate_employee', 
            'deactivateButton', 
            'animate-appear'
            )

            appendDiv(
                createDiv(), 
                createLabel('cpf', 'cpf'), 
                createInput('text', 'cpf', 'cpf'), 
                divForms, 
                formElement
                )
            
        btnForms.appendChild(document.createTextNode("Desativar"))
        
        divForms.appendChild(formElement)
        divForms.appendChild(btnForms)
    }

    function createPElement(divCreated, textName){
        var PElement = document.createElement('p')
        PElement.setAttribute('class', 'dataform')
        PElement.appendChild(document.createTextNode(textName))        
        divCreated.appendChild(PElement)

        return PElement
    }