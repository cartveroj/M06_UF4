/**1. Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa si és
divisible entre dos o no.
Mitjançant un console.log mostra els possibles resultats */
let input1 = document.getElementById('ejercicioOne');
let valInput1 = 0;
input1.addEventListener('change', function() {
    valInput1 = this.value;
    console.log('Valor del input1:', valInput1);


    divisibleEntreDos(valInput1)
    .then(
        function(value){console.log(value)},
        function(error){console.log(error)}
    );

  });


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
        myResolve("El numero es menor que 10 y mayor a 0");
    }else{
        myReject("El numero se salio del rango");
    }
});

let input2 = document.getElementById('ex2');
let val2 = 0;

input2.addEventListener('change', function() {
    val2 = this.value;
    console.log('Valor del input2:', val2);

    promiseMayorMenorIgualACero(val2)
    .then(
    function(value){console.log(value)},
    function(error){console.log(error)}
    );

});


/* 
3. Crea una funció que es digui esVocal que retorni una promesa que calculi si una lletra està dins
d’un array donat.
let arr = [“a”, “e”, “i”, “o”, “u”]
Mitjançant un console.log mostra els possibles resultats
*/

let input3 = document.getElementById('ex3');
let val3 = '';
input3.addEventListener('change', function() {
    val3 = this.value.toLowerCase();
    console.log('Valor del input3:', val3);

    esVocal(val3).then(
        function(value){console.log(value)},
    ).catch(
        function(error){console.log(error)}
    );

  });



function esVocal(letra){
    return new Promise (function(myResolve, myReject){
        let arr = ['a', 'e', 'i', 'o', 'u'];
          
        if( arr.includes(letra)){
            myResolve("contiene esa letra");
        }else{
            myReject("No contiene esa letra");
        }
        
    });
}



/* 4. Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió del
primer entre el 2on paràmetre.
Fes que si la divisió és possible torni el quocient, si el 2on paràmetre és 0 que torni un missatge
d’error*/

let input4Primer = document.getElementById('ex4.1');
let val4Primer = 0;

let input4Second = document.getElementById('ex4.2');
let val4Second = 0;

input4Primer.addEventListener('change', function() {
    val4Primer = this.value;
    console.log('Valor del input4 primer:', val4Primer);
    divisionNumeros();
  });

  input4Second.addEventListener('change', function() {
    val4Second = this.value;
    console.log('Valor del input4 second:', val4Second);
    divisionNumeros();
  });

 function divisionNumeros(){

    console.log(val4Primer);
    console.log(val4Second);

    calculoDivision(val4Primer,val4Second)
        .then(resolve =>{
            console.log(resolve)
        })
        .catch(error => {
            console.log(error);
        })

 }
  
function calculoDivision(valor1,valor2){
    return new Promise(function(myResolve,myReject){
         let numero1 = parseInt(valor1);
         let numero2 = parseInt(valor2);
        if(numero2 == 0){
            myReject("No se puede dividir entre cero");
        }else{
            myResolve((numero1/numero2).toFixed(2))
        }
    });
}

