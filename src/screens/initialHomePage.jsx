import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function InitialHomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full h-auto flex flex-col">
      <button
        onClick={scrollToTop}
        className="w-[42px] h-[42px] bg-accent rounded-full fixed bottom-10 right-10 z-20 flex justify-center items-center p-3 cursor-pointer"
      >
        <IoIosArrowDropupCircle className="text-white font-bold text-2xl" />
      </button>

      <div className="relative w-full h-[calc(100vh-110px)] bg-black/95 bg-cover flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        <img
          src="/dronebg.png"
          alt="Featured Hardware"
          className="w-full h-full absolute top-0 left-0 object-cover max-w-full mx-auto drop-shadow-2xl opacity-15 brightness-110 z-0 pointer-events-none"
        />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-[7vw] font-extrabold text-accent opacity-100 select-none pointer-events-none tracking-tight z-0 whitespace-nowrap drop-shadow-lg">
            Real PC Solutions
          </h1>
          <p className="mt-2 text-lg text-gray-200 text-center max-w-2xl">
            Experience next-level performance with genuine computer components,
            gaming hardware, and professional accessories. Designed for
            creators, gamers, and tech enthusiasts who demand power,
            reliability, and style.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="/shop"
              className="px-8 py-3 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-accent/80 transition"
            >
              Register Now
            </a>
            <Link
              to="/products"
              className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg border border-gray-600 hover:bg-gray-700 transition shadow-lg"
            >
              Browse Products
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 z-10">
          <div className="bg-gray-900/60 rounded-xl px-6 py-4 flex flex-col items-center shadow border border-gray-800 min-w-[220px] transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-accent">
            <span className="text-2xl mb-2">🛡️</span>
            <span className="font-semibold text-white">Genuine Components</span>
            <span className="text-gray-400 text-sm mt-1 text-center">
              Only authentic, high-quality parts
            </span>
          </div>
          <div className="bg-gray-900/60 rounded-xl px-6 py-4 flex flex-col items-center shadow border border-gray-800 min-w-[220px] transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-accent">
            <span className="text-2xl mb-2">⚡</span>
            <span className="font-semibold text-white">Latest Technology</span>
            <span className="text-gray-400 text-sm mt-1 text-center">
              Cutting-edge hardware & accessories
            </span>
          </div>
          <div className="bg-gray-900/60 rounded-xl px-6 py-4 flex flex-col items-center shadow border border-gray-800 min-w-[220px] transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-accent">
            <span className="text-2xl mb-2">🤝</span>
            <span className="font-semibold text-white">Warranty & Support</span>
            <span className="text-gray-400 text-sm mt-1 text-center">
              Reliable service and assistance
            </span>
          </div>
        </div>
      </div>
      <section
        id="about"
        className="w-full bg-white py-20 px-4 flex flex-col items-center justify-center shadow-lg"
      >
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            At Real PC Solutions, we are passionate about empowering your
            digital journey. Our mission is to deliver premium computer
            hardware, innovative accessories, and expert support to creators,
            gamers, and professionals. With a commitment to quality, integrity,
            and customer satisfaction, we strive to make technology accessible,
            reliable, and inspiring for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-gray-300">
              <span className="text-3xl mb-2 text-accent">🌟</span>
              <span className="font-semibold text-gray-900">Excellence</span>
              <span className="text-gray-500 text-sm mt-1 text-center">
                We deliver only the best products and services.
              </span>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-gray-300">
              <span className="text-3xl mb-2 text-accent">🤝</span>
              <span className="font-semibold text-gray-900">Trust</span>
              <span className="text-gray-500 text-sm mt-1 text-center">
                Your satisfaction and confidence are our top priorities.
              </span>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-gray-300">
              <span className="text-3xl mb-2 text-accent">🚀</span>
              <span className="font-semibold text-gray-900">Innovation</span>
              <span className="text-gray-500 text-sm mt-1 text-center">
                We embrace new ideas to keep you ahead in tech.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="w-full bg-black py-20 px-4 flex flex-col items-center justify-center shadow-lg"
      >
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 items-start md:items-start">
            <h2 className="text-4xl font-bold text-gray-300 mb-4 tracking-tight">
              Customer Support
            </h2>
            <div className="bg-gray-900/60 rounded-xl px-6 py-4 flex items-center shadow border border-gray-800 min-w-[380px] transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-accent">
              <span className="text-2xl text-accent">📞</span>
              <span className="font-medium text-gray-400 ms-2">
                +1 (555) 123-4567
              </span>
            </div>
            <div className="bg-gray-900/60 rounded-xl px-6 py-4 flex items-center shadow border border-gray-800 min-w-[380px] transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-accent">
              <span className="text-2xl text-accent">📧</span>
              <span className="font-medium text-gray-400 ms-2">
                support@realpcsolutions.com
              </span>
            </div>
            <div className="bg-gray-900/60 rounded-xl px-6 py-4 flex items-center shadow border border-gray-800 min-w-[380px] transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-accent">
              <span className="text-2xl text-accent">📍</span>
              <span className="font-medium text-gray-400 ms-2">
                123 Tech Building, Port City, Sri Lanka
              </span>
            </div>
            <p className="text-gray-500 mt-4">
              We'd love to hear from you! Reach out with any questions,
              feedback, or inquiries.
            </p>
          </div>
          <div className="bg-black rounded-xl shadow-md border-2 border-gray-800 p-8 flex flex-col gap-5 transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-accent">
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">
              Send an Inquiry
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-accent text-white font-bold rounded-lg px-6 py-3 mt-2 shadow hover:bg-accent/90 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
