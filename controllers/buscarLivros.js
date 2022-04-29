const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
        const categorias = livros.map(livro => livro.categoria)

        categoriasNaoRepetidas = [...new Set(categorias)]

        console.table(categoriasNaoRepetidas)
       
        const inputCategoria =  read.question('Escolha uma categoria conforme tabela acima: ')
        
        const confirmacao = read.question('Confirma sua escolha? S/N ').toUpperCase()
        
        if (confirmacao === 'S') {
            const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
            console.table(livrosFiltrados)
            }
    
    } else if (opcaoInicial === 'N') {
            console.log(`Por favor digite "npm start" para voltar ao MENU inicial`)
    } else {
        console.log(`"${opcaoInicial}" não é uma opção válida. Por favor responda S ou N. Digite "npm start" para voltar ao MENU inicial`)
          
    }
}


module.exports = buscarLivros