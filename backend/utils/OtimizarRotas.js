const OtimizarRotas = (clientes) => {
    // Função para calcular a distância euclidiana entre dois pontos
    const calcularDistancia = (ponto1, ponto2) => {
      const deltaX = ponto1.coordenadaX - ponto2.coordenadaX;
      const deltaY = ponto1.coordenadaY - ponto2.coordenadaY;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };
  
    // Função para calcular a distância total de uma rota
    const calcularDistanciaTotal = (rota) => {
      let distanciaTotal = 0;
      for (let i = 1; i < rota.length; i++) {
        distanciaTotal += calcularDistancia(rota[i - 1], rota[i]);
      }
      return distanciaTotal;
    };
  
    // Gere todas as permutações possíveis dos clientes
    const permutacoes = (arr) => {
      const result = [];
      const gerarPermutacoes = (arr, atual = []) => {
        if (arr.length === 0) {
          result.push([...atual]);
          return;
        }
        for (let i = 0; i < arr.length; i++) {
          const restante = arr.filter((_, index) => index !== i);
          gerarPermutacoes(restante, [...atual, arr[i]]);
        }
      };
      gerarPermutacoes(arr);
      return result;
    };
  
    // Encontre a rota com a menor distância total
    let melhorRota = [];
    let menorDistancia = Number.MAX_VALUE;
  
    const todasRotas = permutacoes(clientes);
  
    todasRotas.forEach((rota) => {
      const distanciaAtual = calcularDistanciaTotal(rota);
      if (distanciaAtual < menorDistancia) {
        melhorRota = rota;
        menorDistancia = distanciaAtual;
      }
    });
  
    return melhorRota;
  };
  
  module.exports = OtimizarRotas;
  