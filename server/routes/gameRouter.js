const router = require('express').Router();

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomCards = (num, array) => {
  const arrayRandomCommonGoals = [];
  if (num > array.length) {
    return false;
  }

  const arrayNumbers = [];
  do {
    const randomNum = getRandomInt(0, array.length - 1);

    if (!arrayNumbers.includes(randomNum)) {
      arrayNumbers.push(randomNum);
    }
  } while (arrayNumbers.length !== num);

  arrayNumbers.forEach((elem) => {
    arrayRandomCommonGoals.push(array[elem]);
  });

  return arrayRandomCommonGoals;
};

router.post('/stainedGlass', (req, res) => {
  const { numberUsers, array } = req.body;
  const count = numberUsers * 2;

  const arrayStainedGlass = randomCards(count, array);
  const firstPlayer = [arrayStainedGlass[0], arrayStainedGlass[1]];
  res.json(firstPlayer);
});

router.post('/cube/put', (req, res) => {
  const { row, orderCell, raisedCube, activePlayer } = req.body;

  console.log(row, orderCell, raisedCube, activePlayer);
  const player = activePlayer === 'liza' ? 'dima' : 'liza';

  res.json(player);
});

module.exports = router;
