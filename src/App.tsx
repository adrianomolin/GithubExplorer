import { Main } from './pages/Main';

import { GlobalStyles } from './styles/GlobalStyles';

import { initializeApp } from 'firebase/app';
import { AuthProvider } from './context/useAuth';
import { RepoProvider } from './context/useRepos';

const firebaseConfig = {
  apiKey: 'AIzaSyAEukDiWyYjhUKwATUeh6WZlycoJAhnyz8',
  authDomain: 'gtexplorer-96c49.firebaseapp.com',
  projectId: 'gtexplorer-96c49',
  storageBucket: 'gtexplorer-96c49.appspot.com',
  messagingSenderId: '456722521143',
  appId: '1:456722521143:web:fa1a50917c8da8a7f7b3b2'
};

initializeApp(firebaseConfig);

function App() {

  return (
    <AuthProvider>
      <GlobalStyles />
      <RepoProvider>
        <Main />
      </RepoProvider>
    </AuthProvider>
  );
}

export default App;
