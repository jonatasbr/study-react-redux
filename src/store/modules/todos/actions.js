import { TODO_ADD } from '../actionsTypes';

export function addTodo(id, title) {
    return {
        type: TODO_ADD,
        id,
        title,
    };
}
