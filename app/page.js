"use client";

import Image from "next/image";
import { useState } from "react";
import {
  InstagramIcon,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
} from "lucide-react";

const SHOP_URL =
  "https://selar.com/m/fridah-makena993077?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const INSTAGRAM_URL = "https://www.instagram.com/bloomco.ke";

const services = [
  {
    number: "01",
    title: "Wellness Journals",
    text: "Thoughtfully designed guided journals that promote self-reflection, emotional wellness, mindfulness, gratitude, goal-setting, and intentional living.",
  },
  {
    number: "02",
    title: "Productivity Guides",
    text: "Resources developed to support healthier work habits, improved focus, workplace wellness, and sustainable productivity.",
  },
  {
    number: "03",
    title: "Adult Coloring & Reflection",
    text: "Creative wellness tools that encourage relaxation, mindfulness, stress management, and emotional decompression.",
  },
  {
    number: "04",
    title: "Children's Wellness",
    text: "Engaging coloring and reflection tools designed to nurture creativity, confidence, and emotional expression in children.",
  },
  {
    number: "05",
    title: "Corporate Wellness",
    text: "Customized wellness packages and employee engagement resources designed for organizations seeking to promote well-being and positive workplace culture.",
  },
];

const values = [
  { label: "Intentionality", desc: "Products designed with purpose and meaningful transformation in mind." },
  { label: "Wellness", desc: "Holistic wellness — mental, emotional, spiritual, and physical — is essential for sustainable success." },
  { label: "Excellence", desc: "Committed to delivering premium, thoughtful, and high-quality wellness solutions." },
  { label: "Growth", desc: "Encouraging continuous personal development, self-reflection, and positive transformation." },
  { label: "Authenticity", desc: "Creating genuine, relatable, and impactful wellness experiences." },
];

const corporateOfferings = [
  "Wellness and productivity journals",
  "Employee appreciation wellness packages",
  "Reflection and mindfulness resources",
  "Customized branded wellness products",
  "Team wellness initiatives",
  "Workplace wellness campaigns",
  "Wellness gifting solutions",
  "Seasonal appreciation packages",
];

const whyUs = [
  { title: "Purpose-Driven", text: "We focus on meaningful wellness experiences that support real personal and workplace transformation." },
  { title: "Premium Presentation", text: "Our products maintain a clean, modern, elegant, and corporate-friendly aesthetic." },
  { title: "Wellness Meets Productivity", text: "We uniquely position wellness as a key driver of healthier performance and sustainable productivity." },
  { title: "Flexible Partnerships", text: "Customizable wellness solutions tailored to different organizational needs and employee engagement initiatives." },
];

