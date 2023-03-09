
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { Routes } from '../../Routes';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Container } from './styles';
import { useEffect, useState } from 'react';

export function Main() {
  const [visible, setVisible] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    user ? setVisible(true) : setVisible(false);
  },[user]);

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Navigation visible={visible}/>
        <Routes />
      </BrowserRouter>
    </Container>
  );
}
