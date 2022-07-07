/*******************************************
    Objetivo: Calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
    Data: 06/07/2022
    Autor: Thiago Trentin
********************************************/
let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53

let somaTotal = sp + rj + mg + es + outros

let porcentagemSP = (sp/somaTotal * 100).toFixed(0)
let porcentagemRJ = (rj/somaTotal * 100).toFixed(0)
let porcentagemMG = (mg/somaTotal * 100).toFixed(0)
let porcentagemES = (es/somaTotal * 100).toFixed(0)
let porcentagemOutros = (outros/somaTotal * 100).toFixed(0)



console.log(somaTotal);
console.log(porcentagemSP + "%");
console.log(porcentagemRJ + "%");
console.log(porcentagemMG + "%");
console.log(porcentagemES + "%");
console.log(porcentagemOutros + "%");

