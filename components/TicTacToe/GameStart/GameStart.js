import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default ({gameStart, className, startButtonClassName}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    gameStart();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.startText}>
        Press the <Text style = {styles.buttonStyledText}>Start Button</Text> to start the game
      </Text>
      <View style={styles.startButton}>
        <Button color='skyblue' onPress={onSubmit} type={'submit'} title='Start' />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",


  },

  startText: {
    fontSize: 32,
    textAlign: "center",
  },
  buttonStyledText: {
    fontSize: 36,
    color: "skyblue",
    fontWeight: "bold",
  },
  startButton: {
    marginTop: 16
  },
});
