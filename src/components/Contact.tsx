"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const interests = [];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background-lighter"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange mb-4 tracking-tight px-4">
            <span className="code-bracket">{'< '}</span>
            <span className="code-keyword">Contact Me</span>
            <span className="code-bracket">{' />'}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent-secondary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted max-w-2xl mx-auto px-4">
            <span className="code-comment">{'// '}</span>
            <span className="text-foreground">Have a project in mind or just want to chat? Feel free to reach out!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="ide-panel">
              <div className="ide-panel-header">
                <div className="ide-panel-dot red"></div>
                <div className="ide-panel-dot yellow"></div>
                <div className="ide-panel-dot green"></div>
                <span className="text-text-muted text-xs sm:text-sm ml-2">info.json</span>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-4 sm:mb-6 break-words">
                  <span className="code-keyword">let</span>{' '}
                  <span className="code-variable">connection</span>
                </h3>
                <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  <span className="code-comment">{'/* '}</span>
                  <br />
                  <span className="code-comment ml-2 sm:ml-4">I'm always open to discussing new projects, creative ideas, or</span>
                  <br />
                  <span className="code-comment ml-2 sm:ml-4">opportunities to be part of your vision.</span>
                  <br />
                  <span className="code-comment">{' */'}</span>
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="ide-panel hover:border-orange transition-all"
                >
                  <div className="p-3 sm:p-4 flex items-start space-x-3 sm:space-x-4">
                    <div className="text-orange mt-1 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-blue mb-1 text-sm sm:text-base">
                        <span className="code-string">"{info.title}"</span>
                        <span className="text-foreground">: </span>
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-green hover:opacity-80 transition-opacity text-sm sm:text-base break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-muted text-sm sm:text-base">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="ide-panel">
            <div className="ide-panel-header">
              <div className="ide-panel-dot red"></div>
              <div className="ide-panel-dot yellow"></div>
              <div className="ide-panel-dot green"></div>
              <span className="text-text-muted text-xs sm:text-sm ml-2">message.ts</span>
            </div>
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-blue mb-2"
                >
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">name</span>
                  <span className="text-foreground"> = </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-blue mb-2"
                >
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">email</span>
                  <span className="text-foreground"> = </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium text-blue mb-2"
                >
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">subject</span>
                  <span className="text-foreground"> = </span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-blue mb-2"
                >
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">message</span>
                  <span className="text-foreground"> = </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors resize-none text-sm sm:text-base"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-green text-background rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
              >
                {status === "sending" && "Sending..."}
                {status === "sent" && "✓ Message Sent!"}
                {status === "idle" && (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="code-function">sendMessage()</span>
                  </>
                )}
                {status === "error" && "Error - Try Again"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
