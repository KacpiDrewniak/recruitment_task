import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Post} from '../../type';

type postSliceType = {
  posts: Post[];
};

const initialState: postSliceType = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const {loadPosts} = postsSlice.actions;

export default postsSlice;
