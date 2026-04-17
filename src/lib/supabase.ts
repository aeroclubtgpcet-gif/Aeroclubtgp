import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dzjlikjeloquaotnxutu.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6amxpa2plbG9xdWFvdG54dXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwMDI2ODIsImV4cCI6MjA0OTU3ODY4Mn0.icK8x4SCo8Kk17y5qKrTOw_WNq8rnujBxvK_c9ggFjc';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);