"use client";

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

// ── BLOOM ENERGY QUIZ DATA ───────────────────────────────
const bloomQuestions = [
  {
    question: "Your ideal slow Sunday looks like...",
    options: [
      { text: "Coffee & journaling ☕", value: "cultivator" },
      { text: "Long walk outdoors 🌿", value: "grounded" },
      { text: "Creative hobby time 🎨", value: "creator" },
      { text: "Sleeping guilt-free ☁️", value: "restoring" },
    ],
  },
  {
    question: "What restores your energy the fastest?",
    options: [
      { text: "Quiet alone time 🌙", value: "cultivator" },
      { text: "Deep conversation 🤍", value: "dreamer" },
      { text: "Nature & fresh air 🍃", value: "grounded" },
      { text: "Music, books, or art 📖", value: "creator" },
    ],
  },
  {
    question: "Choose a wellness ritual.",
    options: [
      { text: "Morning affirmations ✨", value: "dreamer" },
      { text: "Stretching & movement 🧘", value: "grounded" },
      { text: "Evening reflection 📓", value: "cultivator" },
      { text: "Digital detox 📵", value: "restoring" },
    ],
  },
  {
    question: "Your current energy feels...",
    options: [
      { text: "Calm but tired ☁️", value: "restoring" },
      { text: "Motivated but overwhelmed 🔥", value: "cultivator" },
      { text: "Hopeful & growing 🌱", value: "dreamer" },
      { text: "Emotionally stretched 🌊", value: "creator" },
    ],
  },
  {
    question: "Pick a flower.",
    options: [
      { text: "Rose 🌹", value: "dreamer" },
      { text: "Sage 🌿", value: "cultivator" },
      { text: "Peony 🌸", value: "creator" },
      { text: "Sunflower 🌻", value: "grounded" },
    ],
  },
];

const bloomResults = {
  cultivator: {
    title: "The Quiet Cultivator 🌿",
    desc: "You grow best in calm spaces, intentional routines, and moments of quiet reflection. You value emotional balance, meaningful rest, and gentle progress over constant hustle.",
    affirmation: "Your softness is not weakness. It is wisdom.",
  },
  grounded: {
    title: "The Grounded Bloom ☀️",
    desc: "You feel most alive when you're connected to your body, your environment, and the present moment. You thrive through simplicity, movement, and balance.",
    affirmation: "Slow growth is still growth.",
  },
  creator: {
    title: "The Gentle Creator 🎨",
    desc: "You process life through beauty, creativity, emotion, and expression. You need space to feel inspired, not pressured.",
    affirmation: "Your creativity deserves room to breathe.",
  },
  dreamer: {
    title: "The Intentional Dreamer ✨",
    desc: "You are hopeful, reflective, and purpose-driven. You crave meaningful living and are constantly becoming a softer, wiser version of yourself.",
    affirmation: "You are allowed to bloom gently.",
  },
  restoring: {
    title: "The Restoring Soul 🌙",
    desc: "Your energy needs restoration, calm, and self-compassion. You thrive when you stop forcing and allow yourself to pause.",
    affirmation: "Rest is productive too.",
  },
};

