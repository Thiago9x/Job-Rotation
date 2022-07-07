/*******************************************
    Objetivo:  Inverta os caracteres de um string
    Data: 06/07/2022
    Autor: Thiago Trentin
********************************************/
let bomDia = "Bom dia"
let inverso = ""
for(let i=bomDia.length-1; i >= 0; i--){
    inverso += bomDia[i]
}

console.log(inverso);