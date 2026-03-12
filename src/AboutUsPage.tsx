// import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  Layers3,
  RadioTower,
  BadgeCheck,
} from "lucide-react";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

import aboutHeroImage from "./assets/hero-city.png";
import aboutTeamImage from "./assets/about-bryantel.png";
import certificationImage from "./assets/certification.jpg";
import gsaSealImage from "./assets/compliance.jpg";
import gsaLogoImage from "./assets/compliance_2.jpg";

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

const deliverables = [
  {
    id: "01",
    title: "Robust Platform",
    icon: <RadioTower className="h-6 w-6" />,
    points: [
      "Speed of advance via channels such as USSD, SMS, IVR, apps, subscriptions, and other digital touchpoints.",
      "Automated recovery and seamless integration into Telco infrastructure.",
      "Highly experienced support team with strong Telco protocol, IN, and integration expertise.",
      "System monitoring and responsive customer support for tickets and operational issues.",
      "Modular development approach that enables agility, resilience, and scalability.",
    ],
  },
  {
    id: "02",
    title: "Customer Segmentation",
    icon: <Layers3 className="h-6 w-6" />,
    points: [
      "Using Telco and customer data, we develop credit solutions tailored to each market.",
      "We define credit limits based on subscriber behaviour, usage patterns, and performance signals.",
      "We continuously improve and enhance products in response to the Telco’s competitive environment.",
    ],
  },
  {
    id: "03",
    title: "Customer Value Management",
    icon: <ShieldCheck className="h-6 w-6" />,
    points: [
      "In collaboration with the Telco, we derive insights from analysis, customer behaviour, and market intelligence.",
      "We design product strategies, define feature priorities, and develop practical roadmaps.",
      "We work closely with multiple Telco teams to deliver maximum customer value and stronger business returns.",
    ],
  },
  {
    id: "04",
    title: "Portfolio Analysis",
    icon: <BarChart3 className="h-6 w-6" />,
    points: [
      "Design and development of analytical reports for performance monitoring.",
      "Definition of key performance levers and monitoring indicators.",
      "Establishment of effective messaging options to improve performance and drive growth.",
    ],
  },
];

