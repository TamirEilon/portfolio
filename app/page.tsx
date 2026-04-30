"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// ─── Mobile detection ─────────────────────────────────────────────────────────

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="4.5" cy="4.5" r="2.5"/>
    <rect x="3" y="9" width="3" height="12"/>
    <path d="M9 9h3v1.7c.8-1.1 2.1-2 4-2 3.5 0 5 2.3 5 5.6V21h-3v-6c0-1.8-.6-3-2.2-3-1.6 0-2.8 1.1-2.8 3.1V21H9V9z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// ─── Hero highlight ───────────────────────────────────────────────────────────

const DesignerHighlight = () => (
  <span className="relative inline-block">
    a designer
    <svg
      className="absolute left-0 w-full pointer-events-none"
      style={{ bottom: "-36px", height: "50px" }}
      viewBox="0 0 600 50"
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.path
        d="M30 22 C120 14, 320 10, 560 24"
        stroke="#CCFF00"
        strokeWidth="18"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
      />
      <motion.path
        d="M45 38 C150 30, 340 27, 540 40"
        stroke="#CCFF00"
        strokeWidth="16"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
      />
    </svg>
  </span>
);

// ─── Mockup components (one per project) ─────────────────────────────────────

const RefillMockup = () => (
  <Image
    src="/refill-mockups/refill-mockup-statistics.png"
    alt="Refill app — statistics screen"
    width={870}
    height={1761}
    style={{ width: "280px", height: "auto", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))" }}
  />
);

const FramesMockup = () => {
  const isMobile = useIsMobile();
  const size = isMobile ? "120px" : "280px";
  const w = isMobile ? "260px" : "520px";
  const h = isMobile ? "130px" : "280px";
  return (
    <div style={{ position: "relative", width: w, height: h, overflow: "visible" }}>
      <span style={{ fontSize: size, fontWeight: 900, color: "rgba(255,255,255,0.85)", lineHeight: 1, position: "absolute", bottom: 0, left: isMobile ? "20px" : "60px", userSelect: "none" }}>£</span>
      <span style={{ fontSize: size, fontWeight: 900, color: "rgba(255,255,255,0.85)", lineHeight: 1, position: "absolute", bottom: 0, right: isMobile ? "20px" : "60px", userSelect: "none" }}>$</span>
    </div>
  );
};

// ─── Phone frame wrapper ─────────────────────────────────────────────────────

const PhoneFrame = ({
  children,
  width = "190px",
}: {
  children: React.ReactNode;
  width?: string;
}) => (
  <div
    style={{
      width,
      flexShrink: 0,
      backgroundColor: "#d9d9d9",
      borderRadius: "28px",
      padding: "5px",
      boxShadow: "0 24px 60px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(255,255,255,0.07)",
    }}
  >
    <div style={{ borderRadius: "24px", overflow: "hidden", lineHeight: 0 }}>
      {children}
    </div>
  </div>
);

// ─── Parallax mockup gallery ─────────────────────────────────────────────────

interface MockupImage { src: string; width: number; height: number }
interface AdsGridImage { src: string; width: number; height: number; gridColumn: string; gridRow: string; marginTop?: string; alignSelf?: string }
interface ScreenshotImage { src: string }

const ParallaxMockups = ({
  mockups,
  bg,
}: {
  mockups: [MockupImage, MockupImage, MockupImage];
  bg: string;
}) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yOuter = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const [left, center, right] = mockups;
  const phoneWidth = isMobile ? "95px" : "190px";

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: bg,
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: isMobile ? "24px" : "160px",
        paddingRight: isMobile ? "24px" : "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? "1.5rem" : "12rem",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ y: isMobile ? 0 : yOuter }}>
        <PhoneFrame width={phoneWidth}>
          <Image src={left.src} alt="" width={left.width} height={left.height} style={{ width: "100%", height: "auto", display: "block" }} />
        </PhoneFrame>
      </motion.div>
      <motion.div style={{ y: isMobile ? 0 : yCenter }}>
        <PhoneFrame width={phoneWidth}>
          <Image src={center.src} alt="" width={center.width} height={center.height} style={{ width: "100%", height: "auto", display: "block" }} />
        </PhoneFrame>
      </motion.div>
      <motion.div style={{ y: isMobile ? 0 : yOuter }}>
        <PhoneFrame width={phoneWidth}>
          <Image src={right.src} alt="" width={right.width} height={right.height} style={{ width: "100%", height: "auto", display: "block" }} />
        </PhoneFrame>
      </motion.div>
    </div>
  );
};

