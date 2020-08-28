import store from './store';
import appReducer, { setInitializeApp } from './app-reducer';

const state = store.getState();

it('App was initialized',()=>{
    const action = setInitializeApp(); // 
    const newState = appReducer({},action);
    expect(newState.initialized).toBe(false);
})