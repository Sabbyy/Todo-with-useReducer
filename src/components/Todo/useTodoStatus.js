import React, {useReducer} from "react";
import { initialState, reducer } from "../../Redux/InitialState";
export const useTodoStatus = ({ id }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const todos = state.todos
  const found = todos.find((todo) => todo.id === id);
  if (found === undefined) return null;
  return found.completed;
};