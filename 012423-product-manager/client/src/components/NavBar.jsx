import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <span className="navbar-brand">Product Manager</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/products">All Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/products/new">Create your product</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
