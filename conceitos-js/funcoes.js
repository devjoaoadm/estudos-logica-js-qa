// Funções

// Precisa chamar
// Pode ou não receber parâmetros
// pode ou não receber dados

//function gerarNome (nome, sobrenome, idade){
//    console.log( 'nome: ', nome + sobrenome)
//    console.log('idade: ', idade)
//


function gerarNome (nome, sobrenome, idade){
    return( 'nome: '+ nome + sobrenome)

}

//console.log (gerarNome ('João ', 'Pedro', '26 anos'))

const nomeGerado = gerarNome('João ', 'Pedro')
console.log (nomeGerado)