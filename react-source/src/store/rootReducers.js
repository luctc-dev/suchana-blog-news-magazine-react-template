
import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import Post from './post/reducer';
import User from './user/reducer';
import App from './app/reducer';

export default combineReducers({
  Auth,
  Post,
  User,
  App
})

// const rootReducers = combineReducers({
//   Auth,
//   Post,
//   User,
// })

// export default rootReducers;