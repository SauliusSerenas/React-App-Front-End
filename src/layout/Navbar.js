import React from "react";
import {Link} from "react-router-dom";
import {i18n} from "../index";

const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);

}
export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {i18n.t("eList")}
                    </Link>

                    <Link className="btn btn-outline-light" to="/adduser">
                        {i18n.t("eAdd")}
                    </Link>
                </div>

                <select className="btn btn-outline-light"
                        name={i18n.t("language")}
                        onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="lt">Lietuvių</option>
                </select>
            </nav>
        </div>
    );
}