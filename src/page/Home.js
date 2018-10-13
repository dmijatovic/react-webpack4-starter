//REACT
import React from 'react';

//THIRD PARTY
import { connect } from 'react-redux';

//LOCAL components
import { Page } from '../layout';
import { Loader, Persons, Clock } from '../component';
import { logGroup } from '../utils';
import * as actionType from '../store/actions';

/**
 * Home page
 */
import './Home.scss';
export class Home extends React.Component{
  getContent=()=>{
     //debugger
     if (this.props.loader.show){
      return (
        <Loader type={this.props.loader.type}/>
      )
    } else{
      return(
        <section className="app-page-content">
          <Persons/>
        </section>
      );
    }
  }
  render(){
    logGroup({
      title:"Home",
      method:"render",
      state: this.state,
      props: this.props
    })
    return(
      <Page
        title="This is homepage title in the header">
        <div className="page-body-header">
          <h2>Home page title</h2>
          <Clock/>
        </div>
        { this.getContent() }
      </Page>
    );
  }
  componentDidMount(){
    logGroup({
      title:"Home",
      method:"componentDidMount",
      state: this.state,
      props: this.props
    })
    //change loader state after 2 seconds
    setTimeout(()=>{
      //dispatch action to redux store
      //to hide loader
      this.props.onHideLoader();
    },2000);
  }
  componentDidUpdate(){
    logGroup({
      title:"Home",
      method:"componentDidUpdate",
      state: this.state,
      props: this.props
    })
  }
}

//------------------- REDUX CONNECTION --------------------------
/**
 * Map redux store states to local component properties
 * @param state: object, redux store object
 */
const mapStateToProps = state => {
  //debugger
  return {
    logo: state.header.logo,
    appTitle: state.header.appTitle,
    pageTitle: state.header.pageTitle,
    loader: state.loader
  }
}
/**
 * Map redux dispatch actions to local component props
 * @param dispatch: function, redux dispatch function
 */
const mapDispatchToProps = dispatch =>{
  return {
    //note short ES6 fn notation (single line assumes return)
    onShowLoader: () => dispatch({type:actionType.SHOW_LOADER}),
    onHideLoader: () => dispatch({type:actionType.HIDE_LOADER}),
    setLoaderType: (loaderType) => dispatch({type:actionType.SET_LOADER_TYPE, payload: loaderType}),
    setPageTitle: (pageTitle) => {
      return dispatch({type:"SET_PAGE_TITLE",payload: pageTitle});
    }
  }
}

/**
 * Export app class connected with Redux store
 * and props and discpatch actions mapped into
 * a local App component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);