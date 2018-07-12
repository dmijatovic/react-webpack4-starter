import * as actionType from './actions';
import {Config} from './app.cfg';
import {loaderReducer, headerReducer} from './reducers';

describe('Redux-loadReducer',()=>{

  it('should ALWAYS return state',()=>{
    let state=Config.loader,
      action={
        //use actionType not covered by this function
        type: actionType.SET_APP_TITLE
      }, 
      result = loaderReducer(state, action);
    expect(result).toEqual(state);
  });

});

describe('Redux-headerReducer',()=>{

  it('should ALWAYS return state',()=>{
    let state=Config.header,
      action={
        //use actionType not covered by this function
        type: actionType.SHOW_LOADER
      };
    expect(headerReducer(undefined,action)).toEqual(state);
  });


});