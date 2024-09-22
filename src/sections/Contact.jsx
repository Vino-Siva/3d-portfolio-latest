import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_1w71smx",
        "template_1x5200m",
        {
          from_name: form.name,
          to_name: "Vinoth",
          from_email: form.email,
          to_email: "vinoth@vinsi.pro",
          message: form.message,
        },
        "7pawjrloNec1wcDl9"
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);

      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          aria-hidden={true}
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s Get In Touch</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing one, or bring your unique idea to life, I&apos;m here to
            help. I&apos;m open to new opportunities and challenges. Feel free
            to contact me.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-7 mt-12"
          >
            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Bruce Wayne"
                className="field-input"
              />
            </label>
            <label htmlFor="email" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="bruce@wayne-enterprises.com"
                className="field-input"
              />
            </label>
            <label htmlFor="message" className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Let's work together!"
                className="field-input"
              ></textarea>
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
