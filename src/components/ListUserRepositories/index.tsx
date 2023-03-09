import { useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import { useAuth } from '../../context/useAuth';
import { useRepos } from '../../context/useRepos';

import GitHub from '../../assets/images/github.svg';

import { About, Author, AuthorImg, Description, Informations, Label, LinkToGit, LoaderContainer, Name, RepositoriesContainer, RepositoryContainer, Small } from './styles';

export function ListUserRepositories() {
  const { user } = useAuth();
  const { repos, searchUser } = useRepos();

  useEffect(() => {
    searchUser(user!.username);
  },[]);

  return (
    <RepositoriesContainer>
      {
        repos.length > 0 ? (
          repos.map(repository => (
            <RepositoryContainer key={repository.id}>
              <About>
                <AuthorImg src={`https://github.com/${repository.owner.login}.png`} width={100} height={100}/>
                <Informations>
                  <Label>
                    <Small>Repositorio </Small>
                    <Name>{repository.owner.login}/{repository.name}</Name>
                  </Label>
                  <Author>
                    <Description>{repository.description}</Description>
                  </Author>
                </Informations>
              </About>
              <LinkToGit href={repository.html_url} target="_blank">
                <img src={GitHub} width={36}/>
              </LinkToGit>
            </RepositoryContainer>
          ))
        ) : (
          <LoaderContainer>
            <RingLoader color="#252525" size={100} />
          </LoaderContainer>
        )
      }
    </RepositoriesContainer>
  );
}
