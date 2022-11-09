//////// VERORES: ////////

function Q1() {
    let A = [1, 0, 5, -2, -5, 7];
    let soma = A[0] + A[1] + A[5];
    console.log(soma);
    A[3] = 100;
    for (let num of A) {
        console.log(num)
    }
}

function Q2() {
    let A = [];
    for (let i = 0; i < 6; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    console.log(A);
}

function Q3() {
    let A = []
    let B = []
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor)
        B.push(valor**2)
    }
    console.log('Numeros: ' + A + '\n' + 'Quadrados: ' + B)
}

function Q4() {
    let A = [];
    let soma = 0;
    let count = 0;
    let x = 0;
    for (let i = 0; i < 8; i++) {
        valor = Math.floor(Math.random() * 10);
        A.push(valor)
    }
    console.log(A)
    while (count != 2) {
        x = +prompt('Digite um indice: ');
        if (x < 9) {
            soma += A[x]
            count++
        }
        else {
            console.log('Voce digitou um indice que não existe no vetor. Digite um indice válido.')
        }
    }
    console.log(soma);
}

function Q5() {
    let A = [];
    let count = 0;
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
        if (valor % 2 == 0) {
            count++;
        }
    }
    console.log(A)
    console.log(count)
}

function Q6() {
    let A = [];
    for (let i = 0; i < 10; i++) {
        let valor = +prompt('Digite um numero: ');
        A.push(valor);
    }
    console.log(A)
    console.log('Maior: ' + max_value(A));
    console.log('Menor: ' + min_value(A));
}

function max_value(Lista, mostrar_indice = 0) {
    let max;
    let max_indice;
    for (let i = 0; i < Lista.length; i++) {
        if (Lista[i] != undefined) {
            max = Lista[i];
            max_indice = i;
            break
        }
    }
    for (let i = 0; i < Lista.length; i++) {
        if (Lista[i] > max) {
            max = Lista[i];
            if (mostrar_indice == 1) {
                max_indice = i
            }
        }
    }
    if (mostrar_indice == 0) {
        return max
    }
    if (mostrar_indice == 1) {
        return [max, max_indice]
    }
}

function min_value(Lista, mostrar_indice = 0) {
    let min;
    let min_indice
    for (let i = 0; i < Lista.length; i++) {
        if (Lista[i] != undefined) {
            min = Lista[i];
            min_indice = i;
            break
        }
    }
    for (let i = 0; i < Lista.length; i++) {
        if (Lista[i] < min) {
            min = Lista[i];
            if (mostrar_indice == 1) {
                min_indice = i
            }
        }
    }
    if (mostrar_indice == 0) {
        return min
    }
    if (mostrar_indice == 1) {
        return [min, min_indice]
    }
}

function Q7() {
    let A = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    let x = max_value(A, 1)
    console.log(A);
    console.log('Maior elemento: ' + x[0]);
    console.log('Indice: ' + x[1]);
}

function Q8() {
    let A = [];
    let B = []
    for (j = 9; j >= 0; j--) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
        B[j] = valor;
    }
    console.log(A);
    console.log(B)
}

function Q9() {
    let A = [];
    let B = [];
    for (let j = 5; j >= 0; j--) {
        let valor = +prompt('Digite um numero par: ');
        while (valor % 2 != 0) {
            valor = +prompt("O numero digitado não é par. Digite novamente:")
        }
        A.push(valor);
        B[j] = valor;
    }
    console.log(A);
    console.log(B)
}

function Q10() {
    let A = [];
    for (let i = 0; i < 15; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor);
    }
    console.log('Notas: ' + A)
    console.log('Media: ' + media(A));
}

function Q11() {
    let A = [];
    let sum_pos = 0;
    let qtd_neg = 0;
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * (100 - (-100)) + (-100));
        A.push(valor);
    }
    for (let num of A) {
        if (num >= 0) {
            sum_pos += num;
        }
        else {
            qtd_neg += 1;
        }
    }
    console.log(A)
    console.log(`A soma dos numeros positivos é ${sum_pos} e a qauntidade de numeros negativos é ${qtd_neg}`);
}