export default function BloomWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const contactItems = [
    {
      label: "Instagram",
      value: "@bloomco.ke",
      icon: <InstagramIcon size={20} />,
      href: "https://instagram.com/bloomco.ke",
    },
    {
      label: "Email",
      value: "bloomandco@gmail.com",
      icon: <Mail size={20} />,
      href: "mailto:bloomandco@gmail.com",
    },
    {
      label: "Phone",
      value: "+254 724 973 277",
      icon: <Phone size={20} />,
      href: "tel:+254724973277",
    },
    {
      label: "Location",
      value: "Nairobi, Kenya",
      icon: <MapPin size={20} />,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f6f3ee", color: "#1f1f1f", overflowX: "hidden" }}>

      {/* ── GLOBAL STYLES ─────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; font-weight: 300; -webkit-font-smoothing: antialiased; }
        img { display: block; max-width: 100%; }

        .serif { font-family: 'Cormorant Garamond', serif; }

        /* BUTTONS */
        .pill-btn {
          display: inline-block;
          padding: 13px 28px;
          border-radius: 100px;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid transparent;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          white-space: nowrap;
        }
        .pill-dark  { background: #1a1a1a; color: #f8f5f0; border-color: #1a1a1a; }
        .pill-dark:hover  { background: #333; transform: translateY(-2px); }
        .pill-outline { background: transparent; color: #1a1a1a; border-color: #1a1a1a; }
        .pill-outline:hover { background: #1a1a1a; color: #f8f5f0; transform: translateY(-2px); }
        .pill-light { background: #f8f5f0; color: #1a1a1a; border-color: #f8f5f0; }
        .pill-light:hover { background: #ede8e0; transform: translateY(-2px); }

        /* NAV LINKS */
        .nav-link {
          position: relative;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          padding-bottom: 2px;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #1a1a1a;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        /* SECTION LABEL */
        .label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #8a9c86;
          margin-bottom: 16px;
          font-weight: 400;
        }

        /* CONTAINER */
        .wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 600px) { .wrap { padding: 0 32px; } }
        @media (min-width: 1100px) { .wrap { padding: 0 48px; } }

        /* SECTION PADDING */
        .sp { padding: 64px 0; }
        @media (min-width: 768px) { .sp { padding: 96px 0; } }
        @media (min-width: 1100px) { .sp { padding: 120px 0; } }

        /* SECTION HEADING */
        .sh { font-size: clamp(32px, 6vw, 60px); font-weight: 300; line-height: 1.05; }

        /* MARQUEE */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex; width: max-content;
          animation: marquee 24s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* HAMBURGER */
        .burger {
          display: flex; flex-direction: column;
          justify-content: center; gap: 5px;
          background: none; border: none;
          cursor: pointer; padding: 8px;
          z-index: 200; position: relative;
        }
        .burger span {
          display: block; height: 2px;
          background: #1a1a1a;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .burger span:nth-child(1) { width: 22px; }
        .burger span:nth-child(2) { width: 22px; }
        .burger span:nth-child(3) { width: 14px; }
        .burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); width: 22px; }
        .burger.open span:nth-child(2) { opacity: 0; }
        .burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 22px; }
        @media (min-width: 768px) { .burger { display: none; } }

        /* DESKTOP NAV */
        .desk-nav { display: none; }
        @media (min-width: 768px) { .desk-nav { display: flex; gap: 36px; align-items: center; } }

        /* DESKTOP SHOP BTN */
        .desk-shop { display: none; }
        @media (min-width: 768px) { .desk-shop { display: inline-block; } }

        /* MOBILE FULL-SCREEN DRAWER */
        .drawer {
          position: fixed; inset: 0;
          background: #f8f5f0;
          z-index: 150;
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          gap: 32px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .drawer.open { transform: translateX(0); }
        @media (min-width: 768px) { .drawer { display: none !important; } }
        .drawer-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 8vw, 48px);
          font-weight: 300;
          color: #1a1a1a;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: opacity 0.2s;
        }
        .drawer-link:hover { opacity: 0.45; }

        /* HERO */
        .hero-grid {
          display: flex; flex-direction: column; gap: 40px;
          padding: 52px 0 64px;
        }
        @media (min-width: 860px) {
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
            padding: 80px 0 100px;
          }
        }
        .hero-img {
          order: -1;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.13);
          aspect-ratio: 4/5;
          position: relative;
          width: 100%;
        }
        @media (min-width: 860px) { .hero-img { order: 0; border-radius: 40px; } }

        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
        @media (max-width: 380px) {
          .hero-btns { flex-direction: column; }
          .hero-btns .pill-btn { text-align: center; }
        }

        /* TWO-COL GRIDS */
        .two-col {
          display: flex; flex-direction: column; gap: 48px;
        }
        @media (min-width: 860px) {
          .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }
        }
        .two-col-top { align-items: start; }

        /* SQUARE IMAGE WRAP */
        .sq-img {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.10);
          aspect-ratio: 1/1;
          position: relative;
          width: 100%;
        }
        @media (min-width: 860px) { .sq-img { border-radius: 40px; } }

        /* SERVICE CARDS */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 560px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 960px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }

        .s-card {
          background: #fff;
          border-radius: 22px;
          padding: 28px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        @media (min-width: 768px) { .s-card { padding: 36px 40px; } }
        .s-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(0,0,0,0.09); }

        /* VALUES */
        .v-row {
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 16px;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          align-items: start;
        }
        @media (min-width: 768px) {
          .v-row {
            grid-template-columns: 56px 1fr 2fr;
            gap: 32px;
            align-items: center;
            padding: 28px 0;
          }
        }
        .v-desc-mobile { display: block; color: rgba(255,255,255,0.45); font-size: 13px; line-height: 1.65; margin-top: 6px; }
        @media (min-width: 768px) { .v-desc-mobile { display: none; } }
        .v-desc-desk { display: none; }
        @media (min-width: 768px) { .v-desc-desk { display: block; color: rgba(255,255,255,0.45); font-size: 15px; line-height: 1.7; } }

        /* OFFERINGS */
        .offerings-grid {
          display: grid; gap: 10px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 460px) { .offerings-grid { grid-template-columns: repeat(2, 1fr); } }

        /* WHY US */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 560px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 960px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }

        .w-card {
          background: #fff;
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 6px 28px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }
        @media (min-width: 768px) { .w-card { padding: 36px; } }
        .w-card:hover { transform: translateY(-5px); }

        /* PORTFOLIO */
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 560px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 860px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; } }

        /* FOOTER */
        .footer-inner {
          display: flex; flex-direction: column;
          align-items: center; gap: 18px; text-align: center;
        }
        @media (min-width: 768px) {
          .footer-inner {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        /* CONTACT */
        .contact-grid {
          display: flex; flex-direction: column; gap: 48px;
        }
        @media (min-width: 860px) {
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }
        }
      `}</style>

      {/* ── MOBILE DRAWER ─────────────────────────────── */}
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        {["about", "services", "values", "corporate", "contact"].map((s) => (
          <a key={s} href={`#${s}`} className="drawer-link" onClick={() => setMenuOpen(false)}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </a>
        ))}
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-dark"
          style={{ marginTop: 8 }}
          onClick={() => setMenuOpen(false)}
        >
          Shop Now
        </a>
      </div>

      {/* ── NAVBAR ────────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 160,
        background: "rgba(248,245,240,0.93)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px" }}>
          <a href="#" style={{ textDecoration: "none", zIndex: 200, position: "relative" }}>
            <Image src="/logo.png" alt="Bloom & Co" width={130} height={52} style={{ height: 38, width: "auto" }} />
          </a>
          <nav className="desk-nav">
            {["about", "services", "values", "corporate", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="nav-link">{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-dark desk-shop">Shop Now</a>
            <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="label">Wellness · Productivity · Intentional Living</span>
              <h1 className="serif" style={{ fontSize: "clamp(42px, 8vw, 88px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                Where Wellness<br /><em>Meets Purpose</em>
              </h1>
              <p style={{ fontSize: "clamp(15px, 2.5vw, 17px)", color: "#555", lineHeight: 1.8, maxWidth: 480, marginTop: 20 }}>
                Bloom & Co creates intentional wellness and productivity tools
                that help individuals and organizations cultivate healthier,
                more balanced, and more meaningful lives — across Africa and beyond.
              </p>
              <div className="hero-btns">
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-dark">Explore Products</a>
                <a href="#corporate" className="pill-btn pill-outline">Partner With Us</a>
              </div>
            </div>
            <div className="hero-img">
              <Image src="/hero.png" alt="Bloom & Co — Wellness Meets Purpose" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────── */}
      <div style={{ background: "#1a1a1a", color: "#f8f5f0", overflow: "hidden", padding: "15px 0" }}>
        <div className="marquee-track">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 24, paddingRight: 24 }}>
              {["Wellness Journals", "Productivity Guides", "Corporate Wellness", "Mindful Living", "Intentional Growth", "Nairobi, Kenya", "Pan-African Vision", "Bloom & Co"].map((item, j) => (
                <span key={j} style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 24 }}>
                  {item}<span style={{ opacity: 0.22 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section id="about" className="sp" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="two-col">
            <div className="sq-img">
              <Image src="/founder.jpg" alt="Fridah Nairuti — Founder, Bloom & Co" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <span className="label">Our Story</span>
              <h2 className="serif sh" style={{ marginBottom: 20 }}>
                Wellness Is The<br />Foundation of<br /><em>Sustainable Growth</em>
              </h2>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                Bloom & Co bridges wellness and workplace productivity through intentional tools and
                meaningful experiences. Founded in Nairobi, Kenya, we develop thoughtfully designed
                journals, workbooks, and corporate wellness solutions.
              </p>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
                Our vision is to become a leading wellness and productivity brand in Africa —
                empowering individuals and organizations to thrive through reflection, clarity,
                and intentional living.
              </p>
              <div style={{ background: "#f8f5f0", borderRadius: 16, padding: "20px 22px", borderLeft: "3px solid #8a9c86" }}>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.75, marginBottom: 10, fontStyle: "italic" }}>
                  "Fridah combines corporate experience with a passion for wellness, bringing a
                  practical and professional approach to workplace wellness and personal growth solutions."
                </p>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a9c86" }}>
                  Fridah Nairuti — Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section id="services" className="sp">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="label">Products & Services</span>
            <h2 className="serif sh">Designed for<br /><em>Intentional Growth</em></h2>
          </div>
          <div className="services-grid">
            {services.map((item) => (
              <div key={item.number} className="s-card">
                <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "#8a9c86", marginBottom: 12 }}>{item.number}</p>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#e8ede5", marginBottom: 18 }} />
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ color: "#666", lineHeight: 1.75, fontSize: 14 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-dark">Shop All Products</a>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────── */}
      <section id="values" className="sp" style={{ background: "#1a1a1a", color: "#f8f5f0" }}>
        <div className="wrap">
          <div style={{ marginBottom: 48 }}>
            <span className="label">Core Values</span>
            <h2 className="serif sh">Built on Principles<br /><em>That Matter</em></h2>
          </div>
          <div>
            {values.map((v, i) => (
              <div key={v.label} className="v-row"
                style={i === values.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.08)" } : {}}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", paddingTop: 4 }}>0{i + 1}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 400, color: "#f8f5f0" }}>{v.label}</h3>
                  <p className="v-desc-mobile">{v.desc}</p>
                </div>
                <p className="v-desc-desk">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORPORATE WELLNESS ────────────────────────── */}
      <section id="corporate" className="sp" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="two-col two-col-top">
            <div>
              <span className="label">Corporate Wellness</span>
              <h2 className="serif sh" style={{ marginBottom: 20 }}>
                Partnering With<br />Organizations to<br /><em>Cultivate Thriving Teams</em>
              </h2>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>
                Bloom & Co partners with organizations to support employee wellness and workplace
                engagement through practical and intentional wellness solutions. We serve corporates,
                NGOs, educational institutions, insurance companies, hospitality brands, and HR departments.
              </p>
              <a href="#contact" className="pill-btn pill-dark">Get In Touch</a>
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.05em", marginBottom: 18, color: "#1a1a1a" }}>
                Our offerings include:
              </p>
              <div className="offerings-grid">
                {corporateOfferings.map((offer, i) => (
                  <div key={i} style={{ background: "#f8f5f0", borderRadius: 12, padding: "13px 16px", fontSize: 13, color: "#444", lineHeight: 1.5 }}>
                    <span style={{ color: "#8a9c86", marginRight: 8 }}>✓</span>{offer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BLOOM ─────────────────────────────────── */}
      <section className="sp">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="label">Why Choose Us</span>
            <h2 className="serif sh">Five Reasons to<br /><em>Choose Bloom & Co</em></h2>
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="w-card">
                <span className="serif" style={{ fontSize: 44, color: "#e8ede5", fontWeight: 300, lineHeight: 1, display: "block", marginBottom: 12 }}>
                  0{i + 1}
                </span>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
            {/* 5th — dark card */}
            <div style={{ background: "#1a1a1a", color: "#f8f5f0", borderRadius: 22, padding: "28px", display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="serif" style={{ fontSize: 44, color: "rgba(255,255,255,0.1)", fontWeight: 300, lineHeight: 1, display: "block" }}>05</span>
              <div>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, marginBottom: 10, color: "#f8f5f0" }}>Authentic Brand Story</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
                  Built on a genuine passion for wellness, intentional growth, and creating positive impact across Africa.
                </p>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-light" style={{ fontSize: 12 }}>
                  Follow @bloomco.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ─────────────────────────────────── */}
      <section id="portfolio" className="sp" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="label">Featured Products</span>
            <h2 className="serif sh">Premium Wellness<br /><em>Resources</em></h2>
          </div>
          <div className="portfolio-grid">
            {["/product1.png", "/product2.png", "/product3.png"].map((src, i) => (
              <div key={i}
                style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 10px 36px rgba(0,0,0,0.08)", aspectRatio: "3/4", position: "relative", transition: "transform 0.4s ease, box-shadow 0.4s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.13)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(0,0,0,0.08)"; }}
              >
                <Image src={src} alt={`Bloom & Co Product ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-dark">View All Products</a>
          </div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────── */}
      <section style={{ background: "#e8ede5", padding: "64px 20px", textAlign: "center" }}>
        <blockquote className="serif" style={{ maxWidth: 800, margin: "0 auto", fontSize: "clamp(18px, 3.5vw, 34px)", fontWeight: 300, lineHeight: 1.6, color: "#1a1a1a", fontStyle: "italic" }}>
          "At Bloom & Co, we believe people thrive when wellness and productivity exist in balance.
          Through intentional products, thoughtful wellness experiences, and meaningful partnerships,
          we are committed to helping individuals and organizations cultivate healthier, more fulfilling,
          and more productive lives."
        </blockquote>
        <p style={{ marginTop: 24, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a9c86" }}>
          — Fridah Nairuti, Founder
        </p>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section
        id="contact"
        className="sp"
        style={{
          background: "#f7f4ef",
        }}
      >
        <div className="wrap">
          <div className="contact-grid">

            {/* LEFT */}
            <div>
              <span className="label">Get In Touch</span>

              <h2
                className="serif sh"
                style={{
                  marginBottom: 24,
                  lineHeight: 1.05,
                }}
              >
                Let's Build
                <br />
                <em>Something Together</em>
              </h2>

              <p
                style={{
                  color: "#555",
                  fontSize: 16,
                  lineHeight: 1.9,
                  maxWidth: 520,
                }}
              >
                Whether you're an individual seeking intentional wellness
                tools, or an organization looking to cultivate a thriving
                team — we'd love to connect.
              </p>
            </div>

            {/* RIGHT */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >

              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(255,255,255,0.82)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    borderRadius: 26,
                    padding: "24px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 20,
                    boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                    transition: "all 0.35s ease",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 60px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 40px rgba(0,0,0,0.05)";
                  }}
                >

                  {/* LEFT SIDE */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 18,
                    }}
                  >

                    {/* ICON */}
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        background: "#f3eee7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1a1a1a",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* TEXT */}
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: "#8a9c86",
                          marginBottom: 6,
                        }}
                      >
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          style={{
                            fontSize: 16,
                            color: "#1a1a1a",
                            textDecoration: "none",
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: 16,
                            color: "#1a1a1a",
                          }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* BUTTON */}
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-dark"
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: 10,
                  padding: "22px 30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                }}
              >
                <ShoppingBag size={18} />
                Shop On Selar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(0,0,0,0.07)", padding: "36px 20px", background: "#f8f5f0" }}>
        <div className="wrap">
          <div className="footer-inner">
            <Image src="/logo.png" alt="Bloom & Co" width={110} height={44} style={{ height: 34, width: "auto" }} />
            <p style={{ color: "#aaa", fontSize: 13 }}>© 2026 Bloom & Co · Nairobi, Kenya</p>
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { label: "Instagram", href: INSTAGRAM_URL },
                { label: "Shop", href: SHOP_URL },
                { label: "Email", href: "mailto:bloomandco@gmail.com" },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ color: "#aaa", fontSize: 13, textDecoration: "none" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}