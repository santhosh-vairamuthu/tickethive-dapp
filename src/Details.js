import React, { useState } from 'react';

const Details = () => {

    const [count , setCount] = useState(1);
    const increaseCount = () => { setCount(count+1);};
    const decreaseCount = () => { if(count > 1)setCount(count-1);};

    return (
        <div className='container Details'>
            <div className='row row-cols-2 container-fluid mt-4 p-2'>
                <div className='container col-12 mt-4 mb-4'>
                    <h2 className='fs-1 fw-semibold'>ARR Concert</h2>
                    <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                    </div>
                <div class='container col-8 rounded-5 banner'>
                </div>
                <div className='container col-4 rounded-4'>
                    <form className='form'>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label for="tickets" className="form-label">Person</label>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder={count + " Person"} value={count} required/>
                                <button className="btn bi bi-plus-lg" type="button" onClick={increaseCount}></button>
                                <button className="btn bi bi-dash-lg" type="button" onClick={decreaseCount}></button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="class" className="form-label">Class</label>
                            <select class="form-select" id="class" >
                                <option selected>Select a class</option>
                                <option value="1">First Class</option>
                                <option value="2">Second Class</option>
                                <option value="3">Third Class</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                            <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                        </div>
                        <div className='mb-3'>
                            <button className="btn" type="submit">Book</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container p-4'>
                <p className='aboutEvent fs-5 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate at iusto est sapiente a repellat. Animi, adipisci at unde dicta laborum fuga ipsa, quaerat, impedit pariatur magni rerum porro illo.</p>
                <div className='container stars mt-2 mb-2'>
                    <div class="d-flex flex-row align-items-center">
                        <img src="https://placehold.co/80x80" class="rounded-circle" />
                        <p class="fw-normal">Heading</p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Details