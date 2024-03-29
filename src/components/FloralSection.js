import * as React from 'react';
import styled, { css } from 'styled-components';

const Section = styled.section`
  transition: opacity 1s ease-out, transform 0.25s ease-out;
  /* color: #3e4730; */
  // opacity: ${(props) => props.opacity};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  width: ${(props) => (props.useWideLayout === false ? '25%' : '12%')};
  transform: scale(1);
  transition: transform 0.3s ease;
  top: 0;
  bottom: 0;

  ${(props) =>
    props.alignment === 'left' &&
    css`
      transform-origin: 'left top';
      left: 0;
      padding-left: var(--flower-padding);
    `}

  ${(props) =>
    props.alignment === 'right' &&
    css`
      transform-origin: 'right top';
      right: 0;
      padding-right: var(--flower-padding);
    `}

  @media (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    transform: scale(0.95);
  }
`;

const FloralSection = ({ children, alignment, opacity, useWideLayout }) => {
  return (
    <Section alignment={alignment} useWideLayout={useWideLayout}>
      {children}
    </Section>
  );
};

export default FloralSection;
