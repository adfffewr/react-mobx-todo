// TodoList.js
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useObserver } from 'mobx-react';
import { todoStore } from '../store';

const TodoListContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return useObserver(() => (
    <TodoListContainer>
      {todoStore.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </TodoListContainer>
  ));
};

export default TodoList;
