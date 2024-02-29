
const Account = () => {

    return (
        <div className="container-fluid Account">
            <div className="container py-5 ">
                <h1 className="fs-1 mt-5">Hello John Doe,</h1>
                <hr className="border border-dark border-2 opacity-75 mt-5"></hr>
                <div className="container p-2 row">
                    <div className="col">
                        <div className="card text-center" style={{width : "50%", marginLeft : "25%"}}>
                            <div className="card-body">
                                <h5 className="card-title">ARR Concert</h5>
                                <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#ticketModal">View Ticket <i class="bi bi-eye-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="modal fade" id="ticketModal" tabindex="-1" aria-labelledby="ticketModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="box">
                            Lorem ipsum dolor sit amet, consectetur adip
                        </div>
                    </div>
                </div>
            </div>

            


        </div>
    )
}

export default Account