import * as React from 'react';
import Layout from '../components/Layout';

const ContactPage = (props) => {
  return (
    <Layout location={props.location}>
      <p>Hi there! This is the about me page</p>
    </Layout>
  );
};

export const Head = () => <title>Contact Page</title>;

export default ContactPage;
