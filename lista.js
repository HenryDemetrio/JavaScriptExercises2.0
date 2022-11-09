//////// MATRIZES: ////////

function Q1_2() {
    let matriz = new Array(4);
    let maior_q_10 = []
    let count = 0
    for (var i = 0; i < matriz.length; i++)
        matriz[i] = new Array(4);
    for (var lin = 0; lin < matriz.length; lin++) {
        for (col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 20);
            if (matriz[lin][col] > 10) {
                maior_q_10.push(matriz[lin][col])
                count++
            }
        }
    }
    console.log(matriz);
    console.log(maior_q_10)
    console.log(count)
}

function Q2_2() {
    let matriz = new Array(5);
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(5);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            if (lin == col) {
                matriz[lin][col] = 1
            }
            else {
                matriz[lin][col] = 0
            }
        }
    }
    console.log(matriz);
}

function Q3_2() {
    let matriz = new Array(4);
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(4);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = lin*col;
        }
    }
    console.log(matriz)
}

function Q4_2() {
    let matriz = new Array(4);
    let indices = []
    let max_linha = []
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(4);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 1000);
        }
    }
    for (let i = 0; i < matriz.length; i++) {
        maior_valor = max_value(matriz[i], 1);
        max_linha.push(maior_valor[0]);
        indices.push(maior_valor[1])
    }
    max_matriz = max_value(max_linha, 1)
    console.log(matriz)
    console.log(max_matriz[0])
    col = indices[max_matriz[1]]
    console.log(max_matriz[1], col)
}

function Q4M() {
    let matriz = Array(5);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = Array(5);
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random()*20)
        }
    }
    let max_lin = []
    let lista_max_indice = []
    for (let lin = 0; lin < matriz.length; lin++) {
        max = Math.max(...matriz[lin])
        max_lin.push(max)
        lista_max_indice.push([lin, matriz[lin].indexOf(max)])
    }
    let max_elem = Math.max(...max_lin)
    let indice = max_lin.indexOf(max_elem)
    let max_i = lista_max_indice[indice]
    return [max_i, matriz]
}

function Q5_2() {
    let matriz = new Array(5);
    let x = +prompt("Digite um numero: ")    
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(5);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 10);
            if (matriz[lin][col] == x) {
                console.log(matriz)
                return [lin, col]
            }
        }
    }
    console.log("Item não encontrado")
}

function Q6_2() {
    let matriz1 = new Array(4);
    let matriz2 = new Array(4);
    let matriz3 = new Array(4)
    for (let i = 0; i < matriz1.length; i++) {
        matriz1[i] = new Array(4);
        matriz2[i] = new Array(4);
        matriz3[i] = new Array(4);
    }
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {
            matriz1[lin][col] = Math.floor(Math.random() * 100);
        }
    }
    for (let lin = 0; lin < matriz2.length; lin++) {
        for (let col = 0; col < matriz2[lin].length; col++) {
            matriz2[lin][col] = Math.floor(Math.random() * 100);
        }
    }
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {
            if (matriz1[lin][col] > matriz2[lin][col]){
                matriz3[lin][col] = matriz1[lin][col];
            }
            else {
                matriz3[lin][col] = matriz2[lin][col];
            }
        }
    }
    console.log(matriz1)
    console.log(matriz2)
    console.log(matriz3)
}

function Q7_2() {
    let matriz = new Array(10);
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(10);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            if (lin < col) {
                matriz[lin][col] = 2*lin + 7*col - 2;
            }
            else if (lin == col) {
                matriz[lin][col] = 3*(lin**2) -1
            }
            else {
                matriz[lin][col] = 4*(lin**3) - 5*(col**2) + 1
            }
        }
    }
    console.log(matriz)
}    

function Q8_2() {
    let matriz = new Array(3);
    let soma = 0;
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(3);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 100);
            if (lin < col) {
                soma += matriz[lin][col]
            }
        }
    }
    console.log(matriz)
    console.log(soma)
}

function Q9_2() {
    let matriz = new Array(3);
    let soma = 0;
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(3);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 100);
            if (lin > col) {
                soma += matriz[lin][col]
            }
        }
    }
    console.log(matriz)
    console.log(soma)
}

