import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
//local
import { Header, NavBar, Footer } from './index';
import { logGroup } from '../utils';
import './Page.scss';
/**
 * Page component
 * @param {String} props.title pass title tot header title prop
 * @param {*} props.children child elements to place into body of page
 */
const Page = props => {
  //debugger
  logGroup({
    title:"Page",
    method: "render",
    props: props
  })
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header key="header"
          appTitle={props.appTitle}
          pageTitle={props.pageTitle}/>
        <NavBar/>
        <article
          key="body"
          className="page-body">

          <AppRouter/>

        </article>
        <Footer
          key="footer"
          left="Text to show on left side"
          right="text on the right"
        />
      </React.Fragment>
    </BrowserRouter>
  );
};

/**
 * Redux connection to pass state to component
 * as properties
 * @param {*} state
 */
const mapStateToProps = state => {
  return{
    appTitle: state.header.appTitle,
    pageTitle: state.header.pageTitle,
  }
}

export default connect(
  mapStateToProps
)(Page);