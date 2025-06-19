// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a8jwh02",
        "template_s5slz7t",
        form.current,
        "2vA6_5UEuT3AhFHq8"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        alert("Something went wrong. Try again later.");
        console.error(err);
      });
  };

  return (
    <section className="bg-white text-gray-800">
      <div className="w-full max-w-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
          <p className="text-gray-600">
            Want to get in touch? Send me a message below!
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-[15px]">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="block w-[32rem] mx-auto px-4 py-2.5 border-2 border-gray-300 rounded
                       focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none
                       transition-colors duration-200"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="block w-[32rem] mx-auto px-4 py-2.5 border-2 border-gray-300 rounded
                       focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none
                       transition-colors duration-200"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="block w-[32rem] mx-auto px-4 py-2.5 border-2 border-gray-300 rounded 
                       resize-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500
                       outline-none transition-colors duration-200"
          ></textarea>

          <div className="flex justify-center pt-2">
<button
  type="submit"
  className="bg-[#00D1D1] text-white py-2.5 px-8 rounded text-sm hover:bg-[#00B4B4] 
             transition-colors duration-200 border-2 border-transparent
             hover:border-[#00B4B4] focus:outline-none focus:ring-2 focus:ring-cyan-200"
>
  Message me
</button>
          </div>
        </form>

        {sent && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center text-sm border-2 border-green-200">
            ✅ Message sent! I'll get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
}