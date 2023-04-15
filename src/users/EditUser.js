import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Translation} from "react-i18next";

export default function EditUser() {
    let navigate = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
    });

    const {name, surname, email} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`/user/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`/user/${id}`);
        setUser(result.data);
    };

    return (
        <Translation>
            {(t, {i18n}) => (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-center m-4">{t("eEdit")}</h2>

                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="Name" className="form-label">
                                        {t("uName")}
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder={t("plchName")}
                                        name="name"
                                        value={name}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Surname" className="form-label">
                                        {t("uSurname")}
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder={t("plchSurname")}
                                        name="surname"
                                        value={surname}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">
                                        {t("uEmail")}
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder={t("plchMail")}
                                        name="email"
                                        value={email}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-outline-primary">
                                    {t("uSubmit")}
                                </button>
                                <Link className="btn btn-outline-danger mx-2" to="/">
                                    {t("uCancel")}
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Translation>
    );
}
