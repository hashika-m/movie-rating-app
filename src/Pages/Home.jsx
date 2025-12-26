import React from 'react'
import { useGlobalContext } from '../Services/api'
import Navbar from '../Components/Navbar'
import Moviecard from '../Components/Moviecard'
import Filter from '../Components/Filter'
import Pagination from '../Components/Pagination'

const Home = () => {
  const {movie,totalResults,}= useGlobalContext()
  return (
    <>
    <Navbar/>
    
    <hr></hr>
    <Moviecard/>
    <Pagination/>
    
    {/* <p>Total results {totalResults}</p>
    
    {movie.map((currMovie,index)=><p key={index}>{currMovie.Title}{currMovie.Year}</p>)} */}

    </>
  )
}

export default Home