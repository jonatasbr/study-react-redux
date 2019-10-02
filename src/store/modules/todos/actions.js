import { TODO_ADD } from '../actionsTypes';

export function addTodo(title) {
    return {
        type: TODO_ADD,
        title,
    };
}
