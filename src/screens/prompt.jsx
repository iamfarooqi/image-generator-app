import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const Prompt = ({ onGenerate }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleGenerate = () => {
    onGenerate(inputValue); // Call the callback function with the input value
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="gray"
        required
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <Image
          source={require('../images/send.png')}
          style={{ tintColor: '#fff', width: 15, height: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: 'white',
  },
  button: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    padding: 8,
    borderColor: '#fff',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Prompt;
