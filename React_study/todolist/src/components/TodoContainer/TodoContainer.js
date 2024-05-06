import React from 'react';
import './TodoContainer.scss';

const TodoContainer = ({children}) => {
    return (
        <>
            <header>Todo List</header>
            <section className="container">
                <div className="content">{children}</div>
            </section>
        </>
    );
};

export default TodoContainer;