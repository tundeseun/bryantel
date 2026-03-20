import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import logoPath from "./assets/bryantel-logo.png";

type NavItem = {
  label: string;
  to: string;
  dropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

function NavLinkItem({
  to,
  children,
  dropdown = false,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  dropdown?: boolean;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium transition duration-300",
          isActive
            ? "bg-white/12 text-white shadow-[0_8px_24px_-12px_rgba(255,255,255,0.35)]"
            : "text-white/85 hover:bg-white/8 hover:text-white",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          <span>{children}</span>

          {dropdown && (
            <ChevronDown
              className={`h-4 w-4 transition duration-300 ${
                isActive ? "opacity-100" : "opacity-70 group-hover:translate-y-0.5"
              }`}
            />
          )}

          <span
            className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 transition-all duration-300 ${
              isActive ? "w-8 opacity-100" : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
            }`}
          />
        </>
      )}
    </NavLink>
  );
}

export function TopBar() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.10),_transparent_28%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Link to="/" className="shrink-0">
            <img
              src={logoPath}
              alt="Bryantel Ltd."
              className="h-14 w-auto object-contain sm:h-16"
            />
          </Link>

          <div className="hidden lg:block">
            <div className="text-sm font-semibold tracking-[0.18em] text-slate-800 uppercase">
              Bryantel Limited
            </div>
            <div className="mt-1 text-[13px] text-slate-500">
              Enterprise Technology • Regulatory Solutions • Product Innovation
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 text-sm text-slate-700"
        >
          <a
            href="tel:+2348090742355"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <Phone className="h-4 w-4" />
            </span>
            <span className="font-medium">+2348090742355</span>
          </a>

          <a
            href="mailto:info@bryantel.net"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <Mail className="h-4 w-4" />
            </span>
            <span className="font-medium">info@bryantel.net</span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(90deg,rgba(5,20,63,0.98),rgba(11,33,94,0.96),rgba(5,20,63,0.98))] text-white shadow-[0_18px_38px_-20px_rgba(2,8,23,0.95)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.14),_transparent_30%),radial-gradient(circle_at_right,_rgba(245,158,11,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:76px_76px]" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8">
        <Link to="/" className="flex items-center gap-3 md:hidden">
          <img
            src={logoPath}
            alt="Bryantel Ltd."
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-semibold tracking-[0.14em] uppercase text-white/95">
            Bryantel
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-2 lg:gap-3">
          {navItems.map((item) => (
            <NavLinkItem
              key={item.label}
              to={item.to}
              dropdown={item.dropdown}
            >
              {item.label}
            </NavLinkItem>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_-14px_rgba(180,83,9,0.85)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-12px_rgba(180,83,9,0.95)]"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="relative border-t border-white/10 md:hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]" />

            <div className="relative px-4 pb-5 pt-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-3 shadow-[0_18px_40px_-25px_rgba(0,0,0,0.7)] backdrop-blur-md">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        [
                          "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
                          isActive
                            ? "bg-white/14 text-white"
                            : "text-white/85 hover:bg-white/10 hover:text-white",
                        ].join(" ")
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}

                  <Link
                    to="/contact"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-700 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(180,83,9,0.85)]"
                    onClick={() => setOpen(false)}
                  >
                    Request Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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