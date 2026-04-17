export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'guest';
  profileImage?: string;
  bio?: string;
  joinDate: string;
  position?: string;
  department?: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  position: string;
  bio: string;
  profileImage: string;
  email: string;
  joinDate: string;
  projects?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'ongoing' | 'completed' | 'planned';
  members: string[];
  startDate: string;
  endDate?: string;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: 'workshop' | 'competition' | 'seminar' | 'trip';
  registeredMembers?: string[];
  maxParticipants?: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  priority: 'high' | 'medium' | 'low';
}

export interface Stats {
  totalMembers: number;
  activeProjects: number;
  upcomingEvents: number;
  achievements: number;
}
