import React from 'react';
import styled from 'styled-components';
import Colleen from '../components/Colleen';
import DotLine from '../components/DotLine';

const HomeWrapper = styled.div`
  p {
    font-family: 'Cormorant Garamond', serif;
  }

  .intro {
    display: flex;
    justify-content: center;
    margin: 0.5em 0;

    @media (max-width: 768px) {
      align-items: center;
      flex-direction: column;
      margin: 1em 0;
    }
  }

  section {
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      height: calc(60vh - 2em);
    }

    @media (max-width: 768px) {
      height: 70vh;
    }
  }

  .section-1 {
    flex-direction: column;
    position: relative;

    @media (max-width: 768px) {
      margin-top: -1em;
    }
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

  .intro-text {
    @media (max-width: 768px) {
      margin-top: 1em;
      text-align: center;
    }
  }

  .intro-text p:nth-child(2) {
    margin-left: 0.5em;

    @media (max-width: 768px) {
      margin-left: unset;
    }
  }

  .section-2 p {
    padding: 2em;
    font-size: 28px;
    line-height: 1.3;
    max-width: 700px;

    @media (max-width: 768px) {
      font-size: 27px;
    }

    @media (max-width: 1024px) {
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

const IndexPage = (props) => {
  return (
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
            <p className='bold italic'>Hello.</p>
            <p className='bold italic'>I'm Colleen</p>
          </div>
        </div>
        <div className='dotline-wrapper'>
          <DotLine />
        </div>
      </section>
      <section className='section-2'>
        <p>
          I am a Front End Engineer living in Charlotte, North Carolina with my
          husband and three sleepy cats. I currently work at Vox Media. I also
          love travel photography, and am learning to paint and play piano. If
          I'm not on a long walk, I'm usually reading a book from the library.
        </p>
      </section>
    </HomeWrapper>
  );
};

export const Head = () => {
  return (
    <>
      <title>Home Page</title>
    </>
  );
};

export default IndexPage;
