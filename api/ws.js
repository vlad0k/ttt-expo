export const mySocket = (path, gameId) => {
  const socket = new WebSocket(`ws://46.175.40.108:3001/${path}/${gameId}`);

  socket.onopen = function() {
    console.log("Соединение установлено. id=", gameId);
  };

  socket.onerror = function(error) {
    alert("Ошибка " + error.message);
  };

  return socket;
}
