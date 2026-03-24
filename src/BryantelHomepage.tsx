import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Send,
  BellRing,
  Target,
  Eye,
} from "lucide-react";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

import heroImage from "./assets/hero-city.png";
import aboutImage from "./assets/about-bryantel.png";
import certificationImage from "./assets/certification.jpg";
import gsaSealImage from "./assets/compliance.jpg";
import gsaLogoImage from "./assets/compliance_2.jpg";

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

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "Enterprise Technology Across MEA",
    title:
      "Bryantel is a leading solutions provider and one of the fastest-growing technology holdings in the Middle East and Africa.",
    subtitle:
      "We strengthen organizations with state-of-the-art technology built for scale, compliance, and performance.",
    cta1: "Explore Products",
    cta2: "Request a Consultation",
    cta1Link: "/products",
    cta2Link: "/contact",
  },
  {
    id: 2,
    eyebrow: "Gaming Regulation & Analytics",
    title:
      "Products built for performance, insight, monitoring, and revenue assurance.",
    subtitle:
      "Bryantel helps enterprises and regulators deploy dependable, future-ready solutions with confidence.",
    cta1: "Explore Products",
    cta2: "Request a Consultation",
    cta1Link: "/products",
    cta2Link: "/contact",
  },
  {
    id: 3,
    eyebrow: "Digital Products That Scale",
    title:
      "Our passion for technology excellence and service quality is at the heart of our commitment to every customer.",
    subtitle:
      "Bryantel delivers innovative solutions that help organizations grow, transform, and lead with confidence.",
    cta1: "Explore Products",
    cta2: "Talk to Bryantel",
    cta1Link: "/products",
    cta2Link: "/contact",
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

function SectionIntro({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto mb-12 max-w-4xl text-center"
    >
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] shadow-sm ${
          dark
            ? "border border-white/10 bg-white/12 text-blue-100"
            : "bg-blue-50 text-blue-700"
        }`}
      >
        <BellRing size={12} />
        Bryantel
      </div>

      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-sm leading-7 md:text-base ${
            dark ? "text-blue-100/80" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-b-[2rem]">
      <motion.div
        initial={{ scale: 1.05, opacity: 0.88 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,19,56,0.78),rgba(7,22,63,0.62),rgba(7,22,63,0.46))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.10),transparent_24%)]" />

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 180"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120C145 152 292 159 446 139C622 117 760 40 931 28C1121 14 1272 53 1440 100V180H0V120Z"
          fill="rgba(255,255,255,0.96)"
        />
        <path
          d="M0 138C184 104 319 104 484 125C658 146 827 177 1019 171C1177 166 1310 139 1440 114V180H0V138Z"
          fill="rgba(242,246,252,0.92)"
        />
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
    <section className="relative overflow-hidden bg-[#f5f8fd]">
      <div className="relative mx-auto max-w-7xl px-4 pt-3 pb-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.35)]">
          <div className="relative min-h-[420px] md:min-h-[460px] lg:min-h-[500px]">
            <HeroBackground />

            <div className="relative z-10 flex min-h-[420px] items-center md:min-h-[460px] lg:min-h-[500px]">
              <div className="mx-auto w-full max-w-5xl px-5 py-10 text-center md:px-8 md:py-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
                      {slide.eyebrow}
                    </div>

                    <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {slide.title}
                    </h1>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-100 md:text-base lg:text-lg">
                      {slide.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to={slide.cta1Link}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition hover:-translate-y-0.5 hover:scale-[1.01]"
                  >
                    {slide.cta1}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to={slide.cta2Link}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:-translate-y-0.5 hover:scale-[1.01]"
                  >
                    {slide.cta2}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2.5">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === current ? "w-8 bg-white" : "w-2.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7faff,#eef3fb,#f7faff)] py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="About Bryantel"
          subtitle="We are service providers and consultants with over 26 years of experience serving multinational companies and global technology partners through strong partnerships and joint ventures worldwide."
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(236,244,255,0.86))] p-7 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm lg:p-9"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.10),_transparent_26%)]" />

            <div className="relative">
              <div className="mb-4 inline-flex rounded-full bg-white/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-700 shadow-sm">
                26 Years of Experience
              </div>

              <p className="text-base leading-8 text-slate-700 lg:text-[1.2rem] lg:leading-9">
                Bryantel Management is made up of former corporate officers from
                different multinational companies with deep operational
                experience, strong industry knowledge, and a practical
                understanding of the local environments in our countries of
                operation.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/40 shadow-[0_35px_100px_-40px_rgba(15,23,42,0.45)]"
          >
            <img
              src={aboutImage}
              alt="Bryantel team"
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,73,0.04),rgba(8,24,73,0.14),rgba(6,19,56,0.62))]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  const items = [
    {
      title: "Our Vision",
      text: "To become the leading technology company by providing innovative solutions that drive global business advancement.",
      icon: <Eye className="h-6 w-6" />,
      accent:
        "from-blue-600 via-cyan-500 to-sky-400",
      bg:
        "bg-[linear-gradient(135deg,rgba(8,24,73,0.98),rgba(10,29,92,0.94),rgba(37,99,235,0.88))]",
      textColor: "text-white",
      bodyColor: "text-blue-100/90",
      badge: "Vision for Global Impact",
    },
    {
      title: "Our Mission",
      text: "To provide the best service using the latest technology, delivered by highly skilled and motivated staff, while supplying high-quality products at competitive prices in a trusted and secure manner.",
      icon: <Target className="h-6 w-6" />,
      accent:
        "from-amber-400 via-orange-500 to-rose-500",
      bg:
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,248,240,0.98),rgba(255,243,230,0.98))]",
      textColor: "text-slate-900",
      bodyColor: "text-slate-600",
      badge: "Mission Through Excellence",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff,#f6f9ff,#ffffff)] py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] [background-size:92px_92px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="Vision & Mission"
          subtitle="Our purpose is driven by innovation, service excellence, and a commitment to delivering trusted technology solutions that create lasting value."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/40 p-8 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] ${item.bg}`}
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_30%)]" />

              <div className="relative">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur-sm">
                  <span className={item.textColor}>{item.badge}</span>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3 className={`mt-6 text-2xl font-bold ${item.textColor}`}>
                  {item.title}
                </h3>

                <p className={`mt-4 text-base leading-8 ${item.bodyColor}`}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      name: "ISO 27001 Certified",
      image: certificationImage,
      alt: "ISO 27001 Certified badge",
    },
    {
      name: "Gaming Laboratories International",
      image: gsaSealImage,
      alt: "Gaming Laboratories International certification",
    },
    {
      name: "GSA Compliance",
      image: gsaLogoImage,
      alt: "GSA compliance logo",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff,#eef3fb,#f8fbff)] py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="Certifications & Compliance"
          subtitle="Our technology and operations align with internationally recognized standards, regulatory expectations, and industry compliance frameworks."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-5xl rounded-[2rem] border border-blue-100 bg-white/85 p-7 text-center shadow-[0_28px_80px_-38px_rgba(15,23,42,0.28)] backdrop-blur-sm lg:p-9"
        >
          <p className="text-base leading-8 text-slate-700 lg:text-lg">
            Bryantel maintains a strong commitment to security,
            interoperability, and gaming technology standards.
          </p>

          <p className="mt-4 text-sm italic leading-7 text-amber-700 lg:text-base">
            Bryantel is a Silver Member of GSA with access to G2S v3.0.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_22px_70px_-32px_rgba(15,23,42,0.28)] transition"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.07),_transparent_26%)]" />

              <div className="relative">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.35,
                  }}
                  className="flex h-52 items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-100 bg-[linear-gradient(180deg,#f8fafc,#eef4fb)] p-4"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="max-h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </motion.div>

                <div className="mt-5 text-center">
                  <h3 className="text-lg font-bold leading-7 text-slate-900">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
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
          className="grid gap-8 md:grid-cols-2"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link
                to={card.to}
                className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] transition hover:border-blue-200 hover:shadow-[0_28px_75px_-35px_rgba(37,99,235,0.35)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-900/25 transition group-hover:scale-105">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>

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

export default function BryantelHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <CertificationsSection />
      <LinkCardsSection />
      <SiteFooter />
    </div>
  );
}