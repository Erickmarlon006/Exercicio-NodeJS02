const entrada = require('prompt-sync')({sigint: true});
var diametro = entrada("Digite o diâmetro de um Círculo que queira saber o Perímetro: ");
var raio = diametro / 2;
var perimetro = 3.14 * raio * 2;
console.log("O perímetro desse círculo é de " + perimetro);
