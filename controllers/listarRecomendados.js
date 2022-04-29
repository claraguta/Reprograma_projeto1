const livros = require('../database')
const read = require('readline-sync')

const listarLivrosRecomendados = () => {
    const livrosRecomendados = read.question('Deseja filtrar os livros recomendados? S/N ').toUpperCase()

    if (livrosRecomendados === 'S') {
        const listaRecomendados = livros.filter(livro => livro.recomenda === true)
        console.table(listaRecomendados)
               
    } else if (livrosRecomendados === 'N') {
            console.log(`Por favor digite "npm start" para voltar ao MENU inicial`)
    } else {
        console.log(`"${livrosRecomendados}" não é uma opção válida. Por favor responda S ou N. Digite "npm start" para voltar ao MENU inicial`)
          
    }

}

module.exports = listarLivrosRecomendados
