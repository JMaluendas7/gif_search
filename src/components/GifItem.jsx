import React from 'react'

export const GifItem = ({ id, title, url }) => {
  return (
    <figure className='cards'>
      <div className='card'>
          <img className='card__image' src={ url } alt={ title }></img>
      </div>
      <span className='card__title'>{ title }</span>
    </figure>
  )
}