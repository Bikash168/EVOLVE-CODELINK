"use client";

import { Facebook, Twitter, Linkedin, Instagram, UserPlus, Search, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// import { Typewriter } from "react-simple-typewriter"; // Remove if unused

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const testimonials = [
    { name: "Amit", text: "Best platform for learning Python! The teachers are so helpful." },
    { name: "Priya", text: "I cracked my coding interview thanks to Evolve CodeLink's practice sessions." },
    { name: "Rahul", text: "Loved the flexible timing and personalized learning experience." },
  ];

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "mission", label: "Mission" },
    { id: "howitworks", label: "How It Works" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const carouselImages = [
    "/hero-image1.jpg",
    "/hero-image2.jpg",
    "/hero-image3.jpg",
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
  }, [menuItems]);

  // Carousel autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
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
          <nav className="hidden md:flex space-x-6 font-medium items-center">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative pb-1 transition-colors ${activeSection === item.id
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
            <a
              href="#signin"
              className="ml-4 bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Sign In / Sign Up
            </a>
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
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white shadow-lg rounded-lg p-4 space-y-3"
          >
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
            <a
              href="#signin"
              onClick={() => setMenuOpen(false)}
              className="block bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-800 transition text-center"
            >
              Sign In / Sign Up
            </a>
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
     <section
  id="hero"
  className="flex flex-col md:flex-row items-center text-center md:text-left py-12 px-6 sm:px-8 lg:px-20 bg-purple-50"
>
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-purple-800">
      Connecting Programming Teachers with Learners
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 text-purple-700">
      Evolve CodeLink is your one-stop platform to find verified
      programming teachers, learn at your own pace, and gain real-world
      coding skills.
    </p>
    <a
      href="#get-started"
      className="bg-purple-700 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-800 transition"
    >
      Get Started
    </a>
  </motion.div>

  <motion.div
    className="flex-1 mt-8 md:mt-0 md:ml-8 relative"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    {carouselImages?.length > 0 && (
      <Image
        key={carouselImages[carouselIndex]}
        src={carouselImages[carouselIndex]}
        alt="Learning Programming"
        width={700}
        height={450}
        className="rounded-lg shadow-lg w-[700px] h-[450px] object-cover transition-all duration-700 ease-in-out"
      />
    )}
  </motion.div>
</section>


      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-20 bg-white flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Side - Animated Coding Screen */}
        <motion.div
          className="flex-1 bg-black rounded-lg p-6 shadow-lg text-green-400 font-mono text-sm sm:text-base overflow-hidden w-full h-64 md:h-80"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <pre>
            <Typewriter
              words={[
                `function learnCoding() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];
  skills.forEach((skill) => {
    console.log("Learning", skill);
  });
  return "Success!";
}`,
                `const evolve = {
  mission: "Empower learners",
  vision: "Global coding community",
  motto: "Code. Learn. Grow."
};`,
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </pre>
        </motion.div>

        {/* Right Side - About Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-800">
            About Us
          </h2>
          <p className="max-w-3xl text-base sm:text-lg text-purple-700">
            Evolve CodeLink is built to empower learners by connecting them with
            certified programming teachers worldwide. Our platform ensures
            personalized, interactive, and effective learning experiences that
            prepare students for real-world challenges. <br /> <br />
            We focus on hands-on coding practice, career-oriented training, and
            connecting learners with mentors who guide them step by step. Our
            mission is to help learners transform knowledge into real projects and
            careers in tech.
          </p>
        </motion.div>
      </section>

      {/* Other sections (Features, Mission, How It Works, Testimonials, Contact) remain same */}
      {/* Features */} <section id="features" className="py-16 px-4 sm:px-6 lg:px-20"> <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-800"> Why Choose Evolve CodeLink? </h2> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[{ title: "Verified Teachers", desc: "Only certified and experienced programming teachers for quality learning.", img: "/feature1.jpg" }, { title: "Flexible Scheduling", desc: "Learn when it suits you with our flexible online class timings.", img: "/feature2.jpg" }, { title: "Interactive Learning", desc: "Engage through live coding sessions, challenges, and instant feedback.", img: "/feature3.jpg" }].map((item, i) => (<div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-purple-500"> <div className="w-full h-48 relative mb-4"> <Image src={item.img} alt={item.title} fill className="rounded-md object-cover" /> </div> <h3 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h3> <p className="text-purple-700 text-sm sm:text-base">{item.desc}</p> </div>))} </div> </section>
      {/* Mission & Vision Section */}
      <section
        id="mission-vision"
        className="bg-purple-100 py-16 px-4 sm:px-6 lg:px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Vision */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-800">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg text-purple-700 max-w-xl mx-auto md:mx-0">
              Our vision is to create a global community of learners and mentors where
              coding is not just taught but experienced as a way of solving real-world
              problems. We strive to inspire innovation and prepare future leaders in
              technology.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-800">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-purple-700 max-w-xl mx-auto md:mx-0">
              Our mission is to bridge the gap between students and skilled programming
              teachers across the globe. We aim to make quality coding education accessible,
              affordable, and flexible for everyone.
            </p>
          </div>
        </div>
      </section>

      <section
        id="howitworks"
        className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-white to-purple-50"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-purple-800">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "1",
              title: "Sign Up",
              desc: "Create your learner profile in just a few clicks.",
              icon: <UserPlus className="w-12 h-12 text-purple-600" />,
            },
            {
              step: "2",
              title: "Find a Teacher",
              desc: "Browse through verified programming experts suited to your needs.",
              icon: <Search className="w-12 h-12 text-purple-600" />,
            },
            {
              step: "3",
              title: "Start Learning",
              desc: "Join live sessions, practice coding, and track your progress.",
              icon: <PlayCircle className="w-12 h-12 text-purple-600" />,
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl flex flex-col items-center text-center transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="bg-purple-100 rounded-full p-4 mb-4 shadow-inner">
                {s.icon}
              </div>
              <div className="text-xl font-bold text-purple-700 mb-2">
                Step {s.step}
              </div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-900">
                {s.title}
              </h3>
              <p className="text-purple-700 text-sm sm:text-base">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-800"
        >
          What Our Students Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition relative"
            >
              <div className="absolute -top-6 left-6 text-purple-400 text-6xl opacity-20">“</div>
              <p className="text-purple-700 italic text-lg">"{t.text}"</p>
              <p className="mt-6 font-semibold text-purple-900 text-right">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */} <section id="contact" className="bg-purple-50 py-16 px-4 sm:px-6 lg:px-20 text-center" > <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-800"> Contact Us </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"> {/* Contact Info */} <div className="text-left space-y-4 text-sm sm:text-base"> <p> <strong>Address:</strong> 123 Coding Street, Tech City, India </p> <p> <strong>Phone:</strong> +91 98765 43210 </p> <p> <strong>Email:</strong> contact@evolvecodelink.com </p> </div> {/* Google Map */} <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.086548387932!2d77.21672131508218!3d28.61393908242392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1b6d5b8e5f%3A0x2cb0e8b2a9b32a3!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1679999999999!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="rounded-lg shadow-lg" ></iframe> </div> </section>
      {/* Footer */}
      <footer className="bg-purple-700 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Evolve CodeLink</h3>
            <p className="text-sm opacity-80">
              Crafting innovative solutions with technology and design.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Policies & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start mt-3 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-purple-500 pt-4 text-center text-sm opacity-80">
          <p>
            &copy; {new Date().getFullYear()} Evolve CodeLink. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
