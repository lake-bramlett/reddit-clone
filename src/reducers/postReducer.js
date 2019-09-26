// faker initial state post data
import postData from "./../assets/postData.json";

const initialState = {
  feedPosts: postData
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      const newPostList = [...state.feedPosts, action.post];
      return { feedPosts: newPostList };
    case "UPVOTE":
      console.log("Upvoting");
      console.log(state);
      let temp = [...state.feedPosts];
      temp.forEach(post => {
        if (post.id === action.id) {
          post.upvotes++;
        }
      });
      return { feedPosts: temp };
    default:
      return state;
  }
};

export default postReducer;
