function isValidPassword() {
    const password = document.querySelector('input[name="pass"').value
    const result = document.getElementById('result')

    const d = document.createElement('div')
    let errorMessage = '';

    if (password.length < 8) {
        errorMessage += `<span class="text-red-500">A senha não pode ter menos que 8 caracteres.</span> </br>`
    }

    if (!upperOrLowerCase(password)) {
        errorMessage += `<span class="text-red-500">A senha precisa conter ao menos uma maiúscula e uma minúscula.</span> </br>`
    }

    if (!hasNumber(password)) {
        errorMessage += `<span class="text-red-500">A senha precisa conter ao menos número.</span> </br>`
    }

    result.innerHTML = ''

    if (errorMessage !== '') {
        result.innerHTML = `<span class="text-red-500">Senha Inválida</span> </br>`
        d.innerHTML = errorMessage
        result.appendChild(d)
    } else {
        result.innerHTML = `<span class="text-green-500">Senha Válida</span> </br>`
    }
}

function upperOrLowerCase(password) {
    password = String(password)
    let upper = false
    let lower = false

    for (let i = 0; i < password.length; i++) {
        const passwordCharacter = password.charAt(i)

        if (passwordCharacter >= 'A' && passwordCharacter <= 'Z')
            upper = true

        if (passwordCharacter >= 'a' && passwordCharacter <= 'z')
            lower = true

        if (upper && lower) // assim que encontra uma maiúscula e uma minúscula para o loop porque não precisa saber se tem mais de uma
            return true
    }
    return false
}

function hasNumber(password) {
    let number = false

    for (let i = 0; i < password.length; i++) {
        const passwordCharacter = parseInt(password.charAt(i))

        if (!isNaN(passwordCharacter))
            number = true

        if (number) // assim que encontra um numero para o loop porque não precisa saber se tem mais de um
            return true
    }

    return false
}

// validação com regex
function isValidPasswordWithRegex() {
    const password = document.querySelector('input[name="pass"').value
    const result = document.getElementById('result')

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (regex.test(password)) {
        result.innerHTML = `<span class="text-green-500">Senha Válida</span> </br>`
    } else {
        result.innerHTML = `<span class="text-red-500">Senha Inválida</span> </br>`
    }
}
