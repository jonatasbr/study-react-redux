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
      dispatch(addTodo(todos.length + 1, form.title.value));
    }
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleAddTodos}>
          <input name="title" type="text" />
          <button type="submit">adicionar tarefa</button>
        </form>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Lista de tarefas</th>
            </tr>
          </thead>
          <tbody>
            {todos ? (
              todos.map(todo => {
                return (
                  <tr key={todo.id}>
                    <td className="columnText">
                      {todo.id} - {todo.title}
                    </td>
                    <td className="columnButtons">
                      {' '}
                      <button type="button" className="btnDelete">
                        remover
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Não há</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
