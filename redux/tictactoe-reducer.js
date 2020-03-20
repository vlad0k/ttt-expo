import {tictactoeAPI} from '../api/api.js';
import {mySocket} from '../api/ws.js';

const START = 'START';
const MOVE = 'MOVE';
const WIN = 'WIN';
const RESTART = 'RESTART';

const initialState = {
  gameId: null,
  player: null,
  table: [],
  move: 'X',
  win: null
}

const tictactoeReducer = (state = initialState, action) => {

  switch(action.type) {
    case START: {
      return {
        ...state,
        gameId: action.gameId,
        player: action.player,
        table: [...action.table],
        move: action.move
      }
    }
    case MOVE: {
      return {
        ...state,
        table: [...action.table],
        move: action.move
      }
    }

    case WIN: {
      return {
        ...state,
        win: action.win
      }
    }

    case RESTART: {
      return {
        ...state,
        player: null,
        win: null
      }
    }

    default:
      return state;
  }
}

export default tictactoeReducer;

export const start = (gameId, player, table, move) => ({type: START, gameId, player, table, move});
export const move = (table, move) => ({type: MOVE, table, move})
export const win = (win) => ({type: WIN, win})
export const restartAC = () => ({type: RESTART})

export const gameStart = () => dispatch => {
  tictactoeAPI.getStart().then((data) => {
    dispatch(start(data.gameId, data.player, data.table, data.move));
    const tableSocket = mySocket('table', data.gameId)
    tableSocket.onmessage = (event) => {
      console.log('tabe: ', event.data);
      let res = JSON.parse(event.data)
      dispatch(move(res.table, res.move));
    }

    const winSocket = mySocket('win', data.gameId)
    winSocket.onmessage = (event) => {
      console.log(event.data);
      dispatch(win(event.data));
      // tableSocket.close(1000);
      // winSocket.close(1000);
    }
  })

}

export const handleMove = (gameId, player, cell, win, table) => dispatch => {
  if (win || table[cell]) {
    return;
  }
  tictactoeAPI.postMove(gameId, player, cell).then(data => {
    console.log('post move: ', data.move);
    dispatch(move(data.table, data.move));
  })

}

export const restart = () => dispatch => {
  console.log('restart');
  dispatch(restartAC());
};
