"use client";

import Container from "@/app/components/Container";
// import { post } from "@/utils/post";
import { default as axios } from "axios";
import { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import PostDetails from "./PostDetails";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Values {
  firstName: string;
  lastName: string;
  comment: string;
}
const Horizontal = () => {
  return <hr className="w-[90%] my-4" />;
};
function PostComments(postID: any) {
  const notify = () => {
    toast.success('We Received your Comment!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/comments")
      .then((res) => res.data) // Extract the data from the response
      .then((data) => {
        setComments(data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error retrieving posts:", error);
      });
  }, [loaded]);
  console.log(comments);
  return (
    <div>
      {loaded ? (
        <Container>
          <div className="flex md:flex-row relative flex-col justify-between">


            <div className="flex md:w-[45%] border-[2px] h-[480px] border-slate-400 md:p-10 pt-8 p-5 rounded-[45px] md:sticky top-10 bottom-[320px] mb-10">
              <div>
                <h1 className="mb-6 text-xl font-semibold ">
                  Leave A Comment ..
                </h1>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    comment: "",
                  }}
                  onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                  ) => {
                    setTimeout(() => {
                      // alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 500);
                  }}
                >
                  <Form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName">First Name</label>
                      <Field
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        className="p-2 rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName">Last Name</label>
                      <Field
                        className="p-2 rounded-[10px]"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="comment">comment</label>
                      <Field
                        className="p-2 rounded-[10px]"
                        id="comment"
                        name="comment"
                        placeholder="your comment"
                        type="text"
                      />
                    </div>

                    <button className="border-[1.5px] rounded-[10px] border-sky-900 p-2 mt-4 w-[50%] mx-[auto]" onClick={notify} type="submit">Submit</button>
                    <ToastContainer />
                  </Form>
                </Formik>
              </div>
            </div>


            <div className=" justify-self-center md:w-[45%]">
              <h2 className="text-3xl font-medium text-slate-700 mb-6">
                POST COMMENTS
              </h2>
              <div>
                {comments.map((item: any) => (
                  <>
                    <div className="flex flex-col gap-1 text-slate-500 text-sm">
                      <Horizontal />
                      <div className="text-justify ">#{item.id}</div>
                      <div>
                        <span className="">USER : {item.userId}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Mentioned :</span>
                      </div>
                      <div>
                        <span className="">{item.comment}</span>
                      </div>

                      <div className="text-teal-600 cursor-pointer flex items-center gap-1 my-2">
                        <p>Reply </p>
                        <div className="">
                          <MdArrowForward />
                        </div>
                      </div>
                      <Horizontal />
                    </div>
                  </>
                ))}
              </div>
            </div>


          </div>
        </Container>
      ) : (
        <div className="flex justify-center">loading .. </div>
      )}
    </div>
  );
}

export default PostComments;
