import { motion } from 'motion/react';
import { User, Bell, Calendar, Rocket, Award, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockAnnouncements, mockEvents, mockProjects } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Navigate } from 'react-router';

export const MemberPortal = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const upcomingEvents = mockEvents.slice(0, 3);
  const activeProjects = mockProjects.filter(p => p.status === 'ongoing').slice(0, 3);
  const recentAnnouncements = mockAnnouncements.slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Welcome back, {user?.name?.split(' ')[0]}!
              </h1>
              <p className="text-gray-400">Here's what's happening in Aero Club TGP</p>
            </div>
            <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="mb-12 relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          
          <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500/30">
                  <img
                    src={user?.profileImage || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'}
                    alt={user?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-[#0f172a] rounded-full" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-1">{user?.name}</h2>
                <p className="text-cyan-400 mb-3">{user?.position || 'Member'}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                    {user?.department || 'General'}
                  </Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                    Member since {new Date(user?.joinDate || '2023-01-01').getFullYear()}
                  </Badge>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                <User className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Announcements</h2>
                </div>
                <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {recentAnnouncements.map((announcement) => (
                  <AnnouncementCard key={announcement.id} announcement={announcement} />
                ))}
              </div>
            </motion.div>

            {/* Active Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Active Projects</h2>
                </div>
                <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                  View All
                </Button>
              </div>

              <div className="grid gap-4">
                {activeProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 text-center">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Your Achievements</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-1">5</p>
                <p className="text-sm text-gray-400">Awards Earned</p>
                <Button className="mt-4 w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/50">
                  View All
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnnouncementCard = ({ announcement }: any) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
      
      <div className="relative backdrop-blur-sm bg-[#0f172a]/40 border border-blue-500/30 rounded-xl p-5 hover:border-cyan-400/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-semibold flex-1">{announcement.title}</h3>
          <Badge className={`ml-2 ${getPriorityColor(announcement.priority)}`}>
            {announcement.priority}
          </Badge>
        </div>
        <p className="text-gray-400 text-sm mb-3">{announcement.content}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{announcement.author}</span>
          <span>{new Date(announcement.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: any) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
    
    <div className="relative backdrop-blur-sm bg-[#0f172a]/40 border border-blue-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
      <div className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 p-4">
          <h4 className="text-white font-semibold mb-1">{project.title}</h4>
          <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
        </div>
      </div>
    </div>
  </div>
);

const EventCard = ({ event }: any) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
    
    <div className="relative backdrop-blur-sm bg-[#0f172a]/40 border border-blue-500/30 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300">
      <div className="text-xs text-cyan-400 mb-2">
        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </div>
      <h4 className="text-white font-semibold mb-1 text-sm">{event.title}</h4>
      <p className="text-gray-400 text-xs">{event.location}</p>
    </div>
  </div>
);
