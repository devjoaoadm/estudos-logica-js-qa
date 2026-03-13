// Repetiçao por array

// array.forEach(element => {
    
// });       // Significa "para cada"

const cidade =[ 'São Paulo', 'Rio de Janeiro', 'Florianópolis','Recife']

cidade.forEach((elemento, index) => {
    console.log('execução numero: ' + index)
    console.log(elemento)
})



//For normal 


//for (let index = 0; index < 10; index++) {}
    
    
for(let indice = 0; indice < cidade.length; indice++) {
console.log(cidade[indice])
}