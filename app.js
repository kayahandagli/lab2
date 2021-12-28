import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ConcertItem from './components/ConcertItem';
import AddConcert from './components/AddConcert';

export default function App() {
  const [Concerts, setConcerts] = useState([
    { text: ' metallica', key: '1' },
    { text: 'megadeth', key: '2' },
    { text: 'buckethead', key: '3' },
    { text: 'scorpions', key: '4' },
  ]);

  const pressHandler = (key) => {
    setConcertss(prevConcerts => {
      return prevConcerts.filter(concert => concert.key != key);
    });
  };

  


  const submitHandler = (text) => {
   
      setConcerts(prevConcerts => {
        return [
          { text },
          ...prevConcerts
        ];
      });
   
  };

  

  return (
    <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <AddConcert submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={concerts}
          renderItem={({ item }) => (
            <ConcertItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
