import React from 'react';
import styled from 'styled-components';

export function Heading({ heading, textSecondary, ...restProps}) {

  return (
    <StyledHeading {...restProps}>
      {heading}
      <TextSecondary> {textSecondary}</TextSecondary>
    </StyledHeading>
  )
}

const StyledHeading = styled.h1`
  margin: 0;
  font-size: calc(36px + 3.8vw); 
  font-weight: 400;

  @media screen and (max-width: 768px) {
    line-height: 1;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 500px) {
    margin-top: 1rem;
  }

`

const TextSecondary = styled.span`
  color: #eece1a;
`