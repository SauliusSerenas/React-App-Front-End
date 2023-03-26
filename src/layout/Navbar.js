import React from "react";
import { Link } from "react-router-dom";
import {i18n} from "../index";

const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    console.log("pakeitem kalba")
}
export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {i18n.t("eList")}
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
                        {i18n.t("eAdd")}
                    </Link>

                    <Link className="btn btn-outline-light" to="/signup">
                        Sign up
                    </Link>

                    <Link className="btn btn-outline-light" to="/signin">
                        Sign in
                    </Link>
                </div>

                <select name={i18n.t("language")}onChange={changeLanguage}>
                    <option value ="en">English</option>
                    <option value ="lt">Lietuvių</option>
                </select>
            </nav>
        </div>
    );
}
//customer