function Q12() {
    let A = [];
    for (let i = 0; i < 5; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor);
    }
    console.log(A)
    console.log('Media: ' + media(A))
    console.log('Maior: ' + max_value(A));
    console.log('Menor: ' + min_value(A));
}

function Q13() {
    let A = [];
    for (let i = 0; i < 5; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    let max = max_value(A, 1);
    let min = min_value(A, 1)
    console.log(A)
    console.log('Maior valor: ' + max[0] + '  Indice do maior valor: ' + max[1] + '  Menor valor: ' + min[0] + '  Indice do menor valor: ' + min[1]);
}

function Q14() {
    let A = [];
    let B = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor);
    }
    for (let num1 of A) {
        let iguais = -1
        for (let num2 of A) {
            let count = 0
            if (num1 == num2) {
                iguais++
                for (let k = 0; k < 10; k++) {
                    if (num1 == B[k]){
                        count++
                    }
                }
                if (count == 0 && iguais > 0) {
                    B.push(num1)
                }
            }
        }
    }
    console.log(A)
    console.log(B)
}

function Q15() {
    let A = [];
    let B = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor);
    }
    for (let num1 of A) {
        for (let num2 of A) {
            let count = 0
            if (num1 == num2) {
                for (let k = 0; k < 10; k++) {
                    if (num1 == B[k]){
                        count++
                    }
                }
                if (count == 0) {
                    B.push(num1)
                }
            }
        }
    }
    console.log(A)
    console.log(B)
}

function Q16() {
    let A = [];
    for (let i = 0; i < 5; i++) {
        let valor = +prompt('Digite um numero: ');
        A.push(valor);
    }
    let opcao = +prompt("Digite 0 para encerrar o programa, 1 para imprimir o vetor e 2 para imprimi-lo na ordem inversa")
    while (!(opcao in [0, 1, 2])) {
        opcao = +prompt("Voce digitou uma opcao invalida. Por favor, digite novamente.\nDigite 0 para encerrar o programa, 1 para imprimir o vetor e 2 para imprimi-lo na ordem inversa")
    }
    switch (opcao) {
        case 0:
            return;
        case 1:
            console.log(A);
            break;
        case 2:
            let A_invertido = []
            for (let i = A.length - 1; i >= 0; i--) {
                A_invertido.push(A[i])
            }
            console.log(A_invertido)
    }
}

function Q17() {
    let A = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * (100 - (-100)) + (-100));
        A.push(valor);
    }
    console.log(A)
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            A[i] = 0
        }
    }
    console.log(A)
}

function Q18() {
    let A = [];
    let multiplos = []
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    let x = prompt("Digite um numero")
    for (let num of A) {
        if (num % x == 0) {
            multiplos.push(num)
        }
    } 
    console.log(A)
    console.log(`Multiplos de ${x}: ${sort(multiplos)}`)
}

function Q19() {
    let A = [];
    for (let i = 0; i < 50; i++) {
        A.push((i + 5 * i) % (i+ 1));
    }
    console.log(A)
}

function Q20() {
    let A = [];
    let B = [];
    for (let i = 0; i < 10; i++) {
        A.push(Math.floor(Math.random() * 51));
    }
    for (let num of A) {
        if (num % 2 != 0) {
            B.push(num)
        }
    }
    console.log(A)
    console.log('Impares: ' + B)
}

function Q21() {
    let A = [];
    let B = [];
    let C = [];
    for (let i = 0; i < 10; i++) {
        let valor = +prompt('Digite um valor de A: ');
        A.push(valor);
    }
    for (let i = 0; i < 10; i++) {
        let valor = +prompt('Digite um valor de B: ');
        B.push(valor);
    }
    for (let i = 0; i < 10; i++) {
        C.push(A[i]-B[i]);
    }
    console.log(A)
    console.log(B)
    console.log(C)
}

function Q22() {
    let A = [];
    let B = [];
    let C = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    for (let i = 0; i < 10; i++) {
        valor = Math.floor(Math.random() * 100);
        B.push(valor);
    }
    for (let i = 0, j = 1; i < 10; i += 2, j += 2) {
        C.push(A[i]);
        C.push(B[j]);
    }
    console.log(A)
    console.log(B)
    console.log(C)
}

