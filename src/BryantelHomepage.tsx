import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  Mail,
  Search,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  MonitorCog,
  Menu,
  X,
  Sparkles,
  Building2,
  Send,
} from "lucide-react";

import logoPath from "./assets/bryantel-logo.png";
import heroImage from "./assets/hero-city.png";
import aboutImage from "./assets/about-bryantel.png";
import amsImage from "./assets/ams-product.png";
import creditImage from "./assets/credit-plus.png";
import monitoringImage from "./assets/monitoring-system.png";

type Slide = {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  cta1Link: string;
  cta2Link: string;
};

type ProductCard = {
  title: string;
  description: string;
  button: string;
  href: string;
  icon: React.ReactNode;
  points: string[];
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "Enterprise Technology Across MEA",
    title: "Powering Growth with Enterprise Technology Across the Middle East and Africa",
    subtitle:
      "Bryantel delivers innovative technology solutions that help organizations grow, regulate, transform, and lead with confidence.",
    cta1: "Explore Products",
    cta2: "Request a Consultation",
    cta1Link: "/products",
    cta2Link: "/contact",
  },
  {
    id: 2,
    eyebrow: "Gaming Regulation & Analytics",
    title: "Advanced Monitoring and Regulatory Solutions for Modern Gaming Ecosystems",
    subtitle:
      "Our platforms empower regulators with real-time analytics, transparency, automation, and a 360-degree view of operations.",
    cta1: "Explore AMS",
    cta2: "Book a Demo",
    cta1Link: "/products/ams",
    cta2Link: "/contact",
  },
  {
    id: 3,
    eyebrow: "Digital Products That Scale",
    title: "Products Built for Performance, Insight, Monitoring, and Revenue Innovation",
    subtitle:
      "From Advanced Monitoring System to Credit+, Bryantel helps enterprises and regulators deploy reliable, future-ready solutions.",
    cta1: "View Solutions",
    cta2: "Talk to Bryantel",
    cta1Link: "/solutions",
    cta2Link: "/contact",
  },
];

const amsOfferings = [
  "Reports and Data Analysis",
  "Screen to manage lottery operators",
  "Dispute handling for stakers",
  "Lottery License Management",
  "Save Opex and resources",
  "Centralized monitoring system",
  "Automatic Tax collection",
  "360-degree view of lottery operation",
];

const creditOfferings = [
  "Advance in form of Airtime, Data, Bundle Packs or VAS",
  "Customer segmentation for single or multiple advances based on eligibility scores",
  "Credit scoring using historical network transactions and subscriber behavior",
  "Flexible advance denominations determined by MNO and Partner",
];

