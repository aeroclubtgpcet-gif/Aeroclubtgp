import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users, Briefcase, GraduationCap, Award, Plane } from 'lucide-react';
import { mockEvents } from '../data/mockData';
import { Button } from '../components/ui/button';

export const Events = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'competition':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'seminar':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'trip':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop':
        return <Briefcase className="h-4 w-4" />;
      case 'competition':
        return <Award className="h-4 w-4" />;
      case 'seminar':
        return <GraduationCap className="h-4 w-4" />;
      case 'trip':
        return <Plane className="h-4 w-4" />;
      default:
        return null;
    }
  };

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
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us for workshops, competitions, and networking events that will elevate your aerospace journey.
          </p>
        </motion.div>

        {/* Events List */}
        <div className="space-y-6">
          {mockEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Event Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-transparent md:from-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm ${getTypeColor(event.type)}`}>
                        {getTypeIcon(event.type)}
                        <span className="text-sm font-medium capitalize">{event.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {event.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                          <Calendar className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Date</div>
                          <div className="text-sm text-white">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                          <Clock className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Time</div>
                          <div className="text-sm text-white">{event.time}</div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                          <MapPin className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Location</div>
                          <div className="text-sm text-white">{event.location}</div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                          <Users className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-0.5">Participants</div>
                          <div className="text-sm text-white">
                            {event.registeredMembers?.length || 0} / {event.maxParticipants} registered
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20">
                        Register Now
                      </Button>
                      <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
