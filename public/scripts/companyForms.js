{/* <form class="form_company" method="POST">
            <div class="input_block">
                <label for="name" name="name">Razão social</label>
                <input type="text" required>
            </div>

            <div class="input_block">
                <label for="cpnj" name="cnpj">cnpj</label>
                <input type="text" required>
            </div>

            <div class="input_block">
                <label for="adress" name="address">endereço</label>
                <input type="text" required>
            </div>

            <div class="input_block">
                <label for="payment" name="payment">forma de pagamento</label>
                <div class="payment">
                    transferência<input id="transf" type="checkbox">
                    cartão<input id="ccard" type="checkbox">
                    boleto<input id="boleto" type="checkbox">
                    espécie<input id="especie" type="checkbox">
                </div>
            </div>

        </form>
        <button type="submit" form="form_company">enviar</button> */}

document.querySelector('.register').onclick = function signUp(){

        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

        var formElement = document.createElement('form')
        formElement.setAttribute('action', '/signUp_employee')
        formElement.setAttribute('method', 'POST')
        formElement.setAttribute('id', 'sign_employee')

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
 
        var btnForms = document.createElement('button')
        btnForms.setAttribute('type', 'submit')
        btnForms.setAttribute('form', 'sign_employee')
        btnForms.setAttribute('id', 'signUpButton')
        btnForms.appendChild(document.createTextNode("Cadastrar"))
        divForms.appendChild(btnForms)

    }

    document.querySelector('.disable').onclick = function deactivated(){
        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''

        var formElement = document.createElement('form')
        formElement.setAttribute('action', '/disable_employee')
        formElement.setAttribute('method', 'POST')
        formElement.setAttribute('id', 'deactivate_employee')
        
        
        appendDiv(createDiv(), createLabel('cpf', "CPF"), createInput('text', 'name', 'name'), divForms, formElement)

        var btnForms = document.createElement('button')
        btnForms.setAttribute('type', 'submit')
        btnForms.setAttribute('form', 'deactivate_employee')
        btnForms.setAttribute('id', 'deactivateButton')
        btnForms.appendChild(document.createTextNode("Desativar"))
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