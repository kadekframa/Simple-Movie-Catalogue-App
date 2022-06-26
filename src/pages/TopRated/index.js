import React, {useState, useEffect} from 'react';
import { createTopRatedList } from '../../utils/Templates';
import {apiEndpoint} from '../../config';

const TopRated = () => {
  const [dataTopRated, setDataTopRated] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(apiEndpoint.TopRated)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson.results);
        setDataTopRated(responseJson.results)
      })
      .catch(err => console.info('error: ', err))
    }

    getData();
  })

  const topRatedList = createTopRatedList(dataTopRated);
  return (
    <main className='container'>
      <div className='text-center mb-4'>
        <h1 className='fw-normal'>Top Rated Movies</h1>
      </div>

      <div className='d-flex justify-content-end mb-4'>

      </div>

      <div className='row'>
        {topRatedList}
      </div>
    </main>
  )
}

export default TopRated;
