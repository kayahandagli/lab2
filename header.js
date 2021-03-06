import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Kayahan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'gold',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