function Q10_2() {
    let matriz = new Array(3);
    let soma = 0;
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(3);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 100);
            if (lin == col) {
                soma += matriz[lin][col]
            }
        }
    }
    console.log(matriz)
    console.log(soma)
}

function Q11_2() {
    let matriz = new Array(3);
    let soma = 0;
    for (let i = 0; i < matriz.length; i++)
        matriz[i] = new Array(3);
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 100);
        }
    }
    for (let lin = 0, col = matriz[lin].length-1; lin < matriz.length; lin++, col--) {
        soma += matriz[lin][col]
    }
    console.log(matriz)
    console.log(soma)
}

function Q12_2() {
    let matriz = new Array(3);
    let matriz_transposta = new Array(3);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(3);
        matriz_transposta[i] = new Array(3); 
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 100);
        }
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz_transposta[lin][col] = matriz[col][lin];
        }
    }
    console.log(matriz)
    console.log(matriz_transposta)
}

function Q13_2() {
    let matriz = new Array(4);
    let matriz_triangular = new Array(4);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(4);
        matriz_triangular[i] = new Array(4); 
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = Math.floor(Math.random() * 20);
            if (lin < col) {
                matriz_triangular[lin][col] = 0
            }
            else {
                matriz_triangular[lin][col] = matriz[lin][col]
            }
        }
    }
    console.log(matriz)
    console.log(matriz_triangular)
}

function Q14_2() {
    let matriz = new Array(5);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(5);
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            let repetido = false
            do {
                let count = 0
                let x = Math.floor(Math.random() * 100);
                for (let linha of matriz) {
                    for (let elem of linha) {
                        if (elem == x) {
                            repetido = true
                            count++
                        }
                    }
                }
                if (count == 0) {
                    repetido = false
                    matriz[lin][col] = x
                }
            }
            while(repetido == true)
        }
    }
    console.log(matriz)
}

function Q15_2() {
    let respostas = Array(5);
    let respostas_possiveis = ['a', 'b', 'c', 'd']
    let gabarito = Array(10)
    let resultado = Array(5)
    for (let i = 0; i < gabarito.length; i++) {
        let indice = Math.floor(Math.random()*4)
        gabarito[i] = respostas_possiveis[indice]
    }
    for (let i = 0; i < respostas.length; i++) {
        respostas[i] = Array(10);
    }
    for (let lin = 0; lin < respostas.length; lin++) {
        for (let col = 0; col < respostas[lin].length; col++) {
            let indice = Math.floor(Math.random()*4)
            respostas[lin][col] = respostas_possiveis[indice]
        }
        resultado[lin] = 0
    }
    for (let lin = 0; lin < respostas.length; lin++) {
        for (let col = 0; col < respostas[lin].length; col++) {
            if (respostas[lin][col] == gabarito[col]) {
                resultado[lin] += 1
            }
        }
    }
    console.log('Respostas:')
    console.log(respostas)
    console.log('Gabarito:')
    console.log(gabarito)
    console.log('Resultado: \n' + resultado)
}

function Q16_2() {
    let respostas = new Array(3);
    let gabarito = new Array(10);
    let resultado = [0, 0, 0]
    let matricula = [111, 222, 333]
    let respostas_possiveis = ['a', 'b', 'c', 'd']
    for (let i = 0; i < respostas.length; i++) {
        respostas[i] = new Array(10);
    }
    for (let i = 0; i < gabarito.length; i++) {
        let g = Math.floor(Math.random()*3)
        gabarito[i] = respostas_possiveis[g];
    }
    for (let lin = 0; lin < respostas.length; lin++) {
        for (let col = 0; col < respostas[lin].length; col++) {
            let r = Math.floor(Math.random()*3)
            respostas[lin][col] = respostas_possiveis[r];
            if (respostas[lin][col] == gabarito[col]) {
                resultado[lin] += 1
            }
        }
    }
    console.log(`Gabarito: ${gabarito}\n\n`)
    for (let i = 0; i < respostas.length; i++) {
        console.log('Matricula: ' + matricula[i])
        console.log('Respostas: ' + respostas[i])
        console.log('Resultado: ' + resultado[i])
        if (resultado[i] >= 7) {
            console.log('aprovado')
        }
        else {
            console.log('reprovado')
        }
        console.log('\n')
    }
}