const products: ProductCard[] = [
  {
    title: "Advanced Monitoring System",
    description:
      "Advanced Monitoring System (AMS) is a gaming industry monitoring platform providing real-time analytics based on big data and supporting the regulation of gaming activities.",
    button: "Explore AMS",
    href: "/products/ams",
    icon: <ShieldCheck className="h-6 w-6" />,
    points: [
      "Real-time analytics",
      "360-degree operator view",
      "Automated oversight",
    ],
    image: amsImage,
  },
  {
    title: "Credit+",
    description:
      "Credit+ allows subscribers to take an advance in Airtime, Data, Bundle Packs, and VAS subscriptions and pay later based on eligibility rules.",
    button: "Explore Credit+",
    href: "/products/credit-plus",
    icon: <CreditCard className="h-6 w-6" />,
    points: ["Subscriber scoring", "Segmented eligibility", "Flexible denominations"],
    image: creditImage,
  },
  {
    title: "Monitoring Solutions",
    description:
      "Bryantel’s monitoring solutions give regulators and enterprise operators an intelligent centralized platform for visibility, reporting, and operational control.",
    button: "Explore Monitoring",
    href: "/solutions",
    icon: <MonitorCog className="h-6 w-6" />,
    points: ["Centralized dashboards", "Operational visibility", "Decision intelligence"],
    image: monitoringImage,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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
      {dropdown && <ChevronDown className="h-4 w-4 opacity-70 transition group-hover:translate-y-0.5" />}
      <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function TopBar() {
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
          <img src={logoPath} alt="Bryantel Ltd." className="h-14 w-auto object-contain sm:h-16" />
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

function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "About Us", to: "/about" },
    { label: "Solutions", to: "/solutions", dropdown: true },
    { label: "Industries", to: "/industries", dropdown: true },
    { label: "Products", to: "/products", dropdown: true },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(90deg,rgba(6,22,67,0.98),rgba(12,33,92,0.96),rgba(6,22,67,0.98))] text-white shadow-[0_10px_30px_-18px_rgba(2,8,23,0.9)] backdrop-blur-md">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <Link to="/" className="md:hidden">
          <img src={logoPath} alt="Bryantel Ltd." className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <NavLinkItem key={item.label} to={item.to} dropdown={item.dropdown}>
              {item.label}
            </NavLinkItem>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
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

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.82 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,63,0.2),rgba(7,22,63,0.14),rgba(7,22,63,0.08))]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100px_100px]" />

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 240" fill="none" preserveAspectRatio="none">
        <path d="M0 90C147 139 285 158 463 136C634 115 805 34 991 17C1168 1 1295 34 1440 79V240H0V90Z" fill="rgba(255,255,255,0.93)" />
        <path d="M0 123C171 84 331 79 506 102C680 124 846 172 1033 171C1189 170 1318 140 1440 111V240H0V123Z" fill="rgba(235,240,248,0.92)" />
      </svg>
    </div>
  );
}

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative isolate overflow-hidden bg-[#eef3fb]">
      <div className="relative min-h-[760px]">
        <div className="absolute inset-x-0 top-0 h-[360px]">
          <HeroBackground />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 lg:px-8 lg:pb-24">
          <div className="h-[250px]" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
              >
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#101b4d] sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={slide.cta1Link}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition hover:-translate-y-1 hover:scale-[1.02]"
              >
                {slide.cta1}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={slide.cta2Link}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:-translate-y-1 hover:scale-[1.02]"
              >
                {slide.cta2}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${idx === current ? "w-8 bg-[#101b4d]" : "w-2.5 bg-[#101b4d]/35"}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto mb-14 max-w-4xl text-center"
    >
      <div className={`mb-4 inline-flex rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] shadow-sm ${dark ? "bg-white/12 text-blue-100 border border-white/10" : "bg-blue-50 text-blue-700"}`}>
        Bryantel
      </div>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {subtitle && <p className={`mt-5 text-lg leading-9 ${dark ? "text-blue-100/80" : "text-slate-600"}`}>{subtitle}</p>}
    </motion.div>
  );
}

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef3fb,#e9f0fb,#eef3fb)] py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] [background-size:90px_90px]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="About Bryantel"
          subtitle="We are service providers and consultants with 26 years of experience to multinational companies and top world technology providers with various partnerships and joint ventures worldwide."
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(236,244,255,0.86))] p-8 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.10),_transparent_26%)]" />
            <div className="relative">
              <div className="mb-5 inline-flex rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 shadow-sm">
                26 Years of Experience
              </div>
              <p className="text-lg leading-9 text-slate-700 lg:text-[1.55rem] lg:leading-[1.9]">
                Bryantel Management is made up of former corporate officers from different multinational companies who have experience, complete knowledge and know-how of the local environments in our countries of operation.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative overflow-hidden rounded-[2.4rem] border border-white/40 shadow-[0_35px_100px_-40px_rgba(15,23,42,0.45)]"
          >
            <img src={aboutImage} alt="Bryantel team" className="h-full min-h-[540px] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,73,0.03),rgba(8,24,73,0.12),rgba(6,19,56,0.68))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              {/* <div className="w-full rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(7,22,63,0.88),rgba(12,33,92,0.84))] p-6 text-white shadow-2xl backdrop-blur-md lg:max-w-[92%] lg:p-8">
                <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">
                  Why Bryantel
                </div>
                <h3 className="text-3xl font-bold leading-tight">A Trusted Partner for Digital Progress</h3>
                <p className="mt-4 leading-8 text-blue-50/85">
                  We combine enterprise thinking, regional knowledge, and practical technology execution to help regulators and organizations build stronger systems.
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-[1.5rem]">
      <img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,15,40,0.05),rgba(5,15,40,0.6))]" />
    </div>
  );
}

