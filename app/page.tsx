// app/page.tsx (Next.js 13+ with /app directory)
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-purple-900">
      {/* Navbar */}
    <header className="flex justify-between items-center p-6 shadow-md bg-white text-purple-900 sticky top-0 z-50">
  <div className="flex items-center gap-40 pl-30">
    <Image
      src="/logo.png" // Place your logo in /public/logo.png
      alt="Evolve CodeLink Logo"
      width={170}
      height={170}
      className="rounded-lg"
    />
  </div>
  <nav className="space-x-6 font-medium pr-40">
    <a href="#features" className="hover:underline">Features</a>
    <a href="#about" className="hover:underline">About</a>
    <a href="#contact" className="hover:underline">Contact</a>
  </nav>
</header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-purple-50">
        <h1 className="text-4xl font-extrabold mb-4 text-purple-800">
          Connecting Programming Teachers with Learners
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-purple-700">
          Evolve CodeLink is an app platform designed to connect computer
          programming teachers with eager learners — faster, smarter, and better.
        </p>
        <a
          href="#get-started"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-800 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
          Why Choose Evolve CodeLink?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-purple-500">
            <h3 className="font-semibold text-xl mb-2">Verified Teachers</h3>
            <p className="text-purple-700">
              Only verified programming teachers to ensure quality learning.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-purple-500">
            <h3 className="font-semibold text-xl mb-2">Flexible Scheduling</h3>
            <p className="text-purple-700">
              Learn at your own pace with flexible online class timings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-purple-500">
            <h3 className="font-semibold text-xl mb-2">Interactive Learning</h3>
            <p className="text-purple-700">
              Engage with teachers through interactive coding sessions and live feedback.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-purple-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-purple-700">
          Evolve CodeLink is inspired by platforms like Byju but redesigned for
          the needs of programming education. Whether you are a beginner or
          preparing for advanced coding interviews, we connect you to the right
          teacher.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Evolve CodeLink. All rights reserved.</p>
        <p className="text-sm opacity-80">
          Crafted with ❤️ using Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
