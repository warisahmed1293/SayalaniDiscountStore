import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputBar from '../component/InputBar'
import { useForm } from 'react-hook-form';

const Signup = ({ navigation }) => {
    const { resgister, handleSubmit } = useForm();
    const onSubmit = (d) => {
        console.log('d', d)
    }

    return (
        <>
            <View style={{ marginTop: 100 }}>
                <Text style={styles.texOne}>SAYLANI WELFARE</Text>
                <Text style={styles.textTwo}>ONLINE DISCOUNT STORE</Text>
            </View>
            <form onSubmit={handleSubmit(onSubmit)}>
                <View style={{ marginTop: 20 }}>
                    <InputBar {...register('fullName')} Icon='person' Placeholder='Full Name' />
                    <InputBar {...register('contact')} Icon='call' Placeholder='Contact' />
                    <InputBar {...register('email')} Icon='mail' Placeholder='Email' />
                    <InputBar {...register('password')} Icon='lock-closed' Placeholder='Password' />

                </View>
                <View style={{ marginTop: 50 }}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.text}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </form>

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