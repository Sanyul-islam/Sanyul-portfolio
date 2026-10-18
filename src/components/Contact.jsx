"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);

      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contacts"
      className="mx-auto max-w-content px-6 py-10 md:px-10"
    >
      <p className="section-eyebrow">Contacts</p>

      <div className="mt-6 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display header-gradient text-3xl font-bold leading-tight md:text-4xl">
            Have a project?
            <br />
            Let&apos;s talk!
          </h2>

          <p className="mt-4 text-xl text-muted">
            <BsWhatsapp className="mr-2 inline-block" />
            <a
              href="https://wa.me/8801777554471"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              +880 1777-554471
            </a>
          </p>
        </div>

        <div className="border border-accent p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
                maxLength={100}
                className="w-full border-b border-panelLine bg-transparent pb-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                maxLength={254}
                className="w-full border-b border-panelLine bg-transparent pb-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Message"
                required
                maxLength={5000}
                className="w-full resize-none border-b border-panelLine bg-transparent pb-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="btn-filled mt-2 inline-block disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
