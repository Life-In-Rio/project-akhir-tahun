import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import data from './data/data.json'

const Dashboard = () => {
  const { mapel, ekskul } = data

  return (
    <div className="max-w-5xl mx-auto p-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {mapel.map((item) => (
            <motion.div
              key={item.id}
              className="p-6 bg-blue-50 rounded-xl shadow-lg border border-blue-200 hover:shadow-2xl transition"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {ekskul.map((item) => (
            <motion.div
              key={item.id}
              className="p-6 bg-green-50 rounded-xl shadow-lg border border-green-200 hover:shadow-2xl transition"
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

      {/* Tombol Back di bawah */}
      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
