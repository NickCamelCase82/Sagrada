const UPDATE_LOBBY = 'UPDATE_LOBBY';
const GAME_STARTED = 'GAME_STARTED';

const getMessage = (type, initiator, data = null) => ({
  type,
  initiator,
  data,
});

module.exports = {
  getMessage,
  UPDATE_LOBBY,
  GAME_STARTED,
};
