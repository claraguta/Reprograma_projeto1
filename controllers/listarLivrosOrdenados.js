const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const livrosOrdenados = read.question('Deseja ordenar os livros por quantidade de páginas? S/N ').toUpperCase()

    if (livrosOrdenados === 'S') {
        const listaOrdenada = livros.sort((a, b) => a.paginas - b.paginas)
        console.table(listaOrdenada)
               
    } else if (livrosOrdenados === 'N') {
            console.log(`Por favor digite "npm start" para voltar ao MENU inicial`)
    } else {
        console.log(`"${livrosOrdenados}" não é uma opção válida. Por favor responda S ou N. Digite "npm start" para voltar ao MENU inicial`)
          
    }

}

module.exports = listarLivrosOrdenados

