/*******************************************
    Objetivo: Fazer a sequencia de Fibonacci com javascript
    Data: 06/07/2022
    Autor: Thiago Trentin
********************************************/

var sequencia = [0, 1];
for (var i = 2; i < 10; i++) {
  sequencia[i] = sequencia[i - 2] + sequencia[i - 1];
}
console.log(sequencia);
