import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Plane, Users, Rocket, Trophy, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useStats } from '../../hooks/useSupabase';

export const Landing = () => {
  const { stats } = useStats();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e293b]">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Aircraft Silhouettes */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            className="absolute top-20 left-10"
            animate={{ x: [0, 1000], y: [0, -200] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Plane className="h-12 w-12 text-blue-400 transform rotate-45" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-10"
            animate={{ x: [0, -1000], y: [0, 200] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 5 }}
          >
            <Rocket className="h-10 w-10 text-cyan-400" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse mr-2" />
              <span className="text-sm text-cyan-400">Soar Beyond Limits</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Aero Club TGP
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Innovation Takes Flight. Join us in pushing the boundaries of aerospace engineering
            and aviation excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-8 py-6 shadow-lg shadow-blue-500/30 group"
              >
                Join the Club
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 text-lg px-8 py-6"
              >
                Explore Projects
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StatCard icon={Users} value={stats?.totalMembers || 0} label="Members" />
            <StatCard icon={Rocket} value={stats?.activeProjects || 0} label="Active Projects" />
            <StatCard icon={Calendar} value={stats?.upcomingEvents || 0} label="Upcoming Events" />
            <StatCard icon={Trophy} value={stats?.achievements || 0} label="Achievements" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#0f172a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Join Aero Club?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience hands-on aerospace projects, connect with passionate aviators, and take your engineering skills to new heights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Innovative Projects"
              description="Work on cutting-edge aerospace projects from UAVs to rocket propulsion systems."
              gradient="from-blue-500/10 to-blue-600/10"
              delay={0}
            />
            <FeatureCard
              title="Expert Mentorship"
              description="Learn from industry professionals and experienced club members."
              gradient="from-cyan-500/10 to-cyan-600/10"
              delay={0.2}
            />
            <FeatureCard
              title="Networking Events"
              description="Connect with aerospace companies and expand your professional network."
              gradient="from-blue-500/10 to-cyan-500/10"
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label }: { icon: any; value: number; label: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
      <Icon className="h-8 w-8 text-cyan-400 mb-3 mx-auto" />
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}+</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, gradient, delay }: { title: string; description: string; gradient: string; delay: number }) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
    <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 h-full">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);