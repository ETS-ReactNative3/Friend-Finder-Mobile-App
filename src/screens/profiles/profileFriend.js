import React, { Component } from 'react'
import { View, Image, StatusBar, StyleSheet } from 'react-native'
import { Thumbnail, Button, Icon, Text } from 'native-base'

export class ProfileFriends extends Component {
    render() {
        return (
            <View style={styles.root}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <Image source={require('../../assets/images/friends_main.jpg')} resizeMode="stretch" style={styles.imgBackground} />

                <Thumbnail source={{ uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565841345/w4erugmcy0csw2cvjmx7.jpg' }} style={styles.avatar} />
                <View style={styles.profileData}>
                    <Text style={styles.txtFullname}>Nathalia Gabryel</Text>
                    <Text style={styles.txtData}>nata@gmail.com</Text>
                    <Text style={styles.txtData}>Like: 87</Text>
                </View>
                <Button style={styles.btnLike}>
                    <Text>Like  <Icon name="heart" type="Ionicons" style={styles.iconStyle} /></Text>
                </Button>
            </View>
        )
    }
}

export default ProfileFriends

const styles = StyleSheet.create({
    iconStyle: {
        color: 'white',
        fontSize: 15,
    },
    btnLike: {
        backgroundColor: 'red'
    },
    txtData: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    txtFullname: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24
    },
    profileData: {
        marginVertical: 20
    },
    avatar: {
        borderColor: 'white',
        borderWidth: 2,
        width: 90,
        height: 90,
        borderRadius: 100 / 2
    },
    root: {
        flex: 1,
        backgroundColor: 'black',
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.7
    }
})