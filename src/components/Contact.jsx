import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
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
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center items-center'>
      {/* FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              required
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              aria-label='Your Name'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='example@email.com'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              aria-label='Your Email'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              required
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
              aria-label='Your Message'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all hover:bg-tertiary/80 disabled:opacity-50'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
