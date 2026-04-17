import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Rocket, Calendar, Award, Plus, Edit, Trash2, BarChart3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockMembers, mockProjects, mockEvents, mockStats } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Navigate } from 'react-router';

export const AdminDashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">Manage your club operations and content</p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <StatCard
            icon={Users}
            label="Total Members"
            value={mockStats.totalMembers}
            change="+12%"
            positive
          />
          <StatCard
            icon={Rocket}
            label="Active Projects"
            value={mockStats.activeProjects}
            change="+3"
            positive
          />
          <StatCard
            icon={Calendar}
            label="Upcoming Events"
            value={mockStats.upcomingEvents}
            change="2 this week"
          />
          <StatCard
            icon={Award}
            label="Achievements"
            value={mockStats.achievements}
            change="+5 this year"
            positive
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-[#0f172a]/60 border border-blue-500/30 mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-cyan-400">
                <BarChart3 className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="members" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-cyan-400">
                <Users className="h-4 w-4 mr-2" />
                Members
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-cyan-400">
                <Rocket className="h-4 w-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-cyan-400">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>

            <TabsContent value="members">
              <MembersTab />
            </TabsContent>

            <TabsContent value="projects">
              <ProjectsTab />
            </TabsContent>

            <TabsContent value="events">
              <EventsTab />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, change, positive }: any) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    
    <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-8 w-8 text-cyan-400" />
        {change && (
          <span className={`text-xs ${positive ? 'text-green-400' : 'text-gray-400'}`}>
            {change}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

const OverviewTab = () => (
  <div className="grid lg:grid-cols-2 gap-6">
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
          <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>
          <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
          <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
            <Plus className="h-4 w-4 mr-2" />
            Announcement
          </Button>
        </div>
      </div>
    </div>

    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <ActivityItem text="New member joined: Ryan Kumar" time="2 hours ago" />
          <ActivityItem text="Project updated: Autonomous Flight System" time="5 hours ago" />
          <ActivityItem text="Event registered: 15 new registrations" time="1 day ago" />
        </div>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ text, time }: any) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
    <div className="flex-1">
      <p className="text-sm text-white">{text}</p>
      <p className="text-xs text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

const MembersTab = () => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    
    <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
      <div className="p-6 border-b border-blue-500/30 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Manage Members</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0f172a]/95 border-blue-500/30 text-white backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">Add New Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Input placeholder="Name" className="bg-[#0a0e1a]/50 border-blue-500/30 text-white" />
              <Input placeholder="Email" className="bg-[#0a0e1a]/50 border-blue-500/30 text-white" />
              <Input placeholder="Position" className="bg-[#0a0e1a]/50 border-blue-500/30 text-white" />
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500">Save Member</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-blue-500/30 hover:bg-blue-500/5">
            <TableHead className="text-cyan-400">Name</TableHead>
            <TableHead className="text-cyan-400">Role</TableHead>
            <TableHead className="text-cyan-400">Email</TableHead>
            <TableHead className="text-cyan-400">Join Date</TableHead>
            <TableHead className="text-cyan-400 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockMembers.slice(0, 5).map((member) => (
            <TableRow key={member.id} className="border-blue-500/30 hover:bg-blue-500/5">
              <TableCell className="text-white font-medium">{member.name}</TableCell>
              <TableCell>
                <Badge className={getRoleBadgeColor(member.role)}>
                  {member.role}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-400">{member.email}</TableCell>
              <TableCell className="text-gray-400">
                {new Date(member.joinDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

const ProjectsTab = () => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    
    <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Manage Projects</h3>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4">
        {mockProjects.map((project) => (
          <div key={project.id} className="flex items-center gap-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 hover:border-cyan-400/30 transition-all">
            <img src={project.image} alt={project.title} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{project.title}</h4>
              <p className="text-gray-400 text-sm line-clamp-1">{project.description}</p>
            </div>
            <Badge className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-500/10">
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-500/10">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EventsTab = () => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    
    <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Manage Events</h3>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Button>
      </div>

      <div className="grid gap-4">
        {mockEvents.map((event) => (
          <div key={event.id} className="flex items-center gap-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 hover:border-cyan-400/30 transition-all">
            <img src={event.image} alt={event.title} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{event.title}</h4>
              <p className="text-gray-400 text-sm">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
            </div>
            <div className="text-right">
              <div className="text-white font-semibold">{event.registeredMembers?.length || 0}/{event.maxParticipants}</div>
              <div className="text-xs text-gray-500">Registered</div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-500/10">
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-500/10">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'President':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
    case 'Vice President':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
    case 'Core Member':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ongoing':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
    case 'completed':
      return 'bg-green-500/20 text-green-400 border-green-500/50';
    case 'planned':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
  }
};
