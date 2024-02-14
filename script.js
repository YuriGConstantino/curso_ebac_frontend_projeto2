const form = document.querySelector("#formCadastro")
const nomeCadastrado = []
const telCadastrado = []

let linhas = ""

form.addEventListener("submit", (e) => {
    e.preventDefault()

    adicionarLinhas()

    atualizaTabela()


    form.reset()

})

function adicionarLinhas() {
    
    const inputUsuarioNome = document.querySelector("#usuarioNome")
    const inputUsuarioTel = document.querySelector("#usuarioTel")

    if (nomeCadastrado.includes(inputUsuarioNome.value) || telCadastrado.includes(inputUsuarioTel.value)) {
        alert("Nome ou Telefone já cadastrado!")
    } else {

        nomeCadastrado.push(inputUsuarioNome.value)
        telCadastrado.push(inputUsuarioTel.value)

        let linha = "<tr>"
        linha += `<td>${inputUsuarioNome.value}</td>`
        linha += `<td>${inputUsuarioTel.value}</td>`
        linha += "</tr>"

        linhas += linha

    }


}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')

    corpoTabela.innerHTML = linhas
}