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
    icon: "📓",
    coverDesc: "Sage green linen cover with gold foil — Corporate Wellness Journal",
  },
  {
    category: "wellness",
    title: "Flow With Your Cycle",
    coverImg: "/flow_with_your_cycle.png",
    subtitle: "A Woman's Guide to Aligning Energy and Work",
    description: "It's not laziness. It's your cycle. Understand your 4 monthly phases, align your energy with your work, and stop forcing — start flowing.",
    features: ["4 cycle phases explained", "Energy-work alignment", "Productivity by phase", "Self-compassion tools"],
    badge: "New",
    icon: "🌿",
    coverDesc: "Deep red rose cover with script title — Flow With Your Cycle by Fridah Makena",
  },
  {
    category: "wellness",
    title: "Well-being & Productivity Guide",
    coverImg: "/wellbeing_and_productivity_guide.png",
    subtitle: "A Guide to Well-being and Productivity at the Workplace",
    description: "Well-being isn't a reward. It's the foundation of sustainable productivity. A guide for professionals who show up fully — and want to keep doing so.",
    features: ["Burnout prevention", "Mindful work habits", "Focus & energy tools", "Work-life integration"],
    badge: null,
    icon: "📘",
    coverDesc: "Dark green book cover with headphones — Well-being and Productivity at the Workplace",
  },
  {
    category: "wellness",
    title: "Daily Devotional Workbook",
    coverImg: "/daily_devotion.png",
    subtitle: "Mother's Day Edition — Nourishes Her Soul",
    description: "A beautiful space for prayer, reflection, scripture study, gratitude, and intentional quiet time with God. A perfect gift for the woman who deserves more than a gift.",
    features: ["Daily devotional pages", "Prayer & reflection space", "Gratitude journaling", "Scripture study prompts"],
    badge: "Gift Idea",
    icon: "🙏",
    coverDesc: "Soft floral cover — Daily Devotional Workbook, Mother's Day Edition",
  },
  {
    category: "wellness",
    title: "Floral Coloring Book for Adults",
    coverImg: "/floral_colouring_book_for_adults.png",
    subtitle: "Quiet Creative Moments for You",
    description: "Sometimes the most productive thing you can do is slow down. Relax your mind, reduce stress, and reconnect with yourself. No pressure. No perfection.",
    features: ["Intricate floral designs", "Stress relief focused", "Perfect for self-care", "Weekend reset tool"],
    badge: null,
    icon: "🎨",
    coverDesc: "Gradient cover with line-art illustrations — Floral Coloring for Adults",
  },
  {
    category: "kids",
    title: "Kids Affirmation Coloring E-Book",
    coverImg: "/kids_affirmation_colouring_book.png",
    subtitle: "Build Confidence Through Color",
    description: "A fun and uplifting coloring experience designed to help children build confidence, creativity, and positive thinking — one page at a time.",
    features: ["Positive affirmations", "Fun coloring pages", "Screen-free creativity", "Builds self-belief"],
    badge: null,
    icon: "🦕",
    coverDesc: "Friendly dinosaur coloring page — Positive Affirmations Coloring Pages for Kids",
  },
  {
    category: "kids",
    title: "ABC Fun — Alphabet Coloring Book",
    coverImg: "/abc_fun_kids.png",
    subtitle: "Playtime Learning for Little Ones",
    description: "Colorful alphabet adventures that make learning fun. Perfect for ages 3–6 who are just beginning to explore letters, words, and the world around them.",
    features: ["A–Z letter pages", "Simple illustrations", "Learning through play", "Great for ages 3–6"],
    badge: null,
    icon: "🔤",
    coverDesc: "Bright ABC Fun Alphabet Coloring Book cover with playful typography",
  },
  {
    category: "kids",
    title: '"Quiet Time" Coloring for Kids',
    coverImg: "/quiet_time_colouring_for_kids.png",
    subtitle: "Simple, Fun Pages for Calm & Creative Play",
    description: "Keep your little ones happily engaged while you enjoy a well-deserved moment to reset. Fun land animal illustrations that spark creativity and encourage quiet time.",
    features: ["Land animal illustrations", "Ages 3–8", "Instant PDF download", "Calm, creative focus"],
    badge: null,
    icon: "🦒",
    coverDesc: "Jungle scene with giraffe, elephant, lion — Quiet Time Coloring for Kids",
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

// ── BLOOM WELLNESS PERSONALITY QUIZ DATA ─────────────────
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
      { text: ""I need a reset."", value: "reset" },
      { text: ""I just want peace."", value: "quiet" },
      { text: ""I'm becoming a better version of myself."", value: "golden" },
      { text: ""I need to stop overthinking everything."", value: "dreamer" },
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

// ── PEEK INSIDE DATA ────────────────────────────────────────
const peekItems = [
  { label: "Morning Check-in", desc: "Rate your energy, stress & focus. Choose how you feel: Energized, Grounded, Stretched, or Depleted.", icon: "☀️" },
  { label: "Daily Themes", desc: "Each weekday carries a theme — productivity, emotional awareness, leadership, energy, and celebration.", icon: "📅" },
  { label: "Weekly Review", desc: "Rate your week across energy, focus, stress management, work-life balance, team connections, and personal growth.", icon: "📊" },
  { label: "Wellness Insights", desc: "Weekly articles like 'Recognizing Burnout Before It Catches You' — practical wisdom, not generic advice.", icon: "💡" },
  { label: "Weekend Reflection", desc: "How did I restore my energy? What am I carrying into next week? What intention do I set ahead?", icon: "🌿" },
  { label: "Month-End Pulse", desc: "'You made it.' A closing reflection on your greatest achievement, what you learned, and what to leave behind.", icon: "✦" },
];

// ── USE INTERSECTION OBSERVER HOOK ─────────────────────────
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
    updatedAnswers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });

    const topResult = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    setQuizResult(bloomResults[topResult]);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizIndex(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

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
    <div style={{ minHeight: "100vh", background: "#F7F3EE", color: "#4E4A46", overflowX: "hidden" }}>

      {/* ── GLOBAL STYLES ─────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Jost', sans-serif; font-weight: 300; -webkit-font-smoothing: antialiased; }
        img { display: block; max-width: 100%; }
        .serif { font-family: 'Cormorant Garamond', serif; }

        .pill-btn {
          display: inline-block; padding: 13px 28px; border-radius: 100px;
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s ease; cursor: pointer;
          border: 1px solid transparent; font-family: 'Jost', sans-serif;
          font-weight: 400; white-space: nowrap;
        }
        .pill-olive         { background: #6F7865; color: #F7F3EE; border-color: #6F7865; }
        .pill-olive:hover   { background: #586050; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(111,120,101,0.25); }
        .pill-outline-olive { background: transparent; color: #6F7865; border-color: #6F7865; }
        .pill-outline-olive:hover { background: #6F7865; color: #F7F3EE; transform: translateY(-2px); }
        .pill-gold          { background: #B89B72; color: #F7F3EE; border-color: #B89B72; }
        .pill-gold:hover    { background: #9e845f; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(184,155,114,0.3); }
        .pill-light         { background: #F7F3EE; color: #4E4A46; border-color: #F7F3EE; }
        .pill-light:hover   { background: #ede8e0; transform: translateY(-2px); }

        .nav-link {
          position: relative; font-size: 12px; letter-spacing: 0.14em;
          text-transform: uppercase; color: #4E4A46; text-decoration: none;
          padding-bottom: 2px; font-family: 'Jost', sans-serif;
        }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #6F7865; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #6F7865; }

        .label { display: block; font-size: 11px; letter-spacing: 0.36em; text-transform: uppercase; color: #B89B72; margin-bottom: 16px; font-weight: 400; }

        .wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 600px)  { .wrap { padding: 0 32px; } }
        @media (min-width: 1100px) { .wrap { padding: 0 48px; } }

        .sp { padding: 72px 0; }
        @media (min-width: 768px)  { .sp { padding: 104px 0; } }
        @media (min-width: 1100px) { .sp { padding: 128px 0; } }

        .sh { font-size: clamp(32px, 6vw, 60px); font-weight: 300; line-height: 1.05; }

        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { display: flex; width: max-content; animation: marquee 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }

        .hero-word { display: inline-block; opacity: 0; animation: fadeUp 0.6s ease forwards; }

        .burger { display: flex; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; z-index: 200; position: relative; }
        .burger span { display: block; height: 1.5px; background: #4E4A46; transition: all 0.3s ease; transform-origin: center; }
        .burger span:nth-child(1) { width: 22px; }
        .burger span:nth-child(2) { width: 22px; }
        .burger span:nth-child(3) { width: 14px; }
        .burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); width: 22px; }
        .burger.open span:nth-child(2) { opacity: 0; }
        .burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 22px; }
        @media (min-width: 768px) { .burger { display: none; } }

        .desk-nav  { display: none; }
        .desk-shop { display: none; }
        @media (min-width: 768px) { .desk-nav  { display: flex; gap: 36px; align-items: center; } }
        @media (min-width: 768px) { .desk-shop { display: inline-block; } }

        .drawer { position: fixed; inset: 0; background: #F7F3EE; z-index: 150; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 32px; transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.77,0,0.175,1); }
        .drawer.open { transform: translateX(0); }
        @media (min-width: 768px) { .drawer { display: none !important; } }
        .drawer-link { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px,8vw,48px); font-weight: 300; color: #4E4A46; text-decoration: none; letter-spacing: 0.02em; transition: color 0.2s; }
        .drawer-link:hover { color: #6F7865; }

        .hero-grid { display: flex; flex-direction: column; gap: 48px; padding: 60px 0 72px; }
        @media (min-width: 860px) { .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; padding: 96px 0 112px; } }
        .hero-img { order: -1; border-radius: 4px; overflow: hidden; box-shadow: 0 40px 100px rgba(78,74,70,0.12); aspect-ratio: 4/5; position: relative; width: 100%; }
        @media (min-width: 860px) { .hero-img { order: 0; } }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 36px; }

        .two-col { display: flex; flex-direction: column; gap: 56px; }
        @media (min-width: 860px) { .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center; } }
        .two-col-top { align-items: start; }
        .sq-img { border-radius: 4px; overflow: hidden; box-shadow: 0 24px 64px rgba(78,74,70,0.1); aspect-ratio: 1/1; position: relative; width: 100%; }

        .v-row { display: grid; grid-template-columns: 36px 1fr; gap: 16px; padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.08); align-items: start; transition: all 0.5s ease; }
        @media (min-width: 768px) { .v-row { grid-template-columns: 56px 1fr 2fr; gap: 32px; align-items: center; padding: 32px 0; } }
        .v-desc-mobile { display: block; color: rgba(255,255,255,0.45); font-size: 13px; line-height: 1.7; margin-top: 6px; }
        @media (min-width: 768px) { .v-desc-mobile { display: none; } }
        .v-desc-desk { display: none; }
        @media (min-width: 768px) { .v-desc-desk { display: block; color: rgba(255,255,255,0.45); font-size: 15px; line-height: 1.75; } }

        .offerings-grid { display: grid; gap: 10px; grid-template-columns: 1fr; }
        @media (min-width: 460px) { .offerings-grid { grid-template-columns: repeat(2,1fr); } }

        .why-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .why-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 960px) { .why-grid { grid-template-columns: repeat(3,1fr); } }
        .w-card { background: #F7F3EE; border-radius: 4px; padding: 32px; border: 1px solid #DDD5CA; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        @media (min-width: 768px) { .w-card { padding: 40px; } }
        .w-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(78,74,70,0.08); }

        .contact-grid { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) { .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center; } }

        .footer-inner { display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; }
        @media (min-width: 768px) { .footer-inner { flex-direction: row; justify-content: space-between; text-align: left; } }

        /* product cards */
        .prod-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 560px) { .prod-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 960px) { .prod-grid { grid-template-columns: repeat(3,1fr); } }

        /* peek inside grid */
        .peek-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 560px) { .peek-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 900px) { .peek-grid { grid-template-columns: repeat(3,1fr); } }

        /* quiz */
        .quiz-option { background: #F7F3EE; border: 1px solid #DDD5CA; border-radius: 4px; padding: 18px 20px; cursor: pointer; transition: all 0.25s ease; text-align: left; font-family: 'Jost', sans-serif; font-size: 14px; color: #4E4A46; width: 100%; }
        .quiz-option:hover { border-color: #6F7865; background: #EFE7DD; transform: translateX(4px); }

        /* mobile sticky bar */
        .sticky-bar { display: none; }
        @media (max-width: 767px) { .sticky-bar { display: flex; } }

        /* whatsapp */
        .wa-btn { position: fixed; bottom: 80px; right: 20px; z-index: 300; width: 52px; height: 52px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(37,211,102,0.35); transition: transform 0.3s ease, box-shadow 0.3s ease; text-decoration: none; }
        .wa-btn:hover { transform: scale(1.08); box-shadow: 0 12px 32px rgba(37,211,102,0.45); }
        @media (min-width: 768px) { .wa-btn { bottom: 32px; right: 32px; } }

        /* value animation */
        .v-row-hidden { opacity: 0; transform: translateX(-30px); }
        .v-row-visible { opacity: 1; transform: translateX(0); transition: opacity 0.6s ease, transform 0.6s ease; }

        /* product card image hover */
        .prod-card:hover img { transform: scale(1.04); }

        /* founder section */
        .founder-grid { display: flex; flex-direction: column; gap: 56px; }
        @media (min-width: 860px) { .founder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center; } }

        /* divider */
        .section-divider { width: 48px; height: 1px; background: #B89B72; display: block; margin: 0 auto; }

        /* gold accent */
        .gold-accent { color: #B89B72; }
      `}</style>

      {/* ── WHATSAPP FLOATING BUTTON ───────────────────── */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="Chat on WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── MOBILE STICKY BAR ─────────────────────────── */}
      <div className="sticky-bar" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 290, background: "#6F7865", padding: "14px 20px", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ color: "#F7F3EE", fontSize: 13, fontWeight: 400, letterSpacing: "0.04em" }}>Intentional wellness tools</p>
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#F7F3EE", color: "#6F7865", padding: "8px 20px", borderRadius: 100, fontSize: 11, fontWeight: 500, textDecoration: "none", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Shop Now →
        </a>
      </div>

      {/* ── MOBILE DRAWER ─────────────────────────────── */}
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        {["about", "products", "quiz", "values", "corporate", "contact"].map((s) => (
          <a key={s} href={`#${s}`} className="drawer-link" onClick={() => setMenuOpen(false)}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </a>
        ))}
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-olive" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
          Shop Now
        </a>
      </div>

      {/* ── NAVBAR ────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 160, background: "rgba(247,243,238,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid #DDD5CA" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px" }}>
          <a href="#" style={{ textDecoration: "none", zIndex: 200, position: "relative" }}>
            <Image src="/logo.png" alt="Bloom & Co — Wellness and Productivity Brand Nairobi Kenya" width={130} height={52} style={{ height: 38, width: "auto" }} />
          </a>
          <nav className="desk-nav">
            {["about", "products", "quiz", "values", "corporate", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="nav-link">{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-olive desk-shop">Shop Now</a>
            <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ background: "#F7F3EE" }} aria-label="Bloom and Co — Where Wellness Meets Purpose">
        <div className="wrap">
          <div className="hero-grid">
            <div className={heroVisible ? "hero-visible" : ""}>
              <span className="label">Wellness · Productivity · Intentional Living</span>
              <h1 className="serif" style={{ fontSize: "clamp(42px, 8vw, 88px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#4E4A46" }}>
                {["Where", "Wellness"].map((w, i) => (
                  <span key={w} className="hero-word" style={{ animationDelay: `${i * 0.15}s`, marginRight: "0.25em" }}>{w}</span>
                ))}
                <br />
                {["Meets", "Purpose"].map((w, i) => (
                  <em key={w} className="hero-word serif" style={{ color: "#B89B72", animationDelay: `${(i + 2) * 0.15}s`, marginRight: i === 0 ? "0.25em" : 0 }}>{w}</em>
                ))}
              </h1>
              <p className="hero-word" style={{ fontSize: "clamp(15px, 2.5vw, 17px)", color: "#7A756F", lineHeight: 1.85, maxWidth: 480, marginTop: 24, animationDelay: "0.7s" }}>
                Bloom & Co creates intentional wellness and productivity tools that help individuals and organizations cultivate healthier, more balanced, and more meaningful lives — across Africa and beyond.
              </p>
              <div className="hero-btns">
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-olive" style={{ animationDelay: "0.9s" }}>Explore Products</a>
                <a href="#quiz" className="pill-btn pill-outline-olive" style={{ animationDelay: "1.0s" }}>Discover Your Bloom Energy</a>
                <a href="#corporate" className="pill-btn pill-outline-olive" style={{ animationDelay: "1.1s" }}>Partner With Us</a>
              </div>
            </div>
            <div className="hero-img" style={{ transform: "translateZ(0)" }}>
              <Image
                src="/hero.png"
                alt="Bloom & Co — Wellness journals and intentional living tools by Fridah Nairuti, Nairobi Kenya"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────── */}
      <div style={{ background: "#4E4A46", color: "#F7F3EE", overflow: "hidden", padding: "14px 0" }}>
        <div className="marquee-track">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 32, paddingRight: 32 }}>
              {["Wellness Journals", "Flow With Your Cycle", "Corporate Wellness", "Mindful Living", "Kids Coloring Books", "Intentional Growth", "Nairobi, Kenya", "Bloom & Co"].map((item, j) => (
                <span key={j} style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 32, opacity: 0.75 }}>
                  {item}<span style={{ opacity: 0.35, color: "#B89B72" }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT / FOUNDER ───────────────────────────── */}
      <section id="about" className="sp" style={{ background: "#EFE7DD" }}>
        <div className="wrap">
          <div className="two-col">
            <div className="sq-img">
              <Image
                src="/about.png"
                alt="Fridah Nairuti — Founder of Bloom & Co, Nairobi Kenya"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div>
              <span className="label">Our Story</span>
              <h2 className="serif sh" style={{ marginBottom: 24 }}>
                Wellness Is The<br />Foundation of<br /><em>Sustainable Growth</em>
              </h2>
              <p style={{ color: "#7A756F", fontSize: 16, lineHeight: 1.9, marginBottom: 16 }}>
                Bloom & Co bridges wellness and workplace productivity through intentional tools and meaningful experiences. Founded in Nairobi, Kenya by Fridah Nairuti — an administration and operations professional with a deep passion for holistic living.
              </p>
              <p style={{ color: "#7A756F", fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>
                Our vision is to become a leading wellness and productivity brand in Africa — empowering individuals and organizations to thrive through reflection, clarity, and intentional living.
              </p>
              <div style={{ background: "#F7F3EE", borderRadius: 4, padding: "24px 28px", borderLeft: "2px solid #B89B72" }}>
                <p style={{ fontSize: 15, color: "#7A756F", lineHeight: 1.85, marginBottom: 14, fontStyle: "italic" }}>
                  "This journal was made for you. Not for your employer. Not for a performance review. For you — the person who shows up every day, carries more than most people see, and rarely gets a quiet moment to ask how you're actually doing."
                </p>
                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B89B72" }}>
                  Fridah Nairuti — Founder, Bloom & Co
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PEEK INSIDE ───────────────────────────────── */}
      <section className="sp" style={{ background: "#4E4A46" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "block", fontSize: 11, letterSpacing: "0.36em", textTransform: "uppercase", color: "#B89B72", marginBottom: 16, fontWeight: 400 }}>What's Inside</span>
            <h2 className="serif sh" style={{ color: "#F7F3EE" }}>
              A Look Inside the<br /><em style={{ color: "#B89B72" }}>Corporate Wellness Journal</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, maxWidth: 540, margin: "24px auto 0", lineHeight: 1.85 }}>
              Five minutes in the morning. A few at end of day. A weekly pause. Thirty days to reflect, realign, and thrive.
            </p>
          </div>
          <div className="peek-grid">
            {peekItems.map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: "32px 28px", transition: "all 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(184,155,114,0.08)"; e.currentTarget.style.borderColor = "rgba(184,155,114,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, color: "#F7F3EE", marginBottom: 12 }}>{item.label}</h3>
                <div style={{ width: 28, height: 1, background: "#B89B72", marginBottom: 14, borderRadius: 2 }} />
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.85 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-gold">Get Your Journal</a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────── */}
      <section id="products" className="sp" style={{ background: "#F7F3EE" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label">Our Collection</span>
            <h2 className="serif sh">
              Tools for Every<br /><em>Season of Your Life</em>
            </h2>
            <p style={{ color: "#7A756F", fontSize: 16, maxWidth: 520, margin: "20px auto 0", lineHeight: 1.85 }}>
              From corporate teams to curious kids — every Bloom & Co product is designed with intention and care.
            </p>
          </div>

          {/* tabs */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
            {[{ key: "wellness", label: "Wellness & Productivity", emoji: "🌿" }, { key: "kids", label: "Mindful Kids", emoji: "🧸" }].map(tab => (
              <button key={tab.key} onClick={() => setProductTab(tab.key)} style={{
                padding: "10px 26px", borderRadius: 100, border: "1px solid",
                borderColor: productTab === tab.key ? "#6F7865" : "#DDD5CA",
                background: productTab === tab.key ? "#6F7865" : "transparent",
                color: productTab === tab.key ? "#F7F3EE" : "#6F7865",
                fontSize: 12, letterSpacing: "0.1em", cursor: "pointer",
                fontFamily: "'Jost', sans-serif", transition: "all 0.25s ease",
                textTransform: "uppercase",
              }}>
                {tab.emoji} {tab.label}
              </button>
            ))}
          </div>

          <div className="prod-grid">
            {displayProducts.map((product, i) => (
              <div key={i} className="prod-card" style={{ background: "#fff", borderRadius: 4, overflow: "hidden", border: "1px solid #DDD5CA", boxShadow: "0 4px 24px rgba(78,74,70,0.05)", transition: "transform 0.35s ease, box-shadow 0.35s ease", display: "flex", flexDirection: "column", minWidth: 0 }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 56px rgba(78,74,70,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(78,74,70,0.05)"; }}
              >
                {/* cover image */}
                <div style={{ aspectRatio: "3/2", position: "relative", background: "#EFE7DD" }}>
                  {product.coverImg && (
                    <Image
                      src={product.coverImg}
                      alt={product.title}
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: "center top", transition: "transform 0.4s ease" }}
                    />
                  )}
                  {product.badge && (
                    <div style={{ position: "absolute", top: 14, left: 14, background: "#6F7865", color: "#F7F3EE", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 13px", borderRadius: 100 }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* card body */}
                <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B89A8C", marginBottom: 10 }}>
                    {product.subtitle}
                  </p>
                  <h3 className="serif" style={{ fontSize: 23, fontWeight: 400, marginBottom: 12, lineHeight: 1.2, color: "#4E4A46" }}>
                    {product.title}
                  </h3>
                  <div style={{ width: 32, height: 1, background: "#B89B72", marginBottom: 14, borderRadius: 2 }} />
                  <p style={{ color: "#7A756F", fontSize: 14, lineHeight: 1.85, marginBottom: 18, flexGrow: 1 }}>
                    {product.description}
                  </p>
                  <ul style={{ listStyle: "none", marginBottom: 24, display: "flex", flexDirection: "column", gap: 7 }}>
                    {product.features.map((f, fi) => (
                      <li key={fi} style={{ fontSize: 12, color: "#7A756F", display: "flex", alignItems: "center", gap: 10, letterSpacing: "0.02em" }}>
                        <span style={{ color: "#A8B29A", fontWeight: 600, fontSize: 14 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-olive" style={{ textAlign: "center", fontSize: 11, padding: "12px 20px" }}>
                    Get Your Copy
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline-olive">View All Products on Selar</a>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────── */}
      <section id="values" className="sp" style={{ background: "#3D3A36", color: "#F7F3EE" }}>
        <div className="wrap">
          <div style={{ marginBottom: 56 }}>
            <span style={{ display: "block", fontSize: 11, letterSpacing: "0.36em", textTransform: "uppercase", color: "#B89B72", marginBottom: 16, fontWeight: 400 }}>Core Values</span>
            <h2 className="serif sh">Built on Principles<br /><em>That Matter</em></h2>
          </div>
          <div ref={valuesRef}>
            {values.map((v, i) => (
              <div key={v.label}
                className={valuesInView ? "v-row v-row-visible" : "v-row v-row-hidden"}
                style={{
                  transitionDelay: `${i * 0.12}s`,
                  ...(i === values.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.08)" } : {}),
                }}>
                <span style={{ fontSize: 10, color: "#B89B72", letterSpacing: "0.1em", paddingTop: 4 }}>0{i + 1}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 400, color: "#F7F3EE" }}>{v.label}</h3>
                  <p className="v-desc-mobile">{v.desc}</p>
                </div>
                <p className="v-desc-desk">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOOM WELLNESS PERSONALITY QUIZ ────────────── */}
      <section id="quiz" className="sp" style={{ background: "#EFE7DD" }}>
        <div className="wrap">
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <p style={{ letterSpacing: "0.36em", textTransform: "uppercase", fontSize: 11, color: "#B89B72", marginBottom: 20, fontWeight: 400 }}>
              Wellness Experience
            </p>

            <h2 className="serif sh" style={{ color: "#4E4A46", marginBottom: 24 }}>
              What Kind of <em>Bloom Are You?</em>
            </h2>

            <p style={{ color: "#7A756F", fontSize: 16, lineHeight: 1.85, maxWidth: 600, margin: "0 auto 60px" }}>
              No pressure. No wrong answers. Just a quiet moment for yourself.
            </p>

            {!quizStarted && !quizResult && (
              <div style={{ background: "#F7F3EE", borderRadius: 4, padding: "56px 40px", boxShadow: "0 8px 40px rgba(78,74,70,0.07)", border: "1px solid #DDD5CA", animation: "fadeIn 0.4s ease" }}>
                <div style={{ fontSize: 48, marginBottom: 24 }}>🌿</div>
                <p className="serif" style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, color: "#4E4A46", marginBottom: 14 }}>No pressure. No wrong answers.</p>
                <p style={{ color: "#7A756F", fontSize: 15, lineHeight: 1.85, maxWidth: 480, margin: "0 auto 36px" }}>
                  Just a quiet moment of reflection — to remind you who you already are.
                </p>
                <button onClick={() => setQuizStarted(true)} className="pill-btn pill-olive" style={{ fontSize: 13, padding: "16px 44px" }}>
                  Begin the Quiz →
                </button>
              </div>
            )}

            {quizStarted && !quizResult && (
              <div style={{ background: "#F7F3EE", borderRadius: 4, padding: "40px 36px", boxShadow: "0 8px 40px rgba(78,74,70,0.07)", border: "1px solid #DDD5CA", textAlign: "left", animation: "fadeUp 0.4s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, marginBottom: 36 }}>
                  <span style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#B89A8C" }}>
                    0{quizIndex + 1} — 08
                  </span>
                  <div style={{ width: 160, height: 2, background: "#DDD5CA", borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${((quizIndex + 1) / bloomQuestions.length) * 100}%`, background: "#A8B29A", transition: "width 0.5s ease" }} />
                  </div>
                </div>

                <h3 className="serif" style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 400, color: "#4E4A46", lineHeight: 1.2, marginBottom: 36, textAlign: "center" }}>
                  {bloomQuestions[quizIndex].question}
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {bloomQuestions[quizIndex].options.map((option, index) => (
                    <button key={index} className="quiz-option" onClick={() => handleBloomAnswer(option.value)}>
                      <span style={{ color: "#A8B29A", marginRight: 12, fontWeight: 500, fontSize: 11, letterSpacing: "0.1em" }}>0{index + 1}</span>
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizResult && (
              <div style={{ background: "#F7F3EE", borderRadius: 4, padding: "56px 40px 48px", boxShadow: "0 16px 56px rgba(78,74,70,0.08)", border: "1px solid #DDD5CA", animation: "fadeUp 0.5s ease" }}>

                {/* 1. AFFIRMATION */}
                <div style={{ background: "#EFE7DD", borderRadius: 4, padding: "36px 32px", marginBottom: 40, position: "relative", overflow: "hidden" }}>
                  <div style={{ fontSize: 72, color: "#B89B72", lineHeight: 0.8, fontFamily: "Georgia, serif", marginBottom: 12, opacity: 0.25, position: "absolute", top: 16, left: 20 }}>"</div>
                  <p className="serif" style={{ fontSize: "clamp(20px, 3.5vw, 32px)", fontWeight: 300, fontStyle: "italic", color: "#4E4A46", lineHeight: 1.55, paddingTop: 20, position: "relative", zIndex: 1 }}>
                    {quizResult.affirmation}
                  </p>
                </div>

                {/* 2. RESULT TITLE */}
                <h3 className="serif" style={{ fontSize: "clamp(26px, 4.5vw, 44px)", fontWeight: 300, color: "#4E4A46", lineHeight: 1.1, marginBottom: 32, letterSpacing: "-0.01em" }}>
                  You're {quizResult.title} <span style={{ fontStyle: "normal" }}>{quizResult.emoji}</span>
                </h3>

                {/* 3. YOUR ENERGY LATELY */}
                <div style={{ marginBottom: 32 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#B89B72", marginBottom: 14, fontWeight: 400 }}>Your energy lately</p>
                  <p style={{ color: "#7A756F", fontSize: 16, lineHeight: 1.9, maxWidth: 560, margin: "0 auto" }}>
                    {quizResult.energy}
                  </p>
                </div>

                <div style={{ width: 40, height: 1, background: "#B89B72", margin: "0 auto 32px", borderRadius: 2 }} />

                {/* 4. TINY RITUAL */}
                <div style={{ background: "#EFE7DD", borderRadius: 4, padding: "24px 28px", marginBottom: 24, textAlign: "left" }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#A8B29A", marginBottom: 12, fontWeight: 400 }}>A Small Ritual</p>
                  <p style={{ color: "#4E4A46", fontSize: 15, lineHeight: 1.8 }}>{quizResult.ritual}</p>
                </div>

                {/* 5. JOURNAL PROMPT */}
                <div style={{ borderLeft: "2px solid #B89B72", paddingLeft: 24, marginBottom: 44, textAlign: "left" }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "#B89B72", marginBottom: 10, fontWeight: 400 }}>A Quiet Question</p>
                  <p className="serif" style={{ color: "#7A756F", fontSize: 18, fontStyle: "italic", lineHeight: 1.7, fontWeight: 300 }}>"{quizResult.prompt}"</p>
                </div>

                <p style={{ fontSize: 11, color: "#B89A8C", opacity: 0.8, marginBottom: 20, letterSpacing: "0.04em" }}>
                  felt accurate? share it ✦
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    onClick={() => {
                      const text = quizResult.title + " " + quizResult.emoji + "\n\n\"" + quizResult.affirmation + "\"\n\nDiscover yours at bloomandco.co.ke";
                      if (navigator.share) { navigator.share({ text }); }
                      else { navigator.clipboard.writeText(text).then(() => alert("Copied! Share it with someone who needs it.")); }
                    }}
                    className="pill-btn pill-olive">
                    Share My Result
                  </button>
                  <button onClick={resetQuiz} className="pill-btn pill-outline-olive">
                    Take It Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CORPORATE WELLNESS ────────────────────────── */}
      <section id="corporate" className="sp" style={{ background: "#F7F3EE" }}>
        <div className="wrap">
          <div className="two-col two-col-top">
            <div>
              <span className="label">Corporate Wellness</span>
              <h2 className="serif sh" style={{ marginBottom: 24 }}>
                Partnering With<br />Organizations to<br /><em>Cultivate Thriving Teams</em>
              </h2>
              <p style={{ color: "#7A756F", fontSize: 16, lineHeight: 1.9, marginBottom: 36 }}>
                Bloom & Co partners with organizations to support employee wellness and workplace engagement through practical and intentional wellness solutions. We serve corporates, NGOs, educational institutions, insurance companies, hospitality brands, and HR departments.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#contact" className="pill-btn pill-olive">Get In Touch</a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20, color: "#4E4A46" }}>
                Our offerings include:
              </p>
              <div className="offerings-grid">
                {corporateOfferings.map((offer, i) => (
                  <div key={i} style={{ background: "#EFE7DD", borderRadius: 4, padding: "16px 18px", fontSize: 13, color: "#7A756F", lineHeight: 1.6, border: "1px solid #DDD5CA" }}>
                    <span style={{ color: "#A8B29A", marginRight: 10, fontWeight: 600 }}>✓</span>{offer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BLOOM ─────────────────────────────────── */}
      <section className="sp" style={{ background: "#EFE7DD" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label">Why Choose Us</span>
            <h2 className="serif sh">Five Reasons to<br /><em>Choose Bloom & Co</em></h2>
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="w-card">
                <span className="serif" style={{ fontSize: 40, color: "#DDD5CA", fontWeight: 300, lineHeight: 1, display: "block", marginBottom: 16 }}>0{i + 1}</span>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 12, lineHeight: 1.2 }}>{item.title}</h3>
                <div style={{ width: 28, height: 1, background: "#B89B72", marginBottom: 14, borderRadius: 2 }} />
                <p style={{ color: "#7A756F", fontSize: 14, lineHeight: 1.85 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ background: "#6F7865", color: "#F7F3EE", borderRadius: 4, padding: "32px", display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="serif" style={{ fontSize: 40, color: "rgba(255,255,255,0.18)", fontWeight: 300, lineHeight: 1, display: "block" }}>05</span>
              <div>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 12, color: "#F7F3EE" }}>Authentic Brand Story</h3>
                <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.3)", marginBottom: 14, borderRadius: 2 }} />
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.85, marginBottom: 24 }}>
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

      {/* ── FOUNDER MOMENT ────────────────────────────── */}
      <section style={{ background: "#3D3A36", padding: "96px 0" }}>
        <div className="wrap">
          <div className="founder-grid">
            {/* photo */}
            <div style={{ borderRadius: 4, overflow: "hidden", aspectRatio: "4/5", position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,0.3)" }}>
              <Image
                src="/founder.png"
                alt="Fridah Nairuti — Founder of Bloom & Co"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            {/* quote */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ display: "block", fontSize: 11, letterSpacing: "0.36em", textTransform: "uppercase", color: "#B89B72", marginBottom: 28, fontWeight: 400 }}>A Word From Our Founder</span>
              <div style={{ fontSize: 80, color: "#B89B72", lineHeight: 0.8, fontFamily: "Georgia, serif", marginBottom: 20, opacity: 0.3 }}>"</div>
              <blockquote className="serif" style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 300, lineHeight: 1.6, color: "#F7F3EE", fontStyle: "italic", marginBottom: 36 }}>
                At Bloom & Co, we believe people thrive when wellness and productivity exist in balance. Through intentional products and meaningful partnerships, we are committed to helping individuals and organizations cultivate healthier, more fulfilling lives.
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#6F7865", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#F7F3EE", letterSpacing: "0.05em", fontFamily: "'Jost', sans-serif" }}>FN</div>
                <div>
                  <p style={{ color: "#F7F3EE", fontSize: 15, fontWeight: 400, letterSpacing: "0.02em" }}>Fridah Nairuti</p>
                  <p style={{ color: "#B89B72", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 3 }}>Founder, Bloom & Co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FOLLOW ──────────────────────────── */}
      <section className="sp" style={{ background: "#F7F3EE" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="label">Follow Along</span>
          <h2 className="serif sh" style={{ marginBottom: 18 }}>Join Us on<br /><em>Instagram</em></h2>
          <p style={{ color: "#7A756F", fontSize: 16, lineHeight: 1.85, maxWidth: 460, margin: "0 auto 40px" }}>
            Daily wellness tips, product launches, and behind-the-scenes moments from Bloom & Co. Follow us at @bloomco.ke.
          </p>
          {/* instagram preview grid placeholder */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, maxWidth: 480, margin: "0 auto 44px" }}>
            {["Wellness tips post", "Flow With Your Cycle cover", "Floral Coloring Book", "Corporate Journal cover", "Mother's Day Workbook", "Kids Coloring E-Book"].map((desc, i) => (
              <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                style={{ aspectRatio: "1/1", background: "linear-gradient(135deg, #EFE7DD, #DDD5CA)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6, textDecoration: "none", overflow: "hidden", transition: "transform 0.3s ease, opacity 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = "1"; }}
              >
                <span style={{ fontSize: 22 }}>📸</span>
                <span style={{ fontSize: 9, color: "#A8B29A", textAlign: "center", padding: "0 8px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{desc}</span>
              </a>
            ))}
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline-olive">
            Follow @bloomco.ke
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section id="contact" className="sp" style={{ background: "#EFE7DD" }}>
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <span className="label">Get In Touch</span>
              <h2 className="serif sh" style={{ marginBottom: 24, lineHeight: 1.05 }}>
                Let's Build<br /><em>Something Together</em>
              </h2>
              <p style={{ color: "#7A756F", fontSize: 16, lineHeight: 1.9, maxWidth: 480 }}>
                Whether you're an individual seeking intentional wellness tools, or an organization looking to cultivate a thriving team — we'd love to connect.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {contactItems.map((item) => (
                <div key={item.label} style={{ background: "#F7F3EE", borderRadius: 4, padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, border: "1px solid #DDD5CA", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(78,74,70,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#EFE7DD", display: "flex", alignItems: "center", justifyContent: "center", color: "#6F7865", flexShrink: 0, fontSize: 18 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#B89B72", marginBottom: 5 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: 15, color: "#4E4A46", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 15, color: "#4E4A46" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-olive" style={{ textAlign: "center", marginTop: 10, padding: "18px 30px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: 12, letterSpacing: "0.18em" }}>
                <ShoppingBag size={16} /> Shop On Selar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "40px 20px 88px", background: "#3D3A36" }}>
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <Image src="/logo.png" alt="Bloom & Co Nairobi Kenya" width={110} height={44} style={{ height: 34, width: "auto" }} />
              <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 11, marginTop: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>Wellness · Productivity · Intentional Living</p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, letterSpacing: "0.04em" }}>© 2026 Bloom & Co · Nairobi, Kenya</p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { label: "Instagram", href: INSTAGRAM_URL },
                { label: "WhatsApp", href: WHATSAPP_URL },
                { label: "Shop", href: SHOP_URL },
                { label: "Email", href: "mailto:bloomandco@gmail.com" },
              ].map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#B89B72"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
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
