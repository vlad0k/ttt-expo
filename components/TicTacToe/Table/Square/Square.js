import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Square = ({handleMove, id, value, className, gameId, player, win}) => {

  return <TouchableOpacity style={styles.cell} onPress={() => handleMove(gameId, player, id, win, value)} ><Text style={styles.fig}>{value[id] ? value[id] : ''}</Text></TouchableOpacity>
}

export default Square;

const styles = StyleSheet.create({
  cell: {
    width: 92,
    height: 92,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    color: "blue",
    borderColor: "skyblue",
    fontWeight: "bold",
    margin: 2,
  },
  fig: {
    fontSize: 72,
    color: "blue",
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
