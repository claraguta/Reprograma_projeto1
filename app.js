const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosRecomendados = require('./controllers/listarRecomendados')



const resposta = read.question(`
==================== MENU ===================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um número [1-5]: 
`)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listarLivrosRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    case '5':
        console.log('Até a próxima')
        break
    default:
        console.log('fim do algorítimo')
}