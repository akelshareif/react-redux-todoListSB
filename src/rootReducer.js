const INITIAL_STATE = { todos: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD':
            return { todos: [...state.todos, action.payload] };
        case 'DELETE':
            return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
        default:
            return state;
    }
};

export default rootReducer;
