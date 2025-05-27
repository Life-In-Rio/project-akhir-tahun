// src/pages/MiniWeb.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MiniWeb = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Mini Web Projects
      </h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Card 1 */}
        <a
          href="https://eclectic-gelato-13a0f2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">BMI Calculator</h2>
          <p className="text-gray-300 text-sm">
            Menghitung indeks massa tubuh berdasarkan berat dan tinggi. Aplikasi
            ini membantu pengguna mengetahui apakah berat badan mereka ideal,
            kekurangan, atau kelebihan. Dirancang dengan antarmuka yang
            sederhana dan responsif, cocok untuk penggunaan sehari-hari.
          </p>
        </a>

        {/* Card 2 */}
        <a
          href="https://kaleidoscopic-babka-92c9ce.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Finance Tracker</h2>
          <p className="text-gray-300 text-sm">
            Mencatat pengeluaran dan pemasukan harian. Simpel dan efisien. Cocok
            untuk pelajar yang ingin belajar mengelola keuangan pribadi dengan
            tampilan bersih dan fitur pencatatan transaksi real-time.
          </p>
        </a>

        {/* Card 3 */}
        <a
          href="https://quiet-madeleine-2f1d8b.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Website Wisata</h2>
          <p className="text-gray-300 text-sm">
            Website yang memperkenalkan tempat-tempat wisata menarik yang pernah
            saya kunjungi, dilengkapi dengan galeri foto, informasi fasilitas,
            dan fitur pesan tiket online.
          </p>
        </a>
      </motion.div>

      {/* Back Button */}
      <div className="mt-16 text-center">
        <Link to="/">
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default MiniWeb;
