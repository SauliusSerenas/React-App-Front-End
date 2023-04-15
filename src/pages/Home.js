import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {Translation} from "react-i18next";

export default function Home() {
    const [users, setUsers] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`/user/${id}`);
        loadUsers();
    };

    return (
        <Translation>
            {(t, {i18n}) => (
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">{t("uNumber")}</th>
                                <th scope="col">{t("uName")}</th>
                                <th scope="col">{t("uSurname")}</th>
                                <th scope="col">{t("uEmail")}</th>
                                <th scope="col">{t("uAction")}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary mx-2"
                                            to={`/viewuser/${user.id}`}
                                        >
                                            {t("uView")}
                                        </Link>
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/edituser/${user.id}`}
                                        >
                                            {t("uEdit")}
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            {t("uDelete")}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </Translation>
    );
}