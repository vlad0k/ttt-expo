import React from 'react';

import { connect } from 'react-redux';

import Square from './Square.js';

import {getTable, getGameId, getPlayer, getWin} from '../../../../redux/tictactoe-selector.js';
import {handleMove} from '../../../../redux/tictactoe-reducer.js';

const SquareContainer = (props) => {
  return (
    <Square {...props}/>
  )
}

const mapStateToProps = state => ({
    value: getTable(state),
    gameId: getGameId(state),
    player: getPlayer(state),
    win: getWin(state)
});

export default connect(mapStateToProps, {handleMove})(SquareContainer);
