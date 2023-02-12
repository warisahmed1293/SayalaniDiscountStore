import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputBar from '../component/InputBar'

const Signup = ({ navigation }) => {
    return (
        <>
            <View style={{ marginTop: 100 }}>
                <Text style={styles.texOne}>SAYLANI WELFARE</Text>
                <Text style={styles.textTwo}>ONLINE DISCOUNT STORE</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <InputBar Icon='person' Placeholder='Enter your email' />
                <InputBar Icon='call' Placeholder='Enter your Password' />
                <InputBar Icon='mail' Placeholder='Enter your Password' />
                <InputBar Icon='lock-closed' Placeholder='Enter your Password' />

            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.text}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', top: 20 }}>
                <Text style={{ fontSize: 18, color: '#024F9D', fontWeight: '600' }}>
                    Already have an account?
                    <Text>
                        ....
                    </Text>
                    <Text onPress={() => navigation.navigate('LoginScreen')}>
                        Login
                    </Text>
                </Text>
            </View>
        </>
    )
}

export default Signup

const styles = StyleSheet.create({
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