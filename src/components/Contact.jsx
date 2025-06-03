import { useState } from "react";

const Contact = ({ t }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your backend or email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center"
    >
      <div className="bg-white/70 dark:bg-zinc-900/80 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t.contact_your_name}
            required
            className="rounded-xl px-4 py-2 text-base bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t.contact_your_email}
            required
            className="rounded-xl px-4 py-2 text-base bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t.contact_your_message}
            required
            rows={4}
            className="rounded-xl px-4 py-2 text-base bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-green-400 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition resize-none"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-full text-base bg-gradient-to-r from-green-600 to-blue-500 text-white font-bold shadow-lg hover:from-green-700 hover:to-blue-600 transition"
          >
            {t.contact_send_message}
          </button>
          {sent && (
            <div className="text-center text-green-700 font-semibold mt-2 text-base">
              {t.contact_thank_you}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
