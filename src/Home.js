// import React, { useState } from 'react';

function Home() {
    
    
    return (
        <div className="container-fluid Home">
            <div className="p-5 mb-4">
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
        </div>
    
    );
}
export default Home;