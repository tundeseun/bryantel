// import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  // Sparkles,
  // Globe2,
  BadgeCheck,
  // Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

// const highlights = [
//   {
//     title: "Innovation-Driven",
//     icon: <Sparkles className="h-5 w-5" />,
//   },
//   {
//     title: "Secure & Trusted",
//     icon: <ShieldCheck className="h-5 w-5" />,
//   },
//   {
//     title: "Global Standards",
//     icon: <Globe2 className="h-5 w-5" />,
//   },
//   {
//     title: "Enterprise Ready",
//     icon: <Cpu className="h-5 w-5" />,
//   },
// ];

export default function WhyBryantelPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col overflow-hidden">
      <SiteHeader />

      <main className="relative flex-1 overflow-hidden">
        <section className="relative h-full min-h-[calc(100vh-140px)] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#07122f_35%,#0f172a_65%,#111827_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_26%),radial-gradient(circle_at_center,rgba(14,165,233,0.10),transparent_22%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="relative mx-auto grid h-full max-w-7xl gap-8 px-5 py-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Why Bryantel
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white md:text-5xl xl:text-6xl">
                Powering business growth through
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  innovative technology
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Bryantel delivers secure, scalable, and enterprise-focused
                technology solutions that help organizations improve efficiency,
                enhance customer experience, and achieve sustainable growth with
                confidence.
              </p>

              {/* <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-100">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div> */}
<br></br><br></br><br></br><br></br>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-950/40 transition hover:scale-[1.02]"
                >
                  Talk to Us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-indigo-500/10 blur-3xl" />

              <div className="relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/6 p-4 shadow-2xl backdrop-blur-2xl md:p-5">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-br from-cyan-500/12 via-blue-500/10 to-indigo-500/10 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
                        Vision
                      </div>
                    </div>

                    <p className="text-xl font-bold leading-snug text-white md:text-2xl">
                      To become the leading technology company by providing
                      innovative solutions that drive global business
                      advancement.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-slate-900/40 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-[0.28em] text-indigo-200">
                        Mission
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-300 md:text-[15px]">
                      To provide the best service using the latest technology,
                      by highly skilled and motivated staff, supplying
                      high-quality products at competitive prices in a trusted
                      and secure manner.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <div className="text-2xl font-extrabold text-cyan-300">
                        Secure
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        Trusted delivery
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <div className="text-2xl font-extrabold text-blue-300">
                        Smart
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        Modern solutions
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <div className="text-2xl font-extrabold text-indigo-300">
                        Scalable
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        Built for growth
                      </div>
                    </div>
                  </div>
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