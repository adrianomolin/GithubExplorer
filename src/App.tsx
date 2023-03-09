import { Main } from './pages/Main';

import { GlobalStyles } from './styles/GlobalStyles';

import { initializeApp } from 'firebase/app';
import { AuthProvider } from './context/useAuth';
import { RepoProvider } from './context/useRepos';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
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
