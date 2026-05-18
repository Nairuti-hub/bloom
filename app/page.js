"use client";

import Image from "next/image";

export default function BloomWebsite() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1f1f1f] overflow-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f6f3ee]/80 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Image
            src="/logo.png"
            alt="Bloom Logo"
            width={150}
            height={60}
          />

          <nav className="hidden md:flex gap-10 text-sm tracking-wide">
            <a href="#about" className="hover:opacity-70 transition">
              About
            </a>

            <a href="#services" className="hover:opacity-70 transition">
              Services
            </a>

            <a href="#portfolio" className="hover:opacity-70 transition">
              Portfolio
            </a>
          </nav>

          <a
            href="https://selar.com/m/fridah-makena993077?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300"
          >
            Shop
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-sm text-[#7b8b77] mb-5">
            Wellness • Productivity • Intentional Living
          </p>

          <h1 className="text-6xl lg:text-8xl font-extralight leading-[0.95] tracking-tight mb-8">
            Where Wellness
            <br />
            Meets Purpose
          </h1>

          <p className="text-lg text-[#555] leading-relaxed max-w-xl mb-10">
            Bloom creates intentional wellness and productivity tools
            that help individuals and organizations cultivate healthier,
            more balanced, and meaningful lives.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://selar.com/m/fridah-makena993077?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300"
            >
              Explore Products
            </a>

            <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition duration-300">
              Partner With Us
            </button>

          </div>

        </div>

        <div className="rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

          <Image
            src="/hero.png"
            alt="Hero"
            width={800}
            height={1000}
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-white py-32"
      >

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#7b8b77] mb-5">
              About Bloom
            </p>

            <h2 className="text-5xl lg:text-6xl font-extralight leading-tight mb-8">
              Wellness Is The
              <br />
              Foundation Of
              <br />
              Sustainable Growth
            </h2>

            <p className="text-[#555] text-lg leading-relaxed">
              Bloom bridges wellness and workplace productivity through
              intentional tools and meaningful experiences.
            </p>

          </div>

          <div className="rounded-[40px] overflow-hidden shadow-xl">

            <Image
              src="/founder.jpg"
              alt="Founder"
              width={700}
              height={700}
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-32"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-[#7b8b77] mb-5">
              Products & Services
            </p>

            <h2 className="text-5xl lg:text-6xl font-extralight">
              Designed For Intentional Growth
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Wellness Journals",
                text: "Guided journals promoting mindfulness and intentional living.",
              },

              {
                title: "Productivity Guides",
                text: "Resources designed to improve focus and healthier work habits.",
              },

              {
                title: "Corporate Wellness",
                text: "Employee wellness packages and workplace wellness initiatives.",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[32px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition duration-300"
              >

                <div className="w-14 h-14 rounded-full bg-[#dfe6da] mb-8"></div>

                <h3 className="text-3xl font-light mb-5">
                  {item.title}
                </h3>

                <p className="text-[#666] leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="bg-white py-32"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-[#7b8b77] mb-5">
              Featured Products
            </p>

            <h2 className="text-5xl lg:text-6xl font-extralight">
              Premium Wellness Resources
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              "/product1.png",
              "/product2.png",
              "/product3.png",
            ].map((image, index) => (

              <div
                key={index}
                className="rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition duration-500"
              >

                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-black/5 text-center bg-[#f6f3ee]">

        <p className="text-[#666]">
          © 2026 Bloom. Intentional wellness for meaningful living.
        </p>

      </footer>

    </div>
  );
}