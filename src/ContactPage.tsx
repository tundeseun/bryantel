// import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07122f] text-white">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,122,255,0.22),transparent_25%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:4px_4px]" />

        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center">
            <h1 className="text-5xl font-semibold">Contact Us</h1>
            <p className="mt-4 text-xl text-slate-300">
             We'd love to hear from you. YES WE CAN, TOGETHER
            </p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg border border-white/10">
              <Phone className="mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="mt-2 text-slate-300">
               +2348090742355
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg border border-white/10">
              <Mail className="mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-2 text-slate-300">
                info@bryantel.com
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg border border-white/10">
              <MapPin className="mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold">Office</h3>
              <p className="mt-2 text-slate-300">
                175 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria. 
                <br />
                Eko Court Complex, Flat 21, Block C.12th Floor.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Form */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-lg">

              <h2 className="text-3xl font-semibold mb-6">
                Send us a message
              </h2>

              <form className="space-y-5">

                <div>
                  <label className="text-sm text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg bg-[#0d1b4b] p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-lg bg-[#0d1b4b] p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg bg-[#0d1b4b] p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-lg bg-[#0d1b4b] p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

            {/* Map / Illustration */}
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg flex items-center justify-center p-10">

              <div className="text-center">
                <MapPin size={60} className="mx-auto text-blue-400" />
                <h3 className="mt-4 text-xl font-semibold">
                   175 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria. 
                <br />
                Eko Court Complex, Flat 21, Block C.12th Floor.
                </h3>
                <p className="mt-2 text-slate-300">
                  Visit our office or schedule a consultation with our team.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}