export default function BloomWebsite() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // ── NEW QUIZ STATE ────────────────────────────────────────
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    // Component mounting configurations if required
  }, []);

  // ── QUIZ HANDLER FUNCTIONS ───────────────────────────────
  const handleBloomAnswer = (value) => {
    const updatedAnswers = [...quizAnswers, value];
    setQuizAnswers(updatedAnswers);

    if (quizIndex < bloomQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      const counts = {};

      updatedAnswers.forEach((answer) => {
        counts[answer] = (counts[answer] || 0) + 1;
      });

      const topResult = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );

      setQuizResult(bloomResults[topResult]);
    }
  };

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#FAF8F5] text-[#2E2A27] min-h-screen font-sans antialiased">
      {/* ── HEADER / HERO NAVIGATION ────────────────────────── */}
      <header className="py-6 px-6 md:px-12 flex justify-between items-center border-b border-[#ECE7E2]">
        <div className="font-serif text-2xl tracking-wider text-[#2E2A27]">
          BLOOM & CO.
        </div>
        <a 
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#2E2A27] hover:bg-[#4D4742] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors"
        >
          <ShoppingBag className="w-4 h-4" /> Shop Catalog
        </a>
      </header>

      {/* ── HERO BANNER ───────────────────────────────────── */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-[#2E2A27] leading-tight mb-6">
          Nourish Your Mind, <br /><em className="italic font-normal text-[#C98C8C]">Align Your Energy</em>
        </h1>
        <p className="text-[#5F5A55] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Premium wellness logs, guided journals, and intentional resources beautifully customized to match your seasonal rhythm.
        </p>
      </section>

      {/* ── PRODUCT DISPLAY SECTION ───────────────────────── */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-12">
          {["all", "wellness", "kids"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? "bg-[#C98C8C] text-white shadow-sm" 
                  : "bg-white border border-[#ECE7E2] text-[#6B645E] hover:bg-[#FAF8F5]"
              }`}
            >
              {cat === "all" ? "View All" : `${cat} collection`}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-[#ECE7E2] p-6 shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{product.icon}</span>
                  {product.badge && (
                    <span className="bg-[#F2ECE6] text-[#A67C7C] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-serif text-[#2E2A27] mb-1">{product.title}</h3>
                <p className="text-xs italic text-[#A69F99] mb-4">{product.subtitle}</p>
                <p className="text-[#5F5A55] text-sm leading-relaxed mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-[#6B645E] flex items-center gap-2">
                      <span className="text-[#C98C8C]">✦</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[#F5F1EC] pt-4 mt-auto">
                <p className="text-[11px] text-[#A69F99] italic mb-4">Design: {product.coverDesc}</p>
                <a 
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-[#FAF8F5] hover:bg-[#C98C8C] hover:text-white border border-[#ECE7E2] text-[#2E2A27] text-xs uppercase tracking-widest py-3 rounded-xl font-medium transition-all"
                >
                  Order Digital Copy
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-12 border-y border-[#ECE7E2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#2E2A27]">Built on Intentional Pillars</h2>
            <p className="text-[#6B645E] mt-2 text-sm">How we design and measure value for your daily rhythm.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#ECE7E2]">
                <h4 className="font-serif text-xl text-[#2E2A27] mb-2">{v.label}</h4>
                <p className="text-[#5F5A55] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOOM ENERGY QUIZ ────────────────────────── */}
      <section className="bg-[#F7F3EE] py-28 px-6 md:px-12 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">

          <p className="tracking-[0.35em] uppercase text-xs text-[#8B9A88] mb-5">
            Wellness Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-serif text-[#2E2A27] leading-tight mb-6">
            Discover Your <em className="italic">Bloom Energy</em>
          </h2>

          <p className="text-[#5F5A55] text-lg leading-8 max-w-2xl mx-auto mb-14">
            A gentle wellness personality experience designed to help you reconnect
            with the energy, rituals, and rhythms that nourish you most.
          </p>

          {!quizStarted && !quizResult && (
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-[#ECE7E2]">
              <div className="text-6xl mb-6">🌿</div>

              <p className="text-[#6B645E] leading-8 max-w-xl mx-auto mb-8">
                No pressure. No wrong answers.
                Just a soft little moment for yourself.
              </p>

              <button
                onClick={() => setQuizStarted(true)}
                className="bg-[#C98C8C] hover:bg-[#B97B7B] transition-all text-white px-8 py-4 rounded-full text-sm tracking-wide uppercase"
              >
                Start the Experience →
              </button>
            </div>
          )}

          {quizStarted && !quizResult && (
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#ECE7E2] text-left">

              <div className="flex items-center justify-between mb-10">
                <span className="text-sm tracking-[0.25em] uppercase text-[#9A948F]">
                  0{quizIndex + 1} — 05
                </span>

                <div className="w-40 h-[3px] bg-[#EFE8E2] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C98C8C] transition-all duration-500"
                    style={{ width: `${((quizIndex + 1) / 5) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-[#2E2A27] mb-10 leading-snug">
                {bloomQuestions[quizIndex].question}
              </h3>

              <div className="grid gap-4">
                {bloomQuestions[quizIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleBloomAnswer(option.value)}
                    className="group bg-[#FAF8F5] hover:bg-[#F2ECE6] border border-[#EEE8E2] rounded-2xl p-5 text-left transition-all duration-300"
                  >
                    <span className="text-[#4D4742] text-lg group-hover:translate-x-1 inline-block transition-all">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {quizResult && (
            <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-sm border border-[#ECE7E2]">

              <div className="text-6xl mb-6">✨</div>

              <h3 className="text-4xl md:text-5xl font-serif text-[#2E2A27] mb-6 leading-tight">
                {quizResult.title}
              </h3>

              <p className="text-[#5F5A55] leading-8 text-lg max-w-2xl mx-auto mb-8">
                {quizResult.desc}
              </p>

              <div className="bg-[#F8F4EF] rounded-2xl p-6 italic text-[#7A746F] mb-10 max-w-2xl mx-auto">
                “{quizResult.affirmation}”
              </div>

              <div className="border-t border-[#EEE7E0] pt-8 flex flex-col items-center gap-4">
                <p className="uppercase tracking-[0.25em] text-xs text-[#9B958F]">
                  Explore tools that support your energy flow below
                </p>
                <button
                  onClick={() => {
                    setQuizStarted(false);
                    setQuizIndex(0);
                    setQuizAnswers([]);
                    setQuizResult(null);
                  }}
                  className="text-xs uppercase tracking-widest text-[#C98C8C] hover:text-[#B97B7B] font-semibold transition-colors underline underline-offset-4"
                >
                  Retake Quiz ↺
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── CORPORATE WELLNESS ────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C98C8C] font-semibold block mb-3">Workplace Solutions</span>
          <h2 className="text-4xl font-serif text-[#2E2A27] mb-6">Elevate Team Well-being and Performance</h2>
          <p className="text-[#5F5A55] leading-relaxed mb-6">
            Help your staff minimize burnout, re-prioritize focus, and build healthy structures that secure organizational goals without draining personal health.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {corporateOfferings.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[#4D4742]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B9A88]" /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#ECE7E2] p-8 rounded-[2rem] shadow-sm">
          <h3 className="text-2xl font-serif mb-6 text-[#2E2A27]">Why Choose Bloom & Co.?</h3>
          <div className="space-y-6">
            {whyUs.map((w, idx) => (
              <div key={idx}>
                <h5 className="font-medium text-sm text-[#2E2A27] mb-1">✦ {w.title}</h5>
                <p className="text-xs text-[#6B645E] leading-relaxed pl-4">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER / CONTACT INFO ────────────────────────── */}
      <footer className="bg-[#2E2A27] text-[#FAF8F5] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-serif text-2xl tracking-wider mb-4">BLOOM & CO.</h4>
            <p className="text-[#A69F99] text-xs leading-relaxed max-w-xs">
              Curating deliberate spaces, guides, and habits that invite you to step away from excessive demands and step safely into alignment.
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-widest text-[#C98C8C] font-semibold mb-2">Connect With Us</h5>
            <a href={`tel:${WHATSAPP_NUMBER}`} className="flex items-center gap-3 text-sm text-[#FAF8F5] hover:text-[#C98C8C] transition-colors">
              <Phone className="w-4 h-4 text-[#8B9A88]" /> +254 724 973 277
            </a>
            <a href="mailto:info@bloomco.ke" className="flex items-center gap-3 text-sm text-[#FAF8F5] hover:text-[#C98C8C] transition-colors">
              <Mail className="w-4 h-4 text-[#8B9A88]" /> hello@bloomco.ke
            </a>
            <div className="flex items-center gap-3 text-sm text-[#A69F99]">
              <MapPin className="w-4 h-4 text-[#8B9A88]" /> Nairobi, Kenya
            </div>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#C98C8C] font-semibold mb-4">Start Your Process</h5>
            <div className="flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-[#8B9A88] text-center py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium hover:bg-[#738270] transition-colors">
                Chat via WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-[#FAF8F5] text-center py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium hover:bg-white hover:text-[#2E2A27] transition-all">
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#4D4742] text-center mt-12 pt-6 text-[11px] text-[#A69F99]">
          © {new Date().getFullYear()} Bloom & Co. Kenya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
