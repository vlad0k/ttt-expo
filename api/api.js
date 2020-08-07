import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ttt-expo-server.herokuapp.com/'
});

export const tictactoeAPI = {
 getStart() {
   return instance.get('start').then(response => response.data)
 },
 postMove(instanceId, player, cell) {
   return instance.post('move', {instanceId, player, cell}).then(response => response.data);
 }
};
