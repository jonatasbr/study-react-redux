import React from 'react';

import { Container } from './styles';

export default function components() {
    return (
        <Container>
            <div>
                <span>Lista de tarefas</span>
            </div>
            <div>
                <form>
                    <input type="text" />
                    <button>adicionar</button>
                </form>
            </div>
        </Container>
    );
}
