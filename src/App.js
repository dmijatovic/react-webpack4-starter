//REACT
import React from 'react';

//THIRD PARTY

//LOCAL components
import { Header, Footer, Loader } from './layout';
//import Header from './layout/Header';
//import Footer from './layout/Footer';

export default class App extends React.Component{
  render(){
    return([
      <Header key="header"/>,
      <article key="body">
        <h3 className="Test"></h3>
        <Loader type="first"/>
      </article>,
      <Footer key="footer"/>  
    ]);
  }
}