import Head from 'next/head';
import { PostData } from '@/domain/posts/posts';
import { Category, Container } from './styles';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';
import { SITE_NAME } from '@/config/app-config';
import { PaginationData } from '@/domain/posts/paginations';
import { Pagination } from '@/components/Pagination';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        <meta name="description" content="Esse é meu blog usando next" />
      </Head>

      <Header />

      {category && <Category>Categoria: {category}</Category>}

      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              cover={post.attributes.cover.data.attributes.formats.small.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
              key={post.id}
            />
          ))}
        </Container>

        <Pagination
          nextPage={pagination?.nextPage as number}
          previousPage={pagination?.previousPage as number}
          numberOfPosts={pagination?.numberOfPosts as number}
          postsPerPage={pagination?.postsPerPage as number}
          category={pagination?.category}
        />
      </MainContainer>
      <Footer />
    </>
  );
}
