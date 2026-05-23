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
    subtitle: "A Woman's Guide to Aligning Energy and Work",
    description: "It's not laziness. It's your cycle. Understand your 4 monthly phases, align your energy with your work, and stop forcing — start flowing.",
    features: ["4 cycle phases explained", "Energy-work alignment", "Productivity by phase", "Self-compassion tools"],
    badge: "New",
    icon: "🌸",
    coverDesc: "Deep red rose cover with script title — Flow With Your Cycle by Fridah Makena",
  },
  {
    category: "wellness",
    title: "Well-being & Productivity Guide",
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
    subtitle: "Mother's Day Edition — Nourishes Her Soul",
    description: "A beautiful space for prayer, reflection, scripture study, gratitude, and intentional quiet time with God. A perfect gift for the woman who deserves more than a gift.",
    features: ["Daily devotional pages", "Prayer & reflection space", "Gratitude journaling", "Scripture study prompts"],
    badge: "Gift Idea",
    icon: "🙏",
    coverDesc: "Soft pink floral cover — Daily Devotional Workbook, Mother's Day Edition",
  },
  {
    category: "wellness",
    title: "Floral Coloring Book for Adults",
    subtitle: "Quiet Creative Moments for You",
    description: "Sometimes the most productive thing you can do is slow down. Relax your mind, reduce stress, and reconnect with yourself. No pressure. No perfection.",
    features: ["Intricate floral designs", "Stress relief focused", "Perfect for self-care", "Weekend reset tool"],
    badge: null,
    icon: "🎨",
    coverDesc: "Rainbow gradient cover with line-art woman face and flowers — Floral Coloring for Adults",
  },
  {
    category: "kids",
    title: "Kids Affirmation Coloring E-Book",
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
    subtitle: "Playtime Learning for Little Ones",
    description: "Colorful alphabet adventures that make learning fun. Perfect for ages 3–6 who are just beginning to explore letters, words, and the world around them.",
    features: ["A–Z letter pages", "Simple illustrations", "Learning through play", "Great for ages 3–6"],
    badge: null,
    icon: "🔤",
    coverDesc: "Bright pink ABC Fun Alphabet Coloring Book cover with playful typography",
  },
  {
    category: "kids",
    title: '"Quiet Time" Coloring for Kids',
    subtitle: "Simple, Fun Pages for Calm & Creative Play",
    description: "Keep your little ones happily engaged while you enjoy a well-deserved moment to reset. Fun land animal illustrations that spark creativity and encourage quiet time.",
    features: ["Land animal illustrations", "Ages 3–8", "Instant PDF download", "Calm, creative focus"],
    badge: null,
    icon: "🦒",
    coverDesc: "Green jungle scene with giraffe, elephant, lion — Quiet Time Coloring for Kids",
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
    question: "It's 7am on a weekday. What does your body want first?",
    emoji: "🌅",
    options: [
      { text: "Ten more minutes of quiet before the world starts 🌙", value: "cultivator" },
      { text: "To move — a stretch, a walk, something physical 🌿", value: "grounded" },
      { text: "To make something — coffee, breakfast, a playlist 🎵", value: "creator" },
      { text: "Connection — a good morning text, a warm voice 🤍", value: "connector" },
      { text: "A plan — I need to know what today holds 📋", value: "architect" },
    ],
  },
  {
    question: "When life gets overwhelming, you tend to…",
    emoji: "🌊",
    options: [
      { text: "Withdraw and go quiet — you need space to process 🌑", value: "cultivator" },
      { text: "Get outside — movement clears your head like nothing else 🌳", value: "grounded" },
      { text: "Create something — cook, write, draw, rearrange 🎨", value: "creator" },
      { text: "Call someone you trust — talking it out is healing 📞", value: "connector" },
      { text: "Make a list and break it down — structure calms the storm 📝", value: "architect" },
    ],
  },
  {
    question: "Which of these feels most like a full breath?",
    emoji: "✨",
    options: [
      { text: "An afternoon with no plans and nowhere to be 🛋️", value: "cultivator" },
      { text: "Bare feet on grass, sun on your face 🌻", value: "grounded" },
      { text: "Finishing something you made with your own hands 🪴", value: "creator" },
      { text: "Laughing until your stomach hurts with someone you love 😂", value: "connector" },
      { text: "Crossing everything off your list and closing your laptop 🖥️", value: "architect" },
    ],
  },
  {
    question: "How do you most naturally care for others?",
    emoji: "🌸",
    options: [
      { text: "By being a calm, non-judgemental presence 🕊️", value: "cultivator" },
      { text: "By showing up physically — helping hands, being there 🤝", value: "grounded" },
      { text: "By making something for them — a meal, a card, a playlist 🎁", value: "creator" },
      { text: "By listening, remembering, and checking in 🫶", value: "connector" },
      { text: "By solving their problem — advice, research, a plan 💡", value: "architect" },
    ],
  },
  {
    question: "Pick the phrase that lands deepest right now.",
    emoji: "🌿",
    options: [
      { text: "\"I give myself permission to slow down.\" 🌙", value: "cultivator" },
      { text: "\"My body knows what it needs.\" 🌿", value: "grounded" },
      { text: "\"I am most alive when I'm making something.\" 🎨", value: "creator" },
      { text: "\"My relationships are my greatest wealth.\" 🌺", value: "connector" },
      { text: "\"Clarity and intention are my superpowers.\" ⭐", value: "architect" },
    ],
  },
];

