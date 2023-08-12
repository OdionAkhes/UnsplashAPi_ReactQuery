import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from './context';
import axios from 'axios';

const url =
  "https://api.unsplash.com/search/photos?client_id=IQZAS9yvLJ6-szlaSkUEPtbz5AdVVRvdOB9RRnXvzWs&query=office";
const Gallery = () => {

    const response = useQuery({
        queryKey: ["images"],
        queryFn: async () => {
            const result = await axios.get(url)
            return result.data
        }
    })
    console.log(response)
    if (response.isLoading) {
        return (
            <section className="image-container">
                <h4>Loading...</h4>
           </section>
       )
    }
    if (response.isError) {
        return (
            <section className="image-container">
                <h4>There was an error...</h4>
            </section>
        )
    }

    const results = response.data.results
    if (results.length < 1) {
        return (
            <section className="image-container">
                <h4>No results found...</h4>
            </section>
        )
    }
   return (
       <section className="image-container">
           {results.map(item => {
               const url = item?.urls?.regular
               return  <img src={url} alt={item.alt_description} key={item.id} className='img'/>
           })}
</section>
  )
}

export default Gallery