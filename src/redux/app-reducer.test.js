import store from './store';
import appReducer, { setInitializeApp } from './app-reducer';

const state = store.getState();

it('App was initialized',()=>{
    // 1. initial data
    const action = setInitializeApp(); // 
    // 2. action
    const newState = appReducer({},action);
    // 3. expectation
    expect(newState.initialized).toBe(false);
})