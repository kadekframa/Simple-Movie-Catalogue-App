import {HomeCard} from '../../components'

const Home = () => {
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
    </main>
  )
}

export default Home;
