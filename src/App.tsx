import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoTemplate } from './components';

const GlobalStyle = createGlobalStyle`
body {
  background: #e0ecef;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <div>안녕하세요</div>
      </TodoTemplate>
    </>
  );
}

export default App;
