import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-session';

import products from './productReducer';
import router from './routerReducer';

const rootReducer = combineReducers({
  form,
  session,
  products,
  router
});

export default rootReducer;
