import React, { useState } from 'react';

const Details = () => {

    const [count , setCount] = useState(1);
    const increaseCount = () => { setCount(count+1);};
    const decreaseCount = () => { if(count > 1)setCount(count-1);};

    return (
        <div className='container Details'>
            <div className='row row-cols-2 container-fluid mt-4 p-2'>
                <div className='container col-12 mt-4 mb-4'>
                    <h2 className='fs-1 fw-semibold title'>ARR Concert</h2>
                    <p className="card-text titleDate"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                    </div>
                <div class='container col-12 col-md-12 col-lg-8 rounded-5 banner col-sm-12 mb-2'>
                </div>
                <div className='container col-12 col-md-12 col-lg-4 col-sm-12 '>
                    <form className='form p-3 rounded-4'>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label for="tickets" className="form-label">Person</label>
                            <div className="input-group">
                                <input type="text" className="form-control iP" placeholder={count + " Person"} value={count} required/>
                                <button className="btn bi bi-plus-lg b1" type="button" onClick={increaseCount}></button>
                                <button className="btn bi bi-dash-lg b2" type="button" onClick={decreaseCount}></button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="class" className="form-label">Class</label>
                            <select class="form-select" id="class" required>
                                <option selected>Select a class</option>
                                <option value="1">First Class</option>
                                <option value="2">Second Class</option>
                                <option value="3">Third Class</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                            <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                            <p className="card-text"><i class="bi bi-alarm-fill"></i> <small className="text-body-secondary fw-bolder">5.30 PM  - 8.00 PM IST</small></p>
                        </div>
                        <div className='mb-3'>
                            <button className="btn submitForm" type="submit">Book</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container p-4'>
                <p className='aboutEvent mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate at iusto est sapiente a repellat. Animi, adipisci at unde dicta laborum fuga ipsa, quaerat, impedit pariatur magni rerum porro illo.</p>
                <div className='container stars mt-5 mb-2'>
                    <h5 className=''>Artists</h5>
                    <div className='container row'>
                        <div className='col-6 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container stars mt-5 mb-2'>
                    <h5 className=''>Special Guests</h5>
                    <div className='container row'>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-2'>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <img src="https://placehold.co/75x75" className="rounded-circle" alt='artist'/>
                                <p className="fw-normal fs-5">AR Rahman</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container rounded-2 p-5 instructions'>
                    <h2 className='fs-5 fs-bolder'>Instructions</h2>
                    <hr/>
                    <ol>
                        <li><p className='fw-lighter'>Food will be provided</p></li>
                        <li><p className='fw-lighter'>Parking available for both two and four wheelers</p></li>
                    </ol>

                </div>
            </div>
        </div>

    )
}

export default Details