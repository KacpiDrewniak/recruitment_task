import {instance} from '../axios';

export const actionDeletePost = async (id: string | number) =>
  await instance.delete(`/posts/${id}`);
