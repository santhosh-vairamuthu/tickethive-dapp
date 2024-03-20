// import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from "react";

import Header from './Header';
import Footer from './Footer';
function Home() {
    const navigate=useNavigate();
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
    
    return (
        <div>
        <Header/>
            <div className="container-fluid Home">
            <div className="px-5 mt-5">
                <div className="container-fluid py-5  rounded-3 HomeJumbotron row-col-1">
                    <div className="container JumbotronContent col">
                        <h1 className="display-5 fw-bold">Book your<br/>Tickets for Events !</h1>
                        <ul className="mt-3">
                            <li><p className="col-md-8">Safe, Secure, Reliable ticketing!</p></li>
                            <li><p className="col-md-8">Your Ticket to live entertainment!</p></li>
                            <li><p className="col-md-8">Tickets that you can keep for life.!</p></li>
                        </ul>
                        
                        <button className="btn mt-4 EventRedirect" onClick={() => navigate("./event")}>View More  <i className="bi bi-arrow-up-right-square-fill"/></button>
                    </div>
                </div>
            </div>

            <div className="px-4 mt-5 mb-4 ">
                <div className="container-fluid p-5  rounded-5 homeViewMore">
                    <div className="container homeViewMoreContent">
                        <h3 className="display-5 fw-bold mt-2">Featured Events</h3>
                        <p className="col-md-8 text-white">Be sure not to miss these events!</p>
                        <div className="row">
                        {(events&&events.length>0)&&events.map((event)=>(
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                <div className="card p-2">
                                    <img src={event.concert_image} className="card-img-top" alt="event" width={600} height={400}/>
                                    <div className="card-body p-0 mt-2">
                                        <h5 className="card-title text-white">{event.concert_name}</h5>
                                        <p className="card-text text-white">{event.about_concert}</p>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        
                                        <Link to={`/detail/${event.concert_id}`}>
                                        <a href="#" className="btn getTicket">Get Tickets</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
        </div>
        
    
    );
}
export default Home;