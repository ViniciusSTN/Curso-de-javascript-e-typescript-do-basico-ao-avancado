// o index é o padrão da rota

import { PostData } from '@/domain/posts/posts';
import { GetStaticProps } from 'next';
// import { useEffect, useState } from 'react';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('http://localhost:1337/api/posts?populate=deep');
  const jsonPosts = await posts.json();
  return jsonPosts.data;
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  // const [posts, setPosts] = useState<PostData[]>([]);

  // useEffect(() => {
  //   getPosts().then((response) => setPosts(response));
  // }, [posts]);

  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.attributes.title}</h2>
      ))}
    </div>
  );
}

// parâmetro context é opcional
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 60, // a cada minuto vai revalidar
  };
};
