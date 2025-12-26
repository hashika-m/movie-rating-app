import React from 'react'
import './Navbar.css'
import { useGlobalContext } from '../Services/api'
import Filter from './Filter'

// images 
import search from '../assets/search.png'
import filter from '../assets/filter.png'
import movie from '../assets/movie.png'
import home from '../assets/home.png'
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
     const {query,setQuery, }=useGlobalContext()
  return (
    <>
    <div className="nav-container">
        {/* logo  */}
           <Link  to='/' className='logo'>
             <img src={movie} alt='movie' style={{height:'35px',width:'35px'}}/>
             <h1 className="logo">Movie..</h1>
           </Link>
     {/* Search  */}
        <form action='#'>
                <input 
                type='text' 
                placeholder='Search movies...'
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                ></input>
                <img src={search} alt='search' style={{height:'15px',width:'15px'}}/>    
        </form>
    {/* Home and user icon  */}
    <div className='icons'>
        <button className='filter'>
          {/* <img src={filter} alt="filter" style={{height:'25px',width:'25px'}}/> */}
          <Filter/>
         </button>
        <Link to='/'><img src={home} alt="home" style={{height:'25px',width:'25px'}} className='home' active/> </Link>
        <img src={profile} alt='profile' style={{height:'25px',width:'25px'}} className='user'/>
     </div>
    
       

   </div>
    </>
  )
}

export default Navbar