import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  BellRing,
  Bot,
  PhoneCall,
  Cpu,
  Database,
  Wallet,
  Network,
  PlaySquare,
  MessageSquareText,
  X,
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
      "AMS is a gaming industry monitoring platform that provides real time analytic solution based on big data and supports the regulation of gaming activities, AMS provides regulators 360-degree view of gaming operator sales and players’ activities.",
    icon: BarChart3,
    image: amsImage,
    accent: "from-blue-500/25 to-cyan-400/10",
    features: [],
  },
  {
    title: "VAS Aggregator Platform (VAP)",
    shortTitle: "VAP",
    description:
      "VAP primarily provide a concentration point to limit the number of devices that will be directly connected to the operators. It eliminate the need for a Content Service Provider to maintain multiple system integration to each network operator. VAP support E2E process of service creation, operation and execution of VAS services, VAP works with CSP to ensure QTM in service delivery.",
    icon: Network,
    image: monitoringImage,
    accent: "from-violet-500/25 to-fuchsia-400/10",
    features: [],
  },
  {
    title: "Messaging",
    shortTitle: "Messaging",
    description:
      "We offer premium bulk SMS, MMS, voice and USSD services. Enjoy exceptional 24/7 support and send and receive messages with i-Cell’s trusted APIs.",
    icon: MessageSquareText,
    image: monitoringImage,
    accent: "from-sky-500/25 to-blue-400/10",
    features: [],
  },
  {
    title: "AI Companion",
    shortTitle: "AI",
    description:
      "AI Companion is an out-of-the-box service for MNOs, designed to enhance telco self-care mobile apps with AI capabilities. Easy to integrate and deploy, this service instantly provides smart, contextual recommendations tailored to each user. Join us in transforming MNO apps into a powerful tool for revenue boost.",
    icon: Bot,
    image: monitoringImage,
    accent: "from-emerald-500/25 to-teal-400/10",
    features: [],
  },
  {
    title: "AI Caller ID",
    shortTitle: "Caller ID",
    description:
      "Our Caller ID is an Add-on Core Service for MNOs with the following capabilities.",
    icon: PhoneCall,
    image: monitoringImage,
    accent: "from-amber-500/25 to-orange-400/10",
    features: [],
  },
  {
    title: "Equipment Identity Register (EIR)",
    shortTitle: "EIR",
    description:
      "The EIR registers IMEI numbers of all mobile devices, such as mobile phones, smart phones, hand-held computers, tablet PCs, modems, POS machines and more, which use national GSM networks for their electronic communications. The system only permits electronic communications to those mobile devices which are registered and have no legal obstacles for their usage in the country. IMEI Registry System blocks electronic communications of unregistered, stolen, lost mobile devices and provides tracking of illegal activities. The Equipment Identity Register (EIR) provides a direct interface to the IMEI DB.",
    icon: Cpu,
    image: monitoringImage,
    accent: "from-rose-500/25 to-red-400/10",
    features: [],
  },
  {
    title: "Big Data",
    shortTitle: "Big Data",
    description:
      "We have established an enterprise-wide big data solution that can gather data directly from telco network element CRM and charging platform etc. Our solution can work with or without pre-processed data and also structure data to provide intelligent reporting. The CDR extracted from the telco will be structured by our report system to provide mobility-related statistics, such as migration, commuting, urbanization and tourism. Our system can distinguish between high resolution data, such as signaling data, and call detail records (CDR).",
    icon: Database,
    image: monitoringImage,
    accent: "from-cyan-500/25 to-sky-400/10",
    features: [],
  },
  {
    title: "Credit+",
    shortTitle: "Credit+",
    description:
      "Is a service that allows subscribers borrow airtime and data bundles based on their activities on the network. Subscribers pay back the borrowed airtime/data upon their next recharge(s) until the full loan amount is recouped.",
    icon: Wallet,
    image: creditImage,
    accent: "from-indigo-500/25 to-blue-400/10",
    features: [],
  },
  {
    title: "MVNO Services",
    shortTitle: "MVNO",
    description:
      "We are MVNO enabler and we provide the following MVNO services.",
    icon: Globe,
    image: monitoringImage,
    accent: "from-purple-500/25 to-indigo-400/10",
    features: [],
  },
  {
    title: "VOD Platform",
    shortTitle: "VOD",
    description:
      "i-Cell is an innovation solution provider of VOD Platform. In connection with other subsystems our video content management system brings you content management services, users, transactions, and admin panel. Some of the features of this platform are as follows.",
    icon: PlaySquare,
    image: monitoringImage,
    accent: "from-pink-500/25 to-purple-400/10",
    features: [],
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

function ProductModal({
  product,
  onClose,
}: {
  product: ProductItem | null;
  onClose: () => void;
}) {
  if (!product) return null;

  const Icon = product.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/15 bg-[#091532] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,122,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
              <Icon size={22} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                {product.shortTitle}
              </p>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {product.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-200 transition hover:bg-white/15 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative max-h-[calc(90vh-80px)] overflow-y-auto px-5 py-5 md:px-7 md:py-6">
          <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src={product.image}
                alt={product.title}
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>

            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-lg font-semibold text-white">Overview</h4>
                <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                  {product.description}
                </p>
              </div>

              {product.features.length > 0 ? (
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-lg font-semibold text-white">Features</h4>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {product.features.map((feature, index) => (
                      <div
                        key={`${product.title}-modal-${index}`}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
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
              ) : null}

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#17388f] transition hover:opacity-90"
                >
                  Close
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  onLearnMore,
  landscape = false,
}: ProductItem & { onLearnMore: () => void; landscape?: boolean }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[24px] border border-white/15 bg-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.12]",
        landscape ? "w-full max-w-5xl" : "flex h-full flex-col",
      ].join(" ")}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-70`} />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div
        className={[
          "relative h-full p-5",
          landscape
            ? "grid gap-6 lg:grid-cols-[380px,1fr] lg:items-center"
            : "flex flex-col",
        ].join(" ")}
      >
        <div className={landscape ? "order-2 lg:order-1" : ""}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white">
              <Icon size={22} />
            </div>

            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">
              {shortTitle}
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              src={image}
              alt={title}
              className={[
                "w-full object-cover transition duration-500 group-hover:scale-[1.03]",
                landscape ? "h-64 lg:h-[280px]" : "h-40",
              ].join(" ")}
            />
          </div>
        </div>

        <div
          className={[
            landscape
              ? "order-1 lg:order-2 flex flex-col justify-center"
              : "mt-4 flex flex-1 flex-col",
          ].join(" ")}
        >
          <h3
            className={
              landscape
                ? "text-2xl font-semibold leading-snug text-white"
                : "text-lg font-semibold leading-snug text-white"
            }
          >
            {title}
          </h3>

          <p
            className={[
              "mt-3 text-slate-200",
              landscape
                ? "line-clamp-4 text-base leading-7"
                : "line-clamp-5 text-sm leading-6",
            ].join(" ")}
          >
            {description}
          </p>

          {features.length > 0 ? (
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {features.slice(0, landscape ? 4 : 5).map((feature, index) => (
                <div
                  key={`${title}-${index}`}
                  className="flex items-start gap-2 rounded-lg border border-white/8 bg-white/6 px-3 py-2"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-[2px] shrink-0 text-emerald-300"
                  />
                  <span className="text-sm leading-5 text-slate-100">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          <button
            type="button"
            onClick={onLearnMore}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
          >
            Learn More
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );

  const products = useMemo(() => allProducts, []);

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
              subtitle="Explore our cutting-edge technology solutions designed for enhancing operational efficiency, accelerating digital transformation, and leveraging AI-native approaches to drive growth."
            />
          </div>
        </section>

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => {
                const isLast = index === products.length - 1;
                const shouldMakeLastLandscape =
                  products.length % 3 === 1 && isLast;

                return (
                  <div
                    key={product.title}
                    className={
                      shouldMakeLastLandscape
                        ? "md:col-span-2 lg:col-span-3 flex justify-center"
                        : ""
                    }
                  >
                    <ProductCard
                      {...product}
                      landscape={shouldMakeLastLandscape}
                      onLearnMore={() => setSelectedProduct(product)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}