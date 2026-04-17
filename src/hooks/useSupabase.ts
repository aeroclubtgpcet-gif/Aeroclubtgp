import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

// =====================================================
// USERS HOOKS
// =====================================================

export function useUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('users-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, () => {
        fetchUsers();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: string, updates: any) => {
    try {
      const { error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      await fetchUsers();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchUsers();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return { users, loading, error, updateUser, deleteUser, refetch: fetchUsers };
}

// =====================================================
// EVENTS HOOKS
// =====================================================

export function useEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('events-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, () => {
        fetchEvents();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (event: any) => {
    try {
      const { error } = await supabase
        .from('events')
        .insert([event]);

      if (error) throw error;
      await fetchEvents();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const updateEvent = async (id: string, updates: any) => {
    try {
      const { error } = await supabase
        .from('events')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      await fetchEvents();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchEvents();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return { events, loading, error, createEvent, updateEvent, deleteEvent, refetch: fetchEvents };
}

// =====================================================
// PROJECTS HOOKS
// =====================================================

export function useProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('projects-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, () => {
        fetchProjects();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (project: any) => {
    try {
      const { error } = await supabase
        .from('projects')
        .insert([project]);

      if (error) throw error;
      await fetchProjects();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const updateProject = async (id: string, updates: any) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      await fetchProjects();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchProjects();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return { projects, loading, error, createProject, updateProject, deleteProject, refetch: fetchProjects };
}

// =====================================================
// ANNOUNCEMENTS HOOKS
// =====================================================

export function useAnnouncements() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnnouncements();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('announcements-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'announcements' }, () => {
        fetchAnnouncements();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAnnouncements(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createAnnouncement = async (announcement: any) => {
    try {
      const { error } = await supabase
        .from('announcements')
        .insert([announcement]);

      if (error) throw error;
      await fetchAnnouncements();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const updateAnnouncement = async (id: string, updates: any) => {
    try {
      const { error } = await supabase
        .from('announcements')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      await fetchAnnouncements();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const deleteAnnouncement = async (id: string) => {
    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchAnnouncements();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return { announcements, loading, error, createAnnouncement, updateAnnouncement, deleteAnnouncement, refetch: fetchAnnouncements };
}

// =====================================================
// STORAGE / IMAGE UPLOAD UTILITIES
// =====================================================

export async function uploadImage(
  bucket: 'profiles' | 'events' | 'projects',
  file: File,
  userId?: string
): Promise<string> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = userId ? `${userId}/${fileName}` : fileName;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error: any) {
    console.error('Upload error:', error);
    throw new Error(error.message || 'Failed to upload image');
  }
}

export async function deleteImage(bucket: 'profiles' | 'events' | 'projects', url: string): Promise<void> {
  try {
    // Extract path from URL
    const path = url.split(`${bucket}/`)[1];
    
    if (!path) return;

    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) throw error;
  } catch (error: any) {
    console.error('Delete error:', error);
    throw new Error(error.message || 'Failed to delete image');
  }
}

// =====================================================
// STATS HOOK
// =====================================================

export function useStats() {
  const [stats, setStats] = useState({
    totalMembers: 0,
    activeProjects: 0,
    upcomingEvents: 0,
    achievements: 23
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Get total members count
      const { count: membersCount } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });

      // Get active projects count (ongoing status)
      const { count: projectsCount } = await supabase
        .from('projects')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'ongoing');

      // Get upcoming events count
      const { count: eventsCount } = await supabase
        .from('events')
        .select('*', { count: 'exact', head: true })
        .gte('date', new Date().toISOString());

      setStats({
        totalMembers: membersCount || 0,
        activeProjects: projectsCount || 0,
        upcomingEvents: eventsCount || 0,
        achievements: 23
      });
    } catch (error: any) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return { stats, loading };
}