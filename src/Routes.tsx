import { Route, Switch } from 'react-router-dom';
import { Repositories } from './pages/Repositories';
import { UserRepositories } from './pages/UserRepositories';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Repositories} />
      <Route path="/user/repositories" component={UserRepositories} />
    </Switch>
  );
}