function Q17_2() {
    let notas = new Array(10);
    pior_prova = [0, 0, 0]
    for (let i = 0; i < notas.length; i++) {
        notas[i] = new Array(3);
    }
    for (let lin = 0; lin < notas.length; lin++) {
        for (let col = 0; col < notas[lin].length; col++) {
            notas[lin][col] = Math.floor(Math.random() * 10);
        }
    }
    for (let i = 0; i < notas.length; i++) {
        let min = min_value(notas[i], 1)
        if (min[1] == 0) {
            pior_prova[0] += 1
        }
        else if (min[1] == 1) {
            pior_prova[1] += 1
        }
        else {
            pior_prova[2] += 1
        }
        console.log(min[1])
    }
    for (let i = 0; i < notas.length; i++) {
        console.log(`Notas do aluno ${i+1}: ${notas[i]}`)
    }
    for (let i = 0; i < pior_prova.length; i++) {
        console.log(`Numero de alunos que foram piores na prova ${i+1}: ${pior_prova[i]}`)
    }
}

function Q18_2() {
    let matriz = new Array(3);
    let soma_col = [0, 0, 0]
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(3);
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {
            matriz[lin][col] = +prompt(`Digite o elemento M${lin}${col}: `);
            soma_col[col] += matriz[lin][col]
        }
    }
    console.log(matriz)
    console.log(soma_col)
}

function Q19_2() {
    let matriz = new Array(5);
    let medias = []
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(4);
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {  
            if (col == 0) {
                matriz[lin][col] = Math.floor(Math.random() * 10000);
            }
            else if (col == 1 || col == 2) {
                matriz[lin][col] = Math.floor(Math.random() * 10);
            }
            else {
                let media = (matriz[lin][1] + matriz[lin][2])/2
                matriz[lin][col] = +media.toFixed(2)
            }
        }
        medias.push(matriz[lin][3])
    }
    let maior_nota = max_value(medias, 1)
    console.log(`O aluno de matricula ${matriz[maior_nota[1]][0]} obteve a maior nota (${maior_nota[0]})`)
    console.log('Media geral: ' + media(medias))
    console.log(matriz)
}

function Q20_2() {
    let matriz = new Array(3);
    let matriz_modificada = new Array(3);
    let seg_quar_col = []
    let soma_col_i = 0
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(6);
        matriz_modificada[i] = new Array(6);
    }
    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < matriz[lin].length; col++) {  
            matriz[lin][col] = Math.floor(Math.random() * 100);
            if (col % 2 != 0) {
                soma_col_i += matriz[lin][col] 
            }
            if (col == 1 || col == 3) {
                seg_quar_col.push(matriz[lin][col]) 
            }
            matriz_modificada[lin][col] = matriz[lin][col]
        }
        let novo_elemento = matriz[lin][0] + matriz[lin][1]
        matriz_modificada[lin][5] = novo_elemento
    }
    let m = media(seg_quar_col)
    console.log(matriz)
    console.log('Soma das colunas impares: ' + soma_col_i)
    console.log('Media das colunas pares: ' + m.toFixed(2))
    console.log(matriz_modificada)
}

function Q21_2() {
    let matriz1 = new Array(2);
    let matriz2 = new Array(2);
    let nova_matriz = new Array(2)
    for (let i = 0; i < matriz1.length; i++) {
        matriz1[i] = new Array(2);
        matriz2[i] = new Array(2);
        nova_matriz[i] = new Array(2);
    }
    let opcao = +prompt("Esclha uma das opcaoes:\n Somar (1), subtrair (2), adicionar uma constante(3) ou imprimir a matriz (4)")
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {  
            matriz1[lin][col] = Math.floor(Math.random() * 100);
            matriz2[lin][col] = Math.floor(Math.random() * 100);
            switch (opcao) {
                case 1:
                    nova_matriz[lin][col] = matriz1[lin][col] + matriz2[lin][col];
                    break;
                case 2:
                    nova_matriz[lin][col] = matriz1[lin][col] - matriz2[lin][col];
                    break
                case 3:
                    if (lin == 0 && col == 0) {
                        k = prompt("Digite um numero")
                    }
                    matriz1[lin][col] *= k
                    matriz2[lin][col] *= k
            }
        }
    }
    switch (opcao) {
        case 1:
        case 2:
            console.log(nova_matriz)
            break;
        case 3:
        case 4:
            console.log(matriz1)
            console.log(matriz2)
    }
}

