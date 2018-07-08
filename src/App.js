//REACT
import React from 'react';

//THIRD PARTY

//LOCAL components
import { Header, Footer, Loader, PageTitle } from './layout';
//import Header from './layout/Header';
//import Footer from './layout/Footer';

import { Config } from './App.cfg';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.initState();
  }
  initState(){
    //debugger
    this.state={
      //load basic configuration
      cfg: Config,
      loader:{
        //there are 2 types: first, second
        type:'first',
        show: true 
      }
    }
  }
  componentDidMount(){
    //this.showLoader();
    //change loader state after 5 seconds
    setTimeout(()=>{
      this.setState({
        loader:{
          show: false 
        }
      })
    },5000);
  }
  showLoader(){
    //debugger
    if (this.state.loader.show){
      return (
        <Loader type={this.state.loader.type}/>
      )
    } else{
      return null;
    }
  }
  render(){
    return(
      <React.Fragment>
        <Header
          logo={this.state.cfg.header.logo} 
          appTitle={this.state.cfg.header.appTitle}
        />,
        <section className="app-body">
          <PageTitle title="This is current page title"/>
          {this.showLoader()}
        </section>,
        <Footer/>
      </React.Fragment>    
    );
  }
}