import React, { Component } from 'react';
import {Text, StyleSheet } from 'react-native';



export default class TextExchange extends Component {
    render() {
        return (
            <Text {...this.props} style={[styles.TextExchange, this.props.style]}>{this.props.children}</Text>
        )
    }
}

const styles = StyleSheet.create({
    TextExchange: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#ffffff'
    },
});
