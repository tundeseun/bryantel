import React from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  Globe,
  MonitorSmartphone,
  Radio,
  ShieldCheck,
  Smartphone,
  BellRing,
  Bot,
  PhoneCall,
  Cpu,
  Database,
  Wallet,
  Network,
  PlaySquare,
  MessageSquareText,
  // Lock,
  Users,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

import amsImage from "./assets/ams-product.png";
import creditImage from "./assets/credit-plus.png";
import monitoringImage from "./assets/monitoring-system.png";

type ProductItem = {
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  accent: string;
  features: string[];
};

const allProducts: ProductItem[] = [
  {
    title: "Advanced Monitoring System",
    shortTitle: "AMS",
    description:
      "A gaming industry monitoring platform that provides real-time analytics, compliance oversight, regulatory visibility, and operational control across lottery and gaming ecosystems.",
    icon: BarChart3,
    image: amsImage,
    accent: "from-blue-500/25 to-cyan-400/10",
    features: [
      "Real-time analytics",
      "Automatic tax collection",
      "Lottery license management",
      "AML detection",
      "Underage gambling detection",
    ],
  },
  {
    title: "Credit+",
    shortTitle: "Credit+",
    description:
      "A subscriber lending solution that enables airtime, data, bundle, and VAS advances with automated recovery, eligibility scoring, segmentation, and multi-channel access.",
    icon: Wallet,
    image: creditImage,
    accent: "from-indigo-500/25 to-blue-400/10",
    features: [
      "Airtime and data advances",
      "Eligibility scoring",
      "Customer segmentation",
      "Multi-channel access",
      "Automated repayment",
    ],
  },
  {
    title: "VAS Aggregator Platform",
    shortTitle: "VAP",
    description:
      "A centralized VAS concentration point that reduces direct operator integrations and supports end-to-end service creation, operation, and execution for content and partner ecosystems.",
    icon: Network,
    image: monitoringImage,
    accent: "from-violet-500/25 to-fuchsia-400/10",
    features: [
      "Service management",
      "User management",
      "Partner management",
      "SMS / MMS / USSD / APP channels",
      "Direct carrier billing",
    ],
  },
  {
    title: "Messaging",
    shortTitle: "Messaging",
    description:
      "Premium bulk SMS, MMS, voice, and USSD service delivery backed by trusted APIs, reliable throughput, and responsive 24/7 enterprise support.",
    icon: MessageSquareText,
    image: monitoringImage,
    accent: "from-sky-500/25 to-blue-400/10",
    features: [
      "Bulk SMS",
      "MMS services",
      "Voice services",
      "USSD services",
      "Trusted API integration",
    ],
  },
  {
    title: "AI Companion",
    shortTitle: "AI",
    description:
      "An out-of-the-box AI service for MNO self-care apps that delivers smart recommendations, contextual support, and enhanced user engagement with easy deployment.",
    icon: Bot,
    image: monitoringImage,
    accent: "from-emerald-500/25 to-teal-400/10",
    features: [
      "Easy integration",
      "Contextual recommendations",
      "Self-care app enhancement",
      "Revenue boost support",
      "Fast deployment",
    ],
  },
  {
    title: "AI Caller ID",
    shortTitle: "Caller ID",
    description:
      "A privacy-first caller identity service for MNOs that predicts caller identity in real time and helps classify business, spam, personal, prepaid, and landline numbers.",
    icon: PhoneCall,
    image: monitoringImage,
    accent: "from-amber-500/25 to-orange-400/10",
    features: [
      "Identifies local phone numbers",
      "Spam and business detection",
      "GDPR-friendly approach",
      "Real-time caller prediction",
      "Multi-source identity intelligence",
    ],
  },
  {
    title: "Equipment Identity Register",
    shortTitle: "EIR",
    description:
      "A robust IMEI registry solution that permits only authorized devices on GSM networks, blocks illegal or stolen devices, and provides powerful fraud and audit capabilities.",
    icon: Cpu,
    image: monitoringImage,
    accent: "from-rose-500/25 to-red-400/10",
    features: [
      "IMEI status query",
      "Blacklist and bulk upload",
      "Bulk IMEI deletion",
      "Fraud analysis tool",
      "Audit and alarm logs",
    ],
  },
  {
    title: "Big Data",
    shortTitle: "Big Data",
    description:
      "An enterprise-wide data solution that gathers and structures information from telco network elements, CRM, and charging systems to deliver intelligent reporting and mobility analytics.",
    icon: Database,
    image: monitoringImage,
    accent: "from-cyan-500/25 to-sky-400/10",
    features: [
      "Data gathering from telco systems",
      "Works with raw or processed data",
      "Intelligent reporting",
      "Mobility analytics",
      "CDR and signaling data support",
    ],
  },
  {
    title: "MVNO Services",
    shortTitle: "MVNO",
    description:
      "End-to-end MVNO enablement services covering consulting, service management, technical platform support, and billing and loyalty operations for virtual operators.",
    icon: Globe,
    image: monitoringImage,
    accent: "from-purple-500/25 to-indigo-400/10",
    features: [
      "Consulting",
      "Service management",
      "Technology enablement",
      "Billing management",
      "Loyalty management",
    ],
  },
  {
    title: "VOD Platform",
    shortTitle: "VOD",
    description:
      "A rich digital video platform with content security, live streaming, recommendation engine, multilingual support, and powerful user and transaction management.",
    icon: PlaySquare,
    image: monitoringImage,
    accent: "from-pink-500/25 to-purple-400/10",
    features: [
      "Content security",
      "Live streaming",
      "TV catch up",
      "Parental lock",
      "Recommendation engine",
    ],
  },
];

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200 backdrop-blur-md">
        <BellRing size={14} />
        Bryantel Solutions
      </div>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-slate-200 md:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ProductCard({
  title,
  shortTitle,
  description,
  image,
  icon: Icon,
  features,
  accent,
}: ProductItem) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.12]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-70`} />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative flex h-full flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg">
            <Icon size={26} />
          </div>

          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
            {shortTitle}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={image}
            alt={title}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-6 flex flex-1 flex-col">
          <h3 className="min-h-[64px] text-2xl font-semibold leading-tight text-white">
            {title}
          </h3>

          <p className="mt-4 min-h-[140px] text-sm leading-7 text-slate-200 md:text-base">
            {description}
          </p>

          <div className="mt-6 grid gap-3">
            {features.slice(0, 5).map((feature) => (
              <div
                key={feature}
                className="flex min-h-[60px] items-start gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-300"
                />
                <span className="text-sm leading-6 text-slate-100">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white">
            Learn More
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function CapabilityCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
        <Icon size={22} />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#07122f] text-white">
      <SiteHeader />

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,122,255,0.22),transparent_24%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_28%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:4px_4px]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(125deg,transparent_0%,rgba(255,255,255,0.08)_40%,transparent_100%)]" />

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              title="Bryantel Products & Solutions"
              subtitle="Enterprise platforms designed for telecom operators, regulators, and digital service providers."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <CapabilityCard
                icon={ShieldCheck}
                title="Regulatory Technology"
                text="Solutions that improve compliance, oversight, auditability, and operational transparency."
              />
              <CapabilityCard
                icon={CreditCard}
                title="Digital Finance"
                text="Subscriber and operator-focused platforms for credit, value-added services, and monetization."
              />
              <CapabilityCard
                icon={MonitorSmartphone}
                title="Telecom Platforms"
                text="Robust service delivery systems built for digital channels, subscriber engagement, and scale."
              />
              <CapabilityCard
                icon={Users}
                title="Enterprise Delivery"
                text="Enterprise-grade solutions tailored for operators, regulators, and digital service providers."
              />
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
              {allProducts.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-[linear-gradient(180deg,rgba(12,24,72,0.75),rgba(7,14,40,0.75))] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] md:p-10">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                    <Radio size={14} />
                    Credit+ Channels
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
                    Multi-Channel Access for Subscriber Credit Services
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-200 md:text-lg">
                    Credit+ supports flexible access points that make borrowing
                    easy for subscribers while giving operators better control
                    over service delivery and repayment.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      { label: "USSD", icon: Radio },
                      { label: "SMS", icon: Smartphone },
                      { label: "Web App", icon: Globe },
                      { label: "Mobile App", icon: CreditCard },
                      { label: "Multi-Channel", icon: MonitorSmartphone },
                    ].map((channel) => {
                      const Icon = channel.icon;

                      return (
                        <div
                          key={channel.label}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
                        >
                          <Icon size={16} />
                          <span>{channel.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Credit+ Core Advantages
                  </h3>

                  <div className="mt-6 grid gap-3">
                    {[
                      "Advance in the form of Airtime, Data, Bundle Packs or VAS",
                      "Eligibility scoring based on subscriber transaction history and behaviour",
                      "Customer segmentation for single or multiple advances",
                      "Different denominations configurable by the MNO and partner",
                      "Push and pull channels supported",
                      "Gamification support to improve loyalty and service uptake",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-300"
                        />
                        <span className="text-sm leading-6 text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                How Credit+ Works
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200 md:text-lg">
                A guided advance and repayment experience that helps subscribers
                stay connected while giving operators control over qualification,
                disbursement, and recovery.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                "Subscriber runs out of balance such as airtime, data, bundles, or VAS.",
                "Subscriber requests an advance through USSD, SMS, web app, mobile app, or other supported channels.",
                "System evaluates subscriber eligibility and determines the qualified amount.",
                "Approved advance is credited into the relevant subscriber wallet or service account.",
                "Subscriber consumes the advance based on the approved package or denomination.",
                "Upon next recharge, the advanced value is automatically recovered until full repayment is completed.",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#e7a54b] to-[#c8852f] text-base font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-[linear-gradient(135deg,rgba(21,39,95,0.92),rgba(8,15,40,0.92))] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Innovative Solutions Built for Scale
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
                    From gaming regulation and messaging infrastructure to MVNO
                    enablement, AI services, device identity management, and
                    digital streaming platforms, Bryantel delivers enterprise
                    solutions tailored for operators, regulators, and modern
                    digital businesses.
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#17388f] shadow-xl transition hover:opacity-90">
                  Contact Our Team
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}