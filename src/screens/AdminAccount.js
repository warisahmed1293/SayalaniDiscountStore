import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputBar from '../component/InputBar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import Category from '../component/Category';


const AdminAccount = () => {

    const [image, setImage] = useState(null);
    const [category, setCategory] = useState()
    const [arrayItem, setArrayItem] = useState([])

    const handleAdd = () => {
        arrayItem.push(category)
    }

    console.log('Array Item--->', arrayItem, 'Category--->', category);
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
            <View>
                <View>
                    <Text>Settings</Text>
                </View>
                <View>

                </View>
                <View>
                    <InputBar />
                </View>
                <View style={{ marginTop: 30 }}>{image === null ?
                    <TouchableOpacity onPress={pickImage} style={{ width: 340, height: 110, borderRadius: 20, backgroundColor: '#b8b6b6', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Ionicons name='camera' size={40} color={'#787878'} />
                    </TouchableOpacity> : <Image source={{ uri: image }} style={{ width: 340, height: 110, borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} />
                }
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <View>
                        <InputBar Placeholder='New Category Name' onChangeText={(value) => { setCategory(value) }} />
                    </View>
                    <TouchableOpacity style={{ width: 50, borderRadius: 10, backgroundColor: '#61B846', height: 35, justifyContent: 'center', alignItems: 'center', top: 15 }} onPress={handleAdd}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>Add</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#024F9D', fontWeight: '900', fontSize: 20, marginLeft: 25, marginTop: 20 }}>
                    All Category
                </Text>
                <View>
                    {
                        arrayItem.map((item, key) => (
                            <TouchableOpacity style={{ marginVertical: 5 }}>
                                <Category item={item} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </>
    )
}

export default AdminAccount

const styles = StyleSheet.create({})