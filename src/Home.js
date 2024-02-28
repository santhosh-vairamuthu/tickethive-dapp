// import React, { useState } from 'react';

function Home() {
    
    
    return (
        <div className="container-fluid Home">
            <div className="px-5 mt-5">
                <div className="container-fluid py-5  rounded-3 HomeJumbotron">
                    <div className="container JumbotronContent">
                        <h1 className="display-5 fw-bold">Book your<br/>Tickets for Events !</h1>
                        <ul className="mt-3">
                            <li><p className="col-md-8">Safe, Secure, Reliable ticketing!</p></li>
                            <li><p className="col-md-8">Your Ticket to live entertainment!</p></li>
                            <li><p className="col-md-8">Tickets that you can keep for life.!</p></li>
                        </ul>
                        <button className="btn mt-4 EventRedirect">View More  <i className="bi bi-arrow-up-right-square-fill"/></button>
                    </div>
                </div>
            </div>

            <div className="px-4 mt-5 mb-4 ">
                <div className="container-fluid p-5  rounded-5 homeViewMore">
                    <div className="container homeViewMoreContent">
                        <h3 className="display-5 fw-bold mt-2">Featured Events</h3>
                        <p className="col-md-8">Be sure not to miss these events!</p>
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3">
                            <div className="col">
                                <div className="card p-2">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="event" />
                                    <div className="card-body p-0 mt-2">
                                        <h5 className="card-title text-white">ARR Concert</h5>
                                        <p className="card-text text-white">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn getTicket">Get Tickets</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card p-2">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="event" />
                                    <div className="card-body p-0 mt-2">
                                        <h5 className="card-title text-white">ARR Concert</h5>
                                        <p className="card-text text-white">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn getTicket">Get Tickets</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card p-2">
                                    <img src="https://placehold.co/600x400" className="card-img-top" alt="event" />
                                    <div className="card-body p-0 mt-2">
                                        <h5 className="card-title text-white">ARR Concert</h5>
                                        <p className="card-text text-white">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn getTicket">Get Tickets</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    );
}
export default Home;