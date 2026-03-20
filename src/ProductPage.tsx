import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  MessageSquareText,
  Network,
  PhoneCall,
  PlaySquare,
  Wallet,
  X,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

import amsImage from "./assets/ams-product.png";
import aicompanion from "./assets/products/ai-companion.png";
import aicalleridimage from "./assets/products/ai-caller-id.png";
import eir from "./assets/products/eir.png";
import bigdata from "./assets/products/big-data.png";
import creditplus from "./assets/products/credit-plus.png";
import mvno from "./assets/products/mvno.png";
import vod from "./assets/products/vod.png";
import vapImage from "./assets/products/vap.png";
import messagingImage from "./assets/products/messaging.png";

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
      "AMS is a gaming industry monitoring platform that delivers real-time analytics powered by big data. It enables regulators to oversee gaming activities, monitor operator sales, and gain a 360-degree view of player and operator behavior.",
    icon: BarChart3,
    image: amsImage,
    accent: "from-blue-500/25 to-cyan-400/10",
    features: [
      "Real-time reports and analytics",
      "Dispute handling for stakers",
      "Operational cost reduction",
      "Automatic tax collection",
      "Lottery operator management",
      "Lottery license management",
      "Centralized monitoring system",
      "360-degree operational visibility",
      "Underage gambling detection",
      "Addiction pattern detection",
      "AML detection support",
      "Geofencing capabilities",
    ],
  },
  {
    title: "VAS Aggregator Platform",
    shortTitle: "VAP",
    description:
      "VAP provides a centralized integration layer that reduces the number of direct connections required between content service providers and network operators. It supports the end-to-end lifecycle of value-added services, from creation and management to delivery and execution.",
    icon: Network,
    image: vapImage,
    accent: "from-violet-500/25 to-fuchsia-400/10",
    features: [
      "Service management",
      "User management",
      "Partner management",
      "Multi-channel access: SMS, MMS, USSD, App",
      "Access code management",
      "Direct carrier billing",
    ],
  },
  {
    title: "Messaging",
    shortTitle: "Messaging",
    description:
      "We deliver premium bulk SMS, MMS, voice, and USSD services backed by dependable APIs and responsive support. Our messaging solutions are built for speed, reliability, and enterprise-scale communication.",
    icon: MessageSquareText,
    image: messagingImage,
    accent: "from-sky-500/25 to-blue-400/10",
    features: [
      "Premium bulk SMS",
      "MMS services",
      "Voice services",
      "USSD services",
      "24/7 support",
      "Trusted API integrations",
    ],
  },
  {
    title: "AI Companion",
    shortTitle: "AI",
    description:
      "AI Companion is an out-of-the-box solution for mobile network operators that enhances self-care mobile apps with AI-driven capabilities. It provides intelligent recommendations tailored to individual users and helps transform apps into stronger engagement and revenue channels.",
    icon: Bot,
    image: aicompanion,
    accent: "from-emerald-500/25 to-teal-400/10",
    features: [
      "Ready-to-deploy MNO solution",
      "AI enhancement for self-care apps",
      "Fast integration and rollout",
      "Contextual user recommendations",
      "Revenue growth enablement",
    ],
  },
  {
    title: "AI Caller ID",
    shortTitle: "Caller ID",
    description:
      "AI Caller ID is an intelligent add-on service for MNOs that helps identify incoming calls while preserving user privacy. It combines multiple data sources to generate accurate, real-time caller identity predictions.",
    icon: PhoneCall,
    image: aicalleridimage,
    accent: "from-amber-500/25 to-orange-400/10",
    features: [
      "Identifies most local numbers instantly",
      "Supports business, spam, mobile, landline, prepaid and postpaid numbers",
      "Privacy-first and GDPR-friendly",
      "Real-time caller identity prediction",
      "Multi-source identity tagging",
    ],
  },
  {
    title: "Equipment Identity Register",
    shortTitle: "EIR",
    description:
      "The EIR manages IMEI records for mobile devices and restricts network access to devices that are authorized and compliant. It supports the control of stolen, lost, cloned, and unregistered devices.",
    icon: Cpu,
    image: eir,
    accent: "from-rose-500/25 to-red-400/10",
    features: [
      "Manage equipment lists",
      "IMEI status queries",
      "Bulk data transfer between EIR and local files",
      "Bulk deletion support",
      "Equipment list testing",
      "IMEI database management",
      "Cloned handset monitoring",
      "MSISDN-to-IMEI search",
      "Fraud analysis tools",
      "Audit and alarm logs",
      "Role-based authorization",
    ],
  },
  {
    title: "Big Data",
    shortTitle: "Big Data",
    description:
      "Our enterprise big data solution captures data directly from telecom systems and transforms it into structured intelligence for reporting, mobility insight, and strategic decision-making.",
    icon: Database,
    image: bigdata,
    accent: "from-cyan-500/25 to-sky-400/10",
    features: [
      "Direct ingestion from telco systems",
      "Works with raw or pre-processed data",
      "Structured intelligent reporting",
      "Mobility and tourism analytics",
      "CDR and signaling data distinction",
    ],
  },
  {
    title: "Credit+",
    shortTitle: "Credit+",
    description:
      "Credit+ enables subscribers to borrow airtime, data, and other service bundles based on usage behavior and network activity, with automated repayment on subsequent recharges.",
    icon: Wallet,
    image: creditplus,
    accent: "from-indigo-500/25 to-blue-400/10",
    features: [
      "Airtime, data, bundle and VAS advances",
      "Subscriber credit scoring",
      "Customer segmentation",
      "Flexible advance denominations",
      "Support for airtime, data, mobile money and VAS loan types",
      "USSD, SMS, Web App and Mobile App channels",
      "Multi-language support",
      "Push and pull channels",
      "Gamification support",
    ],
  },
  {
    title: "MVNO Services",
    shortTitle: "MVNO",
    description:
      "We support MVNOs with consulting, technical design, service operations, billing, and loyalty platforms. Our solutions help virtual network operators launch and scale efficiently.",
    icon: Globe,
    image: mvno,
    accent: "from-purple-500/25 to-indigo-400/10",
    features: [
      "Go-to-market consulting",
      "Operational support",
      "Platform blueprints",
      "Carrier-grade network and IT components",
      "Cloud-based billing and loyalty management",
    ],
  },
  {
    title: "VOD Platform",
    shortTitle: "VOD",
    description:
      "Our VOD platform provides content management, user administration, transaction support, and modern entertainment delivery features through a scalable digital media ecosystem.",
    icon: PlaySquare,
    image: vod,
    accent: "from-pink-500/25 to-purple-400/10",
    features: [
      "Content security",
      "International payment gateway integration",
      "Recommendation engine",
      "Live streaming",
      "Radio channels",
      "TV catch-up",
      "Multi-profile support",
      "Parental lock",
      "ABR streaming",
      "Multilingual subtitles",
      "Multiple audio tracks",
      "Bookmarking",
      "Favorites",
      "Reminders",
      "Ratings",
      "Search",
    ],
  },
];

