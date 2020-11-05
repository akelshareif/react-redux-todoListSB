import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((store) => store.todos);

    return (
        <div>
            <NewTodoForm />

            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
