/*******************************************
    Objetivo: Guardar o valor de faturamento diário de uma distribuidora
    Data: 06/07/2022
    Autor: Thiago Trentin
********************************************/

let valorDias = [0, 1, 10, 30, 50, 20, 30, 30, 40].filter(
    (faturamento) => {
      return faturamento != 0;
    }
  );
  let maiorValor = 0;
  let menorValor = Number.MAX_SAFE_INTEGER;
  let somaValorDias = 0;

  for (var i = 0; i < valorDias.length; i++) {
    //maior valor
    maiorValor = Math.max(maiorValor, valorDias[i]);
    //menor valor
    menorValor = Math.min(menorValor, valorDias[i]);
    // quantidade de dias em que o valor de faturamento foi a cima da média
    somaValorDias += valorDias[i];
  }

  let mediaValorDias = somaValorDias / valorDias.length;
  let valoresAcimaMedia = valorDias.filter((faturamento) => {
    return faturamento > mediaValorDias;
  });
  console.log(maiorValor);
  console.log(menorValor);
  console.log(valoresAcimaMedia);