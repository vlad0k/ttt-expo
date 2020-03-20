import { connect } from 'react-redux';

import {getGameId, getPlayer, getMove, getWin} from '../../redux/tictactoe-selector.js';
import {gameStart, restart} from '../../redux/tictactoe-reducer.js';
import TicTacToe from './TicTacToe';

const mapStateToProps = state => {
  return {
    gameId: getGameId(state),
    player: getPlayer(state),
    move: getMove(state),
    win: getWin(state),
  }
}

export default connect(mapStateToProps, {
  gameStart,
  restart
})(TicTacToe);
