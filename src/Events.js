import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import Header from './Header';
import Footer from "./Footer";
const Events = ({email}) => {
    let [events,setEvents]=useState([]);
    useEffect(()=>{
        res();
    },[]);
    const res=async()=>{
        try {
            const response = await axios.get('http://localhost:5000/getevents');
            setEvents(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };
    const trigger=async(inputValue)=>{
            try {
                console.log(inputValue);
              const response = await axios.get('http://localhost:5000/searchevents', {
                params: { prompt: inputValue }
              });
              setEvents(response.data);
              console.log(events);
            } catch (error) {
                
              console.error('Error fetching data:', error);
            }
    }
    return (
        <div>
        <Header/>
        <div className='container-fluid Event'>

            <form className='formSearch mt-5 mb-4'>
                <label htmlFor='searchField'></label>
                <input id="searchField" name="searchField" type="text" placeholder=' Search events' onChange={(e) => {e.preventDefault();trigger(e.target.value)}}></input>
            </form>
            <h3 className='mt-5 mb-2'>Showing all {events.length} events</h3>
            <div className=' p-5 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 '>
            {(events && events.length>0) && events.map((event) => (
                <div className='col'>
                    <div className="card mb-3 col p-1 rounded-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={event.concert_image} alt="..." width={75}  height={35}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{event.concert_name}</h5>
                                    <p className="card-text ">{event.about_concert}</p>
                                    <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> {event.concert_place}</small></p>
                                    <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> {event.concert_date}</small></p>
                                    <Link to={`/detail/${event.concert_id}`}>
    <a className='btn'>More <i className="bi bi-arrow-right-circle-fill"></i></a>
</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
                
                    </div>
                </div>
                <Footer/>
        </div>
        
    )
}

export default Events