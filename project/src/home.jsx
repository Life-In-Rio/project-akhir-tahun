import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMiniWeb, setShowMiniWeb] = useState(false);

  const toggleMiniWeb = () => {
    setShowMiniWeb(true);
    setIsOpen(false); // tutup menu hamburger
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="relative z-20 h-10 md:h-16 p-4 bg-gray-800 bg-opacity-70 shadow-md">
        <div className="flex items-center justify-center md:justify-center">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-32 text-lg font-semibold">
            <Link to="/dashboard" className="hover:underline">Progress</Link>
            <Link to="/achievement" className="hover:underline">Achievement</Link>
            <Link to="/mini-web" className="hover:underline">Mini Web</Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mt-2 absolute right-4 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <motion.div
            className="mt-[22px] absolute right-4 md:hidden bg-gray-800 bg-opacity-90 p-6 px-10 space-y-8 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block">Progress</Link>
            <Link to="/achievement" onClick={() => setIsOpen(false)} className="block">Achievement</Link>
           <Link to="/mini-web" onClick={() => setIsOpen(false)} className="block">Mini Web</Link>

          </motion.div>
        )}
      </header>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-90"
        style={{ backgroundImage: "url('/f.JPG')" }}
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
          Progress tahunan kegiatan sekolah 📊
        </p>

        {/* Mini Web Cards */}
        {showMiniWeb && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Card 1 */}
            <a href="https://project-bmi.vercel.app" target="_blank" rel="noopener noreferrer" className="block p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition hover:bg-gray-600">
              <h4 className="text-xl font-semibold mb-2">BMI Calculator</h4>
              <p className="text-sm text-gray-300">Aplikasi menghitung BMI berdasarkan berat dan tinggi badan. Dibuat dengan React.</p>
            </a>

            {/* Card 2 */}
            <a href="https://finance-tracker-abyan.vercel.app" target="_blank" rel="noopener noreferrer" className="block p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition hover:bg-gray-600">
              <h4 className="text-xl font-semibold mb-2">Personal Finance Tracker</h4>
              <p className="text-sm text-gray-300">Aplikasi pelacak keuangan harian. Dilengkapi form dan daftar transaksi.</p>
            </a>

            {/* Card 3 */}
            <a href="https://projek-kegiatan-sekolah.vercel.app" target="_blank" rel="noopener noreferrer" className="block p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition hover:bg-gray-600">
              <h4 className="text-xl font-semibold mb-2">Proyek Tahunan Sekolah</h4>
              <p className="text-sm text-gray-300">Website laporan progres ekstrakurikuler dan pelajaran sekolah tahunan.</p>
            </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
