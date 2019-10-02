import { TODO_ADD } from '../actionsTypes';

const INITIAL_STATE = {
    data: [],
};

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TODO_ADD:
            return { ...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}
