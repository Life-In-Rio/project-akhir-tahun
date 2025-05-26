import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="relative z-20 h-10 md:h-16 p-4 bg-gray-800 bg-opacity-70 shadow-md ">
        <div className="flex items-center justify-center md:justify-center">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-32 text-lg font-semibold">
            <Link to="/dashboard" className="hover:underline">
               Progress
            </Link>
            <Link to="/achievement" className="hover:underline">
               Achievement
            </Link>
            <Link to="/mini web" className="hover:underline">
            Mini Web
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-4 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <motion.div
            className="mt-[22px] absolute right-4 md:hidden  bg-gray-800 bg-opacity-90 p-6 space-y-8 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block">
                Progress
              </Link>
              <Link to="/achievement" onClick={() => setIsOpen(false)} className="block">
                Achievement
              </Link>
              <Link to="/goal" onClick={() => setIsOpen(false)} className="block">
                Mini web
              </Link>
          </motion.div>
        )}
      </header>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/public/f.JPG')" }}
      ></div>

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Abyan Eshan
        </h2>
        <p className="mb-10 text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          Progress tahunan kegiatan sekolah 📊 <br />
          
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
