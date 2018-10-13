//REACT
import React from 'react';

//THIRD PARTY

//LOCAL components
import { Page } from '../layout';
import { Loader } from '../component';

export default class Home extends React.Component{
  render(){
    return(
      <Page
        title="This is homepage title in the header">

        <h2>Home page title</h2>
        <Loader type="">
        </Loader>

      </Page>
    );
  }
}