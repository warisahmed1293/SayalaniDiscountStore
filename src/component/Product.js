import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = (props) => {
    const { price, name, unit, uri } = props
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={uri} style={{ width: 100, height: 60, resizeMode: 'contain' }} />
                <View>
                    <Text style={{ fontSize: 18, color: '#61B846', fontWeight: '600' }}>{name}</Text>
                    <Text style={{ fontSize: 17, color: '#BFBCBC' }}>{unit}</Text>
                </View>
            </View>
            <Text>Rs.{price}/-</Text>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#61B846',
        borderRadius: 15,
        padding: 10,
        marginTop: 10
    }
})