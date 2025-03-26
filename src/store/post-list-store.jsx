import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    console.log("item deleted");
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
    currPostList = newPostList;
  } else if (action.type === "ADD_POST") {
    console.log("item Added");
    newPostList = [action.payload, ...currPostList];
    currPostList = newPostList;
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Pokhara",
    body: "Hey Friends, I am going to Pokhara for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Pokhara", "Enjoying"],
  },
  {
    id: "2",
    title: "I have passed.",
    body: "I have finally passed my bachelors. Feeling great.",
    reactions: 15,
    userId: "user-12",
    tags: ["Unbelievable", "Graduating"],
  },
];

export default PostListProvider;