// ─── Project data ─────────────────────────────────────────────────────────────
// To add a new project: append an entry here. That's it.

interface ProjectMetaItem { text: string; href: string; download?: boolean }
interface ProjectMeta { label: string; items: (string | ProjectMetaItem)[] }
interface ProjectChallenge { label: string; title: string; body: string | string[] }

interface ProjectData {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
  mockupBg: string;
  mockup: React.ReactNode;
  description: string[];
  meta: ProjectMeta[];
  parallaxMockups?: [MockupImage, MockupImage, MockupImage];
  challenge?: ProjectChallenge;
  adsGrid?: AdsGridImage[];
  additionalSections?: ProjectChallenge[];
  adsGridAfter?: AdsGridImage[];
  finalSections?: ProjectChallenge[];
  screenshotGrid?: ScreenshotImage[];
  screenshotGridBg?: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: "refill",
    year: "2025",
    title: "Refill",
    subtitle: "Application Design",
    subtitleColor: "#93C1E8",
    mockupBg: "#C8DFFB",
    mockup: <RefillMockup />,
    description: [
      'As part of a scholarship competition for IED Milan, I was challenged to design a product around the theme of "Commons" — exploring how design can make shared resources more accessible, sustainable, and equitable.',
      'I responded by creating "Refill" — an app that helps people easily find nearby public water sources while encouraging more sustainable daily habits.',
    ],
    meta: [
      { label: "Design Lead", items: ["UX/UI Design", "Visual Design", "App Design"] },
      { label: "Awards",      items: ["IED Scholarship Award"] },
      { label: "Link",        items: [{ text: "View full case-study", href: "/case-studies-pdfs/Case Study - Refill.pdf", download: true }] },
    ],
    parallaxMockups: [
      { src: "/refill-mockups/refill-semi-overview.png",       width: 393, height: 852 },
      { src: "/refill-mockups/refill-semi-settings.png",       width: 393, height: 852 },
      { src: "/refill-mockups/refill-semi-mcokup-place.png",   width: 393, height: 852 },
    ],
    challenge: {
      label: "WHY",
      title: "Actual Challenge",
      body: "Water is one of the most essential shared resources, yet its accessibility in public spaces is often fragmented and overlooked. Despite existing infrastructure, the lack of visibility and coordination turns a common good into an underused one. The challenge was to use design to bridge this gap — transforming access to water into a seamless, community-driven experience.",
    },
    adsGrid: [
      { src: "/refill-ads-photos/Billboards.png",             width: 1003, height: 684,  gridColumn: "1",     gridRow: "1",     marginTop: "80px",  alignSelf: "end" },
      { src: "/refill-ads-photos/Frame 40.png",               width: 693,  height: 460,  gridColumn: "2",     gridRow: "1",     marginTop: "30px" },
      { src: "/refill-ads-photos/Lightbox Sign.png",          width: 880,  height: 480,  gridColumn: "1 / 3", gridRow: "2",     marginTop: "40px" },
      { src: "/refill-ads-photos/Hand and iPhone 16 Pro.png", width: 644,  height: 1012, gridColumn: "3",     gridRow: "1 / 4", marginTop: "160px" },
    ],
    additionalSections: [
      {
        label: "DESIGN",
        title: "A New Way To Drink",
        body: "Refill introduces a new way to approach everyday hydration – shifting from consumption to access. Instead of purchasing water on demand, users can easily locate nearby refill points through an intuitive, map-based interface. By combining real-time location data with community contributions, the design transforms drinking water into a visible, shared, and accessible resource.",
      },
    ],
  },
  {
    id: "frames",
    year: "2024",
    title: "Frames",
    subtitle: "SaaS Web Design",
    subtitleColor: "#ffb1a1",
    mockupBg: "#FFCCC2",
    mockup: <FramesMockup />,
    description: [
      "As part of designing a modern fintech learning experience, I created 'Frames' - a financial SaaS that combines trading tools, educational courses, and real-time news to support smarter investing decisions.",
      "It allows users to trade while learning, while staying updated with curated market insights that adapt to their investments and interests.",
    ],
    meta: [
      { label: "Design Lead", items: ["UX/UI Design", "Visual Design", "Web Design"] },
      { label: "Link",        items: [{ text: "View full case-study", href: "/case-studies-pdfs/Case -Study - Frames.pdf", download: true }] },
    ],
    screenshotGridBg: "#FFCCC2",
    screenshotGrid: [
      { src: "/frames-mockups/Main Dashboard.png" },
      { src: "/frames-mockups/Splash Screen.png" },
      { src: "/frames-mockups/Learn.png" },
      { src: "/frames-mockups/Specific Stock.png" },
    ],
    additionalSections: [
      {
        label: "WHY",
        title: "Actual Challenge",
        body: "Investing has become more accessible than ever, yet understanding how to invest remains fragmented and overwhelming. Users are often forced to rely on scattered resources — switching between trading platforms, educational content, and financial news — without a clear connection between learning and action. The challenge was to design a unified experience that bridges this gap — enabling users to learn, stay informed, and make investment decisions within one seamless ecosystem.",
      },
    ],
    finalSections: [
      {
        label: "DESIGN",
        title: "One Place",
        body: [
          "Frames was designed as a unified environment where investing and learning exist side by side, rather than as separate journeys. The platform integrates trading tools with structured courses, real-time market insights, and contextual news – allowing users to understand why they are making decisions as they make them. Educational content is embedded directly into the investing experience, surfacing relevant lessons, explanations, and insights based on user actions and interests.",
          "This approach transforms the platform from a traditional trading interface into a continuous learning system. Instead of switching between apps or passively consuming information, users actively build knowledge through doing — gaining confidence over time while staying informed and engaged within a single, seamless experience.",
        ],
      },
    ],
    adsGridAfter: [
      { src: "/frames-ads-photos/Business Card.png", width: 1798, height: 1030, gridColumn: "1", gridRow: "1",     marginTop: "0px" },
      { src: "/frames-ads-photos/Group 8745.png",    width: 1373, height: 1685, gridColumn: "2",     gridRow: "1 / 4", marginTop: "40px" },
      { src: "/frames-ads-photos/Frame 153.png",     width: 400,  height: 400,  gridColumn: "1",     gridRow: "2",     marginTop: "65px" },
      { src: "/frames-ads-photos/Group 8746.png",    width: 1385, height: 1128, gridColumn: "3",     gridRow: "2",     marginTop: "60px" },
    ],
  },
  // ← add future projects here
];

