// src/pages/contact.tsx
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const ContactPage = () => {
  return (
    <PageWrapper
      title="Contact Us | Vausly Media"
      description="Get in touch with the Vausly Media team for inquiries, content suggestions, or reporting issues."
      keywords="contact, vausly media, email, message, support"
    >
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1e1b4b] to-[#3f0d63] text-white px-4 py-20">
        <div className="max-w-2xl mx-auto w-full bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-none">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

          {/* Intro Text */}
          <p className="text-sm text-white/80 text-center mb-8">
            Got a content idea, feedback, or collaboration request? We'd love to hear from you. <br />
            You can also use this form to report issues or something else!
          </p>
      
          <form
            action="https://formspree.io/f/meoapoza"
            method="POST"
            className="space-y-6"
          >
            {/* Redirect after submit */}
            <input type="hidden" name="_redirect" value="https://www.vausly.com" />

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 transition-colors py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

            <div className="text-center mt-4">
              <p>
                Or reach us via our bio link:{" "}
                <a
                  href="https://link.vausly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline hover:text-purple-300 transition"
                >
                  link.vausly.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
