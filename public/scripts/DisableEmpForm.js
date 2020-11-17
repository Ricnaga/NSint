    document.querySelector('.disable').onclick = function deactivated(){
        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

        dataForm = [
            `nome......:`,
            `cpf.......:`,
            `telefone..:`,
            `salário...:`,
            `admissão..:`,
            `cargo.....:`,
        ]

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
            
        btnForms.appendChild(document.createTextNode("Desativar"))

        var divHeader = document.createElement('div')
        divHeader.setAttribute('class', 'container_input_header')
 
        var inputCPF = createInput('text', 'cpf', 'cpf')
        var btnSearch = document.createElement('button')
        btnSearch.setAttribute('type', 'button')
        btnSearch.setAttribute('onclick', 'ListEmployee()')
        btnSearch.appendChild(document.createTextNode('Listar'))

        divDataForm = createDiv()

        for(var i=0; i < dataForm.length; i++){
            createPElement(divDataForm, dataForm[i])
        }

        divHeader.appendChild(inputCPF)
        divHeader.appendChild(btnSearch)

        formElement.appendChild(divHeader)
        formElement.appendChild(divDataForm)
        
        divForms.appendChild(formElement)
        divForms.appendChild(btnForms)
    }

    function ListEmployee(){
        const {callListEmployee} = require('../../src/routes')

        alert(document.getElementById('cpf').value)
    }

    function createPElement(divCreated, textName){
        var PElement = document.createElement('p')
        PElement.setAttribute('class', 'dataform')
        PElement.appendChild(document.createTextNode(textName))        
        divCreated.appendChild(PElement)

        return PElement
    }