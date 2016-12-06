import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { todoStore } from './store';
import TodoApp from './components/TodoApp';

function App() {
    return (
        <Provider store={todoStore} >
            <TodoApp />
        </Provider>
    );
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);

