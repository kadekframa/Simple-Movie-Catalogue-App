import React, {useState, useEffect}  from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, useParams } from "react-router-dom";
import './detailMovie.css';

const DetailMovie = () => {
    const [data, setData] = useState({});
    const getParams = useParams();

    useEffect(() => {
        // console.info('params: ', getParams.id);
        const getDetail = (id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=abe4aee0fcb17aad33dbd7a1d40e25ce&language=en-US`)
                .then(response => response.json())
                .then(responseJson => {
                    // console.info(responseJson)
                    setData(responseJson);
                })
                .catch(err => console.info('error: ', err))
        }

        getDetail(getParams.id);
    })

    return (
        <main className="container detail-wrapper">
    
          <div className="row justify-content-center">
  
            <div className="col-md-6 image-wrapper">
              <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="Image_Tourism" className="image-object-tourism mb-3" />
            </div>
  
            <div className="col-6 me-auto information-movie">
              <Breadcrumb className="bread-crumb">
                <BreadcrumbItem>
                  <Link className="link-movie" to='/'>Movie</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  {data.title}
                </BreadcrumbItem>
              </Breadcrumb>
              <h1 className="mb-3">{data.title}</h1>
              <p className="information-desc">
                {data.overview}
              </p>
              <p className="mt-3"><b>Release Date</b></p>
              <p>{data.release_date}</p>
              <p className="mt-3"><b>Movie Tagline</b></p>
              <p>{data.tagline}</p>
              <p className="mt-3"><b>Movie Duration</b></p>
              <p>{data.runtime} minutes</p>
              <p className="mt-3"><b>Revenue</b></p>
              <p>${data.revenue}</p>
              <p className="mt-3"><b>Hompage</b></p>
              <p><a href={`${data.homepage}`} target='_blank' rel="noreferrer">{data.homepage}</a></p>
              <p className="mt-3"><b>Rating</b></p>
              <p>⭐️{data.vote_average}</p>
              <p className="mt-3"><b>Status</b></p>
              <p>{data.status}</p>
            </div>
          </div>
        </main>
    )
}

export default DetailMovie;