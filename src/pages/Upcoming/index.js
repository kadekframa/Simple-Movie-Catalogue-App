import React, {useState, useEffect} from 'react';
import { createUpcomingList } from '../../utils/Templates';
import {apiEndpoint} from '../../config';

const Upcoming = () => {
  const [dataUpcoming, setDataUpcoming] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(apiEndpoint.Upcoming)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson.results);
        setDataUpcoming(responseJson.results)
      })
      .catch(err => console.info('error: ', err))
    }

    getData();
  })

  const upcomingList = createUpcomingList(dataUpcoming);
  return (
    <main className='container'>
      <div className='text-center mb-4'>
        <h1 className='fw-normal'>Upcoming Movies</h1>
      </div>

      <div className='d-flex justify-content-end mb-4'>

      </div>

      <div className='row'>
        {upcomingList}
      </div>
    </main>
  )
}
export default Upcoming;
