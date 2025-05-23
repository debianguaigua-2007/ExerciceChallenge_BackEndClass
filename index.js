// função inicio
//ExerciceChallenge_BackEndClass
//Exercicio 1: Criar função array de numeros e retorne a soma de apenas os numeros pares:

let digitos=[2, 9, 8];
let a1;
let a2;
let a3;
function somaPar(){
    console.log("Exercicio 1:")
    if(digitos[0]%2===0){a1=digitos[0];}else{a1=0}
    if(digitos[1]%2===0){a2=digitos[1];}else{a2=0}
    if(digitos[2]%2===0){a3=digitos[2];}else{a3=0}
    let resultado1=a1+a2+a3;
    console.log(`A soma dos números pares é ${resultado1}`);
}

//Exercicio 2: Criar uma função que receba um array de palavras e retorne um novo array contando apenas palavras de 4 letras:

let palavras=["numa", "sam", "jose", "pedro"];
let bb=[0];
function cuadriletras(){
    console.log("Exercicio 2:")
    let x;
    for(let item of palavras){
        x=palavras[item];
        y=x.split("");
        if(y.lenght==4){
            bb.push(palavras[item]);
        }
    }
    console.log(bb);
}

//Exercicio 3: Dado um array de números, criar uma função que conte quantas vezes um resultado aparece no array:

let nada=[1, 4, 7, 18, 9];
let contador=0;
function numera(){
    console.log("Exercicio 3:")
    for(let a of nada){
        if(nada[a]==13){contador=contador+1}
    }
    console.log(`O valor 13 apareceu ${contador} vezes no array`);
}

//Exercicio 4: Crie uma função que receba um array de números e um número multiplicador. A função deve retornar um novo array com todos os elementos multiplicados por esse número:

let todo=[3, 27, 548];
let salt=[];
function multiplica(){
    console.log("Exercicio 4:")
    for(let z of todo){
        salt.push(todo[z]);
    }
    console.log(`O resultado é ${salt}`);
}

//Exercicio 5: Crie uma função que receba uma string e retorne a mesma frase com as palavras em ordem inversa. dica //Use reverse():

const phrase="No_sé_que_poner";
function vira(){
    console.log("Exercicio 5:");
    let result=phrase.split("");
    console.log(`O resultado é ${result}`)
}

//Respostas:

//somaPar();
//cuadriletras();
//numera();
multiplica();
//vira();