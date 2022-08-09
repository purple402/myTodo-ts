import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoTemplate, TodoHead, TodoList } from './components';

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
      </TodoTemplate>
    </>
  );
}

export default App;