function mul_vetrial(A, B) {
    let C = new Array(A.length)
    for (let i = 0; i < C.length; i++) {
        C[i] = new Array(B[i].length);
        for (let j = 0; j < C[i].length; j++) {
            C[i][j] = 0
        }
    }
    for (let lin = 0; lin < A.length; lin++) {
        for (let col = 0; col < B[0].length; col++) {
            for (let i = 0; i < A[0].length; ++i) {
                C[lin][col] += A[lin][i] * B[i][col];
            }
        }
    }
    return C
}

function Q22_2() {
    let matriz1 = new Array(3);
    let matriz2 = new Array(3);
    for (let i = 0; i < matriz1.length; i++) {
        matriz1[i] = new Array(3);
        matriz2[i] = new Array(3);
    }
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {  
            matriz1[lin][col] = Math.floor(Math.random() * 100);
            matriz2[lin][col] = Math.floor(Math.random() * 100);
        }
    }
    let nova_matriz = mul_vetrial(matriz1, matriz2)
    console.log(matriz1);
    console.log(matriz2)
    console.log(nova_matriz)
}

function Q23_2() {
    let matriz1 = new Array(3);
    for (let i = 0; i < matriz1.length; i++) {
        matriz1[i] = new Array(3);
    }
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {  
            matriz1[lin][col] = Math.floor(Math.random() * 100);
        }
    }
    let nova_matriz = mul_vetrial(matriz1, matriz1)
    console.log(matriz1);
    console.log(nova_matriz)
}

function Q24_2() {
    let matriz1 = new Array(20);
    let produtos = []
    for (let i = 0; i < matriz1.length; i++) {
        matriz1[i] = new Array(20);
    }
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {  
            matriz1[lin][col] = Math.floor(Math.random() * 10);
        }
    }
    //Horizontal:
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {  
            if (col < 17) {
                let mul = 1
                for (let count = 0; count < 4; count++) {
                    mul *= matriz1[lin][col+count] 
                }
                produtos.push(mul)
            }
        }
    }
    //Vertical:
    for (let col = 0; col < matriz1[0].length; col++) {  
        for (let lin = 0; lin < matriz1.length; lin++) {
            if (lin < 17) {
                let mul = 1
                for (let count = 0; count < 4; count++) {
                    mul *= matriz1[lin+count][col] 
                }
                produtos.push(mul)
            }
        }
    }
    //Diagonal Principal:
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < matriz1[lin].length; col++) {  
            if (col < 17 && lin < 17) {
                let mul = 1
                for (let count = 0; count < 4; count++) {
                    mul *= matriz1[lin+count][col+count] 
                }
                produtos.push(mul)
            }
        }
    }
    //Diagonal Secundaria:
    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = matriz1[lin].length - 1; col >= 0; col--) {  
            if (col > 3 && lin < 17) {
                let mul = 1
                for (let count = 0; count < 4; count++) {
                    mul *= matriz1[lin+count][col-count] 
                }
                produtos.push(mul)
            }
        }
    }
    let max_produto = max_value(produtos)
    console.log(matriz1)
    console.log(produtos)
    console.log('Maior produto entre 4 numeros seguidos da matriz: ' + max_produto)
}

