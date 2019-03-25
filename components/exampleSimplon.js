import React from 'react';
import { View, Button, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import TextExchange from '../components/TextExchange'


export default class ExchangeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: 'Exchange',
            headerLeft: '',
            headerRight: '',
        };
    };

    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#f3f3f3',
            }}>
                <ViewExchange color="red" style={[styles.oneLinePadding, {
                    backgroundColor: '#d6363e',
                    width: '100%',
                }]}>
                    <TextExchange style={{
                        textAlign: 'center',
                    }}>Hey Simplonnien.ne ! Rejoins-nous</TextExchange>
                </ViewExchange>

                <View style={[styles.oneLinePadding]}>
                    <TextExchange style={{
                        color: '#2f3239',
                        textAlign: 'center',
                    }}>vite => </TextExchange>
                </View>

                <View style={[styles.viewPresentation]}>
                    <View style={{
                        flex: 1
                    }}>
                        <TextExchange style={{
                            fontSize: 34,
                            textAlign: 'center',
                        }}>Exchange.Help  </TextExchange>
                    </View>
                    <Image style={{}} source={require('../assets/icon_menu.png')}/>
                </View>
                <View style={{

                }}>
                    <View style={{backgroundColor: '#d6363e', width: '75%',}}>
                        <TextExchange style={{fontSize: 34,textAlign: 'center'}}>Bienvenue sur Exchange.Help</TextExchange>

                        <TextExchange style={[styles.presentation]}>Tous les Simplonnien.ne.s débutant.e.s font face aux mêmes problèmes/bogues/erreurs, mais n'osent pas toujours demander ou ne trouvent pas toujours les bonnes réponses.</TextExchange>

                        <TextExchange style={[styles.presentation]}>Sois rassuré.e, ici tu es libre de poser la question que tu veux, une réponse fiable et de confiance te sera faite par un.e autre apprenant.e, un.e ancien.ne Simplonien.ne ou un formateur. </TextExchange>

                        <TextExchange style={[styles.presentation]}>N'attend plus, pose ta question dès maintenant !</TextExchange>
                    </View>
                    <View style={[styles.viewSearchBox]}>
                        <View>
                            <Image source={require('../assets/icon_pencil.png')}/>
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
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    viewSearchBox:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
    viewInput:{
        width: 150,
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
        width: 150
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
    }
});
