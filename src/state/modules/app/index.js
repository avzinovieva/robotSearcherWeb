const SET_INITIALIZE_APP = 'SET_INITIALIZE_APP';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE_APP:
      return {
        ...state,
        initialized: !state.initialized,
      };
    default:
      return state;
  }
};

export const setInitializeApp = () => ({type: SET_INITIALIZE_APP});


export default appReducer;
