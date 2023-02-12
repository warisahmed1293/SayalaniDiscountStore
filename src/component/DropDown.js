import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const DropDown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Fruit', value: 'fruit' },
        { label: 'Vegitable', value: 'vegitable' },
        { label: 'Grocery', value: 'grocery' },
        { label: 'Dry Fruit', value: 'dryFruit' },
    ]);
    return (
        <>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                disableBorderRadius={true}
                setValue={setValue}
                setItems={setItems}
                style={{
                    borderWidth: 0,
                    backgroundColor: 0,
                    width: 300,
                    alignSelf: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#D4D3D3',

                }}
            />
        </>
    )
}

export default DropDown

const styles = StyleSheet.create({})