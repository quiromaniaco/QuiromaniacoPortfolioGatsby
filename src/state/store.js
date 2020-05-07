import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from './reducer';

const composeEnhancers = composeWithDevTools({ name: 'Manuel Quiroga' });

export default preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware())
  );
};
