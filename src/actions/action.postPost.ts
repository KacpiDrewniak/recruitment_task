import {instance} from '../axios';

export const actionPostPosts = async (title: string, description: string) =>
  await instance.post('/posts', {
    title: title,
    description: description,
  });
