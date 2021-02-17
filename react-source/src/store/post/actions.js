import { PostService } from "../../services/post";

export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS';
export const ACT_FETCH_POPULAR_POSTS = 'ACT_FETCH_POPULAR_POSTS';


// Action creator
export function actFetchLatestPosts({ posts = [] } = {}) {
  return {
    type: ACT_FETCH_LATEST_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchPopularPosts({ posts = [] } = {}) {
  return {
    type: ACT_FETCH_POPULAR_POSTS,
    payload: {
      posts
    }
  }
}

// Action async
export const actFetchLatestPostsAsync = () => {
  return async dispatch => {
    try {
      const response = await PostService.getLatestPosts();
      const posts = response.data;
      
      dispatch(actFetchLatestPosts({
        posts
      }))

    } catch(e) {

    }
  }
}
export const actFetchPopularPostsAsync = () => {
  return async dispatch => {
    try {
      const response = await PostService.getPopularPosts();
      const posts = response.data;
      
      dispatch(actFetchPopularPosts({
        posts
      }))

    } catch(e) {

    }
  }
}