function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#081849,#0a1d5c,#07163f)] py-20 text-white lg:py-24">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          dark
          title="Products"
          subtitle="Explore our cutting-edge technology solutions designed for monitoring, analytics, credit innovation, and regulatory efficiency."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm"
            >
              <ProductVisual src={product.image} alt={product.title} />

              <div className="mt-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-3 text-white shadow-lg shadow-blue-900/30">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{product.title}</h3>
              </div>

              <p className="mt-4 leading-8 text-slate-100/95">{product.description}</p>

              <div className="mt-6 space-y-3">
                {product.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                    <div className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                    <p className="text-sm leading-7 text-slate-100/95">{point}</p>
                  </div>
                ))}
              </div>

              <Link
                to={product.href}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition group-hover:translate-x-1"
              >
                {product.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OfferingsGrid({ title, items, accent }: { title: string; items: string[]; accent: "blue" | "amber" }) {
  const accentPill = accent === "blue" ? "from-blue-600 to-cyan-500 text-blue-950" : "from-amber-500 to-yellow-600 text-amber-950";
  const dot = accent === "blue" ? "bg-blue-600" : "bg-amber-500";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{ y: -6 }}
      className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_70px_-32px_rgba(15,23,42,0.35)]"
    >
      <div className={`inline-flex rounded-full bg-gradient-to-r px-5 py-3 text-xs font-bold uppercase tracking-[0.28em] ${accentPill}`}>
        {title}
      </div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex gap-3">
              <div className={`mt-2 h-3 w-3 rounded-full ${dot}`} />
              <p className="text-base leading-8 text-slate-700">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function OfferingsSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef3fb] py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="AMS Offerings & Credit+ Offerings"
          subtitle="Enterprise-grade capabilities that support regulators, operators, telecom ecosystems, and digital service innovation."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <OfferingsGrid title="AMS Offerings" items={amsOfferings} accent="blue" />
          <OfferingsGrid title="Credit+ Offerings" items={creditOfferings} accent="amber" />
        </div>
      </div>
    </section>
  );
}

function LinkCardsSection() {
  const cards = [
    {
      title: "Why Bryantel",
      text: "Discover the experience, partnerships, and strategic capabilities that make Bryantel a trusted enterprise technology partner.",
      to: "/why-bryantel",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Contact Us",
      text: "Speak with our team about products, partnerships, consultation, or enterprise digital transformation opportunities.",
      to: "/contact",
      icon: <Send className="h-6 w-6" />,
    },
    {
      title: "Industries We Serve",
      text: "Explore how our platforms support gaming regulation, enterprise operations, telecom ecosystems, and compliance-driven sectors.",
      to: "/industries",
      icon: <Building2 className="h-6 w-6" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06),_transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="Explore More"
          subtitle="Navigate to other important parts of the Bryantel experience through these quick access cards."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={fadeUp} whileHover={{ y: -8 }} className="group">
              <Link
                to={card.to}
                className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] transition hover:border-blue-200 hover:shadow-[0_28px_75px_-35px_rgba(37,99,235,0.35)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-900/25 transition group-hover:scale-105">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{card.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#061338,#040d26)] text-slate-200">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-5 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.7fr_0.8fr_0.95fr] md:items-start">
          <div>
            <div className="rounded-xl bg-white/5 px-3 py-2 backdrop-blur-sm inline-block">
              <img src={logoPath} alt="Bryantel Ltd." className="h-10 w-auto object-contain brightness-125 contrast-125" />
            </div>
            <p className="mt-2 max-w-sm text-xs leading-6 text-slate-300/85">
              Enterprise technology and digital products built for innovation across the Middle East and Africa.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Quick Links</h4>
            <div className="mt-2 space-y-1.5 text-xs text-slate-300/85">
              <Link to="/about" className="block transition hover:text-white">About</Link>
              <Link to="/solutions" className="block transition hover:text-white">Solutions</Link>
              <Link to="/products" className="block transition hover:text-white">Products</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Products</h4>
            <div className="mt-2 space-y-1.5 text-xs text-slate-300/85">
              <Link to="/products/ams" className="block transition hover:text-white">AMS</Link>
              <Link to="/products/credit-plus" className="block transition hover:text-white">Credit+</Link>
              <Link to="/solutions" className="block transition hover:text-white">Monitoring</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contact</h4>
            <div className="mt-2 space-y-2 text-xs text-slate-300/85">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>+123 456 7890</span>
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

export default function BryantelHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <OfferingsSection />
      <LinkCardsSection />
      <Footer />
    </div>
  );
}
