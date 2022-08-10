import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoTemplate, TodoHead, TodoList, TodoCreate } from './components';

const GlobalStyle = createGlobalStyle`
body {
  background: #e0ecef;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
