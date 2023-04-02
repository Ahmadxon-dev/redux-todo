import React from 'react';

const Navbar = () => {
    return (
        <div className="container-fluid bg-dark">
            <header className="d-flex flex-wrap justify-content-center p-3 px-5 mb-4  ">
                <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4 text-white">Redux-News</span>
                <li className="nav-item list-unstyled text-white"><a href="#" className="nav-link " aria-current="page">Features</a></li>

            </header>
        </div>

    );
};

export default Navbar;