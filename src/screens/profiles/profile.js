import React, { Component } from 'react'
import { View, Image, StatusBar, StyleSheet } from 'react-native'
import { Thumbnail, Button, Icon, Text } from 'native-base'

export class Profile extends Component {
    render() {
        return (
            <View style={styles.root}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <Image source={require('../../assets/images/friends_main.jpg')} resizeMode="stretch" style={styles.imgBackground} />

                <Thumbnail source={{ uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565670582/qavsu8pjpmzl2qowt4rv.jpg' }} style={styles.avatar} />
                <View style={styles.profileData}>
                    <Text style={styles.txtFullname}>Falih Naufal</Text>
                    <Text style={styles.txtEmail}>falihnaufal1700@gmail.com</Text>
                </View>
                <Button style={styles.btnEdit}>
                    <Text>Edit Profile</Text><Icon name="ios-create" type="Ionicons" style={styles.iconStyle} />
                </Button>
            </View>
        )
    }
}

export default Profile

const styles = StyleSheet.create({
    iconStyle: {
        color: 'white',
        fontSize: 20,
    },
    btnEdit: {
        backgroundColor: '#666666'
    },
    txtEmail: {
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