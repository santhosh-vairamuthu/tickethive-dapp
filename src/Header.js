// import React, { useState } from 'react';

function Header() {
    
    
    return (
        <header className="container Header mt-2">
            <nav className="navbar sticky-top ">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="navbar-brand d-flex align-items-center d-lg-flex flex-row gap-2" href="#">
                        <img src="logo.png" alt="Logo" width="30" height="28" className="d-inline-block align-text-top"/>
                        <span className="fw-bold text-white">Ticket Hive</span>
                    </a>
                    <ul className="navbar-nav d-flex flex-row justify-content-center gap-5">
                        <li className="nav-item ml-3">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="nav-link active fw-bolder" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ml-3 fw-bolder">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="nav-link" href="#">Events</a>
                        </li>
                        <li className="nav-item ml-3 fw-bolder">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="nav-link" href="#">Account</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex flex-row justify-content-end gap-3">
                        <li className="nav-item ">
                            <button className="btn login fw-bold">Log in</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn signUp">Signup</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    
    );
}
export default Header;