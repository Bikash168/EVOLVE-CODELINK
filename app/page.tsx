"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { id: "features", label: "Features" },
    { id: "about", label: "About" },
    { id: "mission", label: "Mission" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  // Track scrolling for active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let item of menuItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white min-h-screen text-purple-900 scroll-smooth">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 py-3 md:py-4">
          <Image
            src="/logo.png"
            alt="Evolve CodeLink Logo"
            width={140}
            height={140}
            className="rounded-lg w-20 md:w-[140px] h-auto"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-medium">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative pb-1 ${
                  activeSection === item.id
                    ? "text-purple-800 font-bold"
                    : "hover:underline"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 rounded"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-3xl p-2"
          >
            ☰
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg rounded-lg p-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.id}
                onClick={() => setMenuOpen(false)}
                href={`#${item.id}`}
                className="block hover:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center text-center md:text-left py-12 px-6 sm:px-8 lg:px-20 bg-purple-50">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-purple-800">
            Connecting Programming Teachers with Learners
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 text-purple-700">
            Evolve CodeLink is your one-stop platform to find verified programming teachers, learn at your own pace, and gain real-world coding skills.
          </p>
          <a
            href="#get-started"
            className="bg-purple-700 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-800 transition"
          >
            Get Started
          </a>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <Image
            src="/hero-image.jpg"
            alt="Learning Programming"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-800">
          Why Choose Evolve CodeLink?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Verified Teachers", desc: "Only certified and experienced programming teachers for quality learning.", img: "/feature1.jpg" },
            { title: "Flexible Scheduling", desc: "Learn when it suits you with our flexible online class timings.", img: "/feature2.jpg" },
            { title: "Interactive Learning", desc: "Engage through live coding sessions, challenges, and instant feedback.", img: "/feature3.jpg" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-purple-500">
              <Image src={item.img} alt={item.title} width={400} height={250} className="rounded-md mb-4 w-full h-auto" />
              <h3 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>
              <p className="text-purple-700 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-purple-100 py-16 px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-800">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-purple-700">
          Our mission is to bridge the gap between students and skilled programming teachers across the globe.
          We aim to make quality coding education accessible, affordable, and flexible for everyone.
        </p>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-800">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Amit", text: "Best platform for learning Python! The teachers are so helpful." },
            { name: "Priya", text: "I cracked my coding interview thanks to Evolve CodeLink's practice sessions." },
            { name: "Rahul", text: "Loved the flexible timing and personalized learning experience." }
          ].map((t, i) => (
            <div key={i} className="bg-purple-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-purple-700 italic">"{t.text}"</p>
              <p className="mt-4 font-semibold text-purple-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-purple-50 py-16 px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="text-left space-y-4 text-sm sm:text-base">
            <p><strong>Address:</strong> 123 Coding Street, Tech City, India</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> contact@evolvecodelink.com</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6 text-center px-4">
        <p>&copy; {new Date().getFullYear()} Evolve CodeLink. All rights reserved.</p>
        <p className="text-xs sm:text-sm opacity-80">
          Crafted with ❤️ using Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
