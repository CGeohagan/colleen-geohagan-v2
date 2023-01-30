import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const TravelPage = (props) => {
  return (
    <div>
      <p>Hi there! This is the travel page</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/lighthouse.jpg'
        style={{ maxWidth: '500px' }}
      />
    </div>
  );
};

export const Head = () => <title>Travel Page</title>;

export default TravelPage;
