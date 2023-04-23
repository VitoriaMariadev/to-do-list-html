function btn() {
    var conteinerListas = document.querySelector('#listas')
    var separador = document.createElement('div')
    separador.className = 'separador'

    var lista = document.createElement('div')
    lista.className = 'lista'

    var efeito = document.createElement('div')
    efeito.className = 'efeito'

    var a = document.createElement('a')
    a.className = 'titulo'
    a.href = './terefas/index.html'
    a.innerHTML = 'Adicionar Tarefas'

    efeito.appendChild(a)
    lista.appendChild(efeito)
    separador.appendChild(lista)
    conteinerListas.appendChild(separador)
}

function add(){
    var tarefas = document.querySelector("#tarefas")

    var espacos = document.createElement('div')
    espacos.className = 'espacos'

    var checar = document.createElement('div')
    checar.className = 'checar'

    var tarefasChecar = document.createElement('input')
    tarefasChecar.type = 'checkbox'
    tarefasChecar.className = 'tarefas-checar'

    var tarefasInput = document.createElement('input')
    tarefasInput.type = 'text'
    tarefasInput.className = 'tarefas-input'

    checar.appendChild(tarefasChecar)
    espacos.appendChild(checar)
    espacos.appendChild(tarefasInput)
    tarefas.appendChild(espacos)
}