import { Container, SearchButton, SearchIcon, SearchInput } from './styles';

import Search from '../../assets/images/search.svg';
import { useState } from 'react';
import { useRepos } from '../../context/useRepos';

export function RepositoriesSearch() {
  const [user, setUser] = useState('');

  const { searchUser } = useRepos();

  function handleInputSubmit() {
    searchUser(user);
  }

  return (
    <Container>
      <SearchInput
        placeholder='Pesquisar um usuário'
        onInput={({ target }) => setUser(target.value)}
      />
      <SearchButton onClick={handleInputSubmit}>
        <SearchIcon src={Search} width={28}/>
      </SearchButton>
    </Container>
  );
}
