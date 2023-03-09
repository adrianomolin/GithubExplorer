import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Repository } from '../types/Repository';

interface RepoContextProps {
  repos: Repository[],
  searchUser: (user: string) => void;
}

interface RepoProviderProps {
  children: ReactNode
}

const RepoContext = createContext({} as RepoContextProps);
const api = 'https://api.github.com';

export function RepoProvider({ children }: RepoProviderProps) {
  const [repoURL, setRepoURL] = useState('repositories');
  const [repos, setRepos] = useState([]);

  function searchUser(user: string) {
    if (user !== '') {
      setRepoURL(prevState => 'users/'+user+'/repos');
    } else {
      setRepoURL('repositories');
    }
  }

  useEffect(() => {
    async function UpdateRepos() {
      setRepos([]);

      const repositories = await axios.get(`${api}/${repoURL}`, { });

      if (repositories) {
        const { data } = repositories;

        // setTimeout(() => setRepos(data), 4000);
        setRepos(data);
      }
    }
    UpdateRepos();
  },[repoURL]);

  return (
    <RepoContext.Provider value={{
      repos,
      searchUser,
    }}>
      { children }
    </RepoContext.Provider>
  );
}

export function useRepos() {
  const context = useContext(RepoContext);

  return context;
}
