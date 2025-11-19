// VARIÁVEIS GLOBAIS
let p1 = document.getElementById('result');
let p2 = document.getElementById('details');
let palavraInformada = document.getElementById('palavra').value;
let quantidadeDeLetras = palavra.length;

// RETORNANDO QUANTIDADE DE LETRAS
function retornaQuantDeLetras(palavra) {
   let semEspacos = palavra.replace(/ /g, ""); 
   p2.innerHTML += (`<br>Quantidade de Letras: ${semEspacos.length}`);
}

// RETORNANDO QUANTIDADE DE VOGAIS E CONSOANTES
function quantidadeDeVogaisEConsoantes(palavra) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let quantVogais = 0;
    let quantConsoantes = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            quantVogais += 1;
        }
        else {
            quantConsoantes += 1;
        }
    }

    p2.innerHTML += (`<br><br>Quantidade de Vogais: ${quantVogais}<br>Quantidade de Consoantes: ${quantConsoantes}`);
    
    // RETORNANDO PORCENTAGEM DE VOGAIS E CONSOANTES
    let quantidadeDeLetras = palavra.length;
    let porcentagemDeVogais =  quantVogais * 100 / quantidadeDeLetras;
    let porcentagemDeConsoantes =  quantConsoantes * 100 / quantidadeDeLetras;

    p2.innerHTML += (`<br><br>Porcentagem de vogais: ${porcentagemDeVogais.toFixed(2)}%`);
    p2.innerHTML +=(`<br>Porcentagem de consoantes: ${porcentagemDeConsoantes.toFixed(2)}%`);


    if (quantVogais < 3 && !palavra.includes(" ")) {
        p2.innerHTML += (`<br><br>Palavra muito curta.`);
    }
    else if (quantVogais > 3 && !palavra.includes("")) {
        p2.innerHTML += (`<br><br>Palavra com muitas vogais.`);
    }
    else if (quantVogais < 3 && palavra.includes(" ")) {
        p2.innerHTML += (`<br><br>Frase muito curta.`);
    }
    else {
        p2.innerHTML += (`<br><br>Frase com muitas vogais.`);
    }
}

// VERIFICANDO SE A PALAVRA É UM PALINDROMO OU NÃO?
function verificacaoPalindromo(palavra) {

    palavra = palavra.toLowerCase()

    let palavraNormal = [];
    let palavraInvertida = [];

    
    for (let i = 0; i < palavra.length; i++) {
        palavraNormal.push(palavra[i]);
    }
    
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida.push(palavra[i]);
    }
    
    let palavraNormalString = palavraNormal.join('');
    let palavraInvertidaString = palavraInvertida.join('');
    
    let frase = palavraNormalString;
    let fraseInvertida = palavraInvertidaString;

    palavraNormalString = palavraNormalString.replace(/ /g, "");
    palavraInvertidaString = palavraInvertidaString.replace(/ /g, "");

    // VALIDAÇÕES PARA SABER SE É UMA PALAVRA OU UMA FRASE.
    if (palavraNormalString === palavraInvertidaString && !frase.includes(" ")) {
        p1.innerHTML = (`A palavra <strong>"${palavraNormalString}"</strong> é um Palindromo! ✅`);
        p2.innerHTML += (`<br><br>Palavra Normal: ${palavraNormalString}`);
        p2.innerHTML += (`<br>Palavra Invertida: ${palavraInvertidaString}`);
    }
    else if (palavraNormalString !== palavraInvertidaString && !frase.includes(" ")) {
        p1.innerHTML = (`A palavra <strong>"${palavraNormalString}"</strong> não é um Palindromo!❌`);
        p2.innerHTML += (`<br><br>Palavra Normal: ${palavraNormalString}`);
        p2.innerHTML += (`<br>Palavra Invertida: ${palavraInvertidaString}`);
    }
    else if (palavraNormalString === palavraInvertidaString && frase.includes(" ")) {
        p1.innerHTML = (`A frase <strong>"${frase}"</strong> é um Palindromo!✅`);
        p2.innerHTML += (`<br><br>Frase: ${frase}`)
        p2.innerHTML += (`<br>Frase Invertida: ${fraseInvertida}`)
    }
    else {
        p1.innerHTML = (`A frase <strong>"${frase}"</strong> não é um Palindromo!❌`);
        p2.innerHTML += (`<br>Frase: ${frase}`)
        p2.innerHTML += (`<br>Frase Invertida: ${fraseInvertida}`)
    }
};

// Mostrando a palavra informada pelo Usuário
document.getElementById('btn-verificar').addEventListener('click', function(event) { 
    event.preventDefault();
    
    let palavra = document.getElementById('palavra').value;
    let resultGroup = document.getElementById('result-group');

    let numero = Number(palavra);

    if (palavra === "") {
        alert("Por favor, preencha o campo em branco.");
    }   
    else if (palavra == numero) {
        alert("[ERRO] Não são aceito números, apenas letras.");
    }
    else if (/[´`^~¨](?![a-zA-Z\u00C0-\u00FF])/g.test(palavra)) {
        alert("[ERRO] Não são aceitos caracteres acentuados ou especiais!");
    }
    else {
        resultGroup.style.display = "block";
        p2.innerHTML = ""
        retornaQuantDeLetras(palavra);
        quantidadeDeVogaisEConsoantes(palavra);
        verificacaoPalindromo(palavra);
    }
});

// Ligando a tecla Enter ao botão Verificar.
document.getElementById('palavra').addEventListener('keydown', function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('btn-verificar').click();
    }
});