const paises = ['Brasil', 'Alemanha', 'Argentina']
 
console.log('Acessando o pais', paises ) // Acessando posiçoes do array
console.log('O tamanho do array', paises.length) //Tamanho do array

//Operaçoes com o array

paises.push('Usa') //Adiciona no final do array
paises.pop() //Remove o ultimo elemento
paises.unshift('frança') //Adiciona no começo do array 
paises.shift () //Remove o primeiro elemento
console.log('usando o push', paises)