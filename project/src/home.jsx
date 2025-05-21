import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Foto, Nama, dan Deskripsi */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6 mb-10 text-center sm:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <img
          src="./foto3.jpg"
          alt="Abyan"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-md"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">Abyan Eshan</h1>
          <p className="text-blue-700 text-base sm:text-lg mt-2 max-w-md">
            Junior Developer skilled in React.js, Tailwind CSS, and Git. Building beautiful and functional web apps.
          </p>
        </div>
      </motion.div>

      {/* Tombol navigasi */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {[
          { text: 'Progress', color: 'blue', to: '/dashboard' },
          { text: 'Achievement', color: 'green', to: '/dashboard' },
          { text: 'Goals', color: 'purple', to: '/dashboard' },
        ].map((btn, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to={btn.to}
              className={`bg-${btn.color}-600 hover:bg-${btn.color}-700 text-white px-4 py-3 w-full rounded-lg text-center shadow-md block`}
            >
              {btn.text}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Home
