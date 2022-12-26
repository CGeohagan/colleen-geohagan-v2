import * as React from 'react';
import { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
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

  @media (max-width: 1000px) {
    padding-bottom: 8%;
  }

  @media (max-width: 727px) {
    padding-bottom: 5%;
  }
`;

const Main = styled.main`
  height: 50vh;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  /* height: 52%; */
  /* padding: 0.5em; */
  overflow: scroll;

  @media (max-width: 1000px) {
    box-shadow: none;
    padding: var(--flower-padding);
  }

  @media (max-width: 1000px) {
    height: 65vh;
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

  @media screen and (max-width: 1000px) {
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
  /* margin-top: 2em; */
  height: 24%;
  position: absolute;
  width: 60%;
  max-width: 750px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Layout = ({ children }) => {
  // const path = getPath(children);
  // const [transitionClass, setTransitionClass] = useState('no-transition');

  // // Only want no transition on initial load
  // useEffect(() => {
  //   setTransitionClass('');
  // }, []);

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
              <Main>{children}</Main>
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

function getPath(children) {
  const path = children.props.location.pathname || '';
  return path.replace(/\//g, '');
}

export default Layout;
