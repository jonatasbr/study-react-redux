const INITIAL_STATE = {
    data: [],
};

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@todo/ADD_TODO':
            return { ...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}
