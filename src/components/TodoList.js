import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/modules/todos/actions';

import { Container } from './styles';

export default function TodoList() {
    const todos = useSelector(state => state.todos.data);
    const dispatch = useDispatch();

    function handleAddTodos(event) {
        if (event) {
            const form = event.target;
            event.preventDefault();
            dispatch(addTodo(form.title.value));
        }
    }

    return (
        <Container>
            <div>
                <form onSubmit={handleAddTodos}>
                    <input name="title" type="text" />
                    <button type="submit">adicionar tarefa</button>
                </form>

                <ul>Lista de tarefas</ul>
                {todos
                    ? todos.map(todo => {
                          return <li key={Math.random()}>{todo}</li>;
                      })
                    : 'Não há'}
            </div>
        </Container>
    );
}
