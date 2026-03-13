// Exercício 2 - Estrutura de Decisão

// Percorrer uma lista de cidades
// Contendo: [São Paulo, Rio de Janeiro, Florianópolis, Recife]
// Para cada ítem verificar se a cidade Florianópolis está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento procurado, avisar
// Número da execução

// EX: 
// Execução: 1
// Cidade: São Paulo
//Encontrado / Não encontrado
// ---------------------------

const cidades = [ 'São Paulo', 'Rio de Janeiro', 'Florianópolis','Recife']

cidades.forEach((cidades, index)=> {
    console.log( 'Execução número: ' + (index + 1 ))
    console.log('cidade:' + cidades)
    

        if(cidades == 'Florianópolis')
             console.log('Cidade encontrada: ', (cidades)) 
            else{ 
             console.log('Cidade não encontrada')
            }
            
            console.log ('----------------------------------')


})





 