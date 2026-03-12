import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, Mail, Search, Menu, X } from "lucide-react";

import logoPath from "./assets/bryantel-logo.png";

function NavLinkItem({
  to,
  children,
  dropdown = false,
}: {
  to: string;
  children: React.ReactNode;
  dropdown?: boolean;
}) {
  return (
    <Link
      to={to}
      className="group relative inline-flex items-center gap-1 text-[15px] font-medium text-white/90 transition hover:text-white"
    >
      <span>{children}</span>
      {dropdown && (
        <ChevronDown className="h-4 w-4 opacity-70 transition group-hover:translate-y-0.5" />
      )}
      <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function TopBar() {
  return (
    <div className="relative border-b border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.08),_transparent_28%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-5"
        >
          <Link to="/">
            <img
              src={logoPath}
              alt="Bryantel Ltd."
              className="h-14 w-auto object-contain sm:h-16"
            />
          </Link>

          <div className="hidden text-[15px] text-slate-500 lg:block">
            Enterprise Technology • Regulatory Solutions • Product Innovation
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-wrap items-center gap-4 text-sm text-slate-700"
        >
          <span className="flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-slate-100">
            <Phone className="h-4 w-4 text-amber-600" />
            +123 456 7890
          </span>

          <span className="flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-slate-100">
            <Mail className="h-4 w-4 text-amber-600" />
            info@bryantel.com
          </span>

          <button className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md">
            <Search className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
   { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    // { label: "Solutions", to: "/solutions", dropdown: true },
    { label: "Products", to: "/products", dropdown: true },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(90deg,rgba(6,22,67,0.98),rgba(12,33,92,0.96),rgba(6,22,67,0.98))] text-white shadow-[0_10px_30px_-18px_rgba(2,8,23,0.9)] backdrop-blur-md">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <Link to="/" className="md:hidden">
          <img
            src={logoPath}
            alt="Bryantel Ltd."
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <NavLinkItem
              key={item.label}
              to={item.to}
              dropdown={item.dropdown}
            >
              {item.label}
            </NavLinkItem>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link
          to="/contact"
          className="hidden rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(180,83,9,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(180,83,9,0.9)] md:inline-flex"
        >
          Request Consultation
        </Link>
      </div>

      {open && (
        <div className="relative border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-700 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  return (
    <>
      <TopBar />
      <Navbar />
    </>
  );
}