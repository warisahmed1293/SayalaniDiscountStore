import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputBar from '../component/InputBar'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Please Enter Email & Password',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    };


    const handleChange = () => {
        // if (email === 'admin@saylani.com' && pass === 'admin123') {
        navigation.navigate('AdminTab')

        // } else (
        //     showToastWithGravityAndOffset()
        // )

    }
    return (
        <>
            <View style={{ marginTop: 100 }}>
                <Text style={styles.texOne}>SAYLANI WELFARE</Text>
                <Text style={styles.textTwo}>ONLINE DISCOUNT STORE</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <InputBar Icon='mail' Placeholder='Enter your email' onChangeText={newText => setEmail(newText)} />
                <InputBar Icon='lock-closed' Placeholder='Enter your Password' onChangeText={newText => setPass(newText)} />
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#02S4F9D', left: 40, top: 10 }}>
                    Forgot Password?
                </Text>
            </View>
            <View style={{ marginTop: 100 }}>
                <TouchableOpacity style={styles.btn} onPress={handleChange}>
                    <Text style={styles.text}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', top: 20 }}>
                <Text style={{ fontSize: 18, color: '#024F9D', fontWeight: '600' }}>
                    Don’t have an account?
                    <Text>
                        ....
                    </Text>
                    <Text onPress={() => navigation.navigate('SignupScreen')}>
                        Register
                    </Text>
                </Text>
            </View>
        </>
    )
}

export default Login

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