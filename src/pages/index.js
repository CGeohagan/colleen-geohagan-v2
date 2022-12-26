import * as React from 'react';
import styled from 'styled-components';
import Colleen from '../components/Colleen';
import DotLine from '../components/DotLine';

import Layout from '../components/Layout';

const HomeWrapper = styled.div`
  .intro {
    display: flex;
    justify-content: center;
  }

  section {
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
      height: 65vh;
    }
  }

  .section-1 {
    flex-direction: column;
  }

  .section-1 p {
    font-size: 34px;
    letter-spacing: 0.4px;
    margin: 0 0 0.1em;
  }

  .colleen-wrapper {
    width: 30%;
    margin-right: 0.5em;
  }

  .dotline-wrapper {
    margin: 0.6em 0;
    width: 90px;
  }

  .intro-text p:nth-child(2) {
    margin-left: 0.5em;
  }

  .section-2 p {
    padding: 2em;
    font-size: 28px;
    line-height: 1.3;
    max-width: 700px;

    @media (max-width: 1000px) {
      padding: 2em 0.5em;
    }
  }

  .section-2 p::first-letter {
    font-size: 3.5em;
    float: left;
    line-height: 70px;
    padding-right: 8px;
  }
`;

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <HomeWrapper>
        <section className='section-1'>
          <div className='dotline-wrapper'>
            <DotLine />
          </div>
          <div className='intro'>
            <div className='colleen-wrapper'>
              <Colleen />
            </div>
            <div className='intro-text'>
              <p className='bold-italic'>Hello.</p>
              <p className='bold-italic'>I'm Colleen</p>
            </div>
          </div>
          <div className='dotline-wrapper'>
            <DotLine />
          </div>
        </section>
        <section className='section-2'>
          <p>
            I am a Front End Engineer living in Charlotte, North Carolina with
            my husband and three sleepy cats. I also love travel photography,
            and am learning to paint and play piano. If I'm not on a long walk,
            I'm usually reading a book from the library.
          </p>
        </section>
      </HomeWrapper>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
