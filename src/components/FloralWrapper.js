import * as React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 45%;

  svg {
    max-height: 100%;
    width: auto;
  }

  .stroke-1 {
    stroke: currentColor;
  }

  .fill-1 {
    fill: currentColor;
  }

  ${(props) =>
    props.alignment === 'top' &&
    css`
      align-items: flex-start;
      padding-top: var(--flower-padding);
    `}

  ${(props) =>
    props.alignment === 'bottom' &&
    css`
      align-items: flex-end;
      padding-bottom: var(--flower-padding);

      @media (max-width: 1000px) {
        opacity: 0;
      }
    `}
`;

const FloralWrapper = ({ children, alignment }) => {
  return <Wrapper alignment={alignment}>{children}</Wrapper>;
};

export default FloralWrapper;
