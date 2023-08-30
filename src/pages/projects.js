import * as React from 'react';
import styled from 'styled-components';

const ProjectList = styled.div`
  ul {
    list-style: none;
    margin: 1em 0;
    padding-left: 2.5em;
    text-align: left;
    text-overflow: ellipsis;
  }

  li {
    margin-bottom: 0.2em;
  }

  a {
    /* font-family: 'Raleway', sans-serif; */
    font-size: 15px;
    font-size: 16px;
    letter-spacing: 0.3px;
  }
`;

const ProjectHeader = styled.div`
  margin: 2em 0 1.4em;
  text-align: center;

  h2 {
    margin: 4px auto;
  }

  p {
    font-size: 11px;
    margin-bottom: 2px;
  }
`;

const ProjectsPage = (props) => {
  return (
    <>
      <ProjectHeader>
        <p className='italic'>A few of my favorite</p>
        <h2>Personal Projects</h2>
      </ProjectHeader>
      <ProjectList>
        <ul>
          <li>
            <a
              href='https://delightedcalligraphy.com/'
              target='_blank'
              rel='noreferrer'
            >
              I. Delighted Calligraphy: A Wordpress website for a talented
              calligrapher
            </a>
          </li>
          <li>
            <a href='https://selectlinx.com/' target='_blank' rel='noreferrer'>
              II. SelectLinx: A Wordpress website for a small talent management
              company
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/cgeohagan/full/bxxVRp'
              target='_blank'
              rel='noreferrer'
            >
              III. Harry Potter Marauder's Map
            </a>
          </li>
          <li>
            <a
              href='https://www.tbonesshipyard.com/'
              target='_blank'
              rel='noreferrer'
            >
              IV. TBone's Shipyard: A website for my Dad's model ships
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/cgeohagan/full/zYYxRNR'
              target='_blank'
              rel='noreferrer'
            >
              V. Hocus Pocus Animation
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/cgeohagan/full/BajJVeN'
              target='_blank'
              rel='noreferrer'
            >
              VI. Piano Notes Game created in my attempt to learn to play
            </a>
          </li>
          <li>
            <a href='' target='_blank' rel='noreferrer'>
              VII. Harry Potter Trivial Pursuit
            </a>
          </li>
        </ul>
      </ProjectList>
    </>
  );
};

export const Head = () => {
  return (
    <>
      <title>Projects Page</title>
    </>
  );
};

export default ProjectsPage;
