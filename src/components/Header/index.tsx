import { AuthContainer, Container, LoaderContainer, LoggedContainer, LoginButton, Logout } from './styles';

import logo from '../../assets/images/logo.svg';
import github from '../../assets/images/github.png';
import { useAuth } from '../../context/useAuth';
import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';

export function Header() {
  const [isLogging, setIsLogging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, signIn, signOut } = useAuth();

  const history = useHistory();

  function handleSignIn() {
    setIsLogging(true);
    setIsLoading(true);
    signIn();
  }

  function handleSignOut() {
    setIsLogging(false);
    setIsLoading(false);
    history.push('/');
    signOut();
  }

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  },[user]);

  return (
    <Container>
      <img src={logo} width={200}/>

      {
        user ? (
          <AuthContainer>
            <LoggedContainer style={{ display: 'flex',}}>
              <span>Seja bem vindo(a)</span>
              <strong>{user.name}</strong>
            </LoggedContainer>
            <Logout onClick={handleSignOut}>Deslogar</Logout>
          </AuthContainer>
        ) : (
          isLoading && isLogging ? (
            <LoaderContainer>
              <RingLoader color="#252525" size={30} />
            </LoaderContainer>
          ) : (
            <LoginButton onClick={handleSignIn}>
              <strong>CONECTAR COM</strong>
              <img src={github} width={28}/>
            </LoginButton>
          )
        )
      }
    </Container>
  );
}
