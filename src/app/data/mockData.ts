import { Member, Project, Event, Announcement, Stats } from '../types';

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'President',
    position: 'Aerospace Engineering Lead',
    bio: 'Passionate about aviation and leading innovative aerospace projects.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    email: 'alex@aeroclub.com',
    joinDate: '2023-01-15',
    projects: ['1', '3']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Vice President',
    position: 'Flight Dynamics Specialist',
    bio: 'Expert in aerodynamics and computational fluid dynamics.',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    email: 'sarah@aeroclub.com',
    joinDate: '2023-02-20',
    projects: ['1', '2']
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    role: 'Core Member',
    position: 'Propulsion Systems Engineer',
    bio: 'Specializing in rocket propulsion and engine design.',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    email: 'michael@aeroclub.com',
    joinDate: '2023-03-10',
    projects: ['2', '4']
  },
  {
    id: '4',
    name: 'Emily Watson',
    role: 'Core Member',
    position: 'Avionics & Control Systems',
    bio: 'Building intelligent flight control systems and autopilot solutions.',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    email: 'emily@aeroclub.com',
    joinDate: '2023-03-25',
    projects: ['1', '4']
  },
  {
    id: '5',
    name: 'David Park',
    role: 'Core Member',
    position: 'Structural Analysis Expert',
    bio: 'Focus on aircraft structural integrity and material science.',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    email: 'david@aeroclub.com',
    joinDate: '2023-04-05',
    projects: ['3']
  },
  {
    id: '6',
    name: 'Jessica Martinez',
    role: 'Member',
    position: 'UAV Systems Designer',
    bio: 'Developing unmanned aerial vehicles for research applications.',
    profileImage: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    email: 'jessica@aeroclub.com',
    joinDate: '2023-05-12',
    projects: ['4']
  },
  {
    id: '7',
    name: 'Ryan Kumar',
    role: 'Member',
    position: 'Aerospace Software Developer',
    bio: 'Creating simulation software for flight testing and analysis.',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    email: 'ryan@aeroclub.com',
    joinDate: '2023-06-01',
    projects: ['2']
  },
  {
    id: '8',
    name: 'Amanda Foster',
    role: 'Member',
    position: 'Aerodynamics Research',
    bio: 'Conducting wind tunnel tests and aerodynamic optimization.',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    email: 'amanda@aeroclub.com',
    joinDate: '2023-06-20',
    projects: ['3']
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Autonomous Flight System',
    description: 'Developing an advanced autopilot system for small aircraft with AI-powered decision making.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop',
    status: 'ongoing',
    members: ['1', '2', '4'],
    startDate: '2024-01-15',
    category: 'Avionics'
  },
  {
    id: '2',
    title: 'Hybrid Rocket Engine',
    description: 'Designing and testing a hybrid rocket propulsion system for educational purposes.',
    image: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=800&h=500&fit=crop',
    status: 'ongoing',
    members: ['2', '3', '7'],
    startDate: '2024-02-01',
    category: 'Propulsion'
  },
  {
    id: '3',
    title: 'High-Altitude Glider',
    description: 'Building a high-efficiency glider for altitude record attempts and aerodynamic research.',
    image: 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=800&h=500&fit=crop',
    status: 'ongoing',
    members: ['1', '5', '8'],
    startDate: '2023-11-10',
    category: 'Aircraft Design'
  },
  {
    id: '4',
    title: 'Delivery Drone Fleet',
    description: 'Creating a swarm of autonomous delivery drones with advanced navigation systems.',
    image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&h=500&fit=crop',
    status: 'completed',
    members: ['3', '4', '6'],
    startDate: '2023-06-01',
    endDate: '2024-03-15',
    category: 'UAV'
  },
  {
    id: '5',
    title: 'Wind Tunnel Facility',
    description: 'Constructing a state-of-the-art wind tunnel for aerodynamic testing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    status: 'planned',
    members: [],
    startDate: '2024-06-01',
    category: 'Infrastructure'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Advanced Aerodynamics Workshop',
    description: 'Learn about computational fluid dynamics and modern aerodynamic analysis techniques.',
    date: '2024-04-15',
    time: '14:00',
    location: 'Engineering Building, Lab 301',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    type: 'workshop',
    registeredMembers: ['1', '2', '3'],
    maxParticipants: 30
  },
  {
    id: '2',
    title: 'National Aerospace Competition',
    description: 'Represent Aero Club TGP at the national level competition for aircraft design.',
    date: '2024-05-20',
    time: '09:00',
    location: 'National Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    type: 'competition',
    registeredMembers: ['1', '2', '3', '4', '5'],
    maxParticipants: 10
  },
  {
    id: '3',
    title: 'Guest Lecture: Future of Aviation',
    description: 'Industry expert discussing electric aircraft and sustainable aviation.',
    date: '2024-04-25',
    time: '18:00',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop',
    type: 'seminar',
    registeredMembers: ['1', '2', '4', '6', '7'],
    maxParticipants: 100
  },
  {
    id: '4',
    title: 'Airport & Maintenance Facility Tour',
    description: 'Exclusive tour of major airport facilities and aircraft maintenance hangars.',
    date: '2024-05-05',
    time: '10:00',
    location: 'International Airport',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=500&fit=crop',
    type: 'trip',
    registeredMembers: ['1', '2', '3', '4', '5', '6', '7', '8'],
    maxParticipants: 25
  }
];

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'New Project Launch: Solar-Powered UAV',
    content: 'Excited to announce our latest project focusing on sustainable aviation with solar-powered drones. Team formation meeting on April 10th.',
    date: '2024-04-03',
    author: 'Alex Thompson',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Workshop Registration Now Open',
    content: 'The Advanced Aerodynamics Workshop registration is now open. Limited seats available. Register by April 10th.',
    date: '2024-04-02',
    author: 'Sarah Chen',
    priority: 'high'
  },
  {
    id: '3',
    title: 'Monthly Meeting Reminder',
    content: 'Don\'t forget our monthly general meeting this Friday at 5 PM in the club room. We\'ll discuss upcoming events and project updates.',
    date: '2024-04-01',
    author: 'Alex Thompson',
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Lab Access Hours Extended',
    content: 'Great news! Our lab access hours have been extended. Members can now access the facility until 10 PM on weekdays.',
    date: '2024-03-30',
    author: 'Emily Watson',
    priority: 'low'
  }
];

export const mockStats: Stats = {
  totalMembers: 47,
  activeProjects: 8,
  upcomingEvents: 6,
  achievements: 23
};
