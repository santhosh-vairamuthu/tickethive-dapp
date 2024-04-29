/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEmail } from "./EmailContext";
import contractABI from "./contractABI.js";
import Web3 from 'web3'; 
import Header from './Header';
import Footer from './Footer';

const Details = () => {
    const { email } = useEmail(); 
    const { concert_id } = useParams();
    const [id, setId] = useState(concert_id);
    const [count, setCount] = useState(1);
    const increaseCount = () => { setCount(count + 1); };
    const decreaseCount = () => { if (count > 1) setCount(count - 1); };
    let [events, setEvents] = useState([]);
    const nav = useNavigate();
    const [contract1, setContract1] = useState(null);
    const [defaultAccount,setDefaultAccount]=useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    console.log("Initializing Web3...");
                    const accounts=await window.ethereum.request({ method: "eth_requestAccounts" });
                    setDefaultAccount(accounts[0]);
                    window.web3 = new Web3(window.ethereum);
                    const contract=await loadContract();
                    console.log(contract);
                    setContract1(contract);
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };
        initWeb3();
    }, []);

    const loadContract=async()=>{
        console.log("hello");
        const contractAddress ="<PASTE YOUR CONTRACT ADDRESS HERE>";;
        const contract=new window.web3.eth.Contract(contractABI,contractAddress);
        console.log(contract);
        return contract;
    }

    useEffect(() => {
        res();
    }, [setId]);

    const res = async () => {
        try {
            const response = await axios.get('http://localhost:5001/getdetails', { params: { id: id } });
            const parsedData = response.data.map(event => ({
                ...event,
                artists_images: JSON.parse(event.artists_images),
                special_guests_images: JSON.parse(event.special_guests_images),
                instructions: JSON.parse(event.instructions)
            }));
            setEvents(parsedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    // Function to check availability and handle booking
    const checkAvailability = async (eventID, selectedClass, requestedSeats) => {
        try {
            const response = await axios.post('http://localhost:5001/checkAvailability', {
                eventID: eventID,
                selectedClass: selectedClass,
                requestedSeats: requestedSeats
            });
            if (response.data.available) {
                // Proceed with booking
                bookEvent(eventID, selectedClass, requestedSeats);
            } else {
                // Raise an alert indicating no available seats
                alert('Sorry, there are no available seats in the selected class.');
            }
        } catch (error) {
            console.error('Error checking availability:', error);
        }
    };

    // Function to handle booking
    const bookEvent = async (eventID, selectedClass, requestedSeats) => {
            try {
                if (!contract1) {
                    console.error("Contract not initialized.");
                    return;
                }
                await axios.post('http://localhost:5001/bookevent', { email: email,id:eventID, name: "Dummy Name", persons: requestedSeats, clas: selectedClass });
                await contract1.methods.bookEvent(eventID, "Dummy Name", requestedSeats, selectedClass).send({ from: defaultAccount });
                nav("../account");
            } catch(error) {
                console.error("Error booking events:", error);
            }
        
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.elements.name.value,
            persons: e.target.elements.tickets.value,
            class: e.target.elements.class.value
        };
        const { name, persons, class: selectedClass } = formData;
        if (name && persons && selectedClass) {
            checkAvailability(id, selectedClass, persons);
        } else {
            alert('Please fill out all fields.');
        }
    }

    return (
        <div>
            <Header/>
            <div className='container Details'>
                {(events && events.length > 0) && events.map((event) => (
                    <div key={event.concert_id}>
                        <div className='row row-cols-2 container-fluid mt-4 p-2'>
                            <div className='container col-12 mt-4 mb-4'>
                                <h2 className='fs-1 fw-semibold title'>{event.concert_name}</h2>
                                <p className="card-text titleDate"><i className="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> {event.concert_date}</small></p>
                            </div>
                            <div className='container col-12 col-md-12 col-lg-8 rounded-5 col-sm-12 mb-2'>
                                <img src={event.concert_image} width={720} height={450} style={{ borderRadius: '5%' }} alt="Concert"/>
                            </div>
                            <div className='container col-12 col-md-12 col-lg-4 col-sm-12 '>
                                <form className='form p-3 rounded-4' onSubmit={handleFormSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tickets" className="form-label">Person</label>
                                        <div className="input-group">
                                            <input type="text" name="tickets" className="form-control iP" placeholder={count + " Person"} value={count} required/>
                                            <button className="btn bi bi-plus-lg b1" type="button" onClick={increaseCount}></button>
                                            <button className="btn bi bi-dash-lg b2" type="button" onClick={decreaseCount}></button>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="class" className="form-label">Class</label>
                                        <select className="form-select" name="class" id="class" required>
                                            <option value="">Select a class</option>
                                            <option value="c1">Ordinary Class</option>
                                            <option value="c2">Premium Class</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <p className="card-text" style={{marginBottom : "-0.2%"}}><i className="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder">{event.concert_place}</small></p>
                                        <p className="card-text" style={{marginBottom : "-0.2%"}}><i className="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> {event.concert_date}</small></p>
                                        <p className="card-text"><i className="bi bi-alarm-fill"></i> <small className="text-body-secondary fw-bolder">{event.concert_time}</small></p>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn submitForm" type="submit">Book</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='container p-4'>
                            <p className='aboutEvent mt-2 '>{event.about_concert}</p>
                            <div className='container stars mt-5 mb-2'>
                                <h5 className=''>Artists</h5>
                                <div className='container row'>
                                    {event.artists_images.map((image, index) => (
                                        <div className='col-6 col-sm-6 col-md-3 col-lg-3 mb-2' key={index}>
                                            <div className="d-flex flex-row align-items-center gap-3">
                                                <img src={image} className="rounded-circle" alt='artist' width={75} height={75}/>
                                                <p className="fw-normal fs-5">{event.artists_names[index]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='container stars mt-5 mb-2'>
                                <h5 className=''>Special Guests</h5>
                                <div className='container row'>
                                    {event.special_guests_images.map((image, index) => (
                                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2' key={index}>
                                            <div className="d-flex flex-row align-items-center gap-3">
                                                <img src={image} className="rounded-circle" alt='artist' width={75} height={75}/>
                                                <p className="fw-normal fs-5">{event.special_guests_names[index]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='container rounded-2 p-5 instructions'>
                                <h2 className='fs-5 fs-bolder'>Instructions</h2>
                                <hr/>
                                <ol>
                                    {event.instructions.map((instruction, index) => (
                                        <li key={index}><p className='fw-lighter'>{instruction}</p></li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Details;
