/* <div class="forms"></div> */
    document.querySelector('.button').onclick =  function signUp(){

        var divForms = document.querySelector('.forms')
        divForms.innerHTML = ''
    
        var divContainerInput = document.createElement('div')
        divContainerInput.setAttribute('class', 'container_input')

        var labelName = document.createElement('label')
        labelName.setAttribute('for', 'name')
        labelName.appendChild(document.createTextNode("Nome completo"))


        var inputElemnt = document.createElement('input')
        inputElemnt.setAttribute('type', 'text')
        inputElemnt.setAttribute('name', 'name')
        inputElemnt.setAttribute('id', 'name')

        divContainerInput.appendChild(labelName)
        divContainerInput.appendChild(inputElemnt)
        divForms.appendChild(divContainerInput)

    }