import { TODO_ADD } from '../actionsTypes';

const INITIAL_STATE = {
  data: [
    { id: 1, title: 'NodeJs' },
    { id: 2, title: 'ReactJS' },
    { id: 3, title: 'React Native' },
  ],
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODO_ADD: {
      const { id, title } = action;
      return { ...state, data: [...state.data, { id, title }] };
    }
    default:
      return state;
  }
}
