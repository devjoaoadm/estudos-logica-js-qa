// Exercicio 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes:
// Eduardo, Maria, Fernando, Joao, Pedro
// Número da execução, começando em 1
// Nome que está sendo executado
// Separadores

//EX:
// Execuçao: 1
// Nome: Eduardo
// --------------------------


const nomes = [ 'Eduardo', 'Maria', 'Fernando', 'Joao', 'Pedro']

nomes.forEach((nome, index)=> {
    console.log( 'Execução número: ', index + 1 )
    console.log('nome: ' + nome)
    console.log ('----------------------------------')

})

