import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavbarAdmin from '../component/NavbarAdmin'
import Product from '../component/Product'
import { ProductData } from '../../Config/ProductData'

const AdminHome = () => {
    return (
        <>
            <View style={{ marginTop: 10 }}>
                <NavbarAdmin />
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#D9D9D9', marginVertical: 10 }}>
            </View>
            <ScrollView>
                <View>
                    <Text style={{ color: '#024F9D', fontSize: 20, fontWeight: '600', marginHorizontal: 40 }}>All Products</Text>
                </View>
                <View style={{ paddingBottom: 50 }}>
                    {
                        ProductData.map((item, key) => (
                            <TouchableOpacity style={{ marginVertical: 5 }}>
                                <Product name={item.Name} unit={item.Unit} price={item.price} uri={item.image} key={key} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default AdminHome

const styles = StyleSheet.create({})