import React from 'react';

import { Container } from './styles';

export default function components() {
    return (
        <Container>
            <div>
                <ul>
                    <li>Todo List</li>
                </ul>
            </div>
            <div>
                <input type="text" />
                <button>adicionar</button>
            </div>
        </Container>
    );
}
