import {useAppSelector} from '../store.ts';

export const usePosts = () => useAppSelector(state => state.posts?.posts);
