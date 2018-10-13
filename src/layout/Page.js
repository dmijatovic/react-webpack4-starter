import React from 'react';

import { Header, Footer } from './index';

import './Page.scss';

/**
 * Page component
 * @param {String} props.title pass title tot header title prop
 * @param {*} props.children child elements to place into body of page
 */
const Page = props => {
  return (
    <React.Fragment>
      <Header key="header"
        appTitle="This is main app title"
        pageTitle={props.title}/>
      <article
        key="body"
        className="page-body">
        { props.children }
      </article>
      <Footer
        key="footer"
        left="Text to show on left side"
        right="text on the right"
      />
    </React.Fragment>
  );
};

export default Page;