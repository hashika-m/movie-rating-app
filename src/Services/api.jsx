import { createContext, useContext, useEffect, useState } from "react";


const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;


const AppContext=createContext()

const AppProvider=({children})=>{
    const [loading,setLoading] =useState(true)
    const [movie,setMovie]=useState([])
    const [isErr,SetIsErr]=useState({show:'false',msg:''})
    const [query,setQuery]=useState('avengers')
    const [type, setType] = useState('')
    const [year,setYear] =useState()
    const [page,setPage] =useState(1)
    const [totalResults,setTotalResults] =useState(0)
    
    const getMovies= async (url)=>{
        setLoading(true)
         try{
          const res =await fetch(url)
          const data=await res.json()
          console.log(data)

          if(data.Response==='True'){
            setMovie(data.Search)
            SetIsErr({show:'false',msg:''})
            setTotalResults(Number(data.totalResults))
          }else{
            SetIsErr({show:'true',msg:data.Error})
            setMovie([])
          }
         }catch (err){
              SetIsErr({show:'true',msg:'Something went wrong'})
         }
         setLoading(false)
    }

    useEffect(()=>{
        let timeout=setTimeout(() => {
           getMovies(`${API_URL}&s=${query}&page=${page}&type=${type}&y=${year}`) 
        }, 800);
        return()=>clearTimeout(timeout)
    },[query,type,year,page])



    return(
        <>
        <AppContext.Provider value={{
            loading,movie,isErr,query,setQuery,type,setType,page,setPage,year,setYear,totalResults
        }}>
           {children}
        </AppContext.Provider>
        
        </>
    )
}
const useGlobalContext=()=>{
   return useContext(AppContext)
}

export {AppContext,AppProvider , useGlobalContext}


