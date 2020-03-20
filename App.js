import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import store from './redux/store.js';
import { Provider } from 'react-redux';

import TicTacToeContainer from './components/TicTacToe/TicTacToeContainer.js';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TicTacToeContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
    marginBottom: 30,
    padding: 8
  },
});
