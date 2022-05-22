class Rounds {
  gameRounds = {};

  // setRounds(gameId) {
  //   this.gameRounds[gameId].rounds = [];
  // }

  getRound(gameId) {
    if (this.gameRounds[gameId]) {
      return this.gameRounds[gameId].rounds.length + 1;
    }
    return null;
  }

  addRound(gameId, cube) {
    this.gameRounds[gameId].rounds.push(cube);
  }

  changeDiceInRound(gameId, round, cube) {
    if (this.gameRounds[gameId].rounds[round - 1]) {
      this.gameRounds[gameId].rounds[round - 1] = cube;
    } else {
      return null;
    }
  }

  setReserve(gameId, array) {
    if (this.gameRounds[gameId]) {
      this.gameRounds[gameId].reserve = array;
    } else {
      return null;
    }
  }

  removeFromReserve(gameId, cube) {
    if (this.gameRounds[gameId].reserve.length) {
      const needIndex = this.gameRounds[gameId].reserve.findIndex(
        (elem) => cube.color === elem.color && cube.number === elem.number
      );

      this.gameRounds[gameId].reserve = this.gameRounds[gameId].reserve.filter(
        (_, index) => index !== needIndex
      );
    } else {
      return null;
    }
  }

  addGame(gameId) {
    this.gameRounds[gameId] = {
      cubes: [
        { color: 'blue', count: 18 },
        { color: 'green', count: 18 },
        { color: 'purple', count: 18 },
        { color: 'red', count: 18 },
        { color: 'yellow', count: 18 },
      ],
      rounds: [],
      reserve: null,
    };
  }

  static randomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  static randomArrayElement(min, max, arrayAvailableCubes) {
    return arrayAvailableCubes[
      Math.floor(Math.random() * (max - min + 1)) + min
    ];
  }

  static numberOfGivenCubes(numberPlayers) {
    switch (numberPlayers) {
      case 1:
        return 4;
      case 2:
        return 5;
      case 3:
        return 7;
      case 4:
        return 9;
      default:
        return false;
    }
  }

  giveArrayAvailableCubes(gameId) {
    return this.gameRounds[gameId].cubes
      .map((cubes) =>
        new Array(cubes.count).fill('elem').map(() => {
          const number = Rounds.randomDiceNumber();
          return { color: cubes.color, number };
        })
      )
      .flat();
  }

  removeRolledCubes(cubes, gameId) {
    cubes.forEach((cube) => {
      this.gameRounds[gameId].cubes = this.gameRounds[gameId].cubes.map(
        (elem) => {
          if (elem.color === cube.color) {
            return {
              ...elem,
              count: elem.count - 1,
            };
          }
          return elem;
        }
      );
    });
  }

  rollTheDice(gameId, numberPlayers) {
    const numberOfCubesNeeded = Rounds.numberOfGivenCubes(numberPlayers);
    const arrayAvailableCubes = this.giveArrayAvailableCubes(gameId);
    const cubes = [];
    while (numberOfCubesNeeded) {
      cubes.push(
        Rounds.randomArrayElement(
          0,
          arrayAvailableCubes - 1,
          arrayAvailableCubes
        )
      );
    }

    this.removeRolledCubes(cubes, gameId);
    return cubes;
  }
}

const rounds = new Rounds();
// console.log(rounds.addGame(45))
// console.log(rounds.addRound(45, { color: 'red', number: 'two' }))
// console.log(rounds.gameRounds[45])
// console.log(rounds.getRound(45))
// console.log(rounds.changeDiceInRound(45, 1, { color: 'yellow', number: 'six' }))
// console.log(rounds.gameRounds[45])
// console.log(rounds.setReserve(45, [{ color: 'red', number: 'two' },{color: 'green', number: 'two' },{ color: 'red', number: 'two' },{ color: 'red', number: 'two' },{ color: 'red', number: 'two' }]))
// console.log(rounds.gameRounds[45])
// console.log(rounds.removeFromReserve(45, {color: 'green', number: 'two'}))
// console.log(rounds.gameRounds[45])
// console.log(Rounds.numberOfGivenCubes(2))
// console.log(rounds.giveArrayAvailableCubes(45))
// console.log(rounds.rollTheDice(45, 2))
module.exports = rounds;
