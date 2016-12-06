import React from 'react';
import AddTodo from '../containers/AddTodo';
{/* import Footer from "./Footer"; */}
import VisibleTodoList from '../containers/VtodoList';

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        {/* <Footer /> */}
    </div>
);

export default TodoApp;
