import { RingLoader } from 'react-spinners';
import { useRepos } from '../../context/useRepos';
import {
  RepositoriesContainer,
  RepositoryContainer,
  Label,
  Small,
  Name,
  Author,
  LoaderContainer,
  AuthorImg,
  Informations,
  LinkToGit,
  About,
  Description,
} from './styles';

import GitHub from '../../assets/images/github.svg';
import { useEffect } from 'react';

export function ListRepositories() {
  const { repos, searchUser } = useRepos();

  useEffect(() => {
    searchUser('');
  },[]);

  return(
    <>
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
    </>
  );
}
