import React, {useState, useEffect} from 'react';
import { createPopularList } from '../../utils/Templates';
import {apiEndpoint} from '../../config';

const Popular = () => {
  const [dataPopular, setDataPopular] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(apiEndpoint.Popular)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson.results);
        setDataPopular(responseJson.results)
      })
      .catch(err => console.info('error: ', err))
    }

    getData();
  })

  const popularList = createPopularList(dataPopular);
  return (
    <main className='container'>
      <div className='text-center mb-4'>
        <h1 className='fw-normal'>Popular Movies</h1>
      </div>

      <div className='d-flex justify-content-end mb-4'>

      </div>

      <div className='row'>
        {popularList}
      </div>
    </main>
  )
}

export default Popular;
