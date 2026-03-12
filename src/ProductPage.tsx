// import React from "react";
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
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

import amsImage from "./assets/ams-product.png";
import creditImage from "./assets/credit-plus.png";
import monitoringImage from "./assets/monitoring-system.png";

const amsFeatures = [
  "Real-time monitoring of gaming operators",
  "Centralized data analytics platform",
  "Anti-Money Laundering (AML) compliance tools",
  "Transparent and secure gaming environment",
  "Regulatory reporting and audit trails",
];

const creditAdvantages = [
  "Advance in the form of Airtime, Data, Bundle Packs or VAS",
  "Customer segmentation for single or multiple advances based on eligibility scores",
  "Automated subscription of service at predefined low balance",
  "End-to-end product management focused on customer value management",
];

const creditChannels = [
  { label: "USSD", icon: Radio },
  { label: "SMS", icon: Smartphone },
  { label: "IVR", icon: MonitorSmartphone },
  { label: "Web", icon: Globe },
  { label: "Mobile App", icon: CreditCard },
];

const creditSteps = [
  "Subscriber runs out of balance (Airtime, Data, Bundles, VAS etc.)",
  "Subscriber requests advance using available channels (USSD, SMS, IVR, App etc.)",
  "System checks subscriber eligibility and qualified amount",
  "Subscriber receives the advance into the relevant wallet",
  "Subscriber uses the advance until it runs out or expires",
  "At the next top-up or after grace period, the subscriber repays the advanced amount",
];

const otherProducts = [
  {
    title: "AMS Offerings",
    description:
      "Our Advanced Monitoring System helps gaming regulators achieve visibility, compliance, and real-time control across the ecosystem.",
    image: amsImage,
    button: "Explore AMS",
  },
  {
    title: "Credit+ Offerings",
    description:
      "Credit+ enables airtime, data, bundle, and VAS advances through intelligent eligibility and automated repayment flows.",
    image: creditImage,
    button: "Explore Credit+",
  },
  {
    title: "Advanced Monitoring",
    description:
      "We deliver sophisticated monitoring and analytics solutions that support regulation, reporting, and operational intelligence.",
    image: monitoringImage,
    button: "Explore Monitoring",
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
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-slate-200 md:text-xl">{subtitle}</p>
      ) : null}
    </div>
  );
}

function ProductCard({
  image,
  title,
  description,
  button,
}: {
  image: string;
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/12">
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
          {description}
        </p>

        <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#244fc0] to-[#17388f] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90">
          {button}
          <ArrowRight size={16} />
        </button>
      </div>
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
              title="Products"
              subtitle="Explore our cutting-edge technology solutions"
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
                      AMS is specifically designed for gaming regulators. It
                      provides{" "}
                      <span className="font-semibold text-amber-300">
                        real-time monitoring
                      </span>{" "}
                      of gaming activities within the regulator’s environment.
                    </p>

                    <p className="mt-4 text-base leading-8 text-slate-200 md:text-lg">
                      The system connects and delivers{" "}
                      <span className="font-semibold text-amber-300">
                        real-time analytics
                      </span>{" "}
                      across all actors in the gaming value chain, helping
                      regulators curb anti-money laundering and ensure a safe,
                      transparent, and honest gaming environment.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                          <BarChart3 size={22} />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          Real-Time Analytics
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Live operational visibility and performance insight
                          across the gaming ecosystem.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                          <ShieldCheck size={22} />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          AML & Compliance
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Built to support safe gaming operations and regulatory
                          compliance oversight.
                        </p>
                      </div>
                    </div>

                    <ul className="mt-8 space-y-3 text-sm text-slate-200 md:text-base">
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

                    <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#244fc0] to-[#17388f] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:opacity-90">
                      Explore AMS
                      <ArrowRight size={18} />
                    </button>
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
                        Credit+ is a service that allows subscribers to borrow
                        airtime, data packs, bundles, and VAS subscriptions on
                        credit when they run out of balance, with repayment on
                        the next recharge.
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
                      We Offer the Following Advantages
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

                    <h2 className="mt-8 text-2xl font-semibold text-[#18275d]">
                      Key Capabilities
                    </h2>

                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {[
                        "Airtime, Data, Bundle, and VAS advances",
                        "Subscriber segmentation engine",
                        "Automated low-balance activation",
                        "Intelligent customer eligibility scoring",
                        "End-to-end telecom service management",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-xl bg-white/55 p-3 text-sm text-slate-700"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#28459b]"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#244fc0] to-[#17388f] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:opacity-90">
                      Explore Credit+
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  How Credit+ Works
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
                  A simple, guided advance and repayment flow designed to make
                  airtime and data access seamless for subscribers while giving
                  operators full control over eligibility and recovery.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
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
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              title="Some of Our Products"
              subtitle="Explore our product offerings and enterprise technology solutions."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {otherProducts.map((product) => (
                <ProductCard
                  key={product.title}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  button={product.button}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}