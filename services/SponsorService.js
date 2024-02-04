const shuffleArray = (array, cantidadAleatoria) => {
    const shuffledArray = array.slice();
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    const resultado = cantidadAleatoria
      ? shuffledArray.slice(0, cantidadAleatoria)
      : shuffledArray;
  
    return resultado;
  };

module.exports = { shuffleArray };