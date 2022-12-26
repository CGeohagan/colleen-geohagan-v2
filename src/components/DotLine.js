import * as React from 'react';
import styled from 'styled-components';

const DotLineWrapper = styled.div`
  width: 100%;
`;

const DotLine = () => {
  return (
    <DotLineWrapper>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 82 4'>
        <g fill='#D7C07E' fill-rule='nonzero'>
          <circle cx='41' cy='2' r='2' />
          <circle cx='52.5' cy='1.5' r='1.5' />
          <circle cx='63' cy='1' r='1' />
          <circle cx='72.5' cy='.5' r='1' />
          <circle cx='81.5' cy='.5' r='1' />
          <circle cx='.5' cy='.5' r='1' />
          <circle cx='9.5' cy='.5' r='1' />
          <circle cx='19' cy='1' r='1' />
          <circle cx='29.5' cy='1.5' r='1.5' />
        </g>
      </svg>
    </DotLineWrapper>
  );
};

export default DotLine;
