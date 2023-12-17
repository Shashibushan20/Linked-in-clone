import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPhotoVideo, faCalendarAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (input.trim()) {
      await db.collection('posts').add({
        name: user.displayName || "John Doe",
        description: user.email || "No description",
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      // Clear the input field after posting
      setInput('');
    }
  };
  

     return (
    <div className='feed'>
      <div className='feedInputContainer'>
        <div className='feedInput'>
          <FontAwesomeIcon icon={faPen} />
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Start a Post' value={input}
              onChange={(e) => setInput(e.target.value)} />
            <button type='submit'>send</button>
          </form>
        </div>
        <div className='feedinputOptions'>
          <InputOption Icon={faPhotoVideo} title='Photo' color='#70B5F9' />
          <InputOption Icon={faPhotoVideo} title='Video' color='#E7A33E' />
          <InputOption Icon={faCalendarAlt} title='Event' color='#C0CBCD' />
          <InputOption Icon={faFileAlt} title='Write article' color='#7FC15E' />
        </div>
      </div>
      <FlipMove>
      {posts.map(({ id, data }) => (
        <Post key={id} data={data} name={data.name} description={data.description} message={data.message} />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;