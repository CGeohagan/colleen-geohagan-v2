import * as React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>Hi there! This is the about me page</p>
    </Layout>
  );
};

export const Head = () => <title>Contact Page</title>;

export default ContactPage;
