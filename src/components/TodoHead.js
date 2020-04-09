// TodoHead
import React from 'react';
import styled from 'styled-components';
import { useObserver, useLocalStore } from 'mobx-react';
import { todoStore } from '../store';

const TodoHeadContainer = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #343a40;
`;

const DateBox = styled.div`
  margin-top: 4px;
  color: #868e96;
  font-size: 21px;
`;

const TasksList = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

const TodoHead = () => {
  const state = useLocalStore(() => ({
    undoneTasks: todoStore.todos.filter((todo) => !todo.done),
  }));
  // console.log(todos);
  const today = new Date();
  // console.log(today);
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return useObserver(() => (
    <>
      <TodoHeadContainer>
        <Title>{dateString}</Title>
        <DateBox>{dayName}</DateBox>
        <TasksList>할 일 {state.undoneTasks.length}개 남음</TasksList>
      </TodoHeadContainer>
    </>
  ));
};

export default TodoHead;
