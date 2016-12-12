import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { todoStore } from './store';
import TodoApp from './containers/TodoApp';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDom.render(
	<Provider store={todoStore}>
		<TodoApp />
	</Provider>,
	app
);
