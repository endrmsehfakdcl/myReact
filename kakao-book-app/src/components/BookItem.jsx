import React from 'react'
import './BookItem.css'

const BookItem = ({ article }) => {
  let { title, contents, url, thumbnail } = article;
  // urlToImage가 없다면
  thumbnail = thumbnail || 'http://placehold.it/160x100';

  return (
    <div className='newsItemBlock'>
      <div className='thumbnail'>
        <a href={url}>
          <img src={thumbnail} alt="thumbnail" />
        </a>
      </div>
      <div className='contents'>
        <a href={url}>
          <h2>{title}</h2>
        </a>
        <p>{contents}</p>
      </div>
    </div>
  )
}

export default BookItem