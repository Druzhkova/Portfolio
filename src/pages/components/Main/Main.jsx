import React from 'react';
import styled from 'styled-components';

export function Main({ children ,...restProps}) {

  return (
    <StyledMain {...restProps}>{children}</StyledMain>
  )
}

const StyledMain = styled.main`
  padding: 4rem;
  min-height: calc(100vh - 60px);

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    padding: 3rem 2rem;
  }
`