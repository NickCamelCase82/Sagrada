const Lobby = require('../classes/gameLobby');
const Rounds = require('../classes/gameRound');
const GameRound = require('../classes/gameRound');
const PlayerPatterns = require('../classes/playerPatterns');
const { getMessage, UPDATE_LOBBY, GAME_STARTED } = require('../socket/types');
const router = require('express').Router();

// const getRandomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// const randomCards = () => {
//   const num = 4 * 2;
//   const arr = [1,2,3,4,5,6,7,8,9,10,11,12];

// const arrayRandomCommonGoals = [];
// if (num > array.length) {
//   return false;
// }

// const arrayNumbers = [];
// do {
//   const randomNum = getRandomInt(0, array.length - 1);

//   if (!arrayNumbers.includes(randomNum)) {
//     arrayNumbers.push(randomNum);
//   }
// } while (arrayNumbers.length !== num);

// arrayNumbers.forEach((elem) => {
//   arrayRandomCommonGoals.push(array[elem]);
// });

// return arrayRandomCommonGoals;
// };

// router.post('/stainedGlass', (req, res) => {
//   const { numberUsers, array } = req.body;
//   const count = numberUsers * 2;

//   const arrayStainedGlass = randomCards(count, array);
//   const firstPlayer = [arrayStainedGlass[0], arrayStainedGlass[1]];
//   res.json(firstPlayer);
// });

router.post('/cube/put', (req, res) => {
  const { row, orderCell, raisedCube, activePlayer } = req.body;

  console.log(row, orderCell, raisedCube, activePlayer);
  const player = activePlayer === 'liza' ? 'dima' : 'liza';

  res.json(player);
});

router.get('/lobby/:id', (req, res) => {
  const { id } = req.params;
  const user = {
    id: req.session.user.userId,
    login: req.session.user.userLogin,
  };

  const isPlayerAdded = Lobby.addPlayer(id, user);
  const lobby = Lobby.getLobby(id);
  console.log(lobby);
  res.send(lobby);
  if (isPlayerAdded) {
    req.io.emit(`lobby_${id}`, getMessage(UPDATE_LOBBY, user.id));
  }

  // const players = Lobby.getPlayers(id).filter((player) => player.id !== user.id);

  // if (players.length > 0) {
  //   players.forEach(() => {

  //   })
  // }
  // req.io.emit()
});

router.post('/lobby/create', (req, res) => {
  console.log(req.session);
  const user = {
    id: req.session.user.userId,
    login: req.session.user.userLogin,
  };
  const lobby = Lobby.addGame(user);

  res.send(lobby);
});

router.post('/pattern/select', (req, res) => {
  const { gameId, playerId, patternId } = req.body; // 2b или 3a ...

  Rounds.setPlayerSelectedPattern(gameId, playerId, patternId);
  PlayerPatterns.addPlayer(gameId, playerId);
  const isAllPatternsSelected = Rounds.isAllPatternsSelected(gameId);
  res.send(isAllPatternsSelected);
});

router.post('/create', (req, res) => {
  const { gameId } = req.body;
  const players = Lobby.getPlayers(gameId);
  const game = GameRound.addGame(gameId, players);

  // socket message
  req.io.emit(
    `lobby_${gameId}`,
    getMessage(GAME_STARTED, null, {
      players: game.players,
      patternsForSelection: game.patternsForSelection,
    })
  );
  res.send({ success: true });
});

module.exports = router;
