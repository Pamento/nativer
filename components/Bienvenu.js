import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Recherche from './Recherche';

export default class Binevenu extends React.Component {
  render() {
    return (
      <View style={{
        // flex:1,
        alignItems: 'stretch', //'flex-start', 'flex-end', 'center', 'stretch'
        justifyContent: 'flex-start', //flex-start, flex-end, center, space-between, space-around,
        flexDirection: 'column', //'column' || 'row'
        padding: 24,
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 32,
          fontFamily: 'Roboto',
          textAlign: 'center',
          paddingBottom: 32,
        }}>Bienvenue sur Exchange.Help</Text>
        <Text style={styles.textView}>Tout les Simplonnien.ne.s déboutant.e.s font face aux même problèmes/bogues/erreurs, mais n'osent pas toujours demander ou ne trouvent pas toujour les bonnes réponses.</Text>
        <Text style={styles.textView}>Sois rassuré.e, ici tu es libre de poser la question que tu veux, une réponses fiable et de confiace te sera faite par un.e autre apprenant.e, un.e ancien.ne Simplonien.ne ou un formateur.</Text>
        <Text style={{
          color: '#fff',
          fontFamily: 'Roboto',
          textAlign: 'center',
          fontWeight: 'bold'
          }}>N'attende plus, pose ta question dés maitenant !</Text>
        <Recherche />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textView: {
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'center'
  },
});