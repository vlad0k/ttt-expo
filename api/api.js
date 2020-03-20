import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://46.175.40.108:3001/'
});

export const tictactoeAPI = {
 getStart() {
   return instance.get('start').then(response => response.data)
 },
 postMove(instanceId, player, cell) {
   return instance.post('move', {instanceId, player, cell}).then(response => response.data);
 }
};
