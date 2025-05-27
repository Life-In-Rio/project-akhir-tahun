import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import data from './data/data.json'

const Dashboard = () => {
  const { mapel, ekskul } = data
  const [selectedItem, setSelectedItem] = useState(null)

  const closeModal = () => setSelectedItem(null)

  return (
    <div className="max-w-6xl mx-auto p-6 relative">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-blue-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📊 Progress Proyek Tahunan Kegiatan Sekolah
      </motion.h2>

      {/* Mata Pelajaran */}
      <section className="mb-14">
        <motion.h3
          className="text-3xl font-semibold mb-8 border-b-4 border-blue-600 pb-2 max-w-max mx-auto"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          📚 Mata Pelajaran
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mapel.map((item) => (
            <motion.div
              key={item.id}
              className="cursor-pointer p-6 bg-blue-50 rounded-xl shadow-lg border border-blue-200 hover:shadow-2xl transition"
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + item.id * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-blue-800 mb-2">{item.name}</h4>
              <p className="text-blue-700 mb-4">{item.description}</p>
              <div className="w-full bg-blue-200 rounded-full h-6 overflow-hidden">
                <motion.div
                  className="bg-blue-600 h-6 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="mt-2 text-blue-800 font-semibold">
                Progress: {item.progress}%
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ekstrakurikuler */}
      <section>
        <motion.h3
          className="text-3xl font-semibold mb-8 border-b-4 border-green-600 pb-2 max-w-max mx-auto"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          🤸 Ekstrakurikuler
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ekskul.map((item) => (
            <motion.div
              key={item.id}
              className="cursor-pointer p-6 bg-green-50 rounded-xl shadow-lg border border-green-200 hover:shadow-2xl transition"
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + item.id * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-green-800 mb-2">{item.name}</h4>
              <p className="text-green-700 mb-4">{item.description}</p>
              <div className="w-full bg-green-200 rounded-full h-6 overflow-hidden">
                <motion.div
                  className="bg-green-600 h-6 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="mt-2 text-green-800 font-semibold">
                Progress: {item.progress}%
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedItem.name}</h3>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <p className="font-semibold text-blue-800 mb-2">Progress: {selectedItem.progress}%</p>
              {selectedItem.details && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {selectedItem.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-lg font-bold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Kembali */}
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
  )
}

export default Dashboard
