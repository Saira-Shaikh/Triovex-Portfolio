import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
  X,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ---------------------------------------------------------------------------
// EmailJS setup — copy these three values from https://dashboard.emailjs.com
//   Service ID  : Email Services  -> the Gmail service you connected
//   Template ID : Email Templates -> the template you created
//   Public Key  : Account -> General
// The public key is meant to be shipped in client-side code.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = "service_wp4e6xl";
const EMAILJS_TEMPLATE_ID = "template_zft4fp2";
const EMAILJS_PUBLIC_KEY = "VwBdFXLCRkMMnfy2S";

const CONTACT_EMAIL = "shyksaira26@gmail.com";

const inputClass =
  "w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors";

const labelClass = "block text-sm font-medium text-gray-400 mb-2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  const isSending = status === "sending";
  const showDialog = status === "sent" || status === "error";

  const services = [
    "UI/UX Design",
    "Web Development",
    "Mobile Apps",
    "Backend Development",
    "AI Integration",
    "Graphic Design",
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // The keys below must match the {{variables}} in your EmailJS template.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name, email, subject, message },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error"); // form keeps its values so the visitor can retry
    }
  };

  const closeDialog = () => setStatus("idle");

  // Close the dialog with the Escape key
  useEffect(() => {
    if (!showDialog) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setStatus("idle");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showDialog]);

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Have an <span className="text-purple-400">Idea?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Let's turn it into a digital product.
          </p>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Whether you need a website, mobile application, UI/UX design,
            backend system, or AI-powered feature, tell us what you're building
            and we'll discuss the best way to approach it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className={labelClass}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClass}
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform ${
                  isSending
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:from-purple-600 hover:to-pink-600 hover:-translate-y-1"
                }`}
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Mail"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Mail className="text-purple-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">{CONTACT_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Phone className="text-purple-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+92 332 3251 178</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">
                  What you can contact us for:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-4">
                  Connect on LinkedIn
                </p>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/saira2004"
                    className="bg-gray-700 hover:bg-purple-500 p-3 rounded-lg transition-colors duration-200"
                  >
                    <FaLinkedinIn className="text-white h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sent / failed dialog */}
      {showDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={closeDialog}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-8 text-center shadow-2xl"
          >
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "sent" ? (
              <>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                  <CheckCircle2 className="h-8 w-8 text-purple-400" />
                </div>
                <h3
                  id="contact-dialog-title"
                  className="text-2xl font-bold text-white mb-3"
                >
                  Mail sent
                </h3>
                <p className="text-gray-400 mb-8">
                  Thanks for reaching out. Your message is on its way and we'll
                  get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={closeDialog}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                  <AlertCircle className="h-8 w-8 text-red-400" />
                </div>
                <h3
                  id="contact-dialog-title"
                  className="text-2xl font-bold text-white mb-3"
                >
                  Mail not sent
                </h3>
                <p className="text-gray-400 mb-8">
                  Your message couldn't be sent. Please try again, or email us
                  directly at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-purple-400 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={closeDialog}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Try again
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
