import React from 'react'
import ListofMovies from "../Components/Constant/ListofMovies"
import ItemList from './ItemList'

function MovieList() {
  return (
    <div>
      {ListofMovies.genere.map((item,index)=> index<=4&&(
        <div className='p-8 px-8 md:px-16'>

        <h2 className='text-[30px] text-white font-bold'>{item.name}</h2>
        <ItemList  genreId={item.id} index_={index}/>

        </div>
      ))}
    </div>
  )
}

export default MovieList
