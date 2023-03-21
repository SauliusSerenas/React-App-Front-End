import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Employees list
                    </Link>
                    <button
                        className="navbar-toggle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggle-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light" to="/adduser">
                        Add Employee
                    </Link>
                </div>
            </nav>
        </div>
    );
}
//testas naujas