const bloomResults = {
  cultivator: {
    title: "The Quiet Cultivator 🌿",
    archetype: "The Introspective Nurturer",
    desc: "You are someone who grows in stillness. You don't need noise to feel alive — you need depth. Your wellness lives in the margins of the day: the quiet coffee before anyone wakes up, the evening walk, the journal page no one else reads. You recharge through solitude, and you give your best to the world when you've first given it to yourself.",
    strengths: ["Deep self-awareness", "Emotional intelligence", "Meaningful presence"],
    affirmation: "Your softness is not weakness — it is the soil everything good grows in.",
    colour: "#6b8c72",
  },
  grounded: {
    title: "The Grounded Bloom ☀️",
    archetype: "The Embodied Thriver",
    desc: "You are deeply connected to your body and your environment. You don't just think your way through life — you feel it, move through it, and show up with your whole self. Walking barefoot, breathing fresh air, using your hands — these aren't luxuries for you, they're medicine. When you're grounded, you radiate a quiet steadiness that steadies everyone around you.",
    strengths: ["Physical awareness", "Presence", "Natural resilience"],
    affirmation: "You don't have to earn your peace — you were made for it.",
    colour: "#6b8c72",
  },
  creator: {
    title: "The Gentle Creator 🎨",
    archetype: "The Expressive Healer",
    desc: "You experience the world through beauty, texture, and expression. Making things is how you make sense of life — cooking a meal is self-care, rearranging a room is therapy, writing a message is love made visible. You don't need big productions; you need permission to tinker, to play, to craft without apology. Your creativity isn't a hobby — it's how you breathe.",
    strengths: ["Creative expression", "Emotional depth", "Aesthetic sensitivity"],
    affirmation: "You don't need to justify the time you spend making beautiful things.",
    colour: "#b5606a",
  },
  connector: {
    title: "The Warm Connector 🌺",
    archetype: "The Relational Bloomer",
    desc: "You are most yourself in relationship. Not the surface kind — the kind where someone really sees you, and you really see them. Your energy rises with genuine conversation, shared laughter, and the intimacy of being truly known. You are the friend who remembers, the colleague who checks in, the person who makes others feel less alone. That is a rare and beautiful gift.",
    strengths: ["Empathy and warmth", "Deep listening", "Community building"],
    affirmation: "The love you pour into others is also nourishing you — keep going.",
    colour: "#b5606a",
  },
  architect: {
    title: "The Intentional Architect ⭐",
    archetype: "The Purposeful Planner",
    desc: "You find peace in clarity. While others feel overwhelmed by complexity, you feel called by it — to organise, to simplify, to build. A good plan isn't just practical for you, it's calming. You bloom when you can see where you're going and why. You have a gift for helping others find their footing too, because you've done the work of finding yours.",
    strengths: ["Strategic thinking", "Purposeful living", "Calm under complexity"],
    affirmation: "Your vision for your life is a form of self-love — keep building it.",
    colour: "#6b8c72",
  },
};

// ── PEEK INSIDE DATA ────────────────────────────────────────
const peekItems = [
  { label: "Morning Check-in", desc: "Rate your energy, stress & focus. Choose how you feel: Energized, Grounded, Stretched, or Depleted.", icon: "☀️" },
  { label: "Daily Themes", desc: "Each weekday carries a theme — productivity, emotional awareness, leadership, energy, and celebration.", icon: "📅" },
  { label: "Weekly Review", desc: "Rate your week across energy, focus, stress management, work-life balance, team connections, and personal growth.", icon: "📊" },
  { label: "Wellness Insights", desc: "Weekly articles like 'Recognizing Burnout Before It Catches You' — practical wisdom, not generic advice.", icon: "💡" },
  { label: "Weekend Reflection", desc: "How did I restore my energy? What am I carrying into next week? What intention do I set ahead?", icon: "🌿" },
  { label: "Month-End Pulse", desc: "'You made it.' A closing reflection on your greatest achievement, what you learned, and what to leave behind.", icon: "✨" },
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
    <div style={{ minHeight: "100vh", background: "#f7f3ef", color: "#2a1f1f", overflowX: "hidden" }}>

      {/* ── GLOBAL STYLES ─────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; font-weight: 300; -webkit-font-smoothing: antialiased; }
        img { display: block; max-width: 100%; }
        .serif { font-family: 'Cormorant Garamond', serif; }

        .pill-btn {
          display: inline-block; padding: 13px 28px; border-radius: 100px;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s ease; cursor: pointer;
          border: 1px solid transparent; font-family: 'DM Sans', sans-serif;
          font-weight: 400; white-space: nowrap;
        }
        .pill-rose         { background: #b5606a; color: #fff; border-color: #b5606a; }
        .pill-rose:hover   { background: #9e4f58; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(181,96,106,0.3); }
        .pill-outline-rose { background: transparent; color: #b5606a; border-color: #b5606a; }
        .pill-outline-rose:hover { background: #b5606a; color: #fff; transform: translateY(-2px); }
        .pill-sage         { background: #6b8c72; color: #fff; border-color: #6b8c72; }
        .pill-sage:hover   { background: #5a7860; transform: translateY(-2px); }
        .pill-light        { background: #f7f3ef; color: #2a1f1f; border-color: #f7f3ef; }
        .pill-light:hover  { background: #ede8e0; transform: translateY(-2px); }
        .pill-dark         { background: #b5606a; color: #fff; border-color: #b5606a; }
        .pill-dark:hover   { background: #9e4f58; transform: translateY(-2px); }

        .nav-link {
          position: relative; font-size: 13px; letter-spacing: 0.12em;
          text-transform: uppercase; color: #2a1f1f; text-decoration: none;
          padding-bottom: 2px; font-family: 'DM Sans', sans-serif;
        }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #b5606a; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #b5606a; }

        .label { display: block; font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; color: #b5606a; margin-bottom: 16px; font-weight: 400; }

        .wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 600px)  { .wrap { padding: 0 32px; } }
        @media (min-width: 1100px) { .wrap { padding: 0 48px; } }

        .sp { padding: 64px 0; }
        @media (min-width: 768px)  { .sp { padding: 96px 0; } }
        @media (min-width: 1100px) { .sp { padding: 120px 0; } }

        .sh { font-size: clamp(32px, 6vw, 60px); font-weight: 300; line-height: 1.05; }

        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { display: flex; width: max-content; animation: marquee 24s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }

        .hero-word { display: inline-block; opacity: 0; animation: fadeUp 0.6s ease forwards; }
        .hero-visible .hero-word { }

        .burger { display: flex; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; z-index: 200; position: relative; }
        .burger span { display: block; height: 2px; background: #2a1f1f; transition: all 0.3s ease; transform-origin: center; }
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

        .drawer { position: fixed; inset: 0; background: #f7f3ef; z-index: 150; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 32px; transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.77,0,0.175,1); }
        .drawer.open { transform: translateX(0); }
        @media (min-width: 768px) { .drawer { display: none !important; } }
        .drawer-link { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px,8vw,48px); font-weight: 300; color: #2a1f1f; text-decoration: none; letter-spacing: 0.02em; transition: color 0.2s; }
        .drawer-link:hover { color: #b5606a; }

        .hero-grid { display: flex; flex-direction: column; gap: 40px; padding: 52px 0 64px; }
        @media (min-width: 860px) { .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; padding: 80px 0 100px; } }
        .hero-img { order: -1; border-radius: 28px; overflow: hidden; box-shadow: 0 32px 80px rgba(181,96,106,0.15); aspect-ratio: 4/5; position: relative; width: 100%; }
        @media (min-width: 860px) { .hero-img { order: 0; border-radius: 40px; } }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }

        .two-col { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) { .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; } }
        .two-col-top { align-items: start; }
        .sq-img { border-radius: 28px; overflow: hidden; box-shadow: 0 24px 64px rgba(181,96,106,0.12); aspect-ratio: 1/1; position: relative; width: 100%; }
        @media (min-width: 860px) { .sq-img { border-radius: 40px; } }

        .v-row { display: grid; grid-template-columns: 36px 1fr; gap: 16px; padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.1); align-items: start; transition: all 0.5s ease; }
        @media (min-width: 768px) { .v-row { grid-template-columns: 56px 1fr 2fr; gap: 32px; align-items: center; padding: 28px 0; } }
        .v-desc-mobile { display: block; color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.65; margin-top: 6px; }
        @media (min-width: 768px) { .v-desc-mobile { display: none; } }
        .v-desc-desk { display: none; }
        @media (min-width: 768px) { .v-desc-desk { display: block; color: rgba(255,255,255,0.5); font-size: 15px; line-height: 1.7; } }

        .offerings-grid { display: grid; gap: 10px; grid-template-columns: 1fr; }
        @media (min-width: 460px) { .offerings-grid { grid-template-columns: repeat(2,1fr); } }

        .why-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .why-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 960px) { .why-grid { grid-template-columns: repeat(3,1fr); } }
        .w-card { background: #fff; border-radius: 22px; padding: 28px; box-shadow: 0 6px 28px rgba(0,0,0,0.05); transition: transform 0.3s ease; }
        @media (min-width: 768px) { .w-card { padding: 36px; } }
        .w-card:hover { transform: translateY(-5px); }

        .contact-grid { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) { .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; } }

        .footer-inner { display: flex; flex-direction: column; align-items: center; gap: 18px; text-align: center; }
        @media (min-width: 768px) { .footer-inner { flex-direction: row; justify-content: space-between; text-align: left; } }

        /* product cards */
        .prod-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 560px) { .prod-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 960px) { .prod-grid { grid-template-columns: repeat(3,1fr); } }

        /* peek inside grid */
        .peek-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 560px) { .peek-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 900px) { .peek-grid { grid-template-columns: repeat(3,1fr); } }

        /* quiz */
        .quiz-option { background: #fff; border: 1.5px solid rgba(181,96,106,0.15); border-radius: 16px; padding: 16px 20px; cursor: pointer; transition: all 0.25s ease; text-align: left; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a1f1f; width: 100%; }
        .quiz-option:hover { border-color: #b5606a; background: #f5e6e8; transform: translateX(4px); }

        /* mobile sticky bar */
        .sticky-bar { display: none; }
        @media (max-width: 767px) { .sticky-bar { display: flex; } }

        /* whatsapp */
        .wa-btn { position: fixed; bottom: 80px; right: 20px; z-index: 300; width: 56px; height: 56px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(37,211,102,0.4); transition: transform 0.3s ease, box-shadow 0.3s ease; text-decoration: none; }
        .wa-btn:hover { transform: scale(1.1); box-shadow: 0 12px 32px rgba(37,211,102,0.5); }
        @media (min-width: 768px) { .wa-btn { bottom: 32px; right: 32px; } }

        /* value animation */
        .v-row-hidden { opacity: 0; transform: translateX(-30px); }
        .v-row-visible { opacity: 1; transform: translateX(0); transition: opacity 0.6s ease, transform 0.6s ease; }

        /* img placeholder */
        .img-placeholder { background: linear-gradient(135deg, #f5e6e8 0%, #e8ede5 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; color: #b5606a; font-size: 12px; letter-spacing: 0.08em; text-align: center; padding: 20px; }

        /* founder section */
        .founder-grid { display: flex; flex-direction: column; gap: 48px; }
        @media (min-width: 860px) { .founder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; } }
      `}</style>

      {/* ── WHATSAPP FLOATING BUTTON ───────────────────── */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── MOBILE STICKY BAR ─────────────────────────── */}
      <div className="sticky-bar" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 290, background: "#b5606a", padding: "14px 20px", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ color: "#fff", fontSize: 13, fontWeight: 400 }}>Ready to bloom? 🌸</p>
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#b5606a", padding: "8px 20px", borderRadius: 100, fontSize: 12, fontWeight: 500, textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>
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
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
          Shop Now
        </a>
      </div>

      {/* ── NAVBAR ────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 160, background: "rgba(247,243,239,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(181,96,106,0.1)" }}>
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
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose desk-shop">Shop Now</a>
            <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ background: "#f7f3ef" }} aria-label="Bloom and Co — Where Wellness Meets Purpose">
        <div className="wrap">
          <div className="hero-grid">
            <div className={heroVisible ? "hero-visible" : ""}>
              <span className="label">Wellness · Productivity · Intentional Living</span>
              <h1 className="serif" style={{ fontSize: "clamp(42px, 8vw, 88px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#2a1f1f" }}>
                {["Where", "Wellness"].map((w, i) => (
                  <span key={w} className="hero-word" style={{ animationDelay: `${i * 0.15}s`, marginRight: "0.25em" }}>{w}</span>
                ))}
                <br />
                {["Meets", "Purpose"].map((w, i) => (
                  <em key={w} className="hero-word" style={{ color: "#b5606a", animationDelay: `${(i + 2) * 0.15}s`, marginRight: i === 0 ? "0.25em" : 0 }}>{w}</em>
                ))}
              </h1>
              <p className="hero-word" style={{ fontSize: "clamp(15px, 2.5vw, 17px)", color: "#6b5555", lineHeight: 1.8, maxWidth: 480, marginTop: 20, animationDelay: "0.7s" }}>
                Bloom & Co creates intentional wellness and productivity tools that help individuals and organizations cultivate healthier, more balanced, and more meaningful lives — across Africa and beyond.
              </p>
              <div className="hero-btns">
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ animationDelay: "0.9s" }}>Explore Products</a>
                <a href="#quiz" className="pill-btn pill-outline-rose" style={{ animationDelay: "1.0s" }}>Discover Your Bloom Energy</a>
                <a href="#corporate" className="pill-btn pill-outline-rose" style={{ animationDelay: "1.1s" }}>Partner With Us</a>
              </div>
            </div>
            <div className="hero-img" style={{ transform: "translateZ(0)" }}>
              {/* Hero image placeholder — replace with your best flat-lay journal lifestyle photo */}
              <div className="img-placeholder" style={{ width: "100%", height: "100%", minHeight: 400, position: "absolute", inset: 0 }}>
                <span style={{ fontSize: 48 }}>🌸</span>
                <span style={{ color: "#b5606a", fontWeight: 500 }}>HERO IMAGE</span>
                <span style={{ color: "#6b5555", maxWidth: 200 }}>Lifestyle flat-lay: journal, rose, pen on cream surface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────── */}
      <div style={{ background: "#b5606a", color: "#fff", overflow: "hidden", padding: "15px 0" }}>
        <div className="marquee-track">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 24, paddingRight: 24 }}>
              {["Wellness Journals", "Flow With Your Cycle", "Corporate Wellness", "Mindful Living", "Kids Coloring Books", "Intentional Growth", "Nairobi, Kenya", "Bloom & Co"].map((item, j) => (
                <span key={j} style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 24 }}>
                  {item}<span style={{ opacity: 0.4 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT / FOUNDER ───────────────────────────── */}
      <section id="about" className="sp" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="two-col">
            <div className="sq-img">
              {/* Founder photo placeholder — use the Selar profile photo of Fridah holding the Devotion Workbook */}
              <div className="img-placeholder" style={{ width: "100%", height: "100%", minHeight: 400, position: "absolute", inset: 0 }}>
                <span style={{ fontSize: 48 }}>👩🏾</span>
                <span style={{ color: "#b5606a", fontWeight: 500 }}>FOUNDER PHOTO</span>
                <span style={{ color: "#6b5555", maxWidth: 200 }}>Fridah holding the Devotion Workbook — warm, natural smile</span>
              </div>
            </div>
            <div>
              <span className="label">Our Story</span>
              <h2 className="serif sh" style={{ marginBottom: 20 }}>
                Wellness Is The<br />Foundation of<br /><em>Sustainable Growth</em>
              </h2>
              <p style={{ color: "#6b5555", fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                Bloom & Co bridges wellness and workplace productivity through intentional tools and meaningful experiences. Founded in Nairobi, Kenya by Fridah Nairuti — an administration and operations professional with a deep passion for holistic living.
              </p>
              <p style={{ color: "#6b5555", fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
                Our vision is to become a leading wellness and productivity brand in Africa — empowering individuals and organizations to thrive through reflection, clarity, and intentional living.
              </p>
              <div style={{ background: "#f5e6e8", borderRadius: 16, padding: "20px 22px", borderLeft: "3px solid #b5606a" }}>
                <p style={{ fontSize: 15, color: "#6b5555", lineHeight: 1.8, marginBottom: 10, fontStyle: "italic" }}>
                  "This journal was made for you. Not for your employer. Not for a performance review. For you — the person who shows up every day, carries more than most people see, and rarely gets a quiet moment to ask how you're actually doing."
                </p>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b5606a" }}>
                  Fridah Nairuti — Founder, Bloom & Co
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PEEK INSIDE ───────────────────────────────── */}
      <section className="sp" style={{ background: "#2a1f1f" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "block", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "#e8b4b8", marginBottom: 16 }}>What's Inside</span>
            <h2 className="serif sh" style={{ color: "#f7f3ef" }}>
              A Look Inside the<br /><em style={{ color: "#e8b4b8" }}>Corporate Wellness Journal</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, maxWidth: 560, margin: "20px auto 0", lineHeight: 1.8 }}>
              Five minutes in the morning. A few at end of day. A weekly pause. Thirty days to reflect, realign, and thrive.
            </p>
          </div>
          <div className="peek-grid">
            {peekItems.map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 24px", transition: "all 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(181,96,106,0.12)"; e.currentTarget.style.borderColor = "rgba(181,96,106,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <h3 className="serif" style={{ fontSize: 20, fontWeight: 400, color: "#f7f3ef", marginBottom: 10 }}>{item.label}</h3>
                <div style={{ width: 32, height: 2, background: "#b5606a", marginBottom: 12, borderRadius: 2 }} />
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose">Get Your Journal</a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────── */}
      <section id="products" className="sp" style={{ background: "#f7f3ef" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="label">Our Collection</span>
            <h2 className="serif sh">
              Tools for Every<br /><em>Season of Your Life</em>
            </h2>
            <p style={{ color: "#6b5555", fontSize: 15, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.8 }}>
              From corporate teams to curious kids — every Bloom & Co product is designed with intention and care.
            </p>
          </div>

          {/* tabs */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
            {[{ key: "wellness", label: "Wellness & Productivity", emoji: "🌸" }, { key: "kids", label: "Mindful Kids", emoji: "🧸" }].map(tab => (
              <button key={tab.key} onClick={() => setProductTab(tab.key)} style={{
                padding: "10px 24px", borderRadius: 100, border: "1.5px solid",
                borderColor: productTab === tab.key ? "#b5606a" : "rgba(181,96,106,0.2)",
                background: productTab === tab.key ? "#b5606a" : "transparent",
                color: productTab === tab.key ? "#fff" : "#b5606a",
                fontSize: 13, letterSpacing: "0.08em", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", transition: "all 0.25s ease",
              }}>
                {tab.emoji} {tab.label}
              </button>
            ))}
          </div>

          <div className="prod-grid">
            {displayProducts.map((product, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 28, overflow: "hidden", boxShadow: "0 8px 32px rgba(181,96,106,0.07)", transition: "transform 0.35s ease, box-shadow 0.35s ease", display: "flex", flexDirection: "column", minWidth: 0 }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 56px rgba(181,96,106,0.13)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(181,96,106,0.07)"; }}
              >
                {/* cover image area */}
                <div style={{ aspectRatio: "3/2", position: "relative", background: "linear-gradient(135deg, #f5e6e8, #e8ede5)" }}>
                  <div className="img-placeholder" style={{ position: "absolute", inset: 0 }}>
                    <span style={{ fontSize: 40 }}>{product.icon}</span>
                    <span style={{ color: "#b5606a", fontWeight: 500, fontSize: 10, letterSpacing: "0.15em" }}>COVER IMAGE</span>
                    <span style={{ color: "#6b5555", fontSize: 10, maxWidth: 160, lineHeight: 1.5 }}>{product.coverDesc}</span>
                  </div>
                  {product.badge && (
                    <div style={{ position: "absolute", top: 14, left: 14, background: "#b5606a", color: "#fff", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 100 }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* card body */}
                <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b5606a", marginBottom: 8 }}>
                    {product.subtitle}
                  </p>
                  <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 10, lineHeight: 1.2, color: "#2a1f1f" }}>
                    {product.title}
                  </h3>
                  <div style={{ width: 36, height: 2, background: "#b5606a", marginBottom: 12, borderRadius: 2 }} />
                  <p style={{ color: "#6b5555", fontSize: 13, lineHeight: 1.8, marginBottom: 16, flexGrow: 1 }}>
                    {product.description}
                  </p>
                  <ul style={{ listStyle: "none", marginBottom: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                    {product.features.map((f, fi) => (
                      <li key={fi} style={{ fontSize: 12, color: "#6b5555", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: "#b5606a", fontWeight: 600 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ textAlign: "center", fontSize: 12, padding: "11px 20px" }}>
                    Get Your Copy
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline-rose">View All Products on Selar</a>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────── */}
      <section id="values" className="sp" style={{ background: "#2a1f1f", color: "#f7f3ef" }}>
        <div className="wrap">
          <div style={{ marginBottom: 48 }}>
            <span style={{ display: "block", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "#e8b4b8", marginBottom: 16, fontWeight: 400 }}>Core Values</span>
            <h2 className="serif sh">Built on Principles<br /><em>That Matter</em></h2>
          </div>
          <div ref={valuesRef}>
            {values.map((v, i) => (
              <div key={v.label}
                className={valuesInView ? "v-row v-row-visible" : "v-row v-row-hidden"}
                style={{
                  transitionDelay: `${i * 0.12}s`,
                  ...(i === values.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.1)" } : {}),
                }}>
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

      {/* ── BLOOM WELLNESS PERSONALITY QUIZ ────────────── */}
      <section id="quiz" className="sp" style={{ background: "#f7f3ef" }}>
        <div className="wrap">
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <p style={{ letterSpacing: "0.35em", textTransform: "uppercase", fontSize: 12, color: "#6b8c72", marginBottom: 20 }}>
              Wellness Experience
            </p>

            <h2 className="serif sh" style={{ color: "#2a1f1f", marginBottom: 24 }}>
              What Kind of <em>Bloomer Are You?</em>
            </h2>

            <p style={{ color: "#6b5555", fontSize: 17, lineHeight: 1.8, maxWidth: 640, margin: "0 auto 56px" }}>
              Five gentle questions. One honest reflection. Discover the wellness archetype that feels most like coming home to yourself.
            </p>

            {!quizStarted && !quizResult && (
              <div style={{ background: "#fff", borderRadius: 32, padding: "48px 32px", boxShadow: "0 8px 32px rgba(181,96,106,0.07)", border: "1px solid #ece7e2", animation: "fadeIn 0.4s ease" }}>
                <div style={{ fontSize: 64, marginBottom: 24 }}>🌸</div>
                <p className="serif" style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, color: "#2a1f1f", marginBottom: 12 }}>No pressure. No wrong answers.</p>
                <p style={{ color: "#6b5555", fontSize: 15, lineHeight: 1.8, maxWidth: 520, margin: "0 auto 32px" }}>
                  Just a soft little moment of reflection — to remind you who you already are.
                </p>
                <button onClick={() => setQuizStarted(true)} className="pill-btn pill-rose" style={{ fontSize: 14, padding: "16px 40px" }}>
                  Begin the Quiz →
                </button>
              </div>
            )}

            {quizStarted && !quizResult && (
              <div style={{ background: "#fff", borderRadius: 32, padding: "36px 32px", boxShadow: "0 8px 32px rgba(181,96,106,0.07)", border: "1px solid #ece7e2", textAlign: "left", animation: "fadeUp 0.4s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, marginBottom: 32 }}>
                  <span style={{ fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: "#9a8f8a" }}>
                    0{quizIndex + 1} — 05
                  </span>
                  <div style={{ width: 160, height: 3, background: "#e8ddd8", borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${((quizIndex + 1) / bloomQuestions.length) * 100}%`, background: "#b5606a", transition: "width 0.5s ease" }} />
                  </div>
                </div>

                <div style={{ textAlign: "center", fontSize: 48, marginBottom: 16 }}>{bloomQuestions[quizIndex].emoji}</div>

                <h3 className="serif" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 400, color: "#2a1f1f", lineHeight: 1.2, marginBottom: 32, textAlign: "center" }}>
                  {bloomQuestions[quizIndex].question}
                </h3>

                <div style={{ display: "grid", gap: 12 }}>
                  {bloomQuestions[quizIndex].options.map((option, index) => (
                    <button key={index} className="quiz-option" onClick={() => handleBloomAnswer(option.value)}>
                      <span style={{ color: "#b5606a", marginRight: 12, fontWeight: 500, fontSize: 12, letterSpacing: "0.1em" }}>0{index + 1}</span>
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizResult && (
              <div style={{ background: "#fff", borderRadius: 32, padding: "48px 32px", boxShadow: "0 8px 32px rgba(181,96,106,0.07)", border: "1px solid #ece7e2", animation: "fadeUp 0.5s ease" }}>
                <p style={{ letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 11, color: "#6b8c72", marginBottom: 16 }}>
                  Your Wellness Archetype
                </p>

                <h3 className="serif" style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 400, color: "#2a1f1f", lineHeight: 1.1, marginBottom: 8 }}>
                  {quizResult.title}
                </h3>

                <p style={{ fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: quizResult.colour, marginBottom: 32 }}>
                  {quizResult.archetype}
                </p>

                <div style={{ width: 48, height: 2, background: "#b5606a", borderRadius: 2, margin: "0 auto 32px" }} />

                <p style={{ color: "#6b5555", fontSize: 16, lineHeight: 1.9, maxWidth: 620, margin: "0 auto 32px" }}>
                  {quizResult.desc}
                </p>

                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
                  {quizResult.strengths.map((s, i) => (
                    <span key={i} style={{ background: "#f5e6e8", color: "#b5606a", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 16px", borderRadius: 100 }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ background: "linear-gradient(135deg, #f5e6e8, #e8ede5)", borderRadius: 20, padding: "28px 32px", maxWidth: 580, margin: "0 auto 40px" }}>
                  <p className="serif" style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 300, fontStyle: "italic", color: "#2a1f1f", lineHeight: 1.5 }}>
                    “{quizResult.affirmation}”
                  </p>
                </div>

                <p style={{ fontSize: 13, color: "#9a8f8a", marginBottom: 20, letterSpacing: "0.05em" }}>
                  Share your result with someone who needs to hear it today 🌸
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={resetQuiz} className="pill-btn pill-rose">
                    Take It Again
                  </button>
                  <button
                    onClick={() => {
                      const text = `I'm "${quizResult.title}" — ${quizResult.archetype} 🌸\n\n"${quizResult.affirmation}"\n\nDiscover yours at bloomandco.co.ke`;
                      if (navigator.share) { navigator.share({ text }); }
                      else { navigator.clipboard.writeText(text).then(() => alert("Result copied! Share it with someone 🌸")); }
                    }}
                    className="pill-btn pill-outline-rose">
                    Share My Result
                  </button>
                </div>
              </div>
            )}
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
                Bloom & Co partners with organizations to support employee wellness and workplace engagement through practical and intentional wellness solutions. We serve corporates, NGOs, educational institutions, insurance companies, hospitality brands, and HR departments.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#contact" className="pill-btn pill-rose">Get In Touch</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline-rose">WhatsApp Us</a>
              </div>
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
                <span className="serif" style={{ fontSize: 44, color: "#f5e6e8", fontWeight: 300, lineHeight: 1, display: "block", marginBottom: 12 }}>0{i + 1}</span>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>{item.title}</h3>
                <div style={{ width: 32, height: 2, background: "#b5606a", marginBottom: 12, borderRadius: 2 }} />
                <p style={{ color: "#6b5555", fontSize: 14, lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ background: "#b5606a", color: "#fff", borderRadius: 22, padding: "28px", display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="serif" style={{ fontSize: 44, color: "rgba(255,255,255,0.2)", fontWeight: 300, lineHeight: 1, display: "block" }}>05</span>
              <div>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, marginBottom: 10, color: "#fff" }}>Authentic Brand Story</h3>
                <div style={{ width: 32, height: 2, background: "rgba(255,255,255,0.4)", marginBottom: 12, borderRadius: 2 }} />
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

      {/* ── FOUNDER MOMENT ────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #2a1f1f 0%, #3d2a2a 100%)", padding: "80px 0" }}>
        <div className="wrap">
          <div className="founder-grid">
            {/* photo */}
            <div style={{ borderRadius: 32, overflow: "hidden", aspectRatio: "4/5", position: "relative", boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
              <div className="img-placeholder" style={{ position: "absolute", inset: 0 }}>
                <span style={{ fontSize: 48 }}>👩🏾</span>
                <span style={{ color: "#e8b4b8", fontWeight: 500 }}>FRIDAH'S PHOTO</span>
                <span style={{ color: "rgba(255,255,255,0.4)", maxWidth: 200, lineHeight: 1.5 }}>Portrait of Fridah — warm, confident, natural setting</span>
              </div>
            </div>
            {/* quote */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ display: "block", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "#e8b4b8", marginBottom: 24 }}>A Word From Our Founder</span>
              <div style={{ fontSize: 80, color: "#b5606a", lineHeight: 0.8, fontFamily: "Georgia, serif", marginBottom: 16, opacity: 0.6 }}>"</div>
              <blockquote className="serif" style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 300, lineHeight: 1.5, color: "#f7f3ef", fontStyle: "italic", marginBottom: 32 }}>
                At Bloom & Co, we believe people thrive when wellness and productivity exist in balance. Through intentional products and meaningful partnerships, we are committed to helping individuals and organizations cultivate healthier, more fulfilling lives.
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#b5606a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>FN</div>
                <div>
                  <p style={{ color: "#f7f3ef", fontSize: 15, fontWeight: 500 }}>Fridah Nairuti</p>
                  <p style={{ color: "#e8b4b8", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Founder, Bloom & Co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FOLLOW ──────────────────────────── */}
      <section className="sp" style={{ background: "#f7f3ef" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="label">Follow Along</span>
          <h2 className="serif sh" style={{ marginBottom: 16 }}>Join Us on<br /><em>Instagram</em></h2>
          <p style={{ color: "#6b5555", fontSize: 15, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 32px" }}>
            Daily wellness tips, product launches, and behind-the-scenes moments from Bloom & Co. Follow us at @bloomco.ke.
          </p>
          {/* instagram preview grid placeholder */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, maxWidth: 480, margin: "0 auto 36px" }}>
            {["Wellness tips post", "Flow With Your Cycle cover", "Floral Coloring Book", "Corporate Journal cover", "Mother's Day Workbook", "Kids Coloring E-Book"].map((desc, i) => (
              <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                style={{ aspectRatio: "1/1", background: "linear-gradient(135deg, #f5e6e8, #e8ede5)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6, textDecoration: "none", overflow: "hidden", transition: "transform 0.3s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <span style={{ fontSize: 24 }}>📸</span>
                <span style={{ fontSize: 9, color: "#b5606a", textAlign: "center", padding: "0 8px", letterSpacing: "0.05em" }}>{desc}</span>
              </a>
            ))}
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose">
            Follow @bloomco.ke
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section id="contact" className="sp" style={{ background: "#f7f3ef" }}>
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <span className="label">Get In Touch</span>
              <h2 className="serif sh" style={{ marginBottom: 24, lineHeight: 1.05 }}>
                Let's Build<br /><em>Something Together</em>
              </h2>
              <p style={{ color: "#6b5555", fontSize: 16, lineHeight: 1.9, maxWidth: 520 }}>
                Whether you're an individual seeking intentional wellness tools, or an organization looking to cultivate a thriving team — we'd love to connect.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactItems.map((item) => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderRadius: 26, padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, boxShadow: "0 8px 32px rgba(181,96,106,0.07)", transition: "all 0.35s ease", border: "1px solid rgba(181,96,106,0.1)" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 52px rgba(181,96,106,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(181,96,106,0.07)"; }}
                >
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#f5e6e8", display: "flex", alignItems: "center", justifyContent: "center", color: "#b5606a", flexShrink: 0, fontSize: 20 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#b5606a", marginBottom: 5 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: 15, color: "#2a1f1f", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 15, color: "#2a1f1f" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pill-btn pill-rose" style={{ textAlign: "center", marginTop: 8, padding: "20px 30px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: 13, letterSpacing: "0.2em" }}>
                <ShoppingBag size={18} /> Shop On Selar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(181,96,106,0.15)", padding: "36px 20px 80px", background: "#2a1f1f" }}>
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <Image src="/logo.png" alt="Bloom & Co Nairobi Kenya" width={110} height={44} style={{ height: 34, width: "auto" }} />
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 8, letterSpacing: "0.05em" }}>Wellness · Productivity · Intentional Living</p>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>© 2026 Bloom & Co · Nairobi, Kenya</p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { label: "Instagram", href: INSTAGRAM_URL },
                { label: "WhatsApp", href: WHATSAPP_URL },
                { label: "Shop", href: SHOP_URL },
                { label: "Email", href: "mailto:bloomandco@gmail.com" },
              ].map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
