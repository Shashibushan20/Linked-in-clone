import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'; // Adjust the path accordingly
import { useDispatch } from 'react-redux';
import  { login }  from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    
        auth
          .signInWithEmailAndPassword(email, password)
          .then((userAuth) => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
              })
            );
          })
          .catch((error) => alert(error.message));
      };
      const register = (e) => {
        e.preventDefault();
      
        if (!name) {
          return alert("Please enter a full name");
        }
      
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((userAuth) => {
            userAuth.user
              .updateProfile({
                displayName: name,
                photoURL: profilePic || "default_profile_pic_url", // Provide a default URL if profilePic is empty
              })
              .then(() => {
                dispatch(
                  login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic || "https://st3.depositphotos.com/7486768/17806/v/450/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg", // Provide a default URL if profilePic is empty
                  })
                );
              });
          })
          .catch((error) => alert(error.message));
      };
      

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt='' />
      <form onSubmit={loginToApp}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name (required if registering)' type='text' />
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile picture url (Optional)' type='text' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
        <button type='submit'>Sign In</button>
      </form>
      <p>Not a member?<span className='login_Register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login;