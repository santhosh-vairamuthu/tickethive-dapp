import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEmail } from "./EmailContext"; 

import Header from './Header';
import Footer from './Footer';
const Account = () => {
    const navigate = useNavigate();
    const { email } = useEmail(); 
    const [tickets, setTickets] = useState([]);
    const [name, setName] = useState("");
    useEffect(() => {
        const fetchTickets = async () => {
            if (email !== "") {
                try {
                    const response = await axios.get("http://localhost:5000/account", {
                        params: { email }
                    });
                    const res = await axios.get("http://localhost:5000/getName", {
                        params: { email }
                    });
                    setName(res.data[0].name);
                    const ticketsWithConcertDetails = await Promise.all(response.data.map(async (ticket) => {
                        const concertDetails = await fetchConcertDetails(ticket.concert_id);
                        return { ...ticket, ...concertDetails };
                    }));
                    setTickets(ticketsWithConcertDetails);
                } catch (error) {
                    console.error("Error fetching account:", error);
                    navigate("../login");
                }
            } else {
                navigate("../login");
            }
        };

        fetchTickets();
    }, [email, navigate]);

    const fetchConcertDetails = async (concert_id) => {
        try {
            const response = await axios.get("http://localhost:5000/getconcertdetails", {
                params: { concert_id }
            });
            return response.data[0]; 
        } catch (error) {
            console.error("Error fetching concert details:", error);
            return null;
        }
    };

    return (
        <div>
        <Header/>
            <div className="container-fluid Account">
                <div className="container py-5">
                    <h1 className="fs-1 mt-5">Hello {name},</h1>
                    <hr className="border border-dark border-2 opacity-75 mt-5" />
                    <div className="container p-2 row justify-content-center">
                        {tickets.map((ticket, index) => (
                            <div className="col-md-6 col-sm-12 col-12 col-lg-4" key={index}>
                                <div className="card text-center eventsList">
                                    <div className="card-body">
                                        <h5 className="card-title">{ticket.concert_name}</h5>
                                        <p className="card-text" style={{ marginBottom: "-0.2%" }}>
                                            <i className="bi bi-geo-alt-fill"></i>
                                            <small className="text-body-secondary fw-bolder"> {ticket.concert_place}</small>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-calendar"></i>
                                            <small className="text-body-secondary fw-bolder"> {ticket.concert_date}</small>
                                        </p>
                                        <button type="button" className="btn fw-semibold" data-bs-toggle="modal" data-bs-target={`#ticketModal-${index}`}>
                                            View Ticket <i className="bi bi-eye-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {tickets.map((ticket, index) => (
                    <div className="modal fade" id={`ticketModal-${index}`} key={index} tabIndex="-1" aria-labelledby={`ticketModalLabel-${index}`} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content">
                                <div className="container px-1 row">
                                    <div className="container col-6 col-md-6 col-lg-8 col-sm-6 left p-0">
                                        <div className="container modalBand d-flex">
                                            <h2 className="fs-2 text-white fw-bold">Ticket Hive</h2>
                                            <h2 className="fs-3 ms-auto text-white-50">Entry pass</h2>
                                        </div>
                                        <div className="container modalBody p-0">
                                            <h2 className="p-3">{ticket.concert_name}</h2>
                                            <div className="container-flex row p-3">
                                                <div className="col-6 col-sm-12 col-md-12 col-lg-4">
                                                    <h5 className="fs-5 fw-light text-white">NAME</h5>
                                                    <p className="fs-2 fw-bold">{name}</p>
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                                    <h5 className="fs-5 fw-light text-white">CLASS</h5>
                                                    <p className="fs-2 fw-bold">{ticket.class}</p>
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                                    <h5 className="fs-5 fw-light text-white">GATE</h5>
                                                    <p className="fs-2 fw-bold">"A"</p>
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                                    <h5 className="fs-5 fw-light text-white">SEAT</h5>
                                                    <p className="fs-2 fw-bold">{ticket.seat}</p>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                                    <h5 className="fs-5 fw-lighter text-white">Ticket ID</h5>
                                                    <p className="fs-2 fw-bold">{ticket.ticket_id}</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="card-text" style={{ marginBottom: "-0.1%" }}><i className="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> {ticket.concert_place}</small></p>
                                                    <p className="card-text"><i className="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> {ticket.concert_date}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container modalBandB d-flex mb-0"></div>
                                    </div>
                                    <div className="container col-6 col-md-6 col-lg-4 col-sm-6 right p-0">
                                        <div className="container modalBand d-flex justify-content-center">
                                            <h2 className="fs-2  text-white">Ticket Hive</h2>
                                        </div>
                                        <div className="container modalBody p-0">
                                            <h2 className="p-3 fs-1">{ticket.concert_name}</h2>
                                            <div className="container-flex p-3 row">
                                                <div className="col-12">
                                                    <h5 className="fs-5 fw-lighter text-white">Name</h5>
                                                    <p className="fs-2 fw-bold">{name}</p>
                                                </div>
                                                <div className="col-12">
                                                    <h5 className="fs-5 fw-lighter text-white">Concert ID</h5>
                                                    <p className="fs-3 fw-bold">{ticket.concert_id}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container modalBandB d-flex mb-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Account;
