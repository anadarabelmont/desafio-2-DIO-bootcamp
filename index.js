let rank = "";

function calcularRank(partidasVencidas, partidasPerdidas) {
  return partidasVencidas - partidasPerdidas;
}

let resultado = calcularRank(100, 40);

if (resultado <= 10) {
  rank = "ferro";
} else if (resultado <= 20) {
  rank = "bronze";
} else if (resultado <= 50) {
  rank = "prata";
} else if (resultado <= 80) {
  rank = "ouro";
} else if (resultado <= 90) {
  rank = "diamante";
} else if (resultado <= 100) {
  rank = "lendário";
} else if (resultado >= 101) {
  rank = "imortal";
}
console.log(
  `O Herói tem de saldo de ${resultado} vitórias está no nível de ${rank}`
);
