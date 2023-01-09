import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const ProjectStyles = styled.div`
  ol {
    margin: 1em 0;
    padding-left: 2.5em;
    text-align: left;
    text-overflow: ellipsis;
  }

  li {
    margin-bottom: 0.1em;
  }

  a {
    letter-spacing: 0.1px;
  }
`;

const ProjectsPage = (props) => {
  return (
    <Layout location={props.location}>
      <ProjectStyles>
        <ol type='I'>
          <li>
            <a
              href='https://delightedcalligraphy.com/'
              target='_blank'
              rel='noreferrer'
            >
              Delighted Calligraphy: A Wordpress website for a talented
              calligrapher
            </a>
          </li>
          <li>
            <a href='https://selectlinx.com/' target='_blank' rel='noreferrer'>
              SelectLinx: A Wordpress website for a small talent management
              company
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/cgeohagan/full/bxxVRp'
              target='_blank'
              rel='noreferrer'
            >
              Harry Potter Marauder's Map
            </a>
          </li>
          <li>
            <a
              href='https://www.tbonesshipyard.com/'
              target='_blank'
              rel='noreferrer'
            >
              TBone's Shipyard: A website for my Dad's model ships
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/cgeohagan/full/zYYxRNR'
              target='_blank'
              rel='noreferrer'
            >
              Hocus Pocus Animation
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/cgeohagan/full/BajJVeN'
              target='_blank'
              rel='noreferrer'
            >
              Piano Notes Game created in my attempt to learn to play
            </a>
          </li>
        </ol>
      </ProjectStyles>
    </Layout>
  );
};

export default ProjectsPage;
