import { Main } from './pages/Main';

import { GlobalStyles } from './styles/GlobalStyles';

import { initializeApp } from 'firebase/app';
import { AuthProvider } from './context/useAuth';
import { RepoProvider } from './context/useRepos';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
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