function Q23() {
    let A = [];
    let B = [];
    let produto_escalar = 0;
    for (let i = 0; i < 5; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor);
    }
    for (let i = 0; i < 5; i++) {
        let valor = Math.floor(Math.random() * 10);
        B.push(valor);
    }
    for (let i = 0; i < 5; i++) {
        produto_escalar += A[i]*B[i]
    }
    console.log(A)
    console.log(B)
    console.log(produto_escalar)
}

function Q24() {
    let A = [];
    let B = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    for (let i = 0; i < 10; i++) {
        let valor = +prompt("Digite uma altura: ")
        B.push(valor);
    }
    console.log(A, B)
    maior = max_value(B, 1);
    menor = min_value(B, 1);
    console.log(`Maior altura: ${maior[0]}, matricula: ${A[maior[1]]}, menor altura: ${menor[0]}, matricula: ${A[menor[1]]}`);
}

function Q25() {
    let A = [];
    for (let i = 0; i < 100; i++) {
        numero = i.toString()
        ultimo_numero = parseInt(numero[numero.length-1])
        if (i % 7 != 0 && ultimo_numero != 7) {
            A.push(i);
        }
    }
    console.log(A)
}

function media(lista) {
    let soma = 0;
    for (let num of lista) {
        soma += num
    }
    return soma/lista.length
}

function Q26() {
    let A = [];
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor);
    }
    for (let num of A) {
        soma += (num - media(A)) ** 2
    }
    let desvio_padrao = soma / (A.length - 1);
    console.log(A)
    console.log('Desvio padrao: ' + desvio_padrao)
}

function e_primo(lista) {
    let primos = []
    let indices = []
    for (let i = 0; i < lista.length; i++) {
        let numero1 = lista[i]
        let contador = 0;
        for (let numero2 = 1; numero2/2 <= numero1; numero2++) {
            if (numero1 % numero2 == 0) {
                contador++;
            }
        }
        if (contador == 2) {
            primos.push(numero1)
            indices.push(i)
        }
    }
    return [primos, indices]
}

function Q27() {
    let A = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 10);
        A.push(valor);
    }
    primos = e_primo(A);
    console.log(A)
    console.log(primos)
}

function Q28() {
    let v = []
    let v1 = [];
    let v2 = []
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 10);
        v.push(valor);
    }
    for (let num of v) {
        if (num % 2 == 0) {
            v2.push(num)
        }
        else {
            v1.push(num)
        }
    }
    console.log(v)
    console.log(v1)
    console.log(v2)
}

function Q29() {
    let A = [];
    let pares = [];
    let impares = [];
    let soma_par = 0;
    for (let i = 0; i < 6; i++) {
        let valor = +prompt('Digite um numero: ');
        A.push(valor);
    }
    for (let num of A) {
        if (num % 2 == 0) {
            pares.push(num)
            soma_par += num
        }
        else {
            impares.push (num)
        }
    }
    console.log(`Pares: ${pares}, soma dos pares: ${soma_par}, impares: ${impares}, quantidade de impares: ${impares.length}`)
}

function Q30() {
    let A = [];
    let B = [];
    let interseccao = []
    for (let i = 0; i < 10; i++) {
        let valorA = Math.floor(Math.random() * 10);
        let valorB = Math.floor(Math.random() * 10);
        A.push(valorA);
        B.push(valorB);
    }
    for (let i = 0; i < 10; i++) {  
        let count = 0
        for (let j = 0; j < 10; j++) {
            if (A[i] == B[j]) {
                for(let k = 0; k < interseccao.length; k++){ 
                    if (A[i] == interseccao[k]) {
                        count++
                    }
                }
                if (count == 0) {
                    interseccao.push(A[i])
                }
            }
        }
    }
    console.log(A, B)
    console.log('Interseccao: ' + interseccao)
}