function preloadImage(src: string) {
  const img = new Image();
  img.decoding = "async";
  img.src = src;
}

function addPreloadLinks(images: string[]) {
  const appended: HTMLLinkElement[] = [];

  images.forEach((src) => {
    const existing = document.head.querySelector(`link[rel="preload"][href="${src}"]`);
    if (existing) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
    appended.push(link);
  });

  return () => {
    appended.forEach((link) => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    });
  };
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
        <BellRing size={12} />
        Bryantel Solutions
      </div>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-2 text-sm leading-6 text-slate-300 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function OptimizedImage({
  src,
  alt,
  className,
  priority = "auto",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: "high" | "auto" | "low";
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white/5">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-white/10" />}

      <img
        src={src}
        alt={alt}
        loading="eager"
        fetchPriority={priority}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={[
          className ?? "",
          "relative z-10 h-full w-full object-cover",
        ].join(" ")}
      />
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
  useEffect(() => {
    if (!product) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [product, onClose]);

  if (!product) return null;

  const Icon = product.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
    >
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-[#091532] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
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
          <div className="grid gap-6 lg:grid-cols-[340px,1fr]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <OptimizedImage
                src={product.image}
                alt={product.title}
                priority="high"
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>

            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-lg font-semibold text-white">Description</h4>
                <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                  {product.description}
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-lg font-semibold text-white">Key Features</h4>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <div
                      key={`${product.title}-feature-${index}`}
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
  accent,
  onLearnMore,
  landscape = false,
  priority = "auto",
}: Omit<ProductItem, "features"> & {
  onLearnMore: () => void;
  landscape?: boolean;
  priority?: "high" | "auto" | "low";
}) {
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
            <OptimizedImage
              src={image}
              alt={title}
              priority={priority}
              className={[
                "w-full object-cover transition duration-500 group-hover:scale-[1.03]",
                landscape ? "h-64 lg:h-[280px]" : "h-48",
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
                : "line-clamp-4 text-sm leading-6",
            ].join(" ")}
          >
            {description}
          </p>

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

  useEffect(() => {
    const imageSources = products.map((item) => item.image);
    imageSources.forEach(preloadImage);

    const cleanup = addPreloadLinks(imageSources);
    return cleanup;
  }, [products]);

  return (
    <div className="min-h-screen bg-[#07122f] text-white">
      <SiteHeader />

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,122,255,0.22),transparent_24%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_28%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:4px_4px]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(125deg,transparent_0%,rgba(255,255,255,0.08)_40%,transparent_100%)]" />

        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 pt-6 pb-3 md:px-6 md:pt-8 md:pb-4 lg:px-8 lg:pt-8 lg:pb-4">
            <SectionHeading
              title="Bryantel Products & Solutions"
              subtitle="Explore our enterprise technology solutions built to improve operational efficiency, accelerate digital transformation, and unlock scalable growth."
            />
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 pt-1 pb-10 md:px-6 md:pt-2 md:pb-12 lg:px-8 lg:pt-2 lg:pb-14">
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
                      title={product.title}
                      shortTitle={product.shortTitle}
                      description={product.description}
                      icon={product.icon}
                      image={product.image}
                      accent={product.accent}
                      landscape={shouldMakeLastLandscape}
                      priority={index < 6 ? "high" : "auto"}
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