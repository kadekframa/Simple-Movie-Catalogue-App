import React, {useState, useEffect} from 'react';
import './nowPlaying.css';
import { createNowPlayingList } from '../../utils/Templates'
import {apiEndpoint} from '../../config';

const NowPlaying = () => {
  const [dataNowPlaying, setDataNowPlaying] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(apiEndpoint.NowPlaying)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson.results);
        setDataNowPlaying(responseJson.results)
      })
      .catch(err => console.info('error: ', err))
    }

    getData();
  })

  const nowPlayingList = createNowPlayingList(dataNowPlaying);
  
  return (
    <main className='container'>
      <div className='text-center mb-4'>
        <h1 className='fw-normal'>Now Playing Movies</h1>
      </div>

      <div className='d-flex justify-content-end mb-4'>

      </div>

      <div className='row'>
        {nowPlayingList}
      </div>
    </main>
  )
}

export default NowPlaying;
