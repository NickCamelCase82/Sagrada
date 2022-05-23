class Lobby {
  lobby = {};

  addGame(creator, gameId) {
    console.log(this.lobby);
    const lobbyGameid =
      gameId || Math.max(0, ...Object.keys(this.lobby).map(Number)) + 1;
    console.log(lobbyGameid);
    this.lobby[lobbyGameid] = {
      players: [creator],
      creator,
      id: lobbyGameid,
    };
    return this.lobby[lobbyGameid];
  }

  getLobby(gameId) {
    return this.lobby[gameId];
  }

  getPlayers(gameId) {
    if (this.lobby[gameId]) {
      return this.lobby[gameId].players;
    }
    return null;
  }

  getCreator(gameId) {
    if (this.lobby[gameId]) {
      return this.lobby[gameId].creator;
    }
    return null;
  }

  addPlayer(gameId, player) {
    if (this.lobby[gameId]) {
      const isPlayerHave = this.lobby[gameId].players.find(
        ({ id }) => id === player.id
      );
      if (!isPlayerHave) {
        this.lobby[gameId].players.push(player);
        return true;
      }
      return false;
    }
    return false;
  }

  deletePlayer(gameId, id) {
    if (this.lobby[gameId]) {
      const player = this.lobby[gameId].players.find((elem) => elem.id === id);
      console.log(player);

      if (player) {
        this.lobby[gameId].players = this.lobby[gameId].players.filter(
          (elem) => elem.id !== player.id
        );
      }
    }
  }
}

const lobby = new Lobby();

// console.log(lobby.addGame({ id: 1, login: 'Бог' }));
// console.log(lobby.getPlayers(1));
// console.log(lobby.getCreator(1));
// console.log(lobby.addPlayer(1, { id: 2, login: 'Вася' }));
// console.log(lobby.addPlayer(1, { id: 3, login: 'Гена' }));
// console.log(lobby.getPlayers(1));
// console.log(lobby.deletePlayer(1, 3));
// console.log(lobby.getPlayers(1));

module.exports = lobby;
