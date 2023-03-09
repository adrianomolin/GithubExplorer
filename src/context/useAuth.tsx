import { createContext, ReactNode, useContext, useState } from 'react';
import { getAuth, GithubAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';

import { UserProps } from '../types/User';
import { useHistory } from 'react-router-dom';

interface AuthProps {
  signIn: () => void,
  signOut: () => void,
  user: UserProps | null,
}

interface FirebaseUserProps extends User {
  reloadUserInfo: {
    screenName: string
  }
}

interface AuthProviderProps {
  children: ReactNode
}

const provider = new GithubAuthProvider();
const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState< null | UserProps>(null);

  const history = useHistory();

  console.log(history);
  const auth = getAuth();

  async function signIn() {
    signInWithPopup(auth, provider)
      .then(async result => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        localStorage.setItem('token',token || '');

        // The signed-in user info.
        const user = result.user as FirebaseUserProps;

        if (user) {
          const userData = {
            id: user.uid,
            name: user.displayName || '',
            email: user.email || '',
            username: user.reloadUserInfo.screenName || '',
          };

          setUser(userData);
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);

        console.error(`Ocorreu um erro - ${errorCode}: ${errorMessage} | ${email} - ${credential}`);
        // ...
      });
  }

  async function signOutFunc() {
    await signOut(auth).then(() => {

      setUser(null);
      localStorage.removeItem('token');
    }).catch((error) => {

      console.error(error);
    });
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut: signOutFunc,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
