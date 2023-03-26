import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import i18n from "i18next";

export default function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
    });

    const { name, surname, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">{i18n.t("eAdd")}</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                {i18n.t("uName")}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder={i18n.t("plchName")}
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Surname" className="form-label">
                                {i18n.t("uSurname")}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder={i18n.t("plchSurname")}
                                name="surname"
                                name={surname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                {i18n.t("uEmail")}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder={i18n.t("plchMail")}
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            {i18n.t("uSubmit")}
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            {i18n.t("uCancel")}
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}