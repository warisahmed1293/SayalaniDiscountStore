import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = (props) => {
    return (
        <>
            <ScrollView>
                <View>
                    <Image />
                    <Text>
                        {props.item}
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Category

const styles = StyleSheet.create({})