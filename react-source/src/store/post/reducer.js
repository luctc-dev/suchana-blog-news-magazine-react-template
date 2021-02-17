import { 
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS
} from "./actions";

const initPostState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesList: [],
}

export default function reducer(state = initPostState, action) {
  switch (action.type) {
    case ACT_FETCH_LATEST_POSTS:
      return {
        ...state,
        articlesLatest: action.payload.posts
      }
    case ACT_FETCH_POPULAR_POSTS:
      return {
        ...state,
        articlesPopular: action.payload.posts
      }
    default:
      return state;
  }
  
}