// ─── Text section (shared layout for challenge / additional / final) ──────────

function TextSection({ sec, isMobile }: { sec: ProjectChallenge; isMobile: boolean }) {
  const bodies = Array.isArray(sec.body) ? sec.body : [sec.body];
  return (
    <div style={{
      backgroundColor: "#f6f6f6",
      paddingTop: "4rem",
      paddingBottom: "4rem",
      paddingLeft: isMobile ? "24px" : "160px",
      paddingRight: isMobile ? "24px" : "17rem",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "1rem" : "4rem",
      alignItems: "flex-start",
    }}>
      <div style={{ flexShrink: 0, width: isMobile ? "auto" : "260px" }}>
        <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>{sec.label}</p>
        <h3 className="font-bold" style={{ fontSize: "clamp(1.3rem, 2.2vw, 2rem)", lineHeight: 1.1, color: "#000" }}>{sec.title}</h3>
      </div>
      <div style={{ flex: 1, paddingTop: isMobile ? 0 : "0.15rem" }}>
        {bodies.map((para, j) => (
          <p key={j} style={{ fontSize: isMobile ? "1rem" : "1.3rem", lineHeight: 1.75, color: "#333", marginBottom: j < bodies.length - 1 ? "1.5rem" : 0 }}>{para}</p>
        ))}
      </div>
    </div>
  );
}

// ─── Reusable project section ─────────────────────────────────────────────────

function ProjectSection({ project }: { project: ProjectData }) {
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "160px";
  const pr = isMobile ? "24px" : "4rem";

  return (
    <section id={project.id}>
      {/* Header */}
      <div style={{ paddingTop: "4rem", paddingBottom: "2rem", paddingLeft: px, paddingRight: pr }}>
        <p style={{ fontSize: "1rem", marginBottom: "0.4rem", color: "#555" }}>{project.year}</p>
        <h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}>{project.title}</h2>
        <p className="font-semibold tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: project.subtitleColor, lineHeight: 1.1 }}>{project.subtitle}</p>
      </div>

      {/* Mockup */}
      <div style={{ backgroundColor: project.mockupBg, paddingTop: "4rem", paddingBottom: "4rem", paddingLeft: px, paddingRight: pr, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        {project.mockup}
      </div>

      {/* Description */}
      <div style={{
        backgroundColor: "#f6f6f6",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        paddingLeft: px,
        paddingRight: isMobile ? "24px" : "17rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "2rem" : "6rem",
        alignItems: "flex-start",
      }}>
        <div style={{ flex: 1 }}>
          {project.description.map((para, i) => (
            <p key={i} style={{ lineHeight: 1.7, fontSize: isMobile ? "1rem" : "1.3rem", color: "#222", paddingRight: isMobile ? 0 : "10rem", marginBottom: i < project.description.length - 1 ? "1.5rem" : 0 }}>{para}</p>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", flexWrap: isMobile ? "wrap" : "nowrap", gap: isMobile ? "1.5rem" : "1.8rem", flexShrink: 0 }}>
          {project.meta.map(({ label, items }) => (
            <div key={label}>
              <p style={{ fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", marginBottom: "0.4rem" }}>{label}</p>
              {items.map((item, i) => (
                typeof item === "string"
                  ? <p key={i} style={{ fontSize: "0.9rem", color: "#222" }}>{item}</p>
                  : <a key={i} href={item.href} download={item.download} style={{ fontSize: "0.9rem", color: "#222", textDecoration: "underline", cursor: "pointer", display: "block" }}>{item.text}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Parallax mockup gallery */}
      {project.parallaxMockups && (
        <ParallaxMockups mockups={project.parallaxMockups} bg="#f6f6f6" />
      )}

      <section style={{ backgroundColor: "#f6f6f6", minHeight: "4vh" }} />

      {/* Challenge section */}
      {project.challenge && <TextSection sec={project.challenge} isMobile={isMobile} />}

      {/* Ads / mockup grid */}
      {project.adsGrid && project.adsGrid.length > 0 && (
        <div style={{ backgroundColor: "#f6f6f6", paddingTop: "2rem", paddingBottom: "4rem", paddingLeft: isMobile ? "24px" : "260px", paddingRight: isMobile ? "24px" : "12rem" }}>
          {isMobile ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {project.adsGrid.map(({ src, width, height }, i) => (
                <div key={i} style={{ borderRadius: "10px", overflow: "hidden" }}>
                  <Image src={src} alt="" width={width} height={height} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr", gap: "12px", alignItems: "start" }}>
              {project.adsGrid.map(({ src, width, height, gridColumn, gridRow, marginTop, alignSelf }, i) => (
                <div key={i} style={{ gridColumn, gridRow, borderRadius: "14px", overflow: "hidden", marginTop: marginTop ?? "0px", alignSelf: alignSelf ?? "start" }}>
                  <Image src={src} alt="" width={width} height={height} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Screenshot grid */}
      {project.screenshotGrid && project.screenshotGrid.length > 0 && (
        <div style={{ backgroundColor: project.screenshotGridBg ?? "#FFCCC2", overflow: "hidden" }}>
          {isMobile ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", padding: "24px" }}>
              {project.screenshotGrid.slice(0, 4).map((img, i) => (
                <div key={i} style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "16/10" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
              ))}
            </div>
          ) : (
            [0, 1, 2, 3].map((rowIndex) => {
              const imgs = project.screenshotGrid!;
              const cols = 5;
              const rowImgs = Array.from({ length: cols }, (_, i) => {
                const offset = rowIndex * cols + i;
                return imgs[offset % imgs.length];
              });
              return (
                <div key={rowIndex} style={{ display: "flex", gap: "30px", marginLeft: "-5px", marginRight: "-5px", marginTop: rowIndex === 0 ? "-9.5%" : "30px", marginBottom: rowIndex === 3 ? "-9.5%" : undefined }}>
                  {rowImgs.map((img, i) => (
                    <div key={i} style={{ flex: "0 0 calc(20% - 10px)", aspectRatio: "16/10", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                    </div>
                  ))}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Additional text sections */}
      {project.additionalSections?.map((sec, i) => (
        <TextSection key={i} sec={sec} isMobile={isMobile} />
      ))}

      {/* Ads / mockup grid (after additional sections) */}
      {project.adsGridAfter && project.adsGridAfter.length > 0 && (
        <div style={{ backgroundColor: "#f6f6f6", paddingTop: "2rem", paddingBottom: "4rem", paddingLeft: isMobile ? "24px" : "260px", paddingRight: isMobile ? "24px" : "12rem" }}>
          {isMobile ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {project.adsGridAfter.map(({ src, width, height }, i) => (
                <div key={i} style={{ borderRadius: "10px", overflow: "hidden" }}>
                  <Image src={src} alt="" width={width} height={height} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr", gap: "12px", alignItems: "start" }}>
              {project.adsGridAfter.map(({ src, width, height, gridColumn, gridRow, marginTop, alignSelf }, i) => (
                <div key={i} style={{ gridColumn, gridRow, borderRadius: "14px", overflow: "hidden", marginTop: marginTop ?? "0px", alignSelf: alignSelf ?? "start" }}>
                  <Image src={src} alt="" width={width} height={height} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Final text sections */}
      {project.finalSections?.map((sec, i) => (
        <TextSection key={i} sec={sec} isMobile={isMobile} />
      ))}
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [isLight, setIsLight] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => {
      setIsLight(window.scrollY >= window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveProject(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -35% 0px" }
    );

    PROJECTS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const iconColor = isLight ? "#000" : "#fff";
  const colorTransition = "color 0.5s ease";
  const px = isMobile ? "24px" : "160px";

  return (
    <div style={{ backgroundColor: isLight ? "#fff" : "#000", color: isLight ? "#000" : "#fff", transition: "background-color 0.5s ease, color 0.5s ease" }}>

      {/* Fixed Side Navigation */}
      <nav className="fixed flex flex-col gap-7 z-20" style={{ left: "1.25rem", top: "1.5rem" }}>
        <motion.a href="mailto:tamireilon@gmail.com" aria-label="Email" style={{ color: iconColor, transition: colorTransition }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <EmailIcon />
        </motion.a>
        <motion.a href="https://linkedin.com/in/tamireilon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: iconColor, transition: colorTransition }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <LinkedInIcon />
        </motion.a>

        {/* Project nav labels — desktop only */}
        {!isMobile && (
          <AnimatePresence>
            {isLight && (
              <motion.div key="projects" className="flex flex-col" style={{ gap: "2rem", marginTop: "1rem" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                {PROJECTS.map(({ id, title }) => (
                  <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); const el = document.getElementById(id); if (!el) return; const start = window.scrollY; const end = el.getBoundingClientRect().top + start; const duration = 1400; const startTime = performance.now(); const ease = (t: number) => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; const step = (now: number) => { const elapsed = now - startTime; const progress = Math.min(elapsed / duration, 1); window.scrollTo(0, start + (end - start) * ease(progress)); if (progress < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }} style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: activeProject === id ? "#000" : "#bbb", transition: "color 0.3s ease", textDecoration: "none" }}>
                    {title}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </nav>

      {/* Scrollable content */}
      <main>

        {/* Hero */}
        <section className="flex flex-col items-start justify-center text-left" style={{ minHeight: "100vh", paddingLeft: px, paddingRight: isMobile ? "24px" : "4rem" }}>
          <motion.p className="font-bold mb-8" style={{ fontSize: "1rem" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Tamir Eilon
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <h1 className="font-black leading-[1.03] tracking-tight text-left" style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}>
              Developer turned into
              <br />
              <DesignerHighlight />
            </h1>
          </motion.div>
          <div style={{ minHeight: "10vh" }} />
          <motion.h2 className="font-black leading-[1.06] tracking-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            I build things, break things,
            <br />
            and make them beautiful.
          </motion.h2>
        </section>

        <div style={{ minHeight: "40vh" }} />

        {/* Project sections — rendered from data */}
        {PROJECTS.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}

        {/* Footer */}
        <footer style={{ backgroundColor: "#f6f6f6", minHeight: "40vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: px, paddingRight: isMobile ? "24px" : "4rem", paddingTop: "6rem", paddingBottom: "6rem" }}>
          <h2 className="font-black" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#000", lineHeight: 1.05, marginBottom: "0.6rem" }}>Thank you.</h2>
          <a href="mailto:tamireilon@gmail.com" style={{ fontSize: "1.1rem", color: "#888", textDecoration: "none" }}>tamireilon@gmail.com</a>
        </footer>

      </main>

      {/* WORK scroll indicator */}
      <AnimatePresence>
        {!isLight && (
          <motion.div key="work-indicator" className="fixed flex flex-col items-start gap-3" style={{ bottom: "2rem", left: "1.25rem" }} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <span className="font-bold tracking-[0.25em] uppercase" style={{ fontSize: "11px", color: "#fff" }}>WORK</span>
            <motion.svg width="14" height="20" viewBox="0 0 14 20" fill="none" animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
              <path d="M7 0v16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M1 10l6 7 6-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
