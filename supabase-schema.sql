-- =====================================================
-- AERO CLUB TGP - SUPABASE DATABASE SCHEMA
-- =====================================================
-- Instructions:
-- 1. Go to your Supabase Dashboard > SQL Editor
-- 2. Create a new query
-- 3. Paste this entire file and run it
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- TABLE: users
-- =====================================================
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('admin', 'member')),
    profile_image_url TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABLE: events
-- =====================================================
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABLE: projects
-- =====================================================
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'in-progress' CHECK (status IN ('planning', 'in-progress', 'completed')),
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABLE: announcements
-- =====================================================
CREATE TABLE IF NOT EXISTS public.announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- USERS TABLE POLICIES
-- =====================================================

-- Anyone can read all users (for member showcase)
CREATE POLICY "Users are viewable by everyone"
    ON public.users FOR SELECT
    USING (true);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON public.users FOR UPDATE
    USING (auth.uid() = id);

-- Only admins can insert users
CREATE POLICY "Admins can insert users"
    ON public.users FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Only admins can delete users
CREATE POLICY "Admins can delete users"
    ON public.users FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- =====================================================
-- EVENTS TABLE POLICIES
-- =====================================================

-- Everyone can view events
CREATE POLICY "Events are viewable by everyone"
    ON public.events FOR SELECT
    USING (true);

-- Only admins can insert events
CREATE POLICY "Admins can insert events"
    ON public.events FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Only admins can update events
CREATE POLICY "Admins can update events"
    ON public.events FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Only admins can delete events
CREATE POLICY "Admins can delete events"
    ON public.events FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- =====================================================
-- PROJECTS TABLE POLICIES
-- =====================================================

-- Everyone can view projects
CREATE POLICY "Projects are viewable by everyone"
    ON public.projects FOR SELECT
    USING (true);

-- Only admins can insert projects
CREATE POLICY "Admins can insert projects"
    ON public.projects FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Only admins can update projects
CREATE POLICY "Admins can update projects"
    ON public.projects FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Only admins can delete projects
CREATE POLICY "Admins can delete projects"
    ON public.projects FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- =====================================================
-- ANNOUNCEMENTS TABLE POLICIES
-- =====================================================

-- Everyone can view announcements
CREATE POLICY "Announcements are viewable by everyone"
    ON public.announcements FOR SELECT
    USING (true);

-- Only admins can insert announcements
CREATE POLICY "Admins can insert announcements"
    ON public.announcements FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Only admins can update announcements
CREATE POLICY "Admins can update announcements"
    ON public.announcements FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Only admins can delete announcements
CREATE POLICY "Admins can delete announcements"
    ON public.announcements FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- =====================================================
-- FUNCTION: Auto-create user profile on signup
-- =====================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, name, email, role)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'name', 'New User'),
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'role', 'member')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- TRIGGER: Create user profile on auth signup
-- =====================================================
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =====================================================
-- STORAGE BUCKET SETUP
-- =====================================================
-- Note: Run these commands in Supabase Dashboard > Storage

-- Create storage buckets (if they don't exist)
INSERT INTO storage.buckets (id, name, public)
VALUES ('profiles', 'profiles', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('events', 'events', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('projects', 'projects', true)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- STORAGE POLICIES
-- =====================================================

-- Profile images: Anyone can view, only owner/admin can upload/update/delete
CREATE POLICY "Anyone can view profile images"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'profiles');

CREATE POLICY "Users can upload their own profile image"
    ON storage.objects FOR INSERT
    WITH CHECK (
        bucket_id = 'profiles' AND
        (auth.uid()::text = (storage.foldername(name))[1])
    );

CREATE POLICY "Users can update their own profile image"
    ON storage.objects FOR UPDATE
    USING (
        bucket_id = 'profiles' AND
        (auth.uid()::text = (storage.foldername(name))[1])
    );

CREATE POLICY "Users can delete their own profile image"
    ON storage.objects FOR DELETE
    USING (
        bucket_id = 'profiles' AND
        (auth.uid()::text = (storage.foldername(name))[1])
    );

-- Event images: Anyone can view, only admins can upload/update/delete
CREATE POLICY "Anyone can view event images"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'events');

CREATE POLICY "Admins can upload event images"
    ON storage.objects FOR INSERT
    WITH CHECK (
        bucket_id = 'events' AND
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can update event images"
    ON storage.objects FOR UPDATE
    USING (
        bucket_id = 'events' AND
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can delete event images"
    ON storage.objects FOR DELETE
    USING (
        bucket_id = 'events' AND
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Project images: Anyone can view, only admins can upload/update/delete
CREATE POLICY "Anyone can view project images"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'projects');

CREATE POLICY "Admins can upload project images"
    ON storage.objects FOR INSERT
    WITH CHECK (
        bucket_id = 'projects' AND
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can update project images"
    ON storage.objects FOR UPDATE
    USING (
        bucket_id = 'projects' AND
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can delete project images"
    ON storage.objects FOR DELETE
    USING (
        bucket_id = 'projects' AND
        EXISTS (
            SELECT 1 FROM public.users
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- =====================================================
-- SAMPLE DATA (Optional - for testing)
-- =====================================================

-- Insert sample events
INSERT INTO public.events (title, description, date, image_url) VALUES
('Annual Airshow 2026', 'Join us for our spectacular annual airshow featuring aerobatic performances and static displays.', '2026-06-15 10:00:00+00', null),
('Flight Training Workshop', 'Beginner-friendly workshop covering basics of flight mechanics and aircraft systems.', '2026-05-20 14:00:00+00', null),
('Aviation Safety Seminar', 'Learn about the latest in aviation safety protocols and best practices.', '2026-07-10 09:00:00+00', null);

-- Insert sample projects
INSERT INTO public.projects (title, description, status, image_url) VALUES
('UAV Development', 'Design and construction of an autonomous unmanned aerial vehicle for research purposes.', 'in-progress', null),
('Flight Simulator', 'Building a full-scale flight simulator for training purposes.', 'in-progress', null),
('Rocket Engine Test', 'Testing and optimization of small-scale rocket engines.', 'completed', null);

-- Insert sample announcements
INSERT INTO public.announcements (title, content) VALUES
('Welcome to Aero Club TGP', 'We are excited to have you join our aerospace community. Check out our upcoming events and projects!'),
('New Member Orientation', 'All new members are invited to attend our orientation session next week. Details will be shared via email.'),
('Workshop Registration Open', 'Registration is now open for our upcoming flight training workshop. Limited seats available!');

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);
CREATE INDEX IF NOT EXISTS idx_events_date ON public.events(date DESC);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);
CREATE INDEX IF NOT EXISTS idx_announcements_created_at ON public.announcements(created_at DESC);

-- =====================================================
-- SETUP COMPLETE!
-- =====================================================
-- Next steps:
-- 1. Go to Authentication > Providers and enable Email provider
-- 2. Go to Storage and verify buckets are created
-- 3. Create your first admin user via the application
-- 4. Test the application!
-- =====================================================
