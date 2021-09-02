export const initialState = {
    counter: 0,
    todos: [
        {
            id: 1,
            text: "Hello people!"
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "add": 
        {
            const newCounter = state.counter + 1
            const newTodo = {
                id: newCounter,
                text: action.text
            }
            return {
                counter: newCounter,
                todos: [...state.todos, newTodo],
              };
        }
        case "remove": 
        {
            const idx = state.todos.findIndex(t => t.id === action.id);
            const todos = Object.assign([], state.todos);
            todos.splice(idx, 1);
            return {
              counter: state.counter,
              todos: todos,
            };
          }
        default: 
        return state;
    }
}