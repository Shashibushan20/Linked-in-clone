import React, { useEffect } from 'react';
import './App.css';
import Head from './Head';
import Sidebar from './Sidebar'
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
        localStorage.setItem('user', JSON.stringify(userAuth)); // Store user in local storage
      } else {
        // User is logged out
        dispatch(logout());
        localStorage.removeItem('user'); // Remove user from local storage
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener when the component unmounts
    };
  }, [dispatch]);

  return (
    <div className="App">
      {/* Header */}
      <Head />

      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
          {/* widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
