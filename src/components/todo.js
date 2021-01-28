import React from 'react';
import axios from 'axios';
import styles from './todos.module.css';

const Todo = ({ todo, reloadTodos }) => {
    const todoCompleted = () => {
        axios.post('/api/complete-todo', {
            id: todo._id,
            text: todo.text,
            completed: !todo.completed
        }).then(reloadTodos);
    };

    return (
        <>
            <label htmlFor={`todo-toggle-${todo._id}`} className={styles.label}>Mark complete</label>
            <input
                id={`todo-toggle-${todo._id}`}
                type="checkbox"
                checked={todo.completed}
                onChange={todoCompleted}
                className={styles.toggle}
            />
            <p className={`${styles.text} ${todo.completed && styles.completed}`}>{todo.text}</p>
        </>
    );
};

export default Todo;