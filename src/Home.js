import './styles/App.scss';
import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
  width: 100%;
  .title {
    color: var(--bgColor)
  }
`;

function Home() {
  return (
    <StyledHome>
      <h1 className='title'>It's me Vehqa 🔫​</h1>
    </StyledHome>
  );
}

export default Home;

