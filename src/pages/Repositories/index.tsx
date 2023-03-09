import { ListRepositories } from '../../components/ListRepositories';
import { RepositoriesSearch } from '../../components/RepositoriesSearch';
import { Container } from './styles';

export function Repositories() {
  return (
    <>
      <RepositoriesSearch />
      <Container>
        <ListRepositories />
      </Container>
    </>
  );
}
