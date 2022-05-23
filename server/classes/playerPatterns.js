class PlayerPatterns {
  // patterns[gameId][playerId] = массив с паттерном
  patterns = {};

  defaultPattern = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ];

  addPlayer(gameId, playerId) {
    if (this.patterns[gameId]) {
      this.patterns[gameId][playerId] = this.defaultPattern;
    } else {
      this.patterns[gameId] = { [playerId]: this.defaultPattern };
    }
  }

  getPattern(gameId, playerId) {
    return this.patterns[gameId][playerId];
  }

  updatePatternCell(gameId, playerId, cell, value) {
    // cell - первый элемент массива индекс массива, второй - его значение
    // value - {color: 'blue', number: 'one'}
    this.patterns[gameId][playerId][cell[0]][cell[1]] = value;
  }
}

const patterns = new PlayerPatterns();

// console.log(patterns.addPlayer(3, 2));
// console.log(
//   patterns.updatePatternCell(3, 2, [0, 0], { color: 'blue', number: 'three' })
// );
// console.log(patterns.getPattern(3, 2));

module.exports = patterns;
