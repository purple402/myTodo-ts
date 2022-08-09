import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background: #e0ecef;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
