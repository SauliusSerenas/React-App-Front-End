import axios from "axios";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Translation} from "react-i18next";

export default function AddUser() {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Name is required!'),
            surname: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Surname is required!'),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
        }),
        onSubmit: async (values) => {
            await axios.post("/user", values);
            navigate("/");
        },
    });

    return (
        <Translation>
            {(t, {i18n}) => (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-center m-4">{t("eAdd")}</h2>

                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Name" className="form-label">
                                        {t("uName")}
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder={t("plchName")}
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="text-danger">{formik.errors.name}</div>
                                    ) : null}
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
                                        value={formik.values.surname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.surname && formik.errors.surname ? (
                                        <div className="text-danger">{formik.errors.surname}</div>
                                    ) : null}
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
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-danger">{formik.errors.email}</div>
                                    ) : null}
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