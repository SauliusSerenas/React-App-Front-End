import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import i18n from "i18next";

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
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">{i18n.t("uNumber")}</th>
                        <th scope="col">{i18n.t("uName")}</th>
                        <th scope="col">{i18n.t("uSurname")}</th>
                        <th scope="col">{i18n.t("uEmail")}</th>
                        <th scope="col">{i18n.t("uAction")}</th>
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
                                    {i18n.t("uView")}
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/edituser/${user.id}`}
                                >
                                    {i18n.t("uEdit")}
                                </Link>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    {i18n.t("uDelete")}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}