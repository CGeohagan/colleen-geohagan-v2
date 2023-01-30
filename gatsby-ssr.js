// Copy everything from Gatsby browser
// Make sure it's all server rendered with the same settings as browser rendered
/* eslint-disable react/jsx-props-no-spreading */
// Allows us to hook into different Gatsby APIs if we want to
// Gatsby browser will run once the page is being loaded
import React from 'react';
import Layout from './src/components/Layout';

// Anytime Gatsby renders out a page, it will wrap it in the Layout component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
