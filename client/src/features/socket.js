import { io } from 'socket.io-client';

const Socket = () => {
  // useEffect(() => {
  const socket = io('ws://localhost:3001');

  return {
    join(room, callback) {
      socket.on(room, callback);
    },
  };
  //   console.log(params);
  //   if (params.id) {
  //     console.log('CONNECT SOCKET ROOM');
  //     socket.on(`${params.id}_play_${login}`, (data) => {
  //       console.log(data);
  //     });
  //   }
  // }, []);
};

export default Socket();
