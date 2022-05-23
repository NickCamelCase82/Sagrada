class Lobby {
  lobby = {};

  addGame(gameId, creator) {
    this.lobby[gameId] = {
      players: [creator],
      creator,
    };
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

  addPlayers(gameId, player) {
    if (this.lobby[gameId]) {
      this.lobby[gameId].players.push(player);
    }
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

console.log(lobby.addGame(2, { id: 1, login: 'Бог' }));
console.log(lobby.getPlayers(2));
console.log(lobby.getCreator(2));
console.log(lobby.addPlayers(2, { id: 2, login: 'Вася' }));
console.log(lobby.addPlayers(2, { id: 3, login: 'Гена' }));
console.log(lobby.getPlayers(2));
console.log(lobby.deletePlayer(2, 3));
console.log(lobby.getPlayers(2));

module.exports = Lobby;
