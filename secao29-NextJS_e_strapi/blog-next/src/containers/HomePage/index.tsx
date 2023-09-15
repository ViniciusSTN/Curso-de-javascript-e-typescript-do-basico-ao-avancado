import Head from 'next/head';
import { PostData } from '@/domain/posts/posts';
import { Container } from './styles';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';
import { SITE_NAME } from '@/config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Esse é meu blog usando next" />
      </Head>

      <Header />
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
      </MainContainer>
      <Footer />
    </>
  );
}
