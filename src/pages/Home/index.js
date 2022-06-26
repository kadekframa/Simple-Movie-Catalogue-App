import {HomeCard, MovieCard} from '../../components';
import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { createMovieSearchResultsList } from '../../utils/Templates';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [movieSearchResult, setMovieSearchResult] = useState([]);
  
  const getData = (keyword) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=abe4aee0fcb17aad33dbd7a1d40e25ce&language=en-US&query=${keyword}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(responseJson => {
        console.info('response: ', responseJson.results);
        setMovieSearchResult(responseJson.results);
      })
      .catch(err => {
        console.info('error: ', err)
      })
  }

  const onSearch = () => {
    console.info('Keyword Search: ', keyword);
    const key = {
      keyword,
    };


    getData(key.keyword);
  }
  
  console.info('movies: ', movieSearchResult);
  const movieSearchResultsList = createMovieSearchResultsList(movieSearchResult)

  return (
    <main className='container'>
      <div className='text-center mb-4'>
        <h1 className='fw-normal'>Catalogue Movies</h1>
      </div>

      <div className='row'>
        <div className='col-md-3 d-flex'>
          <HomeCard
            catalogue='Now Playing Movies'
            url='/now-playing'
            />
        </div>
        <div className='col-md-3 d-flex'>
          <HomeCard
            catalogue='Upcoming Movies'
            url='/upcoming'
          />
        </div>
        <div className='col-md-3 d-flex'>
          <HomeCard
            catalogue='Popular Movies'
            url='/popular'
          />
        </div>
        <div className='col-md-3 d-flex'>
          <HomeCard
            catalogue='Top Rated Movies'
            url='/top-rated'
          />
        </div>
      </div>

      
      {/* Search components */}
      <Form>
        <FormGroup className='row srac'>
          <Input className='mt-5' type="text" placeholder='Search Movie...' value={keyword} onChange={e => setKeyword(e.target.value)}/>
          <Button color="success" className="my-4" onClick={onSearch}>Search Movie</Button>
        </FormGroup>
      </Form>
      
      <div className='text-center mb-4'>
        <h2 className='fw-normal mt-5'>Here's Your Search Movie Results</h2>
      </div>

      <div className='row'>
        {movieSearchResultsList}
      </div>
    </main>
  )
}

export default Home;
