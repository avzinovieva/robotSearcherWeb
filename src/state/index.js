import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducer from './modules';
import API from './api';
import logIn from './modules/login/index';
import { USER_CODE, USER_PHONE, USER_TOKEN } from '../storageKeys';

export default function createStore(preloadedState) {
  let INTERNET_RETRY_COUNTER = 0;

  const clients = {
    default: {
      client: API,
    },
  };

  const composeWithDevTools = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const interceptors = {
    request: [
      // eslint-disable-next-line no-unused-vars
      async ({ getState }, req) => {
        const token = await localStorage.getItem(USER_TOKEN);
        return { ...req, headers: { Authorization: `Bearer ${token || ''}` } };
      }],
    response: [
      {
        success(object, req) {
          INTERNET_RETRY_COUNTER = 0;
          return Promise.resolve(req);
        },
        async error({ dispatch }, error) {
          if (error.message.trim() === 'Network Error') {
            return Promise.reject(error);
          }

          const { status } = error.response;
          if (status === 401 && INTERNET_RETRY_COUNTER < 3) {
            INTERNET_RETRY_COUNTER += 1;
            const phoneNumber = await localStorage.getItem(USER_PHONE);
            const verificationCode = await localStorage.getItem(USER_CODE);

            if (phoneNumber && verificationCode) {
              return dispatch(logIn({ phoneNumber, verificationCode }))
                .then(async () => {
                  const newToken = await localStorage.getItem(USER_TOKEN);
                  const { config } = error;
                  config.headers.Authorization = `Bearer ${newToken}`;
                  await dispatch(config.reduxSourceAction);

                  return Promise.reject(error);
                });
            }

            return Promise.reject(error);
          }

          return Promise.reject(error);
        },
      },
    ],
  };

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(thunk, multiClientMiddleware(clients, { interceptors })),
  );

  const store = _createStore(reducer, preloadedState, composedEnhancers);

  return store;
}
