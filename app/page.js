"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
} from "lucide-react";

// ── PALETTE ────────────────────────────────────────────────
// Rose:  #b5606a  (deep)  |  #e8b4b8 (mid)  |  #f5e6e8 (pale)
// Sage:  #6b8c72  (deep)  |  #8a9c86 (mid)  |  #e8ede5 (pale)
// Warm cream base: #f7f3ef
// ──────────────────────────────────────────────────────────

const SHOP_URL =
  "https://selar.com/m/fridah-makena993077?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const INSTAGRAM_URL = "https://www.instagram.com/bloomco.ke";

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
    { label: "Instagram", value: "@bloomco.ke",         icon: "📸",               href: INSTAGRAM_URL },
    { label: "Email",     value: "bloomandco@gmail.com", icon: <Mail size={18} />,  href: "mailto:bloomandco@gmail.com" },
    { label: "Phone",     value: "+254 724 973 277",     icon: <Phone size={18} />, href: "tel:+254724973277" },
    { label: "Location",  value: "Nairobi, Kenya",       icon: <MapPin size={18} /> },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f7f3ef", color: "#2a1f1f", overflowX: "hidden" }}>

      {/* ── GLOBAL STYLES ─────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; font-weight: 300; -webkit-font-smoothing: antialiased; }
        img { display: block; max-width: 100%; }
        .serif { font-family: 'Cormorant Garamond', serif; }

        /* ── BUTTONS ── */
        .pill-btn {
          display: inline-block; padding: 13px 28px; border-radius: 100px;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s ease; cursor: pointer;
          border: 1px solid transparent; font-family: 'DM Sans', sans-serif;
          font-weight: 400; white-space: nowrap;
        }
        .pill-rose  { background: #b5606a; color: #fff; border-color: #b5606a; }
        .pill-rose:hover  { background: #9e4f58; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(181,96,106,0.3); }
        .pill-outline-rose { background: transparent; color: #b5606a; border-color: #b5606a; }
        .pill-outline-rose:hover { background: #b5606a; color: #fff; transform: translateY(-2px); }
        .pill-sage  { background: #6b8c72; color: #fff; border-color: #6b8c72; }
        .pill-sage:hover  { background: #5a7860; transform: translateY(-2px); }
        .pill-light { background: #f7f3ef; color: #2a1f1f; border-color: #f7f3ef; }
        .pill-light:hover { background: #ede8e0; transform: translateY(-2px); }
        /* keep pill-dark alias so old references still work */
        .pill-dark  { background: #b5606a; color: #fff; border-color: #b5606a; }
        .pill-dark:hover  { background: #9e4f58; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(181,96,106,0.3); }

        /* ── NAV LINKS ── */
        .nav-link {
          position: relative; font-size: 13px; letter-spacing: 0.12em;
          text-transform: uppercase; color: #2a1f1f; text-decoration: none;
          padding-bottom: 2px; font-family: 'DM Sans', sans-serif;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: #b5606a; transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #b5606a; }

        /* ── SECTION LABEL ── */
        .label {
          display: block; font-size: 11px; letter-spacing: 0.32em;
          text-transform: uppercase; color: #b5606a; margin-bottom: 16px; font-weight: 400;
        }

        /* ── CONTAINER ── */
        .wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 600px)  { .wrap { padding: 0 32px; } }
        @media (min-width: 1100px) { .wrap { padding: 0 48px; } }

        /* ── SECTION PADDING ── */
        .sp { padding: 64px 0; }
        @media (min-width: 768px)  { .sp { padding: 96px 0; } }
        @media (min-width: 1100px) { .sp { padding: 120px 0; } }

        /* ── SECTION HEADING ── */
        .sh { font-size: clamp(32px, 6vw, 60px); font-weight: 300; line-height: 1.05; }

        /* ── MARQUEE ── */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { display: flex; width: max-content; animation: marquee 24s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        /* ── HAMBURGER ── */
        .burger {
          display: flex; flex-direction: column; justify-content: center; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 8px;
          z-index: 200; position: relative;
        }
        .burger span { display: block; height: 2px; background: #2a1f1f; transition: all 0.3s ease; transform-origin: center; }
        .burger span:nth-child(1) { width: 22px; }
        .burger span:nth-child(2) { width: 22px; }
        .burger span:nth-child(3) { width: 14px; }
        .burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); width: 22px; }
        .burger.open span:nth-child(2) { opacity: 0; }
        .burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 22px; }
        @media (min-width: 768px) { .burger { display: none; } }

        /* ── DESKTOP NAV / SHOP BTN ── */
        .desk-nav  { display: none; }
        .desk-shop { display: none; }
        @media (min-width: 768px) { .desk-nav  { display: flex; gap: 36px; align-items: center; } }
        @media (min-width: 768px) { .desk-shop { display: inline-block; } }

        /* ── MOBILE DRAWER ── */
        .drawer {
          position: fixed; inset: 0; background: #f7f3ef; z-index: 150;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          gap: 32px; transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .drawer.open { transform: translateX(0); }
        @media (min-width: 768px) { .drawer { display: none !important; } }
        .drawer-link {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 8vw, 48px);
          font-weight: 300; color: #2a1f1f; text-decoration: none;
          letter-spacing: 0.02em; transition: color 0.2s;
        }
        .drawer-link:hover { color: #b5606a; }

        /* ── HERO ── */
        .hero-grid {
          display: flex; flex-direction: column; gap: 40px; padding: 52px 0 64px;
        }
        @media (min-width: 860px) {
          .hero-grid {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 64px; align-items: center; padding: 80px 0 100px;
          }
        }
        .hero-img {
          order: -1; border-radius: 28px; overflow: hidden;
          box-shadow: 0 32px 80px rgba(181,96,106,0.15);
          aspect-ratio: 4/5; position: relative; width: 100%;
        }
        @media (min-width: 860px) { .hero-img { order: 0; border-radius: 40px; } }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
        @media (max-width: 380px) { .hero-btns { flex-direction: column; } .hero-btns .pill-btn { text-align: center; } }

        /* ── TWO-COL ── */
        .two-col { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) {
          .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        }
        .two-col-top { align-items: start; }

        /* ── SQUARE IMAGE ── */
        .sq-img {
          border-radius: 28px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(181,96,106,0.12);
          aspect-ratio: 1/1; position: relative; width: 100%;
        }
        @media (min-width: 860px) { .sq-img { border-radius: 40px; } }

        /* ── VALUES ── */
        .v-row {
          display: grid; grid-template-columns: 36px 1fr; gap: 16px;
          padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.1); align-items: start;
        }
        @media (min-width: 768px) {
          .v-row { grid-template-columns: 56px 1fr 2fr; gap: 32px; align-items: center; padding: 28px 0; }
        }
        .v-desc-mobile { display: block; color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.65; margin-top: 6px; }
        @media (min-width: 768px) { .v-desc-mobile { display: none; } }
        .v-desc-desk   { display: none; }
        @media (min-width: 768px) { .v-desc-desk { display: block; color: rgba(255,255,255,0.5); font-size: 15px; line-height: 1.7; } }

        /* ── OFFERINGS ── */
        .offerings-grid { display: grid; gap: 10px; grid-template-columns: 1fr; }
        @media (min-width: 460px) { .offerings-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── WHY CARDS ── */
        .why-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 960px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }
        .w-card {
          background: #fff; border-radius: 22px; padding: 28px;
          box-shadow: 0 6px 28px rgba(0,0,0,0.05); transition: transform 0.3s ease;
        }
        @media (min-width: 768px) { .w-card { padding: 36px; } }
        .w-card:hover { transform: translateY(-5px); }

        /* ── PORTFOLIO ── */
        .portfolio-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 560px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 860px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; } }

        /* ── FOOTER ── */
        .footer-inner { display: flex; flex-direction: column; align-items: center; gap: 18px; text-align: center; }
        @media (min-width: 768px) { .footer-inner { flex-direction: row; justify-content: space-between; text-align: left; } }

        /* ── CONTACT ── */
        .contact-grid { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) {
          .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        }
      `}</style>

      {/* ── MOBILE DRAWER ─────────────────────────────── */}
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        {["about", "services", "values", "corporate", "contact"].map((s) => (
          <a key={s} href={`#${s}`} className="drawer-link" onClick={() => setMenuOpen(false)}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </a>
        ))}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
          className="pill-btn pill-rose" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
          Shop Now
        </a>
      </div>

      {/* ── NAVBAR ────────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 160,
        background: "rgba(247,243,239,0.93)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(181,96,106,0.1)",
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
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose desk-shop">Shop Now</a>
            <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ background: "#f7f3ef" }}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="label">Wellness · Productivity · Intentional Living</span>
              <h1 className="serif" style={{ fontSize: "clamp(42px, 8vw, 88px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#2a1f1f" }}>
                Where Wellness<br /><em style={{ color: "#b5606a" }}>Meets Purpose</em>
              </h1>
              <p style={{ fontSize: "clamp(15px, 2.5vw, 17px)", color: "#6b5555", lineHeight: 1.8, maxWidth: 480, marginTop: 20 }}>
                Bloom & Co creates intentional wellness and productivity tools
                that help individuals and organizations cultivate healthier,
                more balanced, and more meaningful lives — across Africa and beyond.
              </p>
              <div className="hero-btns">
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose">Explore Products</a>
                <a href="#corporate" className="pill-btn pill-outline-rose">Partner With Us</a>
              </div>
            </div>
            <div className="hero-img">
              <Image src="/hero.png" alt="Bloom & Co — Wellness Meets Purpose" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────── */}
      <div style={{ background: "#b5606a", color: "#fff", overflow: "hidden", padding: "15px 0" }}>
        <div className="marquee-track">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 24, paddingRight: 24 }}>
              {["Wellness Journals", "Productivity Guides", "Corporate Wellness", "Mindful Living", "Intentional Growth", "Nairobi, Kenya", "Pan-African Vision", "Bloom & Co"].map((item, j) => (
                <span key={j} style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 24 }}>
                  {item}<span style={{ opacity: 0.4 }}>✦</span>
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
              <Image src="/founder.png" alt="Fridah Nairuti — Founder, Bloom & Co" width={800} height={800} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="label">Our Story</span>
              <h2 className="serif sh" style={{ marginBottom: 20 }}>
                Wellness Is The<br />Foundation of<br /><em>Sustainable Growth</em>
              </h2>
              <p style={{ color: "#6b5555", fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                Bloom & Co bridges wellness and workplace productivity through intentional tools and
                meaningful experiences. Founded in Nairobi, Kenya, we develop thoughtfully designed
                journals, workbooks, and corporate wellness solutions.
              </p>
              <p style={{ color: "#6b5555", fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
                Our vision is to become a leading wellness and productivity brand in Africa —
                empowering individuals and organizations to thrive through reflection, clarity,
                and intentional living.
              </p>
              <div style={{ background: "#f5e6e8", borderRadius: 16, padding: "20px 22px", borderLeft: "3px solid #b5606a" }}>
                <p style={{ fontSize: 14, color: "#6b5555", lineHeight: 1.75, marginBottom: 10, fontStyle: "italic" }}>
                  "Fridah combines corporate experience with a passion for wellness, bringing a
                  practical and professional approach to workplace wellness and personal growth solutions."
                </p>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b5606a" }}>
                  Fridah Nairuti — Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section id="services" className="sp" style={{ background: "#f7f3ef" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="label">Products & Services</span>
            <h2 className="serif sh">
              Designed for<br /><em>Intentional Growth</em>
            </h2>
          </div>
          {/* ── grid: explicit minmax so cards never overflow ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: 20,
          }}>
            {[
              { number: "01", title: "Wellness Journals",          icon: "📖", text: "Thoughtfully designed guided journals that promote self-reflection, mindfulness, gratitude, and intentional living." },
              { number: "02", title: "Productivity Guides",         icon: "📝", text: "Resources developed to support healthier work habits, improved focus, and sustainable productivity." },
              { number: "03", title: "Adult Coloring & Reflection", icon: "🎨", text: "Creative wellness tools that encourage relaxation, mindfulness, stress management, and emotional decompression." },
              { number: "04", title: "Children's Wellness",         icon: "🧸", text: "Engaging reflection tools designed to nurture creativity, confidence, and emotional expression in children." },
              { number: "05", title: "Corporate Wellness",          icon: "💼", text: "Customized wellness resources designed for organizations seeking healthier workplace culture." },
            ].map((item, index) => (
              <div key={index} style={{
                background: "#fff",
                borderRadius: 28,
                padding: "36px 32px",
                boxShadow: "0 8px 32px rgba(181,96,106,0.07)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                display: "flex", flexDirection: "column", gap: 0,
                minWidth: 0, /* prevent blowout */
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 56px rgba(181,96,106,0.13)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(181,96,106,0.07)"; }}
              >
                {/* top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                  <span style={{ fontSize: 11, letterSpacing: "0.28em", color: "#b5606a", fontWeight: 400 }}>{item.number}</span>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "#f5e6e8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28, flexShrink: 0,
                    transition: "transform 0.35s ease",
                  }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="serif" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 400, marginBottom: 14, lineHeight: 1.2, color: "#2a1f1f" }}>
                  {item.title}
                </h3>
                {/* rose accent line */}
                <div style={{ width: 40, height: 2, background: "#b5606a", marginBottom: 16, borderRadius: 2 }} />
                <p style={{ color: "#6b5555", lineHeight: 1.8, fontSize: 14 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 52 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose">Shop All Products</a>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────── */}
      <section id="values" className="sp" style={{ background: "#2a1f1f", color: "#f7f3ef" }}>
        <div className="wrap">
          <div style={{ marginBottom: 48 }}>
            <span style={{ display:"block", fontSize:11, letterSpacing:"0.32em", textTransform:"uppercase", color:"#e8b4b8", marginBottom:16, fontWeight:400 }}>Core Values</span>
            <h2 className="serif sh">Built on Principles<br /><em>That Matter</em></h2>
          </div>
          <div>
            {values.map((v, i) => (
              <div key={v.label} className="v-row"
                style={i === values.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.1)" } : {}}>
                <span style={{ fontSize: 11, color: "#e8b4b8", letterSpacing: "0.1em", paddingTop: 4 }}>0{i + 1}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 400, color: "#f7f3ef" }}>{v.label}</h3>
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
              <p style={{ color: "#6b5555", fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>
                Bloom & Co partners with organizations to support employee wellness and workplace
                engagement through practical and intentional wellness solutions. We serve corporates,
                NGOs, educational institutions, insurance companies, hospitality brands, and HR departments.
              </p>
              <a href="#contact" className="pill-btn pill-rose">Get In Touch</a>
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.05em", marginBottom: 18, color: "#2a1f1f" }}>
                Our offerings include:
              </p>
              <div className="offerings-grid">
                {corporateOfferings.map((offer, i) => (
                  <div key={i} style={{ background: "#f5e6e8", borderRadius: 12, padding: "13px 16px", fontSize: 13, color: "#6b5555", lineHeight: 1.5 }}>
                    <span style={{ color: "#b5606a", marginRight: 8 }}>✓</span>{offer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BLOOM ─────────────────────────────────── */}
      <section className="sp" style={{ background: "#f7f3ef" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="label">Why Choose Us</span>
            <h2 className="serif sh">Five Reasons to<br /><em>Choose Bloom & Co</em></h2>
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="w-card">
                <span className="serif" style={{ fontSize: 44, color: "#f5e6e8", fontWeight: 300, lineHeight: 1, display: "block", marginBottom: 12 }}>
                  0{i + 1}
                </span>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>{item.title}</h3>
                <div style={{ width: 32, height: 2, background: "#b5606a", marginBottom: 12, borderRadius: 2 }} />
                <p style={{ color: "#6b5555", fontSize: 14, lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
            {/* 5th — rose card */}
            <div style={{ background: "#b5606a", color: "#fff", borderRadius: 22, padding: "28px", display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="serif" style={{ fontSize: 44, color: "rgba(255,255,255,0.2)", fontWeight: 300, lineHeight: 1, display: "block" }}>05</span>
              <div>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, marginBottom: 10, color: "#fff" }}>Authentic Brand Story</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
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
                style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 10px 36px rgba(181,96,106,0.1)", aspectRatio: "3/4", position: "relative", transition: "transform 0.4s ease, box-shadow 0.4s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(181,96,106,0.18)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(181,96,106,0.1)"; }}
              >
                <Image src={src} alt={`Bloom & Co Product ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose">View All Products</a>
          </div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────── */}
      <section style={{ background: "#f5e6e8", padding: "64px 20px", textAlign: "center" }}>
        <blockquote className="serif" style={{ maxWidth: 800, margin: "0 auto", fontSize: "clamp(18px, 3.5vw, 34px)", fontWeight: 300, lineHeight: 1.6, color: "#2a1f1f", fontStyle: "italic" }}>
          "At Bloom & Co, we believe people thrive when wellness and productivity exist in balance.
          Through intentional products, thoughtful wellness experiences, and meaningful partnerships,
          we are committed to helping individuals and organizations cultivate healthier, more fulfilling,
          and more productive lives."
        </blockquote>
        <p style={{ marginTop: 24, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b5606a" }}>
          — Fridah Nairuti, Founder
        </p>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section id="contact" className="sp" style={{ background: "#f7f3ef" }}>
        <div className="wrap">
          <div className="contact-grid">

            {/* LEFT */}
            <div>
              <span className="label">Get In Touch</span>
              <h2 className="serif sh" style={{ marginBottom: 24, lineHeight: 1.05 }}>
                Let's Build<br /><em>Something Together</em>
              </h2>
              <p style={{ color: "#6b5555", fontSize: 16, lineHeight: 1.9, maxWidth: 520 }}>
                Whether you're an individual seeking intentional wellness
                tools, or an organization looking to cultivate a thriving
                team — we'd love to connect.
              </p>
            </div>

            {/* RIGHT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactItems.map((item) => (
                <div key={item.label} style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
                  borderRadius: 26, padding: "22px 26px",
                  display: "flex", alignItems: "center", gap: 20,
                  boxShadow: "0 8px 32px rgba(181,96,106,0.07)",
                  transition: "all 0.35s ease",
                  border: "1px solid rgba(181,96,106,0.1)",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 52px rgba(181,96,106,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(181,96,106,0.07)"; }}
                >
                  {/* icon circle */}
                  <div style={{
                    width: 50, height: 50, borderRadius: "50%",
                    background: "#f5e6e8", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: "#b5606a", flexShrink: 0, fontSize: 20,
                  }}>
                    {item.icon}
                  </div>
                  {/* text */}
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#b5606a", marginBottom: 5 }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{ fontSize: 15, color: "#2a1f1f", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 15, color: "#2a1f1f" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* CTA button */}
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
                className="pill-btn pill-rose"
                style={{ textAlign: "center", marginTop: 8, padding: "20px 30px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: 13, letterSpacing: "0.2em" }}>
                <ShoppingBag size={18} /> Shop On Selar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(181,96,106,0.15)", padding: "36px 20px", background: "#2a1f1f" }}>
        <div className="wrap">
          <div className="footer-inner">
            <Image src="/logo.png" alt="Bloom & Co" width={110} height={44} style={{ height: 34, width: "auto" }} />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>© 2026 Bloom & Co · Nairobi, Kenya</p>
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { label: "Instagram", href: INSTAGRAM_URL },
                { label: "Shop",      href: SHOP_URL },
                { label: "Email",     href: "mailto:bloomandco@gmail.com" },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ color: "#e8b4b8", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "#e8b4b8"}>
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