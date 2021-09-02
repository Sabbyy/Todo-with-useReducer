import React, { useState } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Button,
} from 'react-native'

const SingleTodo = ({todo, removeTodo}) => {
    const [status, setStatus] = useState(false)
    return ( 
        <View style={styles.rootView}>
            <Button onPress={() => removeTodo()} style={styles.removeButton} title="Remove"/>
            <Text style = {{textDecorationLine: status ? "line-through": null, color: "green"}}> 
               {todo.text}
            </Text>
            <Button onPress={() => setStatus(true)} style={styles.doneButton} title="Done"/>
        </View>
    )
}

export default SingleTodo;

const styles = StyleSheet.create({
    rootView: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    todoText: {
        color: 'green'
    },
    removeButton: {
        color: 'red'
    },
    doneButton: {
        color: 'green'
    }
})