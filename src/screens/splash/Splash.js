import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <>
                <StatusBar translucent={true} hidden />
                <Image source={require('../../assets/images/friends_main.jpg')} style={styles.imgBackground} resizeMode='cover' />
                <View style={styles.container}>
                    <Text style={styles.title}>Find{'\n'} Your{'\n'} Best{"\n"} Friend!</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        width: '100%'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.7
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})