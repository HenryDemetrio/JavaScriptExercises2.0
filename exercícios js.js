function func1() {
    let n1 = +document.getElementById("nota1").value;
    let n2 = +document.getElementById("nota2").value;
    let n3 = +document.getElementById("nota3").value;
    let total = ((n1 + n2 + n3) / 3)
    var respQ1;
    if (total >= 6) {
        respQ1 = "aluno aprovado"
    } else {
        respQ1 = "aluno reprovado"
    }
    document.getElementById("respQ1").innerHTML = respQ1;
}

function func2() {
    let idadeN = +document.getElementById("idadeN").value;
    var respQ2
    if (idadeN < 5){
        respQ2 = "Sem categoria"
    } else if (idadeN >= 5  && idadeN <= 7){
        respQ2 = "Infantil A"
    } else if (idadeN >= 8 && idadeN <= 10){
        respQ2 = "Infantil B"
    } else if (idadeN >= 11 && idadeN <= 13){
        respQ2 = "Juvenil A"
    } else if (idadeN >= 14  && idadeN <= 17){
        respQ2 = "Juvenil B"
    } else if ( idadeN >= 18){
        respQ2 = "Adulto"
    }
    document.getElementById("respQ2").innerHTML = respQ2;
}
function func3() {
    let a = +document.getElementById("valA").value;
    let b = +document.getElementById("valB").value;
    let c = +document.getElementById("valC").value;
    var maior
    if (a > b && a > c){
        maior = "O A tem o maior valor"
    } else if (b > a && b > c){
        maior = "O B tem o maior valor"
    } else if (c > a && c > b){
        maior = "O C tem o maior valor"
    }        
    document.getElementById("respQ3").innerHTML = maior
}
function func4(){
    let numero = +document.getElementById("num").value;
    var int 
    var lado
    if (numero >= 0){
        int = "O número é positivo "
    } else{
        int = "O número é negativo"
    }
    if (numero % 2 === 0){
        lado = "e par"
    }
    else {
        lado = "e ímpar"
    }
    document.getElementById("respQ41").innerHTML = int
    document.getElementById("respQ42").innerHTML = lado
}
function func5(){
    var x = 0
    var soma = 0
    while (x < 100) {
        if (x % 2 == 0){
            soma += x
            x = x + 2
        }
    }
    document.getElementById("respQ5").innerHTML = soma
    

}
function func6(){
    var n = 2
    fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1
    while(n < 100){
        fibonacci[n] = fibonacci[n-1] + fibonacci[n-2]
        n++
    }
    document.getElementById("respQ6").innerHTML = fibonacci
}
function func7(){
    var n = +document.getElementById("fatn").value;
    var resultadoQ5 = n
    for(var i = 1;i < n;i++){
        resultadoQ5 *= i
    }
    document.getElementById("respQ7").innerHTML = resultadoQ5
}

function func8(){
    var x = 0
    var soma = 0
    do{
        if (x % 2 == 0){
            soma += x
            x = x + 2
        }
    }
    while (x < 100)
    document.getElementById("respQ8").innerHTML = soma
}

function func81(){
    var n = 2
    fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1
    do{
        fibonacci[n] = fibonacci[n-1] + fibonacci[n-2]
        n++
    }
    while(n < 100)
    document.getElementById("respQ81").innerHTML = fibonacci
}

function func9(){
    let n = 150
    let primos = []
    for (let numero1 = 1; numero1 <= n; numero1++) {
        let contador = 0;
        for (let numero2 = 1; numero2 <= numero1; numero2++) {
            if (numero1 % numero2 == 0) {
                contador++;
            }
        }
        if (contador == 2) {
            primos.push(numero1)
        }
    }
    document.getElementById("respQ9").innerHTML = primos
}

function func15(){
    
}
