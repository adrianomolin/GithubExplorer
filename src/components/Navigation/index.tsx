import { Link } from 'react-router-dom';
import { NavigationContainer } from './styles';

interface NavigationProps {
  visible: boolean
}

export function Navigation({ visible }: NavigationProps) {
  return (
    <NavigationContainer style={{ opacity: visible ? 1 : 0}}>
      <Link to='/' >Home</Link>
      <Link to='/user/repositories' >Meus Repositórios</Link>
    </NavigationContainer>
  );
}
