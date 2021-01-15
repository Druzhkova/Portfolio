import React from 'react';
import styled from 'styled-components';

export function Title({children, ...restProps}) {
  return (
    <StyledTitle  {...restProps}>{children}</StyledTitle>
  )
}

const StyledTitle = styled.h2`
  margin: 0;
  font-size: calc(14px + 0.7vw); 
  font-weight: 400;
  margin-bottom: 2rem;
  padding: 0.2rem 1rem;
  background: rgba(73, 73, 73, 0.5); 
`