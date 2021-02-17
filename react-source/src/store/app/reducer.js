import {
  ACT_SET_SHOW_SEARCH_FORM
} from './actions';

const initState = {
  showSearchForm: false
}

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case ACT_SET_SHOW_SEARCH_FORM:
      return {
        showSearchForm: action.payload.showSearchForm
      }
    default:
      return state
  }
  
}