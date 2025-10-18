"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import IDEWindow from "./IDEWindow";

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background-lighter"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-orange mb-3 tracking-tight px-4">
            <span className="code-bracket">{'< '}</span>
            <span className="code-keyword">Contact Me</span>
            <span className="code-bracket">{' />'}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent-secondary mx-auto mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm md:text-base text-text-muted max-w-2xl mx-auto px-4">
            <span className="code-comment">{'// '}</span>
            <span className="text-foreground">Have a project in mind or just want to chat? Feel free to reach out!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <IDEWindow title="contact_me.md">
              <div className="p-4 sm:p-5 font-mono text-sm">
                <div className="space-y-1">
                  <div>
                    <span className="text-blue">#</span>
                    <span className="text-foreground"> Get In Touch</span>
                  </div>

                  {/* Paragraph */}
                  <div>
                    <span className="text-foreground">
                      I'm open to new projects, collaborations, and speaking opportunities. If you have an idea or
                      would like to work together, let's connect.
                    </span>
                  </div>

                  {/* Bullets */}
                  <div>
                    <span className="text-blue">-</span>
                    <span className="text-foreground"> Project inquiries</span>
                  </div>
                  <div>
                    <span className="text-blue">-</span>
                    <span className="text-foreground"> Consulting and collaboration</span>
                  </div>
                  <div>
                    <span className="text-blue">-</span>
                    <span className="text-foreground"> General questions</span>
                  </div>

                  {/* Inline code for call-to-action */}
                  <div className="mt-2">
                    <span className="text-foreground">Use the form to </span>
                    <span className="code-bracket">`</span>
                    <span className="code-function">sendMessage()</span>
                    <span className="code-bracket">`</span>
                    <span className="text-foreground"> or reach out via the details below.</span>
                  </div>
                </div>
              </div>
            </IDEWindow>

            {/* Contact Details */}
            <IDEWindow title="contact_details.ts">
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm">
                <div className="space-y-3">
                  {/* Email */}
                  <div>
                    <div>
                      <span className="code-keyword text-blue">const</span>
                      <span className="text-foreground"> </span>
                      <span className="code-variable text-purple">email</span>
                      <span className="text-foreground"> = </span>
                      <span className="code-bracket text-yellow">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <div>
                        <span className="text-blue">type</span>
                        <span className="text-foreground">: </span>
                        <span className="code-string text-green">"Email"</span>
                        <span className="text-foreground">,</span>
                      </div>
                      <div>
                        <span className="text-blue">value</span>
                        <span className="text-foreground">: </span>
                        <a
                          href="mailto:harrygreentree@icloud.com"
                          className="code-string text-green hover:text-accent transition-colors duration-200 underline decoration-green/30 hover:decoration-accent/50"
                        >
                          "harrygreentree@icloud.com"
                        </a>
                      </div>
                    </div>
                    <div>
                      <span className="code-bracket text-yellow">{'}'}</span>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <div>
                      <span className="code-keyword text-blue">const</span>
                      <span className="text-foreground"> </span>
                      <span className="code-variable text-purple">phone_number</span>
                      <span className="text-foreground"> = </span>
                      <span className="code-bracket text-yellow">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <div>
                        <span className="text-blue">type</span>
                        <span className="text-foreground">: </span>
                        <span className="code-string text-green">"Phone Number"</span>
                        <span className="text-foreground">,</span>
                      </div>
                      <div>
                        <span className="text-blue">value</span>
                        <span className="text-foreground">: </span>
                        <a
                          href="tel:+447366405543"
                          className="code-string text-green hover:text-accent transition-colors duration-200 underline decoration-green/30 hover:decoration-accent/50"
                        >
                          "07366 405543"
                        </a>
                      </div>
                    </div>
                    <div>
                      <span className="code-bracket text-yellow">{'}'}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <div>
                      <span className="code-keyword text-blue">const</span>
                      <span className="text-foreground"> </span>
                      <span className="code-variable text-purple">location</span>
                      <span className="text-foreground"> = </span>
                      <span className="code-bracket text-yellow">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <div>
                        <span className="text-blue">type</span>
                        <span className="text-foreground">: </span>
                        <span className="code-string text-green">"Location"</span>
                        <span className="text-foreground">,</span>
                      </div>
                      <div>
                        <span className="text-blue">value</span>
                        <span className="text-foreground">: </span>
                        <span className="code-string text-green">"Southampton, UK"</span>
                      </div>
                    </div>
                    <div>
                      <span className="code-bracket text-yellow">{'}'}</span>
                      <span className="text-foreground">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </IDEWindow>
          </div>

          {/* Contact Form */}
          <IDEWindow title="message.ts">
            <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3 sm:space-y-4">
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
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors text-xs sm:text-sm"
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
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors text-xs sm:text-sm"
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
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors text-xs sm:text-sm"
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
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground transition-colors resize-none text-xs sm:text-sm"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full px-8 py-3 border-2 border-pink text-pink rounded-lg font-medium tracking-wide text-sm md:text-base hover:bg-pink/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" && <span>Sending...</span>}
                {status === "sent" && <span>✓ Message Sent!</span>}
                {status === "idle" && (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="code-function">sendMessage()</span>
                  </span>
                )}
                {status === "error" && <span>Error - Try Again</span>}
              </button>
            </form>
          </IDEWindow>
        </div>
      </div>
    </section>
  );
}
