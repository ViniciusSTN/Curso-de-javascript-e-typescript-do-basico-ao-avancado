import { POSTS_URL } from '@/config/app-config';
import { AllPostsData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts = async (): Promise<AllPostsData> => {
  const posts = await fetchJson<AllPostsData>(POSTS_URL);
  console.log(posts);
  return posts;
};
