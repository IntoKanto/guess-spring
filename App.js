import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [header, setHeader] = useState('Guess a number between 1-100');
  const [num, setNum] = useState(0);
  const [guessed, setGuessed] = useState();
  const [kertoja, setKertoja] = useState(1);

  useEffect (() => {
    setGuessed(Math.floor(Math.random() * 100) +1 );
  }, []);

  const arvaus = () => {
    if (num > guessed) {
      setHeader(`your guess ${num} is too high`);
      setKertoja(kertoja +1);
      setNum();
    } else if (num < guessed) {
      setHeader(`your guess ${num} is too low`)
      setKertoja(kertoja + 1);
      setNum();
    } else {
      Alert.alert(`You guessed the number in ${kertoja} guesses`)
      setGuessed(Math.floor(Math.random() * 100) + 1);
      setHeader('Guess a number between 1-100');
      setNum();
      
    }
  }

  return (
    <View style={styles.container}>
      <Text>{header}</Text>
      <TextInput style={styles.input}
      onChangeText={num => setNum(num)}
      value={num}
      />
      <Button 
      title='Make a guess'
      onPress={arvaus}
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 30

  }
});
