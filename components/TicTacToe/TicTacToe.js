import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import GameStart from './GameStart/GameStart.js';
import Table from './Table/Table.js';

const TicTacToe = ({gameId, player, move, win, gameStart, restart}) => {

  return(
    <View style={styles.game}>
      {!player && <GameStart gameStart={gameStart}/>}

      {player && <Button title="Restart" onPress={restart}/>}

      {player && <View style={styles.header}>
        <View><Text style={styles.player}>Player: {player}</Text></View>
        <View ><Text style={styles.gameId}>Game ID: {gameId}</Text></View>
      </View>}

      {player && <Table />}

      <View style={styles.winWrapper}>
        {!win && player && <Text style={styles.nowMove}>
          Move: <Text style={move === player ? styles.nowMoveGreen : styles.nowMoveRed}>{move}</Text>
        </Text>}
      </View>

        {win && (win !== 'Draw' ? <View ><Text style={win === player ? styles.win : styles.loose}>Winner is: {win}</Text></View> : <View><Text style={styles.draw}>{win}</Text></View>)}

    </View>
  )
};

export default TicTacToe;

const styles = StyleSheet.create({
  game: {

  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  player: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  gameId: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  nowMove: {
    fontSize: 24,
    marginBottom: 60,

  },
  nowMoveGreen: {
    color: 'green',
    fontWeight: 'bold'
  },
  nowMoveRed: {
    color: 'red',
    fontWeight: 'bold'
  },
  win: {
    textAlign: 'center',
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold'
  },
  loose: {
    textAlign: 'center',
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold'
  },
  draw: {
    textAlign: 'center',
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold'
  }
})
