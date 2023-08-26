"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function PostSender() {
  const notify = () => {
    toast.info('Post published on the Internet', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
      title:null,
      content:null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      notify();
    },
  });

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-4 md:w-[30%]">
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Username"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="my-4 md:w-[30%]">
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="my-4 md:w-[30%]">
            <TextField
              fullWidth
              id="title"
              name="title"
              label="title"
              type="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </div>
          <div className="my-4 md:w-[70%]">
            <TextField
              fullWidth
              id="content"
              name="content"
              label="content"
              type="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.content && Boolean(formik.errors.content)}
              helperText={formik.touched.content && formik.errors.content}
            />
          </div>
          <Button className="md:w-[20%]" variant="outlined" fullWidth type="submit">
            Submit
          </Button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default PostSender;