const scoringPoints = [
  "We develop scores from customers’ transactional data, business rules, and defined qualification criteria.",
  "We begin with application scores based on what the available data says a customer should qualify for.",
  "We then move to behavioural scores based on how customers use and repay credit products over time.",
  "Qualification, risk, and in some cases pricing can be adjusted based on observed behaviour.",
  "This supports the creation of scoring segments that enable Customer Value Management teams to deliver the right products, such as Airtime, Data, or Bundled Packages, to the right customers.",
  "Scoring can be real-time using CDRs and other parameters at each advance request, enabling dynamic qualification.",
  "Scoring can also be static, where qualification is set for a defined period such as a week or month.",
  "Updates to scoring logic can be manual or automated based on agreed business rules.",
];

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
      className="mx-auto mb-14 max-w-4xl text-center"
    >
      <div
        className={`mb-4 inline-flex rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] shadow-sm ${
          dark
            ? "border border-white/10 bg-white/12 text-blue-100"
            : "bg-blue-50 text-blue-700"
        }`}
      >
        Bryantel
      </div>

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-lg leading-9 ${
            dark ? "text-blue-100/80" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef3fb]">
      <div className="relative h-[180px] sm:h-[220px] lg:h-[260px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHeroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,22,67,0.88),rgba(7,22,63,0.78),rgba(6,22,67,0.55))]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl text-white"
          >
            {/* <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-100 backdrop-blur-sm">
              About Us
            </div> */}

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Our Story & Expertise
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50/90 sm:text-base">
              Driving innovation, credit intelligence, platform resilience, and
              enterprise technology delivery with 26 years of industry
              experience.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-blue-100/90">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff,#eef3fb,#f8fbff)] py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="Our Story"
          subtitle="We are service providers and consultants with 26 years of experience supporting multinational companies and leading global technology providers through strategic partnerships, joint ventures, and market-driven execution."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_28px_80px_-38px_rgba(15,23,42,0.28)] backdrop-blur-sm lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.08),_transparent_26%)]" />

            <div className="relative">
              <div className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 shadow-sm">
                26 Years of Experience
              </div>

              <div className="space-y-6 text-lg leading-9 text-slate-700">
                <p>
                  We are service providers and consultants with 26 years of
                  experience to multinational companies and top world technology
                  providers with various partnerships and joint ventures with
                  multinationals and new-technology leaders worldwide.
                </p>

                <p>
                  Bryantel Management is made up of former corporate officers
                  from different multinational companies who have experience,
                  complete knowledge, and strong understanding of the local
                  environments in our countries of operation.
                </p>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-[linear-gradient(135deg,rgba(239,246,255,0.9),rgba(255,255,255,0.85))] p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 text-white shadow-lg shadow-blue-900/20">
                    <BadgeCheck className="h-6 w-6" />
                  </div>

                  <p className="text-base leading-8 text-slate-700">
                    Our leadership combines multinational operating experience,
                    local market intelligence, product innovation capability,
                    and execution discipline to help our partners scale with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/40 shadow-[0_35px_100px_-40px_rgba(15,23,42,0.42)]"
          >
            <img
              src={aboutTeamImage}
              alt="Bryantel management team"
              className="h-full min-h-[440px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,73,0.04),rgba(8,24,73,0.12),rgba(6,19,56,0.46))]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DeliverCard({
  item,
  index,
}: {
  item: (typeof deliverables)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-32px_rgba(15,23,42,0.28)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.07),_transparent_26%)]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="text-5xl font-semibold leading-none tracking-tight text-amber-500/90">
            {item.id}
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 text-white shadow-lg shadow-blue-900/20">
            {item.icon}
          </div>
        </div>

        <h3 className="mt-5 text-2xl font-bold text-slate-900">{item.title}</h3>

        <div className="mt-6 space-y-4">
          {item.points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
              <p className="text-sm leading-7 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DeliverSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="What We Deliver"
          subtitle="We combine platform engineering, segmentation intelligence, portfolio insight, and customer value strategy to deliver scalable and commercially effective solutions."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {deliverables.map((item, index) => (
            <DeliverCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ScoringSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef3fb,#f8fbff)] py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_30%),radial-gradient(circle_at_top_left,_rgba(245,158,11,0.07),_transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="Scoring Approaches"
          subtitle="Our scoring models are built to support informed decisions, responsive credit management, and better customer value delivery."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_70px_-32px_rgba(15,23,42,0.28)]"
          >
            <div className="space-y-4">
              {scoringPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <p className="text-base leading-8 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#081849,#0a1d5c,#07163f)] p-8 text-white shadow-[0_22px_70px_-32px_rgba(15,23,42,0.38)]"
          >
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">
              Decision Intelligence
            </div>

            <h3 className="mt-6 text-3xl font-bold leading-tight">
              Dynamic and Static Scoring Options for Flexible Credit Operations
            </h3>

            <p className="mt-5 leading-8 text-blue-100/85">
              Whether qualification is evaluated in real time at each request or
              assigned for a defined period, our scoring architecture supports
              risk control, customer relevance, and better commercial outcomes.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm leading-7 text-blue-50/90">
                This enables Customer Value Management teams to match the right
                customers with the right product at the right time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff,#eef3fb,#f8fbff)] py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          title="Certifications & Compliance"
          subtitle="Our technology and operations are aligned with internationally recognized standards, regulatory expectations, and industry compliance frameworks."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 max-w-5xl rounded-[2rem] border border-blue-100 bg-white/80 p-8 text-center shadow-[0_28px_80px_-38px_rgba(15,23,42,0.28)] backdrop-blur-sm lg:p-10"
        >
          <p className="text-lg leading-9 text-slate-700 lg:text-[1.2rem]">
            Bryantel maintains a strong commitment to security,
            interoperability, and gaming technology standards.
          </p>

          <p className="mt-5 text-base italic leading-8 text-amber-700 lg:text-lg">
            Bryantel is a silver member of GSA with access to G2S v3.0, and AMS
            has fully implemented the standard requirements of the G2S v3.0
            message protocol.
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
                  className="flex h-56 items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-100 bg-[linear-gradient(180deg,#f8fafc,#eef4fb)] p-4"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </motion.div>

                <div className="mt-5 text-center">
                  <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900">
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

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#081849,#0a1d5c,#07163f)] py-20 text-white lg:py-24">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
            Work With Bryantel
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let’s Build Intelligent Platforms and Scalable Market Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-blue-100/85">
            Partner with Bryantel for regulatory technology, credit innovation,
            analytics, integration, and enterprise-grade operational support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:-translate-y-1 hover:scale-[1.02]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <AboutHero />
      <StorySection />
      <DeliverSection />
      <ScoringSection />
      <CertificationsSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}