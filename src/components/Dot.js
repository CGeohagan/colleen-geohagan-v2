import * as React from 'react';
import styled, { css } from 'styled-components';

const DotStyles = styled.div`
  background: var(--gold);
  border-radius: 100%;
  height: 15px;
  width: 15px;
  margin: ${(props) =>
    props.alignment === 'left'
      ? '0 auto 0 0'
      : props.alignment === 'right'
      ? '0 0 0 auto'
      : '0 auto'};

  ${(props) =>
    props.alignment !== 'top' &&
    css`
      @media (max-width: 1000px) {
        opacity: 0;
      }
    `}
`;

const Dot = ({ alignment }) => {
  console.log('hi colleen alignment', alignment);
  return <DotStyles alignment={alignment} />;
};

export default Dot;
