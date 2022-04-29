const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const filtroNaoLidos = read.question('Deseja buscar por livros que não foram lidos? S/N ').toUpperCase()

    if (filtroNaoLidos === 'S') {
        const queroLer = livros.filter(livro => livro.leu === false)
        console.table(queroLer)
               
    } else if (filtroNaoLidos === 'N') {
            console.log(`Por favor digite "npm start" para voltar ao MENU inicial`)
    } else {
        console.log(`"${filtroNaoLidos}" não é uma opção válida. Por favor responda S ou N. Digite "npm start" para voltar ao MENU inicial`)
          
    }

}

module.exports = listarLivrosNaoLidos