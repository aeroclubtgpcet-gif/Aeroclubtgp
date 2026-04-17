import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Aero Club TGP
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering aerospace innovation and cultivating the next generation of aviation leaders.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To foster a community of passionate aerospace enthusiasts, providing hands-on experience with cutting-edge
                technology while promoting innovation, collaboration, and excellence in aviation and space exploration.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To become a globally recognized aerospace club that serves as a launchpad for future aerospace engineers,
                pilots, and innovators who will shape the future of flight and space exploration.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', description: 'Pushing boundaries in aerospace technology' },
              { title: 'Excellence', description: 'Striving for the highest standards' },
              { title: 'Collaboration', description: 'Working together to achieve greatness' },
              { title: 'Safety', description: 'Prioritizing safety in all operations' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative backdrop-blur-sm bg-[#0f172a]/40 border border-blue-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur-2xl" />
          <div className="relative backdrop-blur-sm bg-[#0f172a]/40 border border-blue-500/30 rounded-xl p-12 text-center">
            <Award className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">23+ Achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our club has won numerous awards and recognition at national and international levels,
              establishing ourselves as leaders in student aerospace innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};