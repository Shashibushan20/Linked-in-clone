import React, { forwardRef } from 'react'
import './Post.css'
import InputOption from './InputOption'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

const Post = forwardRef(({ data: { name, description, message, photoUrl } }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className='post'>
        <div className='postHeader'>
        <img src={photoUrl || "https://st3.depositphotos.com/7486768/17806/v/450/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg"} alt="" />
        <div className='postInfo'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </div>
        <div className='postBody'>
            <p>{message}</p>
        </div>
        <div className='postButtons'>
        <InputOption Icon={faThumbsUp} title="Like" color="gray" />
        <InputOption Icon={faComment} title="Comment" color="gray" />
        <InputOption Icon={faShare} title="Share" color="gray" />
        <InputOption Icon={faPaperPlane} title="Send" color="gray" />
        </div>
    </div>
  )
})

export default Post