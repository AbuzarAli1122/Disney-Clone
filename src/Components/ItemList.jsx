import React,{useEffect,useState,useRef} from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieList from './HrMovieList';


function ItemList({genreId,index_}) {
    const [itemMovieList, setitemMovieList] = useState([])
    const elementRef=useRef(null);
    
    useEffect(() => {
        getMovieByGenreId();
    }, [])
    

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setitemMovieList(resp.data.results)
        })
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>

        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[190px]'}`}/>


    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5'>
      {itemMovieList.map((item,index)=>(
        <>
         {index_%3==0?<HrMovieList movie={item}/>:<MovieCard movie={item} />}
        </>
        ))}
         <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[190px]'}`}/>
    </div>
    </div>
  )
}

export default ItemList
