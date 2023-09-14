import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPosts } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostsProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostsProps) {
  return <p>{post.attributes.title}</p>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numbersOfPosts = await countAllPosts();
  const { data } = await getAllPosts(`pagination[limit]=${numbersOfPosts}`);

  return {
    // parâmetros de cada post (no caso o parâmetro do post é o slug)
    paths: data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false, // qualquer caminho não incluso em paths retorna uma página 404
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await getPosts(context.params?.slug);

  return {
    props: { post: data[0] },
    // revalidate: 60,
  };
};
