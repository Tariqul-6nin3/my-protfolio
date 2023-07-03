import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyoe58p",
        "template_z4u44n4",
        form.current,
        "Qsfh02VB88ReApTUx"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="max-w-6xl mx-auto ">
      <h1 className="md:text-4xl mx-auto  text-gradient-primary text-2xl font-bold">
        __Let's Work Together__
      </h1>
      <div className="flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" px-5 py-4 rounded-t-2xl md:ml-5  ">
          <div className="mb-6">
            <label className="block text-white font-bold mb-2" htmlFor="email">
              Name
            </label>
            <input
              className="bg-form border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded w-full py-4 px-3 text-white leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              name="name"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-form border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded w-full py-4 px-3 text-white leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-2" htmlFor="email">
              Message
            </label>
            <textarea
              className="bg-form border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded w-full py-4 px-3 text-white  leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
              name="message"
              id="message"
              type="message"
              cols="68"
              rows="10"></textarea>
          </div>
          <div className="mb-6 text-center">
            <button
              className=" bg-form mt-5  text-white font-semibold py-4 px-8 w-9/12 md:w-1/2 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
