import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Menu from './components/Menu';
import Bienvenue from './components/Bienvenu';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <View>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          paddingTop: 40,
          paddingBottom: 16,
        }}>Hey Simplonien.ne ! Rejoins-nous</Text>
      </View>
      <View>
        <Text style={{
          paddingTop: 16,
          paddingBottom: 16,
          textAlign: 'center',
          backgroundColor: '#f3f3f3',
        }}>vite =></Text>
      </View>
        <Menu />
        <Bienvenue />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    color: '#fff',
    backgroundColor: '#d6363e',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
