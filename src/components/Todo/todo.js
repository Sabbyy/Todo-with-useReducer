import React, {useReducer} from 'react';
import AddTodo from './AddTodo';
import SingleTodo from './SingleTodo'
import { initialState, reducer } from '../../Redux/InitialState';
import {
    Alert,
    Text, View
} from 'react-native';
const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <View>
            <AddTodo
            add={
            text => dispatch({type:"add", text: text})}
            />
            {
                state.todos.map(t => (
                    <SingleTodo
                    todo={t}
                    removeTodo={() => dispatch({type: "remove", id: t.id})}
                    />
                ))
            }
        </View>
    )
};

export default Todo