//perguntar pro alisson
/*function Q30_n_deu_certo() {
    let A = [];
    let B = [];
    let interseccao = []
    for (let i = 0; i < 10; i++) {
        let valorA = Math.floor(Math.random() * 10);
        let valorB = Math.floor(Math.random() * 10);
        A.push(valorA);
        B.push(valorB);
    }
    for (let i = 0; i < 10; i++) {  
        if (A[i] in B && !(A[i] in interseccao)) {
            interseccao.push(A[i])
        }
    }
    console.log(A, B)
    console.log('Interseccao: ' + interseccao)
}*/

function Q31() {
    let A = [];
    let B = [];
    let C = []
    let uniao = [];
    for (let i = 0; i < 10; i++) {
        let valor = +prompt('Digite um numero de A: ');
        A.push(valor);
    }
    for (let i = 0; i < 10; i++) {
        let valor = +prompt('Digite um numero de B: ');
        B.push(valor);
    }
    for (let i = 0; i < 10; i++) {
        C.push(A[i])
        C.push(B[i])
    }
    for(let i = 0; i < 10; i++){ 
        let count = 0
        for(let j = 0; j < 10; j++){
            if(C[i] == C[j]){
                count += 1
                if(count > 1){
                    count = 0
                    delete C[j]
                }
            }
        }
    }
    for (let num of C) {
        if (num != undefined) {
            uniao.push(num)
        }
    }
    console.log(A, B)
    console.log('Uniao: ' + sort(uniao))
}

function Q32() {
    let A = [];
    let B = [];
    let C = []
    let interseccao = [];
    let uniao = [];
    let soma = [];
    let produto = [];
    let diferença = [];
    for (let i = 0; i < 5; i++) {
        let valor = +prompt('Digite um numero de A: ');
        A.push(valor);
    }
    for (let i = 0; i < 5; i++) {
        let valor = +prompt('Digite um numero de B: ');
        B.push(valor);
    }
    for (let i = 0; i < 10; i++) {  
        let count = 0
        for (let j = 0; j < 10; j++) {
            if (A[i] == B[j]) {
                for(let k = 0; k < interseccao.length; k++){ 
                    if (A[i] == interseccao[k]) {
                        count++
                    }
                }
                if (count == 0) {
                    interseccao.push(A[i])
                }
            }
        }
    }
    console.log('Interseccao: ' + interseccao)
    C = []
    for (let i = 0; i < 10; i++) {
        C.push(A[i])
        C.push(B[i])
    }
    for(let i = 0; i < 10; i++){ 
        let valor = C[i]    
        let count = 0
        for(let j = 0; j < 10; j++){
            if(valor == C[j]){
                count += 1
                if(count > 1){
                    count = 0
                    delete C[j]
                }
            }
        }
    }
    for (let num of C) {
        if (num != undefined) {
            uniao.push(num)
        }
    }
    console.log('Uniao: ' + uniao)
    for (let i = 0; i < 5; i++) {
        soma[i] = A[i] + B[i]
        produto[i] = A[i] * B[i]
    }
    C = []
    for (let i = 0; i < 5; i++) {
        C.push(A[i])
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (C[i] == B[j]) {
                delete C[i]
            }
        }
    }
    for (let num of C) {
        if (num != undefined) {
            diferença.push(num)
        }
    }
    console.log('Produto: ' + produto)
    console.log('Soma: ' + soma);
    console.log('Diferenca: ' + diferença)
}

function Q33() {
    let A = [];
    let A_filtrado = []
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    A[3] = 0
    A[8] = 0
    console.log(A)
    for (let i = 0; i < 10; i++) {
        if (A[i] == 0) {
            for (let j = i; j < 10; j++) {
                A[j] = A[j+1]
            }
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== undefined) {
            A_filtrado.push(A[i]);
        }
    }
    console.log(A_filtrado)
}

function Q34() {
    let A = [];
    for (let i = 0; i < 10; i++) {
        let valor = +prompt('Digite um numero: ');
        for (let num of A) {
            while (num == valor) {
                valor = +prompt('Este valor já foi digitado. Por favor, escolha outro numero: ');
            }
        }
        A.push(valor);
    }
    console.log(A)
}

