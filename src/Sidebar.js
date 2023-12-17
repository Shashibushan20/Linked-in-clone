import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar({ image }) {
  const user = useSelector(selectUser);
  const getRandomNumber = () => Math.floor(Math.random() * 501);

const recentItem = (topic) => (
  <div className='sidebar_recentItem'>
    <span className='sidebar_hash'>#</span>
    <p>{topic}</p>
  </div>
)

  return (
    <div className='sidebar'>
        <div className='sidebar_Top'>
        <img src="https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-6985136.jpg&fm=jpg" alt="bg_image" className='sidebar_Background' />
        <img src={"user.photoUrl" || "https://st3.depositphotos.com/7486768/17806/v/450/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg"} alt="" className='sidebar_Profile' />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>
        <div className='sidebar_Stats'>
             <div className='sidebar_Stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>{getRandomNumber()}</p>
             </div>
             <div className='sidebar_Stat'>
             <p>views on post</p>
                <p className='sidebar_statNumber'>{getRandomNumber()}</p>
             </div>
        </div>

        <div className='sidebar_Bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar
