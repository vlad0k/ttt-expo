import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Square from './Square/SquareContainer.js';

export default () => {
  return (
      <View style={styles.table}>
          <View style={styles.row}>
            <Square id={0}/>
            <Square id={1}/>
            <Square id={2}/>
          </View>
          <View style={styles.row}>
            <Square id={3}/>
            <Square id={4}/>
            <Square id={5}/>
          </View>
          <View style={styles.row}>
            <Square id={6} />
            <Square id={7}/>
            <Square id={8}/>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection:'row',
  }
});
