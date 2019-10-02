export function addTodo(title) {
    return {
        type: '@todo/ADD_TODO',
        title,
    };
}
