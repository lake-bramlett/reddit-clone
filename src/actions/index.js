export const addPost = post => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .add({
        ...post,
        timestamp: new Date()
      })
      .then(console.log("Added post to firebase"))
      .catch(err => {
        console.log(err);
      });
  };
  return {
    type: "ADD_POST",
    post: post
  };
};

export const upvote = id => {
  return {
    type: "UPVOTE",
    id: id
  };
};
