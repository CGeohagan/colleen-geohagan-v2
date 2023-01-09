import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
// import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Dot from './Dot';
import Nav from './Nav';
import FloralLeft from './FloralLeft';
import FloralRight from './FloralRight';

const Border = styled.div`
  border: 1px solid var(--yellow);
`;

const Initials = styled.p`
  color: var(--gold);
  font-size: 24px;
  text-align: center;
  margin: 0.2em auto;
`;

const InitialsWrapper = styled.div`
  padding-top: 5%;

  @media (max-width: 1024px) {
    padding-bottom: 8%;
  }

  @media (max-width: 768px) {
    padding-bottom: 5%;
  }
`;

const Main = styled.main`
  position: relative;
  overflow-y: scroll;
  height: 50vh;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding-left: 1.2em;

  @media (max-width: 1024px) {
    height: 60vh;
    margin-top: 1em;
    padding: 1em 1em 1em 2.1em;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    box-shadow: none;
    padding: var(--flower-padding);
    height: 70vh;
  }

  p.arrow {
    animation: arrow 2s ease-out 4;
    color: var(--gold);
    font-size: 40px;
    margin: 0;
  }

  .arrow-wrapper {
    bottom: 5%;
    cursor: pointer;
    margin: 0;
    padding: 10px;
    position: absolute;
    right: 5%;
    z-index: 1;

    @media (min-width: 768px) {
      display: none;
    }

    @media (max-width: 1024px) {
      bottom: 0;
      right: 8%;
    }
  }

  @media (min-width: 769px) {
    /* custom scrollbar */
    ::-webkit-scrollbar {
      width: 1em;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--charcoal);
      border-radius: 1em;
      border: 6px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--charcoal);
    }
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 750px;
  padding: var(--flower-padding) 0;
  width: 60%;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24%;
`;

const BottomContent = styled.div`
  align-items: flex-end;
  bottom: 7%;
  display: flex;
  height: 24%;
  position: absolute;
  width: 60%;
  max-width: 750px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Layout = ({ children, location }) => {
  const scrollRef = useRef();
  const showArrow = location.pathname === '/';

  const onArrowClick = (e) => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <GlobalStyles />
      <Border>
        <div>
          <FloralLeft />
          <Content>
            <TopContent>
              <InitialsWrapper>
                <Initials>CG</Initials>
                <Dot alignment='top' />
              </InitialsWrapper>
              <Nav />
              <Main ref={scrollRef}>
                {children}
                {showArrow && (
                  <div className='arrow-wrapper' onClick={onArrowClick}>
                    <p className='arrow'>&#8595;</p>
                  </div>
                )}
              </Main>
            </TopContent>
            <BottomContent>
              <Dot alignment='bottom' />
            </BottomContent>
          </Content>
          <FloralRight />
        </div>
      </Border>
    </>
  );
};

export default Layout;
