import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavbarAdmin from '../component/NavbarAdmin';
import InputBar from '../component/InputBar';
import DropDown from '../component/DropDown';
import TextField from '../component/TextField';

const AddItem = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

    }
    return (
        <>
            <View style={{ marginTop: 10 }}>
                <NavbarAdmin />
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#D9D9D9', marginVertical: 10 }}>
            </View>
            <ScrollView horizontal={false}>

                <View>
                    <Text style={{ color: '#024F9D', fontSize: 20, fontWeight: '600', marginHorizontal: 40 }}>Add New Item</Text>
                </View>
                <View>
                    <View>{image === null ?
                        <TouchableOpacity onPress={pickImage} style={{ width: 340, height: 180, borderRadius: 20, backgroundColor: '#b8b6b6', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Ionicons name='camera' size={50} color={'#787878'} />
                        </TouchableOpacity> : <Image source={{ uri: image }} style={{ width: 340, height: 180, borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} />
                    }
                    </View>
                    <InputBar Placeholder='Enter Item Name' />
                    <DropDown />
                    <View>
                        <TextField Placeholder='Enter Description of Item' />
                    </View>
                    <View style={{ marginTop: -30 }}>
                        <InputBar Placeholder='Pcs / Kg / Dozen' />
                    </View>
                    <View style={{ marginTop: -30 }}>
                        <InputBar Placeholder='Rs. 1,000/-' />
                    </View>
                    <View style={{ marginTop: 50, marginBottom: 75 }}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.text}>Add Product</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default AddItem

const styles = StyleSheet.create({
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