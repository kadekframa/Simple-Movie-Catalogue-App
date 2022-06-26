import React from 'react';
import { Link } from 'react-router-dom';
import './home-card.css';

const HomeCard = (props) => {
  const {catalogue, url} = props;
  return (
    <div className='home-wrapper'>
      <Link className='link-url' to={url}>
          <div className='box-overlay'>
            <div className='text-overlay'>
              <h1 className='text'>{catalogue}</h1>
            </div>
          </div>
      </Link>
    </div>
  )
}

export default HomeCard;