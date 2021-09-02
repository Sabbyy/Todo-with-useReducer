import React, {useState} from 'react'
import {Text, TextInput, View, StyleSheet, Button} from 'react-native'

const AddTodo = ({add}) => {
    const [text, setText] = useState("")
    return (
        <View style={styles.View}>
            <TextInput 
            style={styles.textInputStyle}
            placeholder="Add Todo"
            onChangeText={setText}
            value={text}/>
            <Button onPress={() => {add(text); setText("")}} title="Add"/>
        </View>
    )
}
export default AddTodo;

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "red",
        borderWidth: 1,
        height: 40,
        width: 100
    },
    View: {
        padding: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})