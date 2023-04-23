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
    a.href = ''
    a.innerHTML = 'Adicionar Tarefas'

    efeito.appendChild(a)
    lista.appendChild(efeito)
    separador.appendChild(lista)
    conteinerListas.appendChild(separador)
}