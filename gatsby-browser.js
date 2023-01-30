/* eslint-disable react/jsx-props-no-spreading */
// Allows us to hook into different Gatsby APIs if we want to
// Gatsby browser will run once the page is being loaded
import React from 'react';
import Layout from './src/components/Layout';

// Anytime Gatsby renders out a page, it will wrap it in something
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
