import React from 'react'

const Events = () => {
    return (
        <div className='container-fluid Event'>

            <form className='formSearch mt-5 mb-4'>
                <label htmlFor='searchField'></label>
                <input id="searchField" name="searchField" type="text" placeholder=' Search events' onChange={(e) => { e.preventDefault(); }}></input>
            </form>

            <h3 className='mt-5 mb-2'>Showing all 5 events</h3>
            
            <div className=' p-5 row row-cols-2 '>
                <div className='col'>
                    <div className="card mb-3 col p-1 rounded-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="assets/banner.jpeg" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ARR Concert</h5>
                                    <p className="card-text ">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                    <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                    <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className='btn'>More <i class="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3 col p-1 rounded-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="assets/banner.jpeg" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ARR Concert</h5>
                                    <p className="card-text ">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                    <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                    <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className='btn'>More <i class="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col'>
                    <div className="card mb-3 col p-1 rounded-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="assets/banner.jpeg" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ARR Concert</h5>
                                    <p className="card-text ">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                    <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                    <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className='btn'>More <i class="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col'>
                    <div className="card mb-3 col p-1 rounded-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="assets/banner.jpeg" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ARR Concert</h5>
                                    <p className="card-text ">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                    <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                    <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className='btn'>More <i class="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col'>
                    <div className="card mb-3 col p-1 rounded-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="assets/banner.jpeg" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ARR Concert</h5>
                                    <p className="card-text ">Immerse in ARR's magical melodies for an unforgettable concert experience!</p>
                                    <p className="card-text" style={{marginBottom : "-0.2%"}}><i class="bi bi-geo-alt-fill"></i> <small className="text-body-secondary fw-bolder"> Nehru Stadium, Chennai</small></p>
                                    <p className="card-text"><i class="bi bi-calendar"></i> <small className="text-body-secondary fw-bolder"> 13<sup>th</sup>July 2024</small></p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className='btn'>More <i class="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events