import React from 'react'
import {MovieCard} from '../../components'

const createNowPlayingList = (dataMovie) => {
    return dataMovie.map(movie => {
        return (
          <div className='col-md-4 d-flex align-items-start justify-content-center'>
            <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                description={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                url='/movie-detail'
            />
          </div>
        )
    })
}

const createUpcomingList = (dataMovie) => {
    return dataMovie.map(movie => {
        return (
          <div className='col-md-4 d-flex align-items-start justify-content-center'>
            <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                description={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                url='/movie-detail'
            />
          </div>
        )
    })
}

const createPopularList = (dataMovie) => {
    return dataMovie.map(movie => {
        return (
          <div className='col-md-4 d-flex align-items-start justify-content-center'>
            <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                description={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                url='/movie-detail'
            />
          </div>
        )
    })
}

const createTopRatedList = (dataMovie) => {
    return dataMovie.map(movie => {
        return (
          <div className='col-md-4 d-flex align-items-start justify-content-center'>
            <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                description={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                url='/movie-detail'
            />
          </div>
        )
    })
}

const createMovieSearchResultsList = (dataMovie) => {
  return dataMovie.map(movie => {
      return (
        <div className='col-md-4 d-flex align-items-start justify-content-center'>
          <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              url='/movie-detail'
          />
        </div>
      )
  })
}

export {
    createNowPlayingList,
    createUpcomingList,
    createPopularList,
    createTopRatedList,
    createMovieSearchResultsList
}