// import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";
import logoPath from "./assets/bryantel-logo.png";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#061338,#040d26)] text-slate-200">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-5 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.7fr_1.15fr_0.95fr] md:items-start">
          <div>
            <div className="inline-flex rounded-2xl border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(191,219,254,0.12))] p-[1px] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)]">
              <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(226,232,240,0.88))] px-4 py-3 backdrop-blur-sm">
                <img
                  src={logoPath}
                  alt="Bryantel Ltd."
                  className="h-9 w-auto object-contain brightness-110 contrast-125"
                />
              </div>
            </div>

            <p className="mt-3 max-w-sm text-xs leading-6 text-slate-300/85">
              Enterprise technology and digital products built for innovation
              across the Middle East and Africa.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <div className="mt-2 space-y-1.5 text-xs text-slate-300/85">
              <Link to="/about" className="block transition hover:text-white">
                About
              </Link>
              <Link to="/contact" className="block transition hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>

  <div className="text-center">
  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
    Products
  </h4>

  <div className="mt-3 flex justify-center gap-12 max-w-md mx-auto text-left text-xs text-slate-300/85">
    
    {/* Column 1 */}
    <div className="space-y-2">
      <Link to="/products" className="block transition hover:text-white">AMS</Link>
      <Link to="/products" className="block transition hover:text-white">Messaging</Link>
      <Link to="/products" className="block transition hover:text-white">EIR</Link>
      <Link to="/products" className="block transition hover:text-white">VOD</Link>
      <Link to="/products" className="block transition hover:text-white">Credit+</Link>
    </div>

    {/* Column 2 */}
    <div className="space-y-2">
      <Link to="/products" className="block transition hover:text-white">VAP</Link>
      <Link to="/products" className="block transition hover:text-white">AI Companion</Link>
      <Link to="/products" className="block transition hover:text-white">AI Caller ID</Link>
      <Link to="/products" className="block transition hover:text-white">Big Data</Link>
      <Link to="/products" className="block transition hover:text-white">MVNO</Link>
    </div>

  </div>
</div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <div className="mt-2 space-y-2 text-xs text-slate-300/85">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>+2348090742355</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-amber-400" />
                <span>info@bryantel.com</span>
              </div>

              <Link
                to="/contact"
                className="mt-1 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-700 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:-translate-y-0.5"
              >
                Contact
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-3 text-[11px] text-slate-400">
          © {new Date().getFullYear()} Bryantel Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}