//definindo as variaveis,
let nomeDoHeroi = "Nome Escolhido";
let xpdoHeroi = "Quantidade de XP";
let raquedoHeroi = xpdoHeroi;

if (raquedoHeroi <= 999) {
    xpdoHeroi = "Unranqued"   //adicionei essa opção, "haha". Espero que goste
  } else if (raquedoHeroi <=1000) {
    xpdoHeroi = "Ferro"
  } else if (raquedoHeroi <= 2000) {
    xpdoHeroi = "Bronze"
  } else if (raquedoHeroi <= 6000) {
    xpdoHeroi = "Prata"
  } else if (raquedoHeroi <= 7000) {
    xpdoHeroi = "Ouro"
  } else if (raquedoHeroi <= 8000) {
    xpdoHeroi = "Platina"
  } else if (raquedoHeroi <= 9000) {
    xpdoHeroi = "Ascendente"
  } else if (raquedoHeroi <= 10000) {
    xpdoHeroi = "Imortal"
  } else if (raquedoHeroi >= 10001) {
    xpdoHeroi = "Radiante"
  }

  console.log("O nome do Heroi é: " + nomeDoHeroi + ". Seu nivel é: "+ xpdoHeroi)