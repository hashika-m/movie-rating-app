import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Services/api'
import './Moviecard.css'
const Moviecard = () => {
    const {movie,isErr }=useGlobalContext()
  return (
    <>
     <section className="movie-conatiner">
        <div className="movie-grid">
            {movie.map((currMovie)=>{
                const {imdbID}=currMovie
                return(
                    <>
                   <div className="movie-card">
                     {/* images  */}
                      <Link to={`movie/${currMovie.imdbID}`}  key={imdbID} className='poster'>
                      <img src={currMovie.Poster} alt={currMovie.Title}/>
                      </Link>
                     {/* movie-detail */}
                     <div className="movie-info">
                        <h2>{currMovie.Title}</h2>
                        <div className="info1">
                            <p>{currMovie.Year} | {currMovie.Type}</p>
                        </div>
                        <div className="info2">
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, minus. Quos neque  doloribus accusamus eveniet maxime dolores cumque harum porro sapiente ad...  </p>
                        </div>
                        
                        <Link to={`movie/${currMovie.imdbID}`} className='view'>View details</Link>
                     </div>
                   </div>
                   
                    </>
                )
            })}
        </div>

         {/* Error handling */}
       <div className='error-card'>
          <h2>{isErr.show && isErr.msg}</h2>
      </div>
     </section>
    </>
  )
}

export default Moviecard