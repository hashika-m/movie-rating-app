import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Moviedetail.css'

const Moviedetail = () => {
  const {id} =useParams()
  const navigate = useNavigate()
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
   {/* states to handle api */}
   const [loading,setLoading]=useState(true)
   const [movie,setMovie]=useState([]) //api give data in the form of object so map() is not used
   const [error,setError]=useState('')
   const [rating,setRating]=useState(0)

    {/*  fetching moviedetail */}

    useEffect(()=>{
       const fetchMovieDetails=async()=>{
         setError('')
         setLoading(true)
         try{
          const res=await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
          const data=await res.json()
          console.log(data)

          if(data.Response==='True'){
            setMovie(data)
            setError('')

          }else{
            setError(data.Error)
          }
         }catch (error){
             console.log('Something went wrong')
         }
         setLoading(false)
       }
       fetchMovieDetails()
    },[id,API_KEY])

    {/* UI updaes */}

    if(loading){
      return <h2 style={{ textAlign: "center", marginTop:'5rem' }}>Loading...</h2>;
    }
    if (error){
      return <h2 style={{ textAlign: "center", color: "red" ,marginTop:'5rem'}}>{error}</h2>;
    }
  return (
    <>
    {/* <h1>Movie{id}</h1> --testing */}


    {/* Movie detail dispaly */}
     <section className="container">
     <div className="grid">
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title}/>
       </div>
        <div className="detail">
          <h1>{movie.Title}</h1>
          <div className="row1">
            <p>{movie.Year} | {movie.Type} | {movie.imdbRating} | {movie.Runtime}</p>
          </div>
          <div className="row2">
            <p><b>Genre:</b> {movie.Genre}</p>
            <p><b>Languages:</b> {movie.Language}</p>
            <p><b>Awards:</b> {movie.Awards}</p>
            <p><b>Writer:</b> {movie.Writer}</p>
            <p><b>Director:</b> {movie.Director} </p>
            <p><b>Actors:</b> {movie.Actors}</p>
            <p className='plot'> {movie.Plot}</p>

          </div>
        </div>
     </div>
      {/* Rating the movie */}
      <div style={{ marginTop: "15px" }}>
          <p className='rating'><strong>Your Rating:</strong></p>
           {[1, 2, 3, 4, 5].map((star) => (<span key={star}onClick={() => setRating(star)}
            style={{fontSize: "28px",cursor: "pointer",color: star <= rating ? "gold" : "gray",marginRight: "5px",}} >★</span> ))}

            {rating > 0 && (
              <p style={{ marginTop: "5px" }} className='user-rate'>
                You rated: <strong>{rating}/5</strong>
              </p>
            )}
      </div>

    {/* Go back button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
       ← Go Back</button>

     </section>
   
    </>
  )
}

export default Moviedetail