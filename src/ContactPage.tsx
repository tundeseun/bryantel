// import React from "react";
import { Mail, MapPin, Phone, Send, Navigation, Clock3 } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07122f] text-white">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,122,255,0.22),transparent_25%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:4px_4px]" />

        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center">
            <h1 className="text-4xl font-semibold sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              We'd love to hear from you. YES WE CAN, TOGETHER.
            </p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/15">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/20">
                <Phone className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="mt-2 text-slate-300">+2348090742355</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/15">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/20">
                <Mail className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-2 text-slate-300">info@bryantel.com</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/15">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/20">
                <MapPin className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Office</h3>
              <p className="mt-2 text-slate-300">
                175 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria.
                <br />
                Eko Court Complex, Flat 21, Block C, 12th Floor.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM + MAP */}
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Send a message
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Let’s discuss your next solution
                </h2>
                <p className="mt-3 text-slate-300">
                  Reach out to Bryantel for enquiries, partnerships, support,
                  or to schedule a consultation with our team.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="text-sm text-slate-300">Full Name</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0d1b4b] px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0d1b4b] px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/30"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">Subject</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0d1b4b] px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">Message</label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0d1b4b] px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Beautiful Map Section */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:28px_28px]" />

              <div className="relative z-10 mb-4 flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#0b173f]/80 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-300">
                    Visit our office
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Bryantel Lagos Office
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                    175 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria.
                    <br />
                    Eko Court Complex, Flat 21, Block C, 12th Floor.
                  </p>
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/20 sm:flex">
                  <MapPin className="text-blue-400" size={28} />
                </div>
              </div>

              <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Bryantel Location"
                  src="https://www.google.com/maps?q=175%20Kofo%20Abayomi%20Street%20Victoria%20Island%20Lagos&output=embed"
                  className="h-[360px] w-full border-0 grayscale-[0.15] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="relative z-10 mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#0b173f]/80 p-4">
                  <div className="mb-2 flex items-center gap-2 text-blue-300">
                    <Clock3 size={18} />
                    <span className="text-sm font-medium">Office Hours</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b173f]/80 p-4">
                  <div className="mb-2 flex items-center gap-2 text-blue-300">
                    <Navigation size={18} />
                    <span className="text-sm font-medium">Directions</span>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=175+Kofo+Abayomi+Street+Victoria+Island+Lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-300"
                  >
                    Open in Google Maps
                    <Navigation size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}