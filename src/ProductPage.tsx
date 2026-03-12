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
  Lock,
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
  featured?: boolean;
};

const amsFeatures = [
  "Reports and Data Analysis",
  "Dispute Handling for Stakers",
  "Save OPEX and Resources",
  "Automatic Tax Collection",
  "Screen to Manage Lottery Operators",
  "Lottery License Management",
  "Centralized Monitoring System",
  "360 degree View of Lottery Operation",
  "Underage Gambling Detection",
  "Addicted Gambling Detection",
  "Anti-Money Laundering (AML) Detection",
];

const creditAdvantages = [
  "Advance in the form of Airtime, Data, Bundle Packs or VAS",
  "Eligibility scoring based on subscriber transaction history and behaviour",
  "Customer segmentation for single or multiple advances",
  "Different denominations configurable by the MNO and partner",
  "Push and pull channels supported",
  "Gamification support to improve loyalty and service uptake",
];

const creditChannels = [
  { label: "USSD", icon: Radio },
  { label: "SMS", icon: Smartphone },
  { label: "Web App", icon: Globe },
  { label: "Mobile App", icon: CreditCard },
  { label: "Multi-Channel", icon: MonitorSmartphone },
];

const creditSteps = [
  "Subscriber runs out of balance such as airtime, data, bundles, or VAS.",
  "Subscriber requests an advance through USSD, SMS, web app, mobile app, or other supported channels.",
  "System evaluates subscriber eligibility and determines the qualified amount.",
  "Approved advance is credited into the relevant subscriber wallet or service account.",
  "Subscriber consumes the advance based on the approved package or denomination.",
  "Upon next recharge, the advanced value is automatically recovered until full repayment is completed.",
];

const allProducts: ProductItem[] = [
  {
    title: "Advanced Monitoring System",
    shortTitle: "AMS",
    description:
      "A gaming industry monitoring platform providing real-time analytics, regulatory visibility, compliance oversight, and full operational control across lottery and gaming ecosystems.",
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
    title: "Credit+",
    shortTitle: "Credit+",
    description:
      "A subscriber lending solution that enables airtime, data, bundle, and VAS advances with automated recovery, scoring, segmentation, and multi-channel access.",
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
    featured: true,
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
  icon: Icon,
  features,
  accent,
  featured = false,
}: {
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  accent: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.12] ${
        featured
          ? "md:col-span-2 xl:col-span-2 mx-auto w-full xl:max-w-5xl"
          : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-70`}
      />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className={`relative p-6 md:p-7 ${featured ? "xl:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg">
            <Icon size={26} />
          </div>

          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
            {shortTitle}
          </div>
        </div>

        <div
          className={
            featured
              ? "mt-6 grid gap-6 xl:grid-cols-[1.1fr,0.9fr] xl:items-center"
              : "mt-6"
          }
        >
          <div className={featured ? "xl:flex xl:min-h-full xl:flex-col xl:justify-center" : ""}>
            <h3 className="text-2xl font-semibold leading-tight text-white md:text-[30px]">
              {title}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              {description}
            </p>
          </div>

          <div className={`grid gap-3 ${featured ? "sm:grid-cols-2 xl:grid-cols-1" : ""}`}>
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3"
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
        </div>
      </div>
    </div>
  );
}

function InfoMiniCard({
  icon: Icon,
  title,
  text,
  dark = true,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        dark
          ? "border-white/10 bg-white/5"
          : "border-slate-200/60 bg-white/60"
      }`}
    >
      <div
        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full ${
          dark
            ? "bg-blue-500/20 text-blue-300"
            : "bg-[#28459b]/10 text-[#28459b]"
        }`}
      >
        <Icon size={22} />
      </div>

      <h3
        className={`text-lg font-semibold ${
          dark ? "text-white" : "text-[#18275d]"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-2 text-sm leading-6 ${
          dark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {text}
      </p>
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
              title="Our Products & Enterprise Solutions"
              subtitle="Explore Bryantel’s portfolio of digital platforms, telecom services, AI-powered products, and regulatory technology solutions."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(13,28,78,0.86),rgba(7,14,40,0.78))] shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="grid gap-6 p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-[1fr,1.15fr] md:items-start">
                    <div>
                      <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                        Advanced
                        <br />
                        Monitoring
                        <br />
                        System <span className="text-slate-300">(AMS)</span>
                      </h1>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <img
                        src={amsImage}
                        alt="Advanced Monitoring System"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">
                      Advanced Monitoring System (AMS)
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-200 md:text-lg">
                      AMS is a gaming industry monitoring platform that provides{" "}
                      <span className="font-semibold text-amber-300">
                        real-time analytics
                      </span>{" "}
                      and supports the regulation of gaming activities. It gives
                      regulators a 360-degree view of operators’ sales and
                      players’ activities.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <InfoMiniCard
                        icon={BarChart3}
                        title="Real-Time Analytics"
                        text="Track operator performance, player activities, and reports across the gaming ecosystem with live operational visibility."
                      />
                      <InfoMiniCard
                        icon={ShieldCheck}
                        title="Compliance & Protection"
                        text="Support safer gaming through AML detection, underage gambling detection, dispute handling, and regulatory oversight."
                      />
                    </div>

                    <ul className="mt-8 grid gap-3 text-sm text-slate-200 md:grid-cols-2 md:text-base">
                      {amsFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-blue-300"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(250,252,255,0.84),rgba(229,238,255,0.72))] shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <div className="grid gap-6 p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-[1fr,0.95fr] md:items-start">
                    <div>
                      <h1 className="text-4xl font-semibold leading-tight text-[#18275d] md:text-5xl">
                        Credit<span className="text-amber-500">+</span>
                      </h1>

                      <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
                        Credit+ allows subscribers to borrow airtime, data
                        bundles, and other value-added services based on their
                        behaviour and network activity, with automated recovery
                        on subsequent recharges.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/50">
                      <img
                        src={creditImage}
                        alt="Credit+"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-[#18275d]">
                      Available Channels
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {creditChannels.map((channel) => {
                        const Icon = channel.icon;

                        return (
                          <div
                            key={channel.label}
                            className="inline-flex items-center gap-2 rounded-full border border-[#28459b]/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#28459b] shadow-sm"
                          >
                            <Icon size={16} />
                            <span>{channel.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    <h2 className="mt-8 text-2xl font-semibold text-[#18275d]">
                      Core Advantages
                    </h2>

                    <ul className="mt-5 space-y-3 text-sm text-slate-700 md:text-base">
                      {creditAdvantages.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-[#28459b]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <InfoMiniCard
                        icon={Users}
                        title="Segmentation"
                        text="Score subscribers for eligibility and support single or multiple advances based on customer behaviour."
                        dark={false}
                      />
                      <InfoMiniCard
                        icon={Lock}
                        title="Recovery Control"
                        text="Recover borrowed value on recharge while supporting configurable products, channels, and denomination options."
                        dark={false}
                      />
                    </div>
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
                stay connected while giving operators clear control over
                qualification, disbursement, and recovery.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {creditSteps.map((step, index) => (
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

        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              title="All Bryantel Services & Products"
              subtitle="A complete showcase of our telecom, AI, monitoring, data, messaging, streaming, and regulatory technology offerings."
            />

            <div className="mt-12 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
              {allProducts.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  shortTitle={product.shortTitle}
                  description={product.description}
                  icon={product.icon}
                  features={product.features}
                  accent={product.accent}
                  featured={product.featured}
                />
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
                    digital streaming platforms, Bryantel delivers robust
                    enterprise-grade solutions tailored for operators,
                    regulators, and modern digital businesses.
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