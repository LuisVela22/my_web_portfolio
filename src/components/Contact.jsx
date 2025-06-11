import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert("Thank you! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error("Email error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      variants={slideIn("up", "tween", 0.2, 1)}
      className='w-full flex justify-center items-center'
    >
      <div className='w-full max-w-3xl bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-white/20'>
        <div className='mb-10 text-center'>
          <p className='text-lg text-secondary font-medium'>Let’s talk</p>
          <h3 className='text-3xl sm:text-4xl font-bold text-white mt-2'>
            Send me a message
          </h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-6'
        >
          <div>
            <label className='block text-white mb-1 font-medium'>Your Name</label>
            <input
              required
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='John Doe'
              className='w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
            />
          </div>

          <div>
            <label className='block text-white mb-1 font-medium'>Your Email</label>
            <input
              required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='you@example.com'
              className='w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
            />
          </div>

          <div>
            <label className='block text-white mb-1 font-medium'>Message</label>
            <textarea
              required
              name='message'
              rows='6'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me something...'
              className='w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='bg-blue-600 hover:bg-blue-500 transition-all text-white font-bold py-3 px-8 rounded-xl shadow-md disabled:opacity-50'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
