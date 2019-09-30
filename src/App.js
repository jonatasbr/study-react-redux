import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/global';

import TodoList from './components/TodoList';

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <TodoList />
        </Provider>
    );
}

export default App;
