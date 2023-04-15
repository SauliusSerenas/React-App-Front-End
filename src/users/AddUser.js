import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

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
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">{i18n.t("eAdd")}</h2>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                {i18n.t("uName")}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder={i18n.t("plchName")}
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
                                {i18n.t("uSurname")}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder={i18n.t("plchSurname")}
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
                                {i18n.t("uEmail")}
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder={i18n.t("plchMail")}
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