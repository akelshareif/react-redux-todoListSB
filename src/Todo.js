import React from 'react';
import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({ type: 'DELETE', payload: todo.id });
    };

    return (
        <>
            <li>{todo.todoText}</li>
            <button onClick={handleDelete}>X</button>
        </>
    );
};

export default Todo;
