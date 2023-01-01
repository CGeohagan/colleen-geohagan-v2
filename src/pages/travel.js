import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const TravelPage = (props) => {
  console.log('props', props);
  return (
    <Layout location={props.location}>
      <p>Hi there! This is the travel page</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/lighthouse.jpg'
        style={{ maxWidth: '500px' }}
      />
    </Layout>
  );
};

export const Head = () => <title>Travel Page</title>;

export default TravelPage;
