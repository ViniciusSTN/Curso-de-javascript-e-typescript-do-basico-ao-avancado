import { PostData } from '@/domain/posts/posts';
import { Container } from './styles';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <h2 key={post.id}>{post.attributes.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
