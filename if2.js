var peg = require("pegjs");
var read = require("readline");
var oracion = "oracion = sujeto vacio auxiliar vacio verbo gerundio vacio objeto/sujeto vacio auxiliar vacio verbo vacio objeto;";
var sujeto = "sujeto = 'i'/ 'you'/ 'she' /'he' / 'we' /'they';";
var auxiliar = "auxiliar = 'am'/'are';";
var verbo = "verbo = 'eat'/ 'sleep'/ 'study'/ 'work';";
var vacio = "vacio = ' ';";
var gerundio = "gerundio = 'ing';"
var objeto = 'objeto = "eggs";';
var sentenciaU=oracion+objeto+sujeto+verbo+vacio+auxiliar+gerundio;
var parser = peg.generate(sentenciaU);
var cadena;

//console.log('\033[2J');

var interface = read.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question("Escriba su sentencia\n\n\n",function (cadena) {
  try {
    parser.parse(cadena);
    console.log("Está bien.");
  } catch (e) {
    console.log("Está mal.");
  }
  interface.close();
});
