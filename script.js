// Eu abro as cortinas para ver o dia lá fora.
 // Se está chovendo: Saio correndo para recolher as roupas do varal
 // Senão: Aproveito o dia lá fora

 // se/senão -> if/ else


//  let tempo = "chovendo"
//  if(tempo === "chovendo"){
//     console.log("Saio correndo para recolher as roupas do varal")
//  }else{
//     console.log("Aproveito o dia lá fora")
//  }

// *****************************************************************

// let booleano1 = true
// let booleano2 = false
// let booleano3 = true

//Template - Condicionais I - Parte 1 - Prática guiada

// if (booleano1){
//     alert("Booleano1 é true")
// } else {
//   alert("Booleano1 é false")
// }

// if (booleano1===booleano2){
//   alert("Booleano1 e booleano2 são iguais")
// } else if (booleano2===booleano3){
//   alert("Booleano2 e booleano3 são diferentes")
// } else if (booleano1===booleano3){
//   alert("Booleano1 e booleano3 são iguis")
// } else{
//   alert("Nenhum  valor é igual o outro")
// }


// if/else if/else (if else encadeado)
// Vamos verificar se uma pessoa pode votar
// let idade = 69

// if (idade >= 18 && idade < 70){
//     alert(`Você tem ${idade} anos, voto obrigatório.`)
// }else if (idade >= 70){
//     alert(`Você tem ${idade} anos, voto facultatico.`);
// }else if(idade === 16 || idade === 17){
//     alert(`Você tem ${idade} anos, vota somente com autorização dos pais.`);
// }else {
//     alert(`Você tem ${idade} anos, não pode votar.`);
// }


//a) Pode votar: pessoas com 18 anos ou mais
//b) Não pode votar: pessoas menores de 18 anos
//c) Casos facultativos: 
//    i. Pessoas com idade entre 16 e 17 anos
//    ii. Pessoas com 70 anos ou mais


// const media = 11
// if(media >= 5 && media <= 10){
//   console.log(`Aprovada`);
// } else if (media >= 3 && media <= 10){
//   console.log(`Recuperação`);
// } else if (media <= 2 && media <= 10){
//   console.log(`Estudante Reprovado`);
// } else {
//   console.log(`Dado inválido`);
// }

// esse não funciona corretamente
const media = 11
if(media >= 5 && media < 10){
  console.log(`Aprovada`);
} else if (media >= 3){
  console.log(`Recuperação`);
} else if (media < 3){
  console.log(`Estudante Reprovado`);
} else {
  console.log(`Dado inválido`);
}