import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Translation} from "react-i18next";

export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
    });

    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, []);

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
                            <h2 className="text-center m-4">{t("eView")}</h2>

                            <div className="card">
                                <div className="card-header">
                                    Details of user id : {user.id}
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>{t("uName")}:</b>
                                            {user.name}
                                        </li>
                                        <li className="list-group-item">
                                            <b>{t("uSurname")}:</b>
                                            {user.surname}
                                        </li>
                                        <li className="list-group-item">
                                            <b>{t("uEmail")}:</b>
                                            {user.email}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link className="btn btn-primary my-2" to={"/"}>
                                {t("eBack")}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </Translation>
    );
}