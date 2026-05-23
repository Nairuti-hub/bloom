"use client";

/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ShoppingBag } from "lucide-react";

const SHOP_URL = "https://selar.com/m/fridah-makena993077?utm_source=website&utm_medium=web&utm_content=cta";
const INSTAGRAM_URL = "https://www.instagram.com/bloomco.ke";
const WHATSAPP_NUMBER = "254724973277";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Bloom%20%26%20Co!%20I%27d%20love%20to%20learn%20more%20about%20your%20wellness%20products.`;

// ── PRODUCTS DATA ───────────────────────────────────────────
const products = [
  {
    category: "wellness",
    title: "Corporate Wellness Journal",
    coverImg: "/wellness_journal.png",
    subtitle: "A 30-Day Practice in Mindful Performance",
    description: "Five minutes in the morning. A few at end of day. A weekly pause. Thirty days to reflect, realign, and thrive at work.",
    features: ["Daily morning check-in", "Weekly themes & insights", "Burnout recognition guide", "Month-end reflection"],
    badge: "Best Seller",
  },
  {
    category: "wellness",
    title: "Flow With Your Cycle",
    coverImg: "/flow_with_your_cycle.png",
    subtitle: "A Woman's Guide to Aligning Energy and Work",
    description: "It's not laziness. It's your cycle. Understand your 4 monthly phases, align your energy with your work, and stop forcing — start flowing.",
    features: ["4 cycle phases explained", "Energy-work alignment", "Productivity by phase", "Self-compassion tools"],
    badge: "New",
  },
  {
    category: "wellness",
    title: "Well-being & Productivity Guide",
    coverImg: "/wellbeing_and_productivity_guide.png",
    subtitle: "A Guide to Well-being and Productivity at the Workplace",
    description: "Well-being isn't a reward. It's the foundation of sustainable productivity. A guide for professionals who show up fully — and want to keep doing so.",
    features: ["Burnout prevention", "Mindful work habits", "Focus & energy tools", "Work-life integration"],
    badge: null,
  },
  {
    category: "wellness",
    title: "Daily Devotional Workbook",
    coverImg: "/daily_devotion.png",
    subtitle: "Mother's Day Edition — Nourishes Her Soul",
    description: "A beautiful space for prayer, reflection, scripture study, gratitude, and intentional quiet time with God. A perfect gift for the woman who deserves more than a gift.",
    features: ["Daily devotional pages", "Prayer & reflection space", "Gratitude journaling", "Scripture study prompts"],
    badge: "Gift Idea",
  },
  {
    category: "wellness",
    title: "Floral Coloring Book for Adults",
    coverImg: "/floral_colouring_book_for_adults.png",
    subtitle: "Quiet Creative Moments for You",
    description: "Sometimes the most productive thing you can do is slow down. Relax your mind, reduce stress, and reconnect with yourself. No pressure. No perfection.",
    features: ["Intricate floral designs", "Stress relief focused", "Perfect for self-care", "Weekend reset tool"],
    badge: null,
  },
  {
    category: "kids",
    title: "Kids Affirmation Coloring E-Book",
    coverImg: "/kids_affirmation_colouring_book.png",
    subtitle: "Build Confidence Through Color",
    description: "A fun and uplifting coloring experience designed to help children build confidence, creativity, and positive thinking — one page at a time.",
    features: ["Positive affirmations", "Fun coloring pages", "Screen-free creativity", "Builds self-belief"],
    badge: null,
  },
  {
    category: "kids",
    title: "ABC Fun — Alphabet Coloring Book",
    coverImg: "/abc_fun_kids.png",
    subtitle: "Playtime Learning for Little Ones",
    description: "Colorful alphabet adventures that make learning fun. Perfect for ages 3-6 who are just beginning to explore letters, words, and the world around them.",
    features: ["A-Z letter pages", "Simple illustrations", "Learning through play", "Great for ages 3-6"],
    badge: null,
  },
  {
    category: "kids",
    title: '"Quiet Time" Coloring for Kids',
    coverImg: "/quiet_time_colouring_for_kids.png",
    subtitle: "Simple, Fun Pages for Calm & Creative Play",
    description: "Keep your little ones happily engaged while you enjoy a well-deserved moment to reset. Fun land animal illustrations that spark creativity and encourage quiet time.",
    features: ["Land animal illustrations", "Ages 3-8", "Instant PDF download", "Calm, creative focus"],
    badge: null,
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

const bloomQuestions = [
  {
    question: "Choose your current life mood:",
    options: [
      { text: "trying my best honestly", value: "reset" },
      { text: "romanticizing my life", value: "golden" },
      { text: "mentally on vacation", value: "quiet" },
      { text: "figuring things out quietly", value: "dreamer" },
    ],
  },
  {
    question: "What ruins your mood fastest?",
    options: [
      { text: "being rushed", value: "quiet" },
      { text: "too many notifications", value: "reset" },
      { text: "people draining my energy", value: "dreamer" },
      { text: "not getting enough sleep", value: "golden" },
    ],
  },
  {
    question: "Pick your comfort activity:",
    options: [
      { text: "scrolling in bed", value: "reset" },
      { text: "journaling for 5 minutes then stopping", value: "dreamer" },
      { text: "rewatching comfort shows", value: "quiet" },
      { text: "disappearing for a while", value: "golden" },
    ],
  },
  {
    question: "Which sentence sounds most like you?",
    options: [
      { text: '\u201cI need a reset.\u201d', value: "reset" },
      { text: '\u201cI just want peace.\u201d', value: "quiet" },
      { text: '\u201cI\u2019m becoming a better version of myself.\u201d', value: "golden" },
      { text: '\u201cI need to stop overthinking everything.\u201d', value: "dreamer" },
    ],
  },
  {
    question: "Your ideal Friday night?",
    options: [
      { text: "candles + music", value: "quiet" },
      { text: "dinner with friends", value: "golden" },
      { text: "doing absolutely nothing", value: "reset" },
      { text: "spontaneous plans", value: "dreamer" },
    ],
  },
  {
    question: "Pick something that instantly comforts you:",
    options: [
      { text: "clean sheets", value: "quiet" },
      { text: "voice notes from friends", value: "golden" },
      { text: "sunset drives", value: "dreamer" },
      { text: "coffee alone", value: "reset" },
    ],
  },
  {
    question: "What are you working on most right now?",
    options: [
      { text: "slowing down", value: "reset" },
      { text: "protecting my energy", value: "quiet" },
      { text: "staying motivated", value: "golden" },
      { text: "being kinder to myself", value: "dreamer" },
    ],
  },
  {
    question: "Pick a little luxury:",
    options: [
      { text: "fresh flowers in your room", value: "golden" },
      { text: "a slow morning with no alarms", value: "quiet" },
      { text: "buying another notebook you didn't need", value: "dreamer" },
      { text: "driving with music at sunset", value: "reset" },
    ],
  },
];

const bloomResults = {
  reset: {
    title: "The Soft Reset",
    emoji: "🌙",
    affirmation: "Rest is productive too.",
    energy: "You've been carrying more than you admit. You're craving quiet, softness, and moments where you don't have to perform for anyone. That's not weakness — that's wisdom.",
    ritual: "Take a longer shower tonight. No phone. No rushing. Just warm water and silence.",
    prompt: "What would life feel like if you stopped being hard on yourself?",
  },
  quiet: {
    title: "The Quiet Bloom",
    emoji: "🌿",
    affirmation: "Your peace is not something you earn. It's something you return to.",
    energy: "You move through life softly and intentionally. You know what drains you and what fills you. You don't explain yourself much — and you don't need to.",
    ritual: "Make your space feel like a sanctuary this week. One small thing: a candle, fresh flowers, clean surfaces.",
    prompt: "Where in your life are you showing up for others more than for yourself?",
  },
  golden: {
    title: "The Golden Soul",
    emoji: "☀️",
    affirmation: "You were made for warm rooms, good music, and people who really see you.",
    energy: "You have this beautiful ability to find joy in ordinary moments and bring warmth to every room you enter. Life feels more alive when you let yourself enjoy it without guilt.",
    ritual: "Do one thing this week purely for the pleasure of it. No purpose. No productivity.",
    prompt: "What does a life that feels golden actually look like for you?",
  },
  dreamer: {
    title: "The Gentle Dreamer",
    emoji: "🌸",
    affirmation: "You are allowed to bloom gently, at your own pace.",
    energy: "You're in a quiet season of becoming. You're thinking a lot, feeling a lot, and slowly figuring out who you're growing into. That process deserves patience — especially from yourself.",
    ritual: "Write three sentences today about who you're becoming. Not goals. Just feelings.",
    prompt: "What would you do differently if you weren't afraid of getting it wrong?",
  },
};

const peekItems = [
  { label: "Morning Check-in", desc: "Rate your energy, stress & focus. Choose how you feel: Energized, Grounded, Stretched, or Depleted.", icon: "☀️" },
  { label: "Daily Themes", desc: "Each weekday carries a theme — productivity, emotional awareness, leadership, energy, and celebration.", icon: "📅" },
  { label: "Weekly Review", desc: "Rate your week across energy, focus, stress management, work-life balance, team connections, and personal growth.", icon: "📊" },
  { label: "Wellness Insights", desc: "Weekly articles like 'Recognizing Burnout Before It Catches You' — practical wisdom, not generic advice.", icon: "💡" },
  { label: "Weekend Reflection", desc: "How did I restore my energy? What am I carrying into next week? What intention do I set ahead?", icon: "🌿" },
  { label: "Month-End Pulse", desc: "'You made it.' A closing reflection on your greatest achievement, what you learned, and what to leave behind.", icon: "✦" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function BloomWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productTab, setProductTab] = useState("wellness");
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [valuesRef, valuesInView] = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleBloomAnswer = (value) => {
    const updatedAnswers = [...quizAnswers, value];
    setQuizAnswers(updatedAnswers);
    if (quizIndex < bloomQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
      return;
    }
    const counts = {};
    updatedAnswers.forEach((a) => { counts[a] = (counts[a] || 0) + 1; });
    const topResult = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setQuizResult(bloomResults[topResult]);
  };

  const resetQuiz = () => { setQuizStarted(false); setQuizIndex(0); setQuizAnswers([]); setQuizResult(null); };

  const contactItems = [
    { label: "Instagram", value: "@bloomco.ke",          icon: "📸",                href: INSTAGRAM_URL },
    { label: "Email",     value: "bloomandco@gmail.com",  icon: <Mail size={18} />,  href: "mailto:bloomandco@gmail.com" },
    { label: "Phone",     value: "+254 724 973 277",      icon: <Phone size={18} />, href: "tel:+254724973277" },
    { label: "Location",  value: "Nairobi, Kenya",        icon: <MapPin size={18} /> },
  ];

  const wellnessProducts = products.filter(p => p.category === "wellness");
  const kidsProducts     = products.filter(p => p.category === "kids");
  const displayProducts  = productTab === "wellness" ? wellnessProducts : kidsProducts;

  return (
    <div style={{ minHeight: "100vh", background: "#F7F3EE", color: "#3A3532", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Jost', sans-serif; font-weight: 300; -webkit-font-smoothing: antialiased; }
        img { display: block; max-width: 100%; }
        .serif { font-family: 'Cormorant Garamond', serif; }

        /* ── BUTTONS ── */
        .pill-btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 30px; border-radius: 100px;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none; transition: all 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
          cursor: pointer; border: 1px solid transparent;
          font-family: 'Jost', sans-serif; font-weight: 400; white-space: nowrap; gap: 8px;
        }
        /* Sage — primary CTA */
        .pill-rose {
          background: linear-gradient(135deg, #6F7D68 0%, #55614F 100%);
          color: #FDFCFB; border-color: transparent;
          box-shadow: 0 4px 18px rgba(85,97,79,0.28);
        }
        .pill-rose:hover {
          background: linear-gradient(135deg, #5E6D57 0%, #4A5744 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(85,97,79,0.38);
        }
        /* Olive — secondary */
        .pill-olive {
          background: linear-gradient(135deg, #78816E 0%, #636B5A 100%);
          color: #F7F3EE; border-color: transparent;
          box-shadow: 0 4px 16px rgba(99,107,90,0.22);
        }
        .pill-olive:hover {
          background: linear-gradient(135deg, #6A7362 0%, #565E4E 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(99,107,90,0.3);
        }
        /* Outline rose */
        .pill-outline-rose {
          background: transparent; color: #55614F; border-color: #6F7D68;
        }
        .pill-outline-rose:hover {
          background: linear-gradient(135deg, #6F7D68 0%, #55614F 100%);
          color: #FDF9F6; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(168,98,106,0.28);
        }
        /* Outline olive */
        .pill-outline-olive {
          background: transparent; color: #636B5A; border-color: #78816E;
        }
        .pill-outline-olive:hover {
          background: linear-gradient(135deg, #78816E 0%, #636B5A 100%);
          color: #F7F3EE; transform: translateY(-2px);
        }
        /* Gold */
        .pill-gold {
          background: linear-gradient(135deg, #C4A47C 0%, #A8895E 100%);
          color: #FDF9F6; border-color: transparent;
          box-shadow: 0 4px 18px rgba(168,137,94,0.28);
        }
        .pill-gold:hover {
          background: linear-gradient(135deg, #B5957E 0%, #9A7D54 100%);
          transform: translateY(-2px); box-shadow: 0 10px 30px rgba(168,137,94,0.36);
        }
        /* Light */
        .pill-light { background: rgba(247,243,238,0.95); color: #3A3532; border-color: rgba(247,243,238,0.6); }
        .pill-light:hover { background: #F7F3EE; transform: translateY(-2px); }

        /* ── NAV ── */
        .nav-link {
          position: relative; font-size: 11px; letter-spacing: 0.16em;
          text-transform: uppercase; color: #5A5550; text-decoration: none;
          padding-bottom: 3px; font-family: 'Jost', sans-serif; font-weight: 400;
          transition: color 0.25s ease;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0;
          height: 1px; background: linear-gradient(90deg, #6F7D68, #C9A46A);
          transition: width 0.35s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #6F7D68; }

        .label {
          display: block; font-size: 10px; letter-spacing: 0.42em; text-transform: uppercase;
          color: #B89B72; margin-bottom: 18px; font-weight: 400;
        }

        /* ── LAYOUT ── */
        .wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 600px)  { .wrap { padding: 0 32px; } }
        @media (min-width: 1100px) { .wrap { padding: 0 56px; } }

        .sp { padding: 64px 0; }
        @media (min-width: 768px)  { .sp { padding: 96px 0; } }
        @media (min-width: 1100px) { .sp { padding: 120px 0; } }

        .sh { font-size: clamp(30px, 5.5vw, 58px); font-weight: 300; line-height: 1.06; color: #2E2B28; }

        /* ── ANIMATIONS ── */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .hero-word { display: inline-block; opacity: 0; animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }

        /* ── BURGER ── */
        .burger { display: flex; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; z-index: 200; position: relative; }
        .burger span { display: block; height: 1.5px; background: #3A3532; transition: all 0.3s ease; transform-origin: center; border-radius: 2px; }
        .burger span:nth-child(1) { width: 22px; }
        .burger span:nth-child(2) { width: 22px; }
        .burger span:nth-child(3) { width: 14px; }
        .burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); width: 22px; }
        .burger.open span:nth-child(2) { opacity: 0; }
        .burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); width: 22px; }
        @media (min-width: 768px) { .burger { display: none; } }

        /* ── NAV VISIBILITY ── */
        .desk-nav  { display: none; }
        .desk-shop { display: none; }
        @media (min-width: 768px) { .desk-nav  { display: flex; gap: 32px; align-items: center; } }
        @media (min-width: 768px) { .desk-shop { display: inline-flex; } }

        /* ── DRAWER ── */
        .drawer {
          position: fixed; inset: 0;
          background: linear-gradient(160deg, #F7F3EE 0%, #EFE7DD 100%);
          z-index: 150; display: flex; flex-direction: column;
          justify-content: center; align-items: center; gap: 28px;
          transform: translateX(100%); transition: transform 0.45s cubic-bezier(0.77,0,0.175,1);
        }
        .drawer.open { transform: translateX(0); }
        @media (min-width: 768px) { .drawer { display: none !important; } }
        .drawer-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 8vw, 44px); font-weight: 300;
          color: #3A3532; text-decoration: none; letter-spacing: 0.02em;
          transition: color 0.2s ease;
        }
        .drawer-link:hover { color: #6F7D68; }

        /* ── HERO GRID ── */
        .hero-grid {
          display: flex; flex-direction: column; gap: 32px;
          padding: 44px 0 56px;
        }
        @media (min-width: 860px) {
          .hero-grid {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 72px; align-items: center; padding: 88px 0 104px;
          }
        }
        .hero-img {
          order: -1;
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 32px 80px rgba(58,53,50,0.14), 0 8px 24px rgba(111,125,104,0.12);
          aspect-ratio: 4/5; position: relative; width: 100%;
        }
        @media (min-width: 860px) {
          .hero-img { order: 0; border-radius: 28px; }
        }
        .hero-img::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(58,53,50,0.06) 100%);
          pointer-events: none; border-radius: inherit;
        }
        .hero-btns {
          display: flex; gap: 10px; flex-wrap: wrap; margin-top: 32px;
        }
        @media (max-width: 400px) {
          .hero-btns { flex-direction: column; }
          .hero-btns .pill-btn { width: 100%; text-align: center; }
        }

        /* ── TWO COL ── */
        .two-col { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) { .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 88px; align-items: center; } }
        .two-col-top { align-items: start; }
        .sq-img {
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(58,53,50,0.1);
          aspect-ratio: 1/1; position: relative; width: 100%;
        }
        @media (min-width: 860px) { .sq-img { border-radius: 28px; } }

        /* ── VALUES ── */
        .v-row {
          display: grid; grid-template-columns: 40px 1fr; gap: 16px;
          padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.09);
          align-items: start; transition: all 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        @media (min-width: 768px) {
          .v-row { grid-template-columns: 60px 1fr 2fr; gap: 36px; align-items: center; padding: 32px 0; }
        }
        .v-desc-mobile { display: block; color: rgba(255,255,255,0.48); font-size: 13px; line-height: 1.75; margin-top: 6px; }
        @media (min-width: 768px) { .v-desc-mobile { display: none; } }
        .v-desc-desk { display: none; }
        @media (min-width: 768px) { .v-desc-desk { display: block; color: rgba(255,255,255,0.48); font-size: 15px; line-height: 1.8; } }

        /* ── OFFERINGS ── */
        .offerings-grid { display: grid; gap: 10px; grid-template-columns: 1fr; }
        @media (min-width: 460px) { .offerings-grid { grid-template-columns: repeat(2,1fr); } }

        /* ── WHY GRID ── */
        .why-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .why-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 960px) { .why-grid { grid-template-columns: repeat(3,1fr); } }
        .w-card {
          background: linear-gradient(145deg, #FDFAF7 0%, #F5EEE6 100%);
          border-radius: 18px; padding: 32px;
          border: 1px solid rgba(221,213,202,0.8);
          box-shadow: 0 2px 12px rgba(58,53,50,0.04);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        @media (min-width: 768px) { .w-card { padding: 40px; } }
        .w-card:hover { transform: translateY(-5px); box-shadow: 0 20px 52px rgba(58,53,50,0.09); }

        /* ── CONTACT ── */
        .contact-grid { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) { .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 88px; align-items: center; } }

        /* ── FOOTER ── */
        .footer-inner { display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; }
        @media (min-width: 768px) { .footer-inner { flex-direction: row; justify-content: space-between; text-align: left; } }

        /* ── PRODUCT GRID ── */
        .prod-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 500px) { .prod-grid { grid-template-columns: repeat(2,1fr); gap: 22px; } }
        @media (min-width: 960px) { .prod-grid { grid-template-columns: repeat(3,1fr); gap: 26px; } }

        /* ── PRODUCT CARD ── */
        .prod-card {
          background: #FDFAF7;
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(221,213,202,0.6);
          box-shadow: 0 4px 20px rgba(58,53,50,0.06), 0 1px 4px rgba(58,53,50,0.04);
          transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94),
                      box-shadow 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
          display: flex; flex-direction: column; min-width: 0;
        }
        .prod-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 64px rgba(58,53,50,0.12), 0 4px 16px rgba(198,132,143,0.10);
        }
        .prod-card:hover .prod-img-inner { transform: scale(1.05); }
        .prod-img-inner { transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
        .prod-img-wrap {
          aspect-ratio: 3/2; position: relative;
          background: linear-gradient(135deg, #EFE7DD 0%, #E5DDD3 100%);
          overflow: hidden;
        }

        /* ── PEEK GRID ── */
        .peek-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .peek-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 900px) { .peek-grid { grid-template-columns: repeat(3,1fr); } }

        /* ── QUIZ ── */
        .quiz-option {
          background: linear-gradient(145deg, #FDFAF7 0%, #F5EEE6 100%);
          border: 1px solid #DDD5CA; border-radius: 14px;
          padding: 18px 20px; cursor: pointer;
          transition: all 0.28s ease; text-align: left;
          font-family: 'Jost', sans-serif; font-size: 14px;
          color: #3A3532; width: 100%; line-height: 1.5;
        }
        .quiz-option:hover {
          border-color: #6F7D68;
          background: linear-gradient(145deg, #F4F7F2 0%, #EBF0E8 100%);
          transform: translateX(4px);
          box-shadow: 0 6px 20px rgba(111,125,104,0.14);
        }
        @media (max-width: 540px) {
          .quiz-grid { grid-template-columns: 1fr !important; }
        }

        /* ── STICKY BAR ── */
        .sticky-bar { display: none; }
        @media (max-width: 767px) { .sticky-bar { display: flex; } }

        /* ── WHATSAPP ── */
        .wa-btn {
          position: fixed; bottom: 80px; right: 18px; z-index: 300;
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, #2ecc71, #25d366);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(37,211,102,0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease; text-decoration: none;
        }
        .wa-btn:hover { transform: scale(1.1); box-shadow: 0 14px 36px rgba(37,211,102,0.45); }
        @media (min-width: 768px) { .wa-btn { bottom: 32px; right: 32px; } }

        /* ── VALUE ANIMATION ── */
        .v-row-hidden { opacity: 0; transform: translateX(-32px); }
        .v-row-visible { opacity: 1; transform: translateX(0); transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1); }

        /* ── FOUNDER ── */
        .founder-grid { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) { .founder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 88px; align-items: center; } }

        /* ── DECORATIVE DIVIDER ── */
        .floral-divider {
          display: flex; align-items: center; gap: 16px;
          margin: 0 auto; width: fit-content;
        }
        .floral-divider::before,
        .floral-divider::after {
          content: ''; display: block; width: 48px; height: 1px;
          background: linear-gradient(90deg, transparent, #6F7D68);
        }
        .floral-divider::after {
          background: linear-gradient(90deg, #6F7D68, transparent);
        }

        /* ── SECTION TEXTURE HELPERS ── */
        .bg-ivory   { background: #F7F3EE; }
        .bg-linen   { background: linear-gradient(160deg, #EFE7DD 0%, #E8DDD0 100%); }
        .bg-rose-tint { background: linear-gradient(160deg, #F5F7F3 0%, #EDF2EB 100%); }
        .bg-dark    { background: linear-gradient(160deg, #3D3A36 0%, #2E2B28 100%); }
        .bg-deep    { background: linear-gradient(160deg, #4A4540 0%, #3A3532 100%); }

        /* ── LOGO SIZING ── */
        .logo-img { height: 56px; width: auto; }
        @media (min-width: 768px) { .logo-img { height: 72px; } }

        /* ── MOBILE NAV HEIGHT ── */
        .nav-inner { padding: 14px 20px; }
        @media (min-width: 768px) { .nav-inner { padding: 18px 32px; } }

        /* ── HERO MOBILE SPACING ── */
        @media (max-width: 500px) {
          .hero-grid { padding: 36px 0 48px; gap: 28px; }
          .hero-btns { gap: 10px; margin-top: 24px; }
        }

        /* ── SECTION HEADINGS ── */
        .section-header { text-align: center; margin-bottom: 48px; }
        @media (min-width: 768px) { .section-header { margin-bottom: 64px; } }

        /* ── ROSE ACCENT ── */
        .rose-accent { color: #C6848F; }
        .gold-accent { color: #B89B72; }

        /* ── CONTACT CARD ── */
        .contact-card {
          background: linear-gradient(145deg, #FDFAF7 0%, #F5EEE6 100%);
          border-radius: 18px; padding: 20px 24px;
          display: flex; align-items: center; gap: 18px;
          border: 1px solid rgba(221,213,202,0.7);
          box-shadow: 0 2px 12px rgba(58,53,50,0.05);
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 44px rgba(58,53,50,0.09);
          border-color: rgba(111,125,104,0.25);
        }

        /* ── QUOTE BOX ── */
        .quote-box {
          background: linear-gradient(145deg, #F4F7F2 0%, #E8F0E5 100%);
          border-radius: 16px; padding: 24px 28px;
          border-left: 3px solid #6F7D68;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
        }

        /* ── ABOUT BOX ── */
        .about-aside {
          background: linear-gradient(145deg, #FDFAF7 0%, #F5EEE6 100%);
          border-radius: 16px; padding: 24px 28px;
          border-left: 3px solid #B89B72;
          box-shadow: 0 4px 20px rgba(58,53,50,0.06);
        }
      `}</style>

      {/* ── WHATSAPP ─────────────────────────────────── */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="Chat on WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── MOBILE STICKY BAR ────────────────────────── */}
      <div className="sticky-bar" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 290, background: "linear-gradient(135deg, #6F7D68 0%, #55614F 100%)", padding: "13px 20px", alignItems: "center", justifyContent: "space-between", boxShadow: "0 -4px 20px rgba(168,98,106,0.2)" }}>
        <p style={{ color: "rgba(255,255,255,0.92)", fontSize: 13, fontWeight: 300, letterSpacing: "0.04em" }}>Intentional wellness tools</p>
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#FDFCFB", color: "#55614F", padding: "9px 22px", borderRadius: 100, fontSize: 11, fontWeight: 500, textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          Shop Now →
        </a>
      </div>

      {/* ── MOBILE DRAWER ────────────────────────────── */}
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        {["about", "products", "quiz", "values", "corporate", "contact"].map((s) => (
          <a key={s} href={`#${s}`} className="drawer-link" onClick={() => setMenuOpen(false)}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </a>
        ))}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ marginTop: 12 }} onClick={() => setMenuOpen(false)}>
          Shop Now
        </a>
      </div>

      {/* ── NAVBAR ───────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 160, background: "rgba(247,243,238,0.96)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid rgba(221,213,202,0.6)" }}>
        <div className="wrap nav-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ textDecoration: "none", zIndex: 200, position: "relative", flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="Bloom & Co — Wellness and Productivity Brand Nairobi Kenya"
              width={200} height={80}
              className="logo-img"
              style={{ width: "auto" }}
            />
          </a>
          <nav className="desk-nav">
            {["about", "products", "quiz", "values", "corporate", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="nav-link">{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose desk-shop" style={{ fontSize: 11 }}>Shop Now</a>
            <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #F7F3EE 0%, #F2EEE9 50%, #EDE7E0 100%)", position: "relative", overflow: "hidden" }} aria-label="Bloom and Co — Where Wellness Meets Purpose">
        {/* Decorative background glow */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50%", height: "70%", background: "radial-gradient(ellipse, rgba(111,125,104,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "0", left: "0", width: "40%", height: "50%", background: "radial-gradient(ellipse, rgba(184,155,114,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="wrap">
          <div className="hero-grid">
            <div className={heroVisible ? "hero-visible" : ""}>
              <div className="floral-divider" style={{ marginBottom: 24, marginLeft: 0, width: "fit-content" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#B89B72", fontWeight: 400 }}>Wellness · Productivity · Intentional Living</span>
              </div>
              <h1 className="serif" style={{ fontSize: "clamp(40px, 7.5vw, 86px)", fontWeight: 300, lineHeight: 0.96, letterSpacing: "-0.02em", color: "#2E2B28" }}>
                {["Where", "Wellness"].map((w, i) => (
                  <span key={w} className="hero-word" style={{ animationDelay: `${i * 0.14}s`, marginRight: "0.22em" }}>{w}</span>
                ))}
                <br />
                {["Meets", "Purpose"].map((w, i) => (
                  <em key={w} className="hero-word serif" style={{ color: "#C6848F", animationDelay: `${(i + 2) * 0.14}s`, marginRight: i === 0 ? "0.22em" : 0, fontStyle: "italic" }}>{w}</em>
                ))}
              </h1>
              <p className="hero-word" style={{ fontSize: "clamp(14px, 2.3vw, 16px)", color: "#6B6560", lineHeight: 1.9, maxWidth: 460, marginTop: 22, animationDelay: "0.65s" }}>
                Bloom & Co creates intentional wellness and productivity tools that help individuals and organizations cultivate healthier, more balanced, and more meaningful lives — across Africa and beyond.
              </p>
              <div className="hero-btns">
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ animationDelay: "0.85s" }}>Explore Products</a>
                <a href="#quiz" className="pill-btn pill-outline-rose" style={{ animationDelay: "0.95s" }}>Discover Your Bloom Energy</a>
                <a href="#corporate" className="pill-btn pill-outline-olive" style={{ animationDelay: "1.05s" }}>Partner With Us</a>
              </div>
            </div>
            <div className="hero-img" style={{ transform: "translateZ(0)" }}>
              {/* Decorative glow behind image */}
              <div style={{ position: "absolute", inset: "-8%", background: "radial-gradient(ellipse, rgba(111,125,104,0.12) 0%, transparent 70%)", zIndex: 0, borderRadius: "50%" }} />
              <Image
                src="/hero.png"
                alt="Bloom & Co — Wellness journals and intentional living tools by Fridah Nairuti, Nairobi Kenya"
                fill priority
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center top", position: "relative", zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg, #3A3532 0%, #2E2B28 100%)", color: "#F7F3EE", overflow: "hidden", padding: "15px 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="marquee-track">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 36, paddingRight: 36 }}>
              {["Wellness Journals", "Flow With Your Cycle", "Corporate Wellness", "Mindful Living", "Kids Coloring Books", "Intentional Growth", "Nairobi, Kenya", "Bloom & Co"].map((item, j) => (
                <span key={j} style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 36, opacity: 0.6 }}>
                  {item}<span style={{ color: "#C9A46A", opacity: 0.6, fontSize: 8 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" className="sp" style={{ background: "linear-gradient(160deg, #EFE7DD 0%, #E8DDD0 100%)" }}>
        <div className="wrap">
          <div className="two-col">
            <div className="sq-img">
              <Image
                src="/about.png"
                alt="Fridah Nairuti — Founder of Bloom & Co, Nairobi Kenya"
                fill sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div>
              <span className="label">Our Story</span>
              <h2 className="serif sh" style={{ marginBottom: 22 }}>
                Wellness Is The<br />Foundation of<br /><em style={{ color: "#C6848F" }}>Sustainable Growth</em>
              </h2>
              <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.95, marginBottom: 14 }}>
                Bloom & Co bridges wellness and workplace productivity through intentional tools and meaningful experiences. Founded in Nairobi, Kenya by Fridah Nairuti — an administration and operations professional with a deep passion for holistic living.
              </p>
              <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.95, marginBottom: 28 }}>
                Our vision is to become a leading wellness and productivity brand in Africa — empowering individuals and organizations to thrive through reflection, clarity, and intentional living.
              </p>
              <div className="about-aside">
                <p style={{ fontSize: 15, color: "#5A5550", lineHeight: 1.9, marginBottom: 14, fontStyle: "italic" }}>
                  "This journal was made for you. Not for your employer. Not for a performance review. For you — the person who shows up every day, carries more than most people see, and rarely gets a quiet moment to ask how you're actually doing."
                </p>
                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B89B72" }}>
                  Fridah Nairuti — Founder, Bloom & Co
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PEEK INSIDE ──────────────────────────────── */}
      <section className="sp" style={{ background: "linear-gradient(160deg, #4A4540 0%, #3A3532 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse at 80% 30%, rgba(201,164,106,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="wrap">
          <div className="section-header">
            <span style={{ display: "block", fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#C9A46A", marginBottom: 18, fontWeight: 400 }}>What's Inside</span>
            <h2 className="serif sh" style={{ color: "#F7F3EE" }}>
              A Look Inside the<br /><em style={{ color: "#C6848F" }}>Corporate Wellness Journal</em>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px auto 0", width: "fit-content" }}>
              <div style={{ width: 36, height: 1, background: "rgba(111,125,104,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, letterSpacing: "0.02em" }}>Five minutes a day. Thirty days to thrive.</span>
              <div style={{ width: 36, height: 1, background: "rgba(111,125,104,0.4)" }} />
            </div>
          </div>
          <div className="peek-grid">
            {peekItems.map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 24px", transition: "all 0.35s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(111,125,104,0.10)"; e.currentTarget.style.borderColor = "rgba(111,125,104,0.28)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 26, marginBottom: 14 }}>{item.icon}</div>
                <h3 className="serif" style={{ fontSize: 20, fontWeight: 400, color: "#F7F3EE", marginBottom: 10 }}>{item.label}</h3>
                <div style={{ width: 28, height: 1, background: "linear-gradient(90deg, #6F7D68, #C9A46A)", marginBottom: 12, borderRadius: 2 }} />
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, lineHeight: 1.85 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-gold">Get Your Journal</a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────── */}
      <section id="products" className="sp" style={{ background: "linear-gradient(180deg, #FAF6F2 0%, #F7F3EE 100%)" }}>
        <div className="wrap">
          <div className="section-header">
            <span className="label">Our Collection</span>
            <h2 className="serif sh">
              Tools for Every<br /><em style={{ color: "#C6848F" }}>Season of Your Life</em>
            </h2>
            <p style={{ color: "#6B6560", fontSize: 15, maxWidth: 500, margin: "18px auto 0", lineHeight: 1.9 }}>
              From corporate teams to curious kids — every Bloom & Co product is designed with intention and care.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
            {[{ key: "wellness", label: "Wellness & Productivity", emoji: "🌿" }, { key: "kids", label: "Mindful Kids", emoji: "🧸" }].map(tab => (
              <button key={tab.key} onClick={() => setProductTab(tab.key)} style={{
                padding: "10px 26px", borderRadius: 100, border: "1px solid",
                borderColor: productTab === tab.key ? "#6F7D68" : "#DDD5CA",
                background: productTab === tab.key ? "linear-gradient(135deg, #6F7D68 0%, #55614F 100%)" : "transparent",
                color: productTab === tab.key ? "#FDFCFB" : "#7A6F6A",
                fontSize: 12, letterSpacing: "0.1em", cursor: "pointer",
                fontFamily: "'Jost', sans-serif", transition: "all 0.28s ease",
                textTransform: "uppercase",
                boxShadow: productTab === tab.key ? "0 4px 16px rgba(85,97,79,0.25)" : "none",
              }}>
                {tab.emoji} {tab.label}
              </button>
            ))}
          </div>

          <div className="prod-grid">
            {displayProducts.map((product, i) => (
              <div key={i} className="prod-card">
                <div className="prod-img-wrap">
                  {product.coverImg && (
                    <Image
                      src={product.coverImg}
                      alt={product.title}
                      fill
                      sizes="(max-width: 500px) 100vw, (max-width: 960px) 50vw, 33vw"
                      className="prod-img-inner"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  )}
                  {product.badge && (
                    <div style={{ position: "absolute", top: 14, left: 14, background: "linear-gradient(135deg, #6F7D68 0%, #55614F 100%)", color: "#FDFCFB", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, boxShadow: "0 3px 12px rgba(85,97,79,0.32)", zIndex: 2 }}>
                      {product.badge}
                    </div>
                  )}
                  {/* subtle gradient overlay at bottom of image */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, rgba(253,250,247,0.18), transparent)", pointerEvents: "none", zIndex: 1 }} />
                </div>
                <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <p style={{ fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "#6F7D68", marginBottom: 8, opacity: 0.9 }}>
                    {product.subtitle}
                  </p>
                  <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 10, lineHeight: 1.2, color: "#2E2B28" }}>
                    {product.title}
                  </h3>
                  <div style={{ width: 28, height: 1, background: "linear-gradient(90deg, #6F7D68, #C9A46A)", marginBottom: 12, borderRadius: 2 }} />
                  <p style={{ color: "#6B6560", fontSize: 13, lineHeight: 1.85, marginBottom: 16, flexGrow: 1 }}>
                    {product.description}
                  </p>
                  <ul style={{ listStyle: "none", marginBottom: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                    {product.features.map((f, fi) => (
                      <li key={fi} style={{ fontSize: 12, color: "#7A756F", display: "flex", alignItems: "center", gap: 9 }}>
                        <span style={{ color: "#6F7D68", fontWeight: 600, fontSize: 12, flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ textAlign: "center", fontSize: 11, padding: "11px 20px" }}>
                    Get Your Copy
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 52 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline-rose">View All Products on Selar</a>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────── */}
      <section id="values" className="sp" style={{ background: "linear-gradient(160deg, #3D3A36 0%, #2E2B28 100%)", color: "#F7F3EE", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, left: "10%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(184,155,114,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="wrap">
          <div style={{ marginBottom: 56 }}>
            <span style={{ display: "block", fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#B89B72", marginBottom: 18, fontWeight: 400 }}>Core Values</span>
            <h2 className="serif sh" style={{ color: "#F7F3EE" }}>Built on Principles<br /><em style={{ color: "#C6848F" }}>That Matter</em></h2>
          </div>
          <div ref={valuesRef}>
            {values.map((v, i) => (
              <div key={v.label}
                className={valuesInView ? "v-row v-row-visible" : "v-row v-row-hidden"}
                style={{ transitionDelay: `${i * 0.11}s`, ...(i === values.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.08)" } : {}) }}>
                <span style={{ fontSize: 10, color: "#C9A46A", letterSpacing: "0.12em", paddingTop: 4, opacity: 0.85 }}>0{i + 1}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: "clamp(19px, 2.8vw, 25px)", fontWeight: 400, color: "#F7F3EE" }}>{v.label}</h3>
                  <p className="v-desc-mobile">{v.desc}</p>
                </div>
                <p className="v-desc-desk">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIZ ─────────────────────────────────────── */}
      <section id="quiz" className="sp" style={{ background: "linear-gradient(160deg, #F7F3EE 0%, #EDF2EB 50%, #EAE8E4 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50%", height: "70%", background: "radial-gradient(ellipse, rgba(111,125,104,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="wrap">
          <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center" }}>
            <span className="label">Wellness Experience</span>
            <h2 className="serif sh" style={{ color: "#2E2B28", marginBottom: 20 }}>
              What Kind of <em style={{ color: "#C6848F" }}>Bloom Are You?</em>
            </h2>
            <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.9, maxWidth: 580, margin: "0 auto 52px" }}>
              No pressure. No wrong answers. Just a quiet moment for yourself.
            </p>

            {!quizStarted && !quizResult && (
              <div style={{ background: "linear-gradient(145deg, #FDFAF7 0%, #F5EEE6 100%)", borderRadius: 24, padding: "52px 36px", boxShadow: "0 12px 48px rgba(58,53,50,0.08)", border: "1px solid rgba(221,213,202,0.8)", animation: "fadeIn 0.4s ease" }}>
                <div style={{ fontSize: 44, marginBottom: 22 }}>🌿</div>
                <p className="serif" style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, color: "#2E2B28", marginBottom: 12 }}>No pressure. No wrong answers.</p>
                <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.85, maxWidth: 460, margin: "0 auto 32px" }}>
                  Just a quiet moment of reflection — to remind you who you already are.
                </p>
                <button onClick={() => setQuizStarted(true)} className="pill-btn pill-rose" style={{ fontSize: 13, padding: "15px 44px" }}>
                  Begin the Quiz →
                </button>
              </div>
            )}

            {quizStarted && !quizResult && (
              <div style={{ background: "linear-gradient(145deg, #FDFAF7 0%, #F5EEE6 100%)", borderRadius: 24, padding: "36px 28px", boxShadow: "0 12px 48px rgba(58,53,50,0.08)", border: "1px solid rgba(221,213,202,0.8)", textAlign: "left", animation: "fadeUp 0.4s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 32 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#6F7D68", opacity: 0.9 }}>
                    0{quizIndex + 1} — 08
                  </span>
                  <div style={{ flex: 1, maxWidth: 160, height: 2, background: "#DDD5CA", borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${((quizIndex + 1) / bloomQuestions.length) * 100}%`, background: "linear-gradient(90deg, #6F7D68, #C9A46A)", transition: "width 0.5s ease" }} />
                  </div>
                </div>
                <h3 className="serif" style={{ fontSize: "clamp(21px, 3.2vw, 32px)", fontWeight: 400, color: "#2E2B28", lineHeight: 1.2, marginBottom: 32, textAlign: "center" }}>
                  {bloomQuestions[quizIndex].question}
                </h3>
                <div className="quiz-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {bloomQuestions[quizIndex].options.map((option, index) => (
                    <button key={index} className="quiz-option" onClick={() => handleBloomAnswer(option.value)}>
                      <span style={{ color: "#6F7D68", marginRight: 10, fontWeight: 400, fontSize: 10, letterSpacing: "0.12em", opacity: 0.8 }}>0{index + 1}</span>
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizResult && (
              <div style={{ background: "linear-gradient(145deg, #FDFAF7 0%, #F5EEE6 100%)", borderRadius: 24, padding: "48px 32px 44px", boxShadow: "0 16px 56px rgba(58,53,50,0.09)", border: "1px solid rgba(221,213,202,0.8)", animation: "fadeUp 0.5s ease" }}>
                <div className="quote-box" style={{ marginBottom: 36 }}>
                  <div style={{ fontSize: 64, color: "#6F7D68", lineHeight: 0.8, fontFamily: "Georgia, serif", marginBottom: 10, opacity: 0.22, position: "relative", left: -4 }}>"</div>
                  <p className="serif" style={{ fontSize: "clamp(19px, 3.5vw, 30px)", fontWeight: 300, fontStyle: "italic", color: "#2E2B28", lineHeight: 1.55, marginTop: -8 }}>
                    {quizResult.affirmation}
                  </p>
                </div>
                <h3 className="serif" style={{ fontSize: "clamp(25px, 4.2vw, 42px)", fontWeight: 300, color: "#2E2B28", lineHeight: 1.1, marginBottom: 28, letterSpacing: "-0.01em" }}>
                  You're {quizResult.title} <span style={{ fontStyle: "normal" }}>{quizResult.emoji}</span>
                </h3>
                <div style={{ marginBottom: 28 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.36em", textTransform: "uppercase", color: "#6F7D68", marginBottom: 12, fontWeight: 400 }}>Your energy lately</p>
                  <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.9, maxWidth: 560, margin: "0 auto" }}>{quizResult.energy}</p>
                </div>
                <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, #6F7D68, #C9A46A)", margin: "0 auto 28px", borderRadius: 2 }} />
                <div style={{ background: "rgba(239,231,221,0.7)", borderRadius: 14, padding: "22px 26px", marginBottom: 22, textAlign: "left" }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#6F7D68", marginBottom: 10, fontWeight: 400, opacity: 0.8 }}>A Small Ritual</p>
                  <p style={{ color: "#3A3532", fontSize: 14, lineHeight: 1.8 }}>{quizResult.ritual}</p>
                </div>
                <div style={{ borderLeft: "2px solid #C6848F", paddingLeft: 22, marginBottom: 40, textAlign: "left" }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#C6848F", marginBottom: 8, fontWeight: 400 }}>A Quiet Question</p>
                  <p className="serif" style={{ color: "#6B6560", fontSize: 18, fontStyle: "italic", lineHeight: 1.7, fontWeight: 300 }}>"{quizResult.prompt}"</p>
                </div>
                <p style={{ fontSize: 11, color: "#6F7D68", opacity: 0.75, marginBottom: 18, letterSpacing: "0.06em" }}>felt accurate? share it ✦</p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={() => {
                    const text = quizResult.title + " " + quizResult.emoji + '\n\n"' + quizResult.affirmation + '"\n\nDiscover yours at bloomandco.co.ke';
                    if (navigator.share) { navigator.share({ text }); }
                    else { navigator.clipboard.writeText(text).then(() => alert("Copied! Share it with someone who needs it.")); }
                  }} className="pill-btn pill-rose">Share My Result</button>
                  <button onClick={resetQuiz} className="pill-btn pill-outline-rose">Take It Again</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CORPORATE WELLNESS ───────────────────────── */}
      <section id="corporate" className="sp" style={{ background: "linear-gradient(180deg, #F7F3EE 0%, #FAF6F2 100%)" }}>
        <div className="wrap">
          <div className="two-col two-col-top">
            <div>
              <span className="label">Corporate Wellness</span>
              <h2 className="serif sh" style={{ marginBottom: 22 }}>
                Partnering With<br />Organizations to<br /><em style={{ color: "#C6848F" }}>Cultivate Thriving Teams</em>
              </h2>
              <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.95, marginBottom: 32 }}>
                Bloom & Co partners with organizations to support employee wellness and workplace engagement through practical and intentional wellness solutions. We serve corporates, NGOs, educational institutions, insurance companies, hospitality brands, and HR departments.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#contact" className="pill-btn pill-rose">Get In Touch</a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20, color: "#5A5550" }}>Our offerings include:</p>
              <div className="offerings-grid">
                {corporateOfferings.map((offer, i) => (
                  <div key={i} style={{ background: "linear-gradient(145deg, #F4F6F2 0%, #EBF0E8 100%)", borderRadius: 12, padding: "14px 18px", fontSize: 13, color: "#3A3532", lineHeight: 1.6, border: "1px solid rgba(111,125,104,0.18)" }}>
                    <span style={{ color: "#6F7D68", marginRight: 9, fontWeight: 600 }}>✓</span>{offer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BLOOM ────────────────────────────────── */}
      <section className="sp" style={{ background: "linear-gradient(160deg, #EFE7DD 0%, #E8DDD0 100%)" }}>
        <div className="wrap">
          <div className="section-header">
            <span className="label">Why Choose Us</span>
            <h2 className="serif sh">Five Reasons to<br /><em style={{ color: "#C6848F" }}>Choose Bloom & Co</em></h2>
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="w-card">
                <span className="serif" style={{ fontSize: 38, color: "#DDD5CA", fontWeight: 300, lineHeight: 1, display: "block", marginBottom: 14 }}>0{i + 1}</span>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 10, lineHeight: 1.2, color: "#2E2B28" }}>{item.title}</h3>
                <div style={{ width: 28, height: 1, background: "linear-gradient(90deg, #6F7D68, #C9A46A)", marginBottom: 12, borderRadius: 2 }} />
                <p style={{ color: "#6B6560", fontSize: 14, lineHeight: 1.85 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ background: "linear-gradient(145deg, #6F7D68 0%, #55614F 100%)", color: "#F7F3EE", borderRadius: 18, padding: "32px", display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 16px 48px rgba(85,97,79,0.28)" }}>
              <span className="serif" style={{ fontSize: 38, color: "rgba(255,255,255,0.18)", fontWeight: 300, lineHeight: 1, display: "block" }}>05</span>
              <div>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 10, color: "#FDF9F6" }}>Authentic Brand Story</h3>
                <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.35)", marginBottom: 12, borderRadius: 2 }} />
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.85, marginBottom: 22 }}>
                  Built on a genuine passion for wellness, intentional growth, and creating positive impact across Africa.
                </p>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-light" style={{ fontSize: 11 }}>
                  Follow @bloomco.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #3D3A36 0%, #2A2724 100%)", padding: "88px 0" }}>
        <div className="wrap">
          <div className="founder-grid">
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)" }}>
              <Image
                src="/founder.png"
                alt="Fridah Nairuti — Founder of Bloom & Co"
                fill sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ display: "block", fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#B89B72", marginBottom: 28, fontWeight: 400 }}>A Word From Our Founder</span>
              <div style={{ fontSize: 72, color: "#C6848F", lineHeight: 0.8, fontFamily: "Georgia, serif", marginBottom: 16, opacity: 0.22 }}>"</div>
              <blockquote className="serif" style={{ fontSize: "clamp(18px, 2.8vw, 28px)", fontWeight: 300, lineHeight: 1.65, color: "#F7F3EE", fontStyle: "italic", marginBottom: 36 }}>
                At Bloom & Co, we believe people thrive when wellness and productivity exist in balance. Through intentional products and meaningful partnerships, we are committed to helping individuals and organizations cultivate healthier, more fulfilling lives.
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, #6F7D68, #55614F)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#FDFCFB", letterSpacing: "0.05em", fontFamily: "'Jost', sans-serif", flexShrink: 0 }}>FN</div>
                <div>
                  <p style={{ color: "#F7F3EE", fontSize: 15, fontWeight: 400, letterSpacing: "0.02em" }}>Fridah Nairuti</p>
                  <p style={{ color: "#B89B72", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 3 }}>Founder, Bloom & Co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ────────────────────────────────── */}
      <section className="sp" style={{ background: "linear-gradient(160deg, #F5F7F3 0%, #F7F3EE 100%)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="label">Follow Along</span>
          <h2 className="serif sh" style={{ marginBottom: 16 }}>Join Us on<br /><em style={{ color: "#C6848F" }}>Instagram</em></h2>
          <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.9, maxWidth: 440, margin: "0 auto 40px" }}>
            Daily wellness tips, product launches, and behind-the-scenes moments. Follow us at @bloomco.ke.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, maxWidth: 460, margin: "0 auto 40px" }}>
            {["Wellness tips", "Flow With Your Cycle", "Floral Coloring", "Corporate Journal", "Mother's Day", "Kids Coloring"].map((desc, i) => (
              <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                style={{ aspectRatio: "1/1", background: `linear-gradient(135deg, ${["#EFE7DD,#E5DDD3","#E8EEE5,#DDE6D8","#F0E8E4,#E8DDD8","#EFE7DD,#E5DDD3","#E8EEE5,#DDE6D8","#F0E8E4,#E8DDD8"][i]})`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 5, textDecoration: "none", overflow: "hidden", transition: "transform 0.3s ease, opacity 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = "1"; }}
              >
                <span style={{ fontSize: 20 }}>📸</span>
                <span style={{ fontSize: 9, color: "#7A6F6A", textAlign: "center", padding: "0 6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{desc}</span>
              </a>
            ))}
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline-rose" style={{ borderColor: "#C6848F", color: "#B07480" }}>
            Follow @bloomco.ke
          </a>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact" className="sp" style={{ background: "linear-gradient(160deg, #EFE7DD 0%, #E8DDD0 100%)" }}>
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <span className="label">Get In Touch</span>
              <h2 className="serif sh" style={{ marginBottom: 22, lineHeight: 1.05 }}>
                Let's Build<br /><em style={{ color: "#C6848F" }}>Something Together</em>
              </h2>
              <p style={{ color: "#6B6560", fontSize: 15, lineHeight: 1.95, maxWidth: 460 }}>
                Whether you're an individual seeking intentional wellness tools, or an organization looking to cultivate a thriving team — we'd love to connect.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactItems.map((item) => (
                <div key={item.label} className="contact-card">
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #F2F5F0, #E8EFE5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6F7D68", flexShrink: 0, fontSize: 18, border: "1px solid rgba(111,125,104,0.18)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 9, letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A46A", marginBottom: 4, opacity: 0.85 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: 15, color: "#3A3532", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 15, color: "#3A3532" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ marginTop: 8, padding: "17px 28px" }}>
                <ShoppingBag size={16} /> Shop On Selar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer style={{ padding: "40px 20px 88px", background: "linear-gradient(160deg, #2E2B28 0%, #221F1C 100%)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <Image src="/logo.png" alt="Bloom & Co Nairobi Kenya" width={160} height={64} style={{ height: 40, width: "auto" }} />
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, marginTop: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}>Wellness · Productivity · Intentional Living</p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, letterSpacing: "0.04em" }}>© 2026 Bloom & Co · Nairobi, Kenya</p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { label: "Instagram", href: INSTAGRAM_URL },
                { label: "WhatsApp", href: WHATSAPP_URL },
                { label: "Shop", href: SHOP_URL },
                { label: "Email", href: "mailto:bloomandco@gmail.com" },
              ].map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, textDecoration: "none", transition: "color 0.25s", letterSpacing: "0.14em", textTransform: "uppercase" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#C9A46A"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
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
