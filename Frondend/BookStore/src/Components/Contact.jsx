import React, { useState } from "react";


const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen mt-16 bg-gray-10 dark:bg-slate-900 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl "
      >
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          Contact Us
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white transition duration-300 bg-pink-500 rounded-md hover:bg-pink-600"
        >
          Send Message
        </button>
      </form>
    </div>
    </>
  )
}

export default Contact;