function Q35() {
    let A = [];
    let B = [];
    let C = [];
    let D = [];
    let valorA = parseInt(Math.random() * 10000);
    let valorB = parseInt(Math.random() * 10000);
    A.push(valorA);
    B.push(valorB);
    A = A.toString();
    B = B.toString();
    A = A.split('')
    B = B.split('')
    console.log(A, B)
    for (let i = A.length - 1; i >= 0; i--) {
        C.push(parseInt(A[i]))
    }
    for (let i = B.length - 1; i >= 0; i--) {
        D.push(parseInt(B[i]))
    }
    let diferença
    if (C.length > D.length) {
        diferença = C.length - D.length
        for (let i = 0; i < diferença; i++) {
            D.push(0)
        }
    }
    if (D.length > C.length) {
        diferença = D.length - C.length
        for (let i = 0; i < diferença; i++) {
            C.push(0)
        }
    }
    let E = []
    let incremento = 0
    for (let i = 0, j = C.length - 1; j >= 0; i++, j--) {
        let resultado = C[i] + D[i] + incremento
        if (resultado >= 10) {
            E[j] = resultado - 10
            incremento = 1
        }
        else {
            E[j] = resultado
            incremento = 0
        }
        if (j == 0 && incremento == 1) {
            E.unshift(incremento)
        }
    }
    console.log(E);
}

function sort(Lista, reverse = false) {
    let Lista_ordenada = []
    let Lista_temp = []
    for (let num of Lista) {
        Lista_temp.push(num)
    }
    while (Lista_ordenada.length != Lista.length) {
        if (reverse == false) {
            let min = min_value(Lista_temp, 1)
            Lista_ordenada.push(min[0])
            delete Lista_temp[min[1]]
        }
        if (reverse == true) {
            let max = max_value(Lista_temp, 1)
            Lista_ordenada.push(max[0])
            delete Lista_temp[max[1]]
        }
    }
    return Lista_ordenada
}

function Q36() {
    let A = [];
    for (let i = 0; i < 10; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    let A_ordenado = sort(A, true)
    console.log(A)
    console.log(A_ordenado)
}

function Q37() {
    let A = [];
    let B = [];
    let C = [];
    let D = [];
    for (let i = 0; i < 11; i++) {
        let valor = Math.floor(Math.random() * 100);
        A.push(valor);
    }
    for (let i = 0; i < A.length; i++) {
        if (i <= A.length/2) {
            B.push(A[i])
        }
        else {
            C.push(A[i])
        }
    }
    B = sort(B);
    C = sort(C, true);
    for (let numb of B) {
        D.push(numb)
    }
    for (let numc of C) {
        D.push(numc)
    }
    console.log(A)
    console.log(D)
}

function Q38() {
    let A = [];
    let B;
    for (let i = 0; i < 10; i++) {
        let valor = +prompt('Digite um numero: ');
        A.push(valor);
        B = sort(A)
    }
    console.log(B)
}

function Q39(n = 1) {
    let linha_abaixo = []
    let linha_atual = [];
    let triangulo_de_pascal = ''
    for (let n_linha = 0; n_linha < n; n_linha++) {
        linha_atual[0] = 1;
        linha_atual[n_linha] = 1
        linha_abaixo[0] = 1
        linha_abaixo[n_linha + 1] = 1
        for (let i = 0; i < n_linha; i++) {
            linha_abaixo[i+1] = linha_atual[i] + linha_atual[i+1]
        }
        triangulo_de_pascal += linha_atual + '/'
        linha_atual = []
        for (let num of linha_abaixo) {
            linha_atual.push(num)
        }
        linha_abaixo = []
    }
    triangulo_de_pascal = triangulo_de_pascal.split('/')
    for (let linha of triangulo_de_pascal) {
        console.log(linha)
    }
}

//ARRAY:
Q1()
Q2()
Q3()
Q4()
Q5()
Q6()
Q7()
Q8()
Q9()
Q10()
Q11()
Q12()
Q13()
Q14()
Q15()
Q16()
Q17()
Q18()
Q18()
Q20()
Q21()
Q22()
Q23()
Q24()
Q25()
Q26()
Q27()
Q28()
Q29()
Q30()
Q31()
Q32()
Q33()
Q34()
Q35()
Q36()
Q37()
Q38()
Q39(10)