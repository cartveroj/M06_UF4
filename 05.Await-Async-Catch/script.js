/**1. Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa si és
divisible entre dos o no.
Mitjançant un console.log mostra els possibles resultats */
let input1 = document.getElementById('ex1');
console.log(numeroEx1);
input1.addEventListener('input', function(){

});

divisibleEntreDos(15)
.then(
    function(value){console.log(value)},
    function(error){console.log(error)}
);


function divisibleEntreDos(numero){
    return new Promise(function(myResolve, myReject){
        if( (numero % 2) == 0){
            myResolve("Es divisible entre dos");
        }else{
            myReject("No es divisible entre dos ");
        }
    });
    
}




/* 
Ejercici 2.- Assigna-li una promesa a una variable que comprovi si un valor és major o igual a 0 i menor o
igual a 10.
Mitjançant un console.log mostra els possibles resultats
*/

let promiseMayorMenorIgualACero = (numero) => new Promise(function(myResolve, myReject){
    if( numero >=  0 && numero <=10){
        myResolve("El numero es valido");
    }else{
        myReject("No cumple con ninguno")
    }
});

promiseMayorMenorIgualACero(13).then(
    function(value){console.log(value)},
    function(error){console.log(error)}
);

/* 
3. Crea una funció que es digui esVocal que retorni una promesa que calculi si una lletra està dins
d’un array donat.
let arr = [“a”, “e”, “i”, “o”, “u”]
Mitjançant un console.log mostra els possibles resultats
*/


function esVocal(letra){
    return new Promise (function(myResolve, myReject){
        let arr = ['a', 'e', 'i', 'o', 'u'];
          
        if( arr.includes(letra)){
            myResolve("Incluye la letra");
        }else{
            myReject("No incluye la letra");
        }
        
    });
}

esVocal('L').then(
    function(value){console.log(value)},
).catch(
    function(error){console.log(error)}
);

/* 4. Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió del
primer entre el 2on paràmetre.
Fes que si la divisió és possible torni el quocient, si el 2on paràmetre és 0 que torni un missatge
d’error*/

function calculoDivision(valor1,valor2){
    return new Promise(function(myResolve,myReject){
         let numero1 = parseInt(valor1);
         let numero2 = parseInt(valor2);
        if(numero2 == 0){
            myReject("No se puede dividir entre cero");
        }else{
            myResolve(numero1/numero2)
        }

    });
}
calculoDivision(12,0)
.then(resolve =>{
    console.log(resolve)
})
.catch(error => {
    console.log(error);
})
