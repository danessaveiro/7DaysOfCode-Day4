alert("Hoje é o quarto dia de desafio e nós vamos fazer uma brincadeira. Vamos brincar de adivinhação?");

alert("Tente adivinhar o número que eu pensei. Você tem 3 tentativas.");

const numeroEscolhido =  Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for (let n=0; n<3; n++) {
        chute = prompt("Digite um número de 0 a 10.")
    if(chute == numeroEscolhido) {
        alert(`Parabéns, você acertou! O número era ${numeroEscolhido}.`);
        acertou = true;
        break;
    } 
    alert("Você errou, tente novamente.")
}

if(!acertou){
    alert(`Infelizmente você não acertou, o número era ${numeroEscolhido}!`)
}

alert("Obrigada por estar comigo nessa jornada!")