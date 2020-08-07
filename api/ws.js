export const mySocket = (path, gameId) => {
  const socket = new WebSocket(`wss://ttt-expo-server.herokuapp.com/${path}/${gameId}`);

  socket.onopen = function() {
    console.log("Соединение установлено. id=", gameId);
  };

  socket.onerror = function(error) {
    alert("Ошибка " + error.message);
  };

  return socket;
}
