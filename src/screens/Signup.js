import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputBar from '../component/InputBar'
import { Controller, useForm } from 'react-hook-form';

const Signup = ({ navigation }) => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('data', data)
    }

    return (
        <>
            <View style={{ marginTop: 100 }}>
                <Text style={styles.texOne}>SAYLANI WELFARE</Text>
                <Text style={styles.textTwo}>ONLINE DISCOUNT STORE</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                {/* Full Name*/}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputBar
                            Icon='person'
                            Placeholder='Full Name'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="name"
                    rules={{ required: true }}
                />
                {/* Contact */}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputBar
                            Icon='call'
                            Placeholder='Contact'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="contact"
                    rules={{ required: true }}
                />
                {/* Email */}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputBar
                            Icon='mail'
                            Placeholder='Email'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="email"
                    rules={{ required: true }}
                />
                {/* Password */}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputBar
                            Icon='lock-closed'
                            Placeholder='Password'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="password"
                    rules={{ required: true }}
                />
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
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