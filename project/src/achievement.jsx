import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import achievementData from './data/achievement.json'

const Achievement = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-purple-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎉 Achievement
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {achievementData.map((item) => (
          <motion.div
            key={item.id}
            className="p-6 bg-purple-50 rounded-xl shadow-lg border border-purple-200 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + item.id * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Gambar di atas judul */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}

            <h3 className="text-xl font-bold text-purple-800 mb-1">{item.title}</h3>
            <p className="text-purple-600 text-sm mb-2 italic">{item.date}</p>
            <p className="text-purple-700">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/">
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md"
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
  )
}

export default Achievement
