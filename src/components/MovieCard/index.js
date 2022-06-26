import React from 'react';
import '../cardStyle.css';

const MovieCard = (props) => {
  const {title, release_date, image, vote_average, id, url} = props;
  return (
    <div className='component-wrapper'>
      <div className='img-wrapper'>
          <a href={`${url}/${id}`}>
            <img src={image} alt={title} title={`Poster Film ${title}`}/>
            <p className='movie-rating'>⭐️{vote_average}</p>
          </a>
      </div>
      <a href={`${url}/${id}`}>
        <p className='movie-name'>{title}</p>
      </a>
      <p className='release-date my-1'>Release Date: <i><b>{release_date}</b></i></p>
    </div>
  )
}

export default MovieCard;