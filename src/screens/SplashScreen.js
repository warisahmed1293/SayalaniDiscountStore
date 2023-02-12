import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from '../component/Button'

const SplashScreen = ({ navigation }) => {
    return (
        <View style={{ marginTop: 100 }}>
            <Image source={require('../../assets/Logo.png')} style={styles.mainImage} />
            <View>
                <Text style={styles.texOne}>SAYLANI WELFARE</Text>
                <Text style={styles.textTwo}>ONLINE DISCOUNT STORE</Text>
            </View>
            <View style={{ marginTop: 200 }}  >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.text}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainImage: {
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center'

    },
    texOne: {
        fontSize: 35,
        letterSpacing: 5,
        fontWeight: '900',
        color: '#61B846',
        alignSelf: 'center'
    },
    textTwo: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#024F9D',
        alignSelf: 'center',
        marginTop: 10
    },
    btn: {
        width: 200,
        height: 55,
        backgroundColor: '#61B846',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: '900'
    }
})