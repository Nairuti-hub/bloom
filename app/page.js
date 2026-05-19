"use client";

import Image from "next/image";
import { useState } from "react";

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

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1a1a] overflow-hidden font-light">

      {/* FONTS via next/head or inline — using Google Fonts import in a style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        
        * { box-sizing: border-box; }

        body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }

        .serif { font-family: 'Cormorant Garamond', serif; }

        .nav-link {
          position: relative;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          padding-bottom: 2px;
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

        .pill-btn {
          display: inline-block;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
        }
        .pill-btn-dark {
          background: #1a1a1a;
          color: #f8f5f0;
        }
        .pill-btn-dark:hover {
          background: #3a3a3a;
          transform: translateY(-2px);
        }
        .pill-btn-outline {
          background: transparent;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
        }
        .pill-btn-outline:hover {
          background: #1a1a1a;
          color: #f8f5f0;
          transform: translateY(-2px);
        }
        .pill-btn-light {
          background: #f8f5f0;
          color: #1a1a1a;
        }
        .pill-btn-light:hover {
          background: #ede8e0;
          transform: translateY(-2px);
        }

        .service-card {
          background: #fff;
          border-radius: 24px;
          padding: 40px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.09);
        }

        .fade-border {
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        /* Marquee */
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 24px;
          position: absolute;
          top: 100%;
          left: 0; right: 0;
          background: #f8f5f0;
          padding: 32px 24px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          z-index: 100;
        }
        .mobile-menu.open { display: flex; }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#f8f5f0]/90 backdrop-blur-xl border-b border-black/5">
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <Image src="/logo.png" alt="Bloom & Co" width={140} height={55} />
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
            className="hidden md:flex"
          >
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#values" className="nav-link">Values</a>
            <a href="#corporate" className="nav-link">Corporate</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-dark"
            >
              Shop Now
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
              }}
              className="md:hidden"
              aria-label="Menu"
            >
              <div style={{ width: 22, height: 2, background: "#1a1a1a", marginBottom: 5, transition: "all 0.3s" }} />
              <div style={{ width: 22, height: 2, background: "#1a1a1a", marginBottom: 5 }} />
              <div style={{ width: 14, height: 2, background: "#1a1a1a" }} />
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            {["about", "services", "values", "corporate", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 32px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#8a9c86",
              marginBottom: 24,
              fontWeight: 400,
            }}
          >
            Wellness · Productivity · Intentional Living
          </p>

          <h1
            className="serif"
            style={{
              fontSize: "clamp(52px, 7vw, 88px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: 32,
            }}
          >
            Where Wellness
            <br />
            <em>Meets Purpose</em>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "#555",
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            Bloom & Co creates intentional wellness and productivity tools
            that help individuals and organizations cultivate healthier,
            more balanced, and more meaningful lives — across Africa and beyond.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-dark"
            >
              Explore Products
            </a>
            <a href="#corporate" className="pill-btn pill-btn-outline">
              Partner With Us
            </a>
          </div>
        </div>

        <div
          style={{
            borderRadius: 40,
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.14)",
            aspectRatio: "4/5",
            position: "relative",
          }}
        >
          <Image
            src="/hero.png"
            alt="Bloom & Co — Wellness Meets Purpose"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ── MARQUEE STRIP ───────────────────────────────── */}
      <div
        style={{
          background: "#1a1a1a",
          color: "#f8f5f0",
          overflow: "hidden",
          padding: "18px 0",
        }}
      >
        <div className="marquee-track">
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 32, paddingRight: 32 }}
              >
                {[
                  "Wellness Journals",
                  "Productivity Guides",
                  "Corporate Wellness",
                  "Mindful Living",
                  "Intentional Growth",
                  "Nairobi, Kenya",
                  "Pan-African Vision",
                  "Bloom & Co",
                ].map((item, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      gap: 32,
                    }}
                  >
                    {item}
                    <span style={{ opacity: 0.3, fontSize: 18 }}>✦</span>
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────── */}
      <section
        id="about"
        style={{ background: "#fff", padding: "120px 0" }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: 40,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.11)",
              aspectRatio: "1/1",
              position: "relative",
            }}
          >
            <Image
              src="/founder.jpg"
              alt="Fridah Nairuti — Founder, Bloom & Co"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a9c86",
                marginBottom: 20,
                fontWeight: 400,
              }}
            >
              Our Story
            </p>

            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              Wellness Is The
              <br />
              Foundation of
              <br />
              <em>Sustainable Growth</em>
            </h2>

            <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Bloom & Co bridges wellness and workplace productivity through
              intentional tools and meaningful experiences. Founded in Nairobi,
              Kenya, we develop thoughtfully designed journals, workbooks, and
              corporate wellness solutions that encourage personal growth,
              mindfulness, and intentional performance.
            </p>

            <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
              Our vision is to become a leading wellness and productivity brand
              in Africa — empowering individuals and organizations to thrive
              through reflection, clarity, and intentional living.
            </p>

            {/* Founder callout */}
            <div
              style={{
                background: "#f8f5f0",
                borderRadius: 20,
                padding: "24px 28px",
                borderLeft: "3px solid #8a9c86",
              }}
            >
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7, marginBottom: 12, fontStyle: "italic" }}>
                "Fridah combines corporate experience with a passion for wellness,
                bringing a practical and professional approach to workplace wellness
                and personal growth solutions."
              </p>
              <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.05em", color: "#1a1a1a" }}>
                Fridah Nairuti — Founder, Bloom & Co
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section id="services" style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a9c86",
                marginBottom: 16,
                fontWeight: 400,
              }}
            >
              Products & Services
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Designed for
              <br />
              <em>Intentional Growth</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((item) => (
              <div key={item.number} className="service-card">
                <p
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.2em",
                    color: "#8a9c86",
                    marginBottom: 16,
                    fontWeight: 400,
                  }}
                >
                  {item.number}
                </p>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#e8ede5",
                    marginBottom: 24,
                  }}
                />
                <h3
                  className="serif"
                  style={{ fontSize: 26, fontWeight: 400, marginBottom: 16, lineHeight: 1.2 }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#666", lineHeight: 1.75, fontSize: 15 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-dark"
            >
              Shop All Products
            </a>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────── */}
      <section
        id="values"
        style={{ background: "#1a1a1a", color: "#f8f5f0", padding: "120px 0" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          <div style={{ marginBottom: 72 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a9c86",
                marginBottom: 16,
                fontWeight: 400,
              }}
            >
              Core Values
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Built on Principles
              <br />
              <em>That Matter</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {values.map((v, i) => (
              <div
                key={v.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr 2fr",
                  gap: 32,
                  alignItems: "center",
                  padding: "32px 0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  ...(i === values.length - 1
                    ? { borderBottom: "1px solid rgba(255,255,255,0.08)" }
                    : {}),
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="serif"
                  style={{ fontSize: 28, fontWeight: 400, color: "#f8f5f0" }}
                >
                  {v.label}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORPORATE WELLNESS ──────────────────────────── */}
      <section id="corporate" style={{ background: "#fff", padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8a9c86",
                  marginBottom: 20,
                  fontWeight: 400,
                }}
              >
                Corporate Wellness
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(34px, 4vw, 52px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}
              >
                Partnering With
                <br />
                Organizations to
                <br />
                <em>Cultivate Thriving Teams</em>
              </h2>
              <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
                Bloom & Co partners with organizations to support employee
                wellness and workplace engagement through practical and
                intentional wellness solutions. We serve corporates, NGOs,
                educational institutions, insurance companies, hospitality
                brands, and HR departments.
              </p>
              <a href="#contact" className="pill-btn pill-btn-dark">
                Get In Touch
              </a>
            </div>

            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  marginBottom: 24,
                  color: "#1a1a1a",
                }}
              >
                Our offerings include:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {corporateOfferings.map((offer, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8f5f0",
                      borderRadius: 14,
                      padding: "16px 20px",
                      fontSize: 14,
                      color: "#444",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#8a9c86", marginRight: 8 }}>✓</span>
                    {offer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BLOOM ───────────────────────────────────── */}
      <section style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a9c86",
                marginBottom: 16,
                fontWeight: 400,
              }}
            >
              Why Choose Us
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Five Reasons to
              <br />
              <em>Choose Bloom & Co</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {whyUs.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "40px 36px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <span
                  className="serif"
                  style={{
                    fontSize: 52,
                    color: "#e8ede5",
                    fontWeight: 300,
                    lineHeight: 1,
                    display: "block",
                    marginBottom: 16,
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="serif"
                  style={{ fontSize: 24, fontWeight: 400, marginBottom: 14, lineHeight: 1.2 }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#666", fontSize: 15, lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </div>
            ))}

            {/* Vision card spans 2 columns on large screens */}
            <div
              style={{
                background: "#1a1a1a",
                color: "#f8f5f0",
                borderRadius: 24,
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span
                className="serif"
                style={{
                  fontSize: 52,
                  color: "rgba(255,255,255,0.15)",
                  fontWeight: 300,
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 16,
                }}
              >
                05
              </span>
              <div>
                <h3
                  className="serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    marginBottom: 14,
                    color: "#f8f5f0",
                  }}
                >
                  Authentic Brand Story
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
                  Built on a genuine passion for wellness, intentional growth,
                  and creating positive impact across Africa.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn-light"
                  style={{ fontSize: 12 }}
                >
                  Follow @bloomco.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ───────────────────────────────────── */}
      <section id="portfolio" style={{ background: "#fff", padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a9c86",
                marginBottom: 16,
                fontWeight: 400,
              }}
            >
              Featured Products
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Premium Wellness
              <br />
              <em>Resources</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {["/product1.png", "/product2.png", "/product3.png"].map(
              (src, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 32,
                    overflow: "hidden",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.08)",
                    aspectRatio: "3/4",
                    position: "relative",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 24px 64px rgba(0,0,0,0.13)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 48px rgba(0,0,0,0.08)";
                  }}
                >
                  <Image
                    src={src}
                    alt={`Bloom & Co Product ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-dark"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ────────────────────────────────── */}
      <section
        style={{
          background: "#e8ede5",
          padding: "100px 32px",
          textAlign: "center",
        }}
      >
        <blockquote
          className="serif"
          style={{
            maxWidth: 860,
            margin: "0 auto",
            fontSize: "clamp(22px, 3.5vw, 38px)",
            fontWeight: 300,
            lineHeight: 1.5,
            color: "#1a1a1a",
            fontStyle: "italic",
          }}
        >
          "At Bloom & Co, we believe people thrive when wellness and productivity
          exist in balance. Through intentional products, thoughtful wellness
          experiences, and meaningful partnerships, we are committed to helping
          individuals and organizations cultivate healthier, more fulfilling, and
          more productive lives."
        </blockquote>
        <p
          style={{
            marginTop: 32,
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#8a9c86",
            fontWeight: 400,
          }}
        >
          — Fridah Nairuti, Founder
        </p>
      </section>

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section id="contact" style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8a9c86",
                  marginBottom: 20,
                  fontWeight: 400,
                }}
              >
                Get In Touch
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(34px, 4vw, 52px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}
              >
                Let's Build
                <br />
                <em>Something Together</em>
              </h2>
              <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8 }}>
                Whether you're an individual seeking intentional wellness
                tools, or an organization looking to cultivate a thriving
                team — we'd love to connect.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { label: "Instagram", value: "@bloomco.ke", href: INSTAGRAM_URL },
                { label: "Email", value: "bloomandco@gmail.com", href: "mailto:bloomandco@gmail.com" },
                { label: "Phone", value: "+254 724 973 277", href: "tel:+254724973277" },
                { label: "Location", value: "Nairobi, Kenya", href: null },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: "24px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#8a9c86",
                      fontWeight: 400,
                    }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: 15,
                        color: "#1a1a1a",
                        textDecoration: "none",
                        fontWeight: 400,
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 15, color: "#1a1a1a" }}>{item.value}</span>
                  )}
                </div>
              ))}

              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-dark"
                style={{ textAlign: "center", marginTop: 8 }}
              >
                Shop on Selar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(0,0,0,0.07)",
          padding: "48px 32px",
          background: "#f8f5f0",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Image src="/logo.png" alt="Bloom & Co" width={110} height={44} />

          <p style={{ color: "#888", fontSize: 14 }}>
            © 2026 Bloom & Co · Nairobi, Kenya · Intentional wellness for meaningful living.
          </p>

          <div style={{ display: "flex", gap: 24 }}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}
            >
              Instagram
            </a>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}
            >
              Shop
            </a>
            <a
              href="mailto:bloomandco@gmail.com"
              style={{ color: "#888", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}
            >
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}