
const Account = () => {

    return (
        <div className="container-fluid Account">
            <div className="container py-5 ">
                <h1 className="fs-1 mt-5">Hello John Doe,</h1>
                <hr className="border border-dark border-2 opacity-75 mt-5"></hr>
                <div className="container p-2 row">
                    <div className="col">
                        <div className="card text-center eventsList" style={{width : "50%", marginLeft : "25%"}}>
                            <div className="card-body">
                                <h5 className="card-title">ARR Concert</h5>
                                <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                <button type="button" className="btn fw-semibold" data-bs-toggle="modal" data-bs-target="#ticketModal">View Ticket <i class="bi bi-eye-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="modal fade" id="ticketModal" tabindex="-1" ariaLabelledby="ticketModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content ">
                        <div className="container px-1 row">
                            <div className="container col-8 left p-0">
                                <div className="container modalBand d-flex">
                                    <h2 className="fs-2 text-white fw-bold">Ticket Hive</h2>
                                    <h2 className="fs-3 ms-auto text-white-50">Entry pass</h2>
                                </div>
                                <div className="container modalBody p-0">
                                    <h2 className="p-3">ARR Concert</h2>
                                    <div className="container-flex row p-3">
                                        <div className="col-6">
                                            <h5 className="fs-5 fw-light text-white">NAME</h5>
                                            <p className="fs-2 fw-bold">John Doe</p>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="fs-5 fw-light text-white">CLASS</h5>
                                            <p className="fs-2 fw-bold">First</p>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="fs-5 fw-light text-white">GATE</h5>
                                            <p className="fs-2 fw-bold">F12</p>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="fs-5 fw-light text-white">SEAT</h5>
                                            <p className="fs-2 fw-bold">144</p>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="fs-5 fw-lighter text-white">ID</h5>
                                            <p className="fs-2 fw-bold">v65z4df65d6</p>
                                        </div>
                                        <div className="col-12">
                                            <p className="card-text" style={{marginBottom : "-0.1%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                            <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container modalBandB d-flex mb-0">
                                </div>
                            </div>
                            <div className="container col-4 right p-0">
                                <div className="container modalBand d-flex justify-content-center">
                                    <h2 className="fs-2  text-white">Ticket Hive</h2>
                                </div>
                                <div className="container modalBody p-0">
                                    <h2 className="p-3">ARR Concert</h2>
                                    <div className="container-flex  p-3 row">
                                        <div className="col-12">
                                            <h5 className="fs-5 fw-lighter text-white">Name</h5>
                                            <p className="fs-2 fw-bold">John Doe</p>
                                        </div>
                                        <div className="col-12">
                                            <h5 className="fs-5 fw-lighter text-white">ID</h5>
                                            <p className="fs-2 fw-bold">v65z4df65d6</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container modalBandB d-flex mb-0">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            


        </div>
    )
}

export default Account