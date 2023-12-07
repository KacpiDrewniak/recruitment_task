import {instance} from '../axios';

export const actionGetPosts = async () => await instance.get('/posts');
