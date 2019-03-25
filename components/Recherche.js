import React from 'react';
import { StyleSheet, TextInput, View, Image, Text, Button } from 'react-native';
import TextExchange from './TextExchange';

export default class Recherche extends React.Component {

  render() {
    return (
      <View style={[styles.viewSearchBox]}>
        <View>
            <Image style={[styles.viewImage]} source={require('../assets/edit.png')}/>
        </View>
        <View style={[styles.viewInput]}>
          <TextInput
            underlineColorAndroid='transparent'
            style={{
                width: '100%',
                fontFamily: 'Roboto',
            }} placeholder="Rechercher" />
        </View>
        <View style={[styles.viewButton]}>
            <TextExchange>Rechercher</TextExchange>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewSearchBox:{
      // flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 50,
      borderRadius: 10
  },
  viewInput:{
      width: '40%',
      backgroundColor: '#fff',
      height:38,
      alignItems: 'center',
      justifyContent: 'center',
  },
  viewButton: {
      paddingRight: 5,
      paddingLeft: 5,
      height:38,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#ffffff',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderWidth: 1,
      borderLeftWidth: 0,
      width: '40%'
  },
  presentation: {
      marginTop: 50,
      fontSize: 20,
      textAlign: 'center',
  },
  viewPresentation:{
      backgroundColor: '#d6363e',
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10
  },
  oneLinePadding:{
      marginTop : 10,
      marginBottom: 10,
  },
  viewImage:{
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  }
});
