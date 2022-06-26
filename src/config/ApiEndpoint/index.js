import React from 'react';

const URL = 'https://api.themoviedb.org/3/movie';
const apiEndpoint = {
  NowPlaying: `${URL}/now_playing?api_key=abe4aee0fcb17aad33dbd7a1d40e25ce&language=en-US&page=1`,
  Upcoming: `${URL}/upcoming?api_key=abe4aee0fcb17aad33dbd7a1d40e25ce&language=en-US&page=1`,
  Popular: `${URL}/popular?api_key=abe4aee0fcb17aad33dbd7a1d40e25ce&language=en-US&page=1`,
  TopRated: `${URL}/top_rated?api_key=abe4aee0fcb17aad33dbd7a1d40e25ce&language=en-US&page=1`,
}

export default apiEndpoint;
