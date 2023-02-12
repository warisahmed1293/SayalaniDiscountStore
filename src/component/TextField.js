import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TextField(props) {
    return (
        <View style={styles.main}>
            <Text style={styles.formText}>
                {props.Title}
            </Text>
            <View style={styles.searchSection}>
                <TextInput
                    multiline={true}
                    numberOfLines={3}
                    style={styles.input}
                    placeholder={props.Placeholder}
                    underlineColorAndroid="transparent"
                    defaultValue={props.defaultValue}
                    onChangeText={props.onChangeText}

                />
                <Ionicons style={styles.searchIcon} name={props.Icon} size={20} color="#595858" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formText: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '500'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D4D3D3'
    },
    searchIcon: {
        paddingHorizontal: 20,
    },
    input: {
        width: 250,
        height: 75,
        textAlignVertical: 'top'
    },
})