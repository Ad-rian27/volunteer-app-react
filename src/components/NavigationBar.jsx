import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg navbar-dark shadow-sm py-3"
                style={{ backgroundColor: "#198754" }}
            >
                <div className="container">

                    <Link className="navbar-brand fw-bold fs-4" to="/">
                        NSS Volunteer Management
                    </Link>

                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item mx-2">
                                <Link
                                    className="btn btn-outline-light rounded-pill px-4 fw-semibold"
                                    to="/"
                                >
                                    Add Volunteer
                                </Link>
                            </li>

                            <li className="nav-item mx-2 mt-2 mt-lg-0">
                                <Link
                                    className="btn btn-light text-success rounded-pill px-4 fw-semibold"
                                    to="/view"
                                >
                                    View Volunteers
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default NavigationBar