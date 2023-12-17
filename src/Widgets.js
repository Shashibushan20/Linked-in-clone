import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCircle } from '@fortawesome/free-solid-svg-icons';
import "./Widgets.css"

function Widgets() {
const newsArticle = (heading, subtitles) => (
  <div className='widgetsArticle'>
      <div className='widgetsArticleLeft'>
        <FontAwesomeIcon icon={faCircle} className='icons'/>
        <h4>{heading}</h4>
        <p>{subtitles}</p>
      </div>
    </div>
  
)
  
  return (
    <div className='widgets'>
      <div className='widgetsHeader'>
        <h2>Linkedin News</h2>
        <FontAwesomeIcon icon={faNewspaper} className='icons' />
      </div>
      {newsArticle("AI is taking over", "The report from The Newyork Tim...")}
      {newsArticle("Google stocks High", "One of the biggest stocks...")}
    </div>
  )
}

export default Widgets