function Q25_2() {
    console.log("Bem vindo ao jogo da velha");
    let V = new Array(3)
    for (let i = 0; i < V.length; i++) {
        V[i] = new Array(3);
        for (let j = 0; j < V[i].length; j++) {
            V[i][j] = 0
        }
    }
    let gameloop = true
    let jogadores = ["Gabriel", "Roger"]
    let marcacao = ['X', 'O']   //let marcacao = [1, -1]
    let vez = Math.floor(Math.random()*2)
    let lin_possiveis = []
    let col_possiveis = []
    let vai_ganhar = false  //se o comp estiver a um movimento de ganhar ou de perder
    let vai_perder = false
    let lin_ganhadora;
    let col_ganhadora;
    let lin_perdedora;
    let col_perdedora;
    let lin_esco;
    let col_esco
    let opcao_p_ganhar = []
    let rodada = 0
    for (let lin = 0; lin < V.length; lin++) {
        for (let col = 0; col < V[0].length; col++) {
            lin_possiveis.push(lin)
            col_possiveis.push(col)
        }
    }
    while (gameloop) {
        console.log(`Vez de ${jogadores[vez]}`)
        vai_ganhar = false
        let count = 0
        let lin_possiveis_filtrado = []
        let col_possiveis_filtrado = []
        for (let i = 0; i < lin_possiveis.length; i++) {
            if (lin_possiveis[i] !== undefined) {
                lin_possiveis_filtrado.push(lin_possiveis[i]);
            }
            if (col_possiveis[i] !== undefined) {
                col_possiveis_filtrado.push(col_possiveis[i]);
            }
        }
        lin_possiveis = lin_possiveis_filtrado
        col_possiveis = col_possiveis_filtrado
        for (let linha of V) {
            console.log(linha)
        }
        do {
            errou = true
            if (vez == 0) {
                lin_esco = +prompt("Escolha uma linha")
                col_esco = +prompt("Escolha uma coluna")
            }
            else if (vai_ganhar == true){
                for (let loc_ganhador of opcao_p_ganhar) {
                    if (V[loc_ganhador[0]][loc_ganhador[1]] == 0) {
                        lin_esco = loc_ganhador[0]
                        col_esco = loc_ganhador[1]
                        opcao_p_ganhar = []
                    }
                    else {
                        vai_ganhar = false
                    }
                }
            }
            else if(vai_perder == true) {
                lin_esco = lin_perdedora
                col_esco = col_perdedora
                vai_perder = false
            }
            else {
                if (V[1][1] == 0) {
                    let chance_ir_meio = 0.75
                    let escolha = Math.random()*1
                    if (escolha < chance_ir_meio) {
                        lin_esco = 1
                        col_esco = 1
                    }
                }
                else {
                    let i_lin = parseInt(Math.random()*lin_possiveis.length)
                    let i_col = parseInt(Math.random()*col_possiveis.length)
                    lin_esco = lin_possiveis[i_lin]
                    col_esco = col_possiveis[i_col]
                }
            }
            console.log(lin_esco, col_esco)
            for (let i = 0; i < lin_possiveis.length; i++) {
                if (lin_esco == lin_possiveis[i] && col_esco == col_possiveis[i]) {
                    delete lin_possiveis[i]
                    delete col_possiveis[i]
                    V[lin_esco][col_esco] = marcacao[vez]
                    errou = false
                }
            }
            if (errou == true) {
                console.log('Voce digitou uma linha/coluna inexistente ou que já foi preenchida. Digite novamente: ')
            }
        }
        while (errou == true)
        for (let lin = 0; lin < V.length; lin++) {
            for (let col = 0; col < V[0].length; col++) {
                if (gameloop) {
                    if (V[lin][col] != 0) {
                        count++
                    }
                    if (count == 9) {
                        gameloop = false
                        console.log("Deu velha")
                    }
                }
            }
        }
        let ganhou = false
        let c = 0
        let j = 0
        //Horizontal:
        for (let lin = 0; lin < V.length; lin++) {
            let c = 0
            j = 0
            for (let col = 0; col < V.length; col++) {
                if(V[lin][col] == marcacao[vez]) {
                    c++
                }
                if (c == 3) {
                    ganhou = true
                }
                if(V[lin][col] == 'X') {
                    j++
                }
            }
            if (j == 2) {
                for (let col = 0; col < V.length; col++) {
                    if(V[lin][col] == 0) {
                        vai_perder = true
                        lin_perdedora = lin
                        col_perdedora = col
                    }
                }
            }
            if (vez == 1) {
                if (c == 2) {
                    for (let col = 0; col < V.length; col++) {
                        if(V[lin][col] == 0) {
                            vai_ganhar = true
                            lin_ganhadora = lin
                            col_ganhadora = col
                            opcao_p_ganhar.push([lin_ganhadora, col_ganhadora])
                        }
                    }
                }
            }
        }
        //Vertical:
        for (let col = 0; col < V.length; col++) {
            let c = 0  //contador de O
            j = 0      //contador de X
            for (let lin = 0; lin < V.length; lin++) {
                if(V[lin][col] == marcacao[vez]) {
                    c++
                }
                if (c == 3) {
                    ganhou = true
                }
                if(V[lin][col] == 'X') {
                    j++
                }
            }
            if (j == 2) {
                for (let lin = 0; lin < V.length; lin++) {
                    if(V[lin][col] == 0) {
                        vai_perder = true
                        lin_perdedora = lin
                        col_perdedora = col
                    }
                }
            }
            if (vez == 1) {
                if (c == 2) {
                    for (let lin = 0; lin < V.length; lin++) {
                        if(V[lin][col] == 0) {
                            vai_ganhar = true
                            lin_ganhadora = lin
                            col_ganhadora = col
                            opcao_p_ganhar.push([lin_ganhadora, col_ganhadora])
                        }
                    }
                }
            }
        }
        //Diagonal Principal:
        c = 0
        j = 0
        for (let count = 0; count < V.length; count++) {
            if(V[count][count] == marcacao[vez]) {
                c++
            }
            if (c == 3) {
                ganhou = true
            }
            if(V[count][count] == 'X') {
                j++
            }
        }
        if (j == 2) {
            for (let count = 0; count < V.length; count++) {
                if(V[count][count] == 0) {
                    vai_perder = true
                    lin_perdedora = count
                    col_perdedora = count
                }
            }
        }
        if (vez == 1) {
            if (c == 2) {
                for (let count = 0; count < V.length; count++) {
                    if(V[count][count] == 0) {
                        vai_ganhar = true
                        lin_ganhadora = count
                        col_ganhadora = count
                        opcao_p_ganhar.push([lin_ganhadora, col_ganhadora])
                    }
                }
            }
        }
        c = 0
        j = 0
        //Diagonal Secundaria:
        for (let lin = 0, col = V.length-1; col >= 0; lin++, col--) {
            if(V[lin][col] == marcacao[vez]) {
                c++
            }
            if (c == 3) {
                ganhou = true
            }
            if(V[lin][col] == 'X') {
                j++
            }
        }
        if (j == 2) {
            for (let lin = 0, col = V.length-1; col >= 0; lin++, col--) {
                if(V[lin][col] == 0) {
                    vai_perder = true
                    lin_perdedora = lin
                    col_perdedora = col
                }
            }
        }
        if (vez == 1) {
            if (c == 2) {
                for (let lin = 0, col = V.length-1; col >= 0; lin++, col--) {
                    if(V[lin][col] == 0) {
                        vai_ganhar = true
                        lin_ganhadora = lin
                        col_ganhadora = col
                        opcao_p_ganhar.push([lin_ganhadora, col_ganhadora])
                    }
                }
            }
        }
        if (ganhou == true) {
            gameloop = false
            console.log(`${jogadores[vez]} ganhou em ${rodada} rodadas`)
        }
        vez++
        if (vez == 2) {
            vez = 0
            rodada++
        }
    }
    for (let linha of V) {
        console.log(linha)
    }
}



//MATRIZ:
Q1_2()
Q2_2()
Q3_2()
Q4_2()
Q5_2()
Q6_2()
Q7_2()
Q8_2()
Q9_2()
Q10_2()
Q11_2()
Q12_2()
Q13_2()
Q14_2()
Q15_2()
Q16_2()
Q17_2()
Q18_2()
Q19_2()
Q20_2()
Q21_2()
Q22_2()
Q23_2()
Q24_2()
Q25_2()