import React from 'react';
import { Routes as Swicth, Route } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import {
  Home,
  NowPlaying,
  Upcoming,
  Popular,
  TopRated,
  DetailMovie,
} from '../';
import './mainApp.css'

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
      <Navigation />
      <div className='content-wrapper my-5 py-2'>
        <Swicth>
          <Route exact path='/' element={<Home />} />

          <Route path='/now-playing' element={<NowPlaying />} />

          <Route path='/upcoming' element={<Upcoming />} />

          <Route path='/popular' element={<Popular />} />

          <Route path='/top-rated' element={<TopRated />} />

          <Route path='/movie-detail/:id' element={<DetailMovie />} />
        </Swicth>
      </div>
      <Footer />
    </div>
  )
}

export default MainApp;