import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,

    };
  }

  toggleShow = () => {
    this.setState(state => ({ isHidden: !state.isHidden }));
  };

  render() {
    return (
      <View style={{
        backgroundColor: '#2f3239',
      }}>
        <View style={{
          display:'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          textAlign: 'center',
          paddingTop: 16,
          paddingBottom: 16,
        }}>
        <Text style={{
          fontSize: 32,
          color: '#d6353c',
        }}>Exchange
        <Text style={{
          fontSize: 32,
          color: '#fff'
          }}>.Help</Text>
          </Text>
          <TouchableOpacity onPress={this.toggleShow}>
            <Image
              style={styles.button}
              source={require('../assets/menu.png')}
            />
          </TouchableOpacity>
        </View>
          <Collapsible collapsed={this.state.isHidden}>
            <View style={{
              padding: 8,
            }}>
              <Text style={styles.textView}
                onPress={() => LinkingIOS.openURL('https://127.0.0.0.1:19000')}>Acceuil</Text>
              <Text style={styles.textView}
                onPress={() => LinkingIOS.openURL('https://127.0.0.0.1:19000')}>Poser une question</Text>
              <Text style={styles.textView}
                onPress={() => LinkingIOS.openURL('https://127.0.0.0.1:19000')}>Donner une réponse</Text>
              <Text style={styles.textView}
                onPress={() => LinkingIOS.openURL('https://127.0.0.0.1:19000')}>Foire aux questions</Text>
              <Text style={styles.textView}
                onPress={() => LinkingIOS.openURL('https://127.0.0.0.1:19000')}>Connexion</Text>
            </View>
          </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textView: {
    color: '#ccc',
    paddingTop: 8,
    paddingBottom: 24,
    paddingLeft: 16,
  },
});