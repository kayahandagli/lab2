import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddConcert({ submitHandler }) {
  const [texting, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  
  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new concert...'
        onChangeText={changeHandler} 
      />
      <Button color='green' onPress={() => submitHandler(texting)} title='ADD' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
