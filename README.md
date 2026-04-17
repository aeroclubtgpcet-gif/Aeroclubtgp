# 🚀 Aero Club TGP - Full-Stack Aerospace Platform

A modern, production-ready aerospace-themed web application built with React, Supabase, and Tailwind CSS. Features include real-time updates, role-based authentication, admin dashboard, and cloud storage integration.

## ✨ Features

### 🔐 Authentication & Authorization
- **Email/Password Authentication** via Supabase Auth
- **Role-Based Access Control** (Admin/Member)
- **Protected Routes** with automatic redirects
- **Persistent Sessions** across page reloads
- **Real-time Auth State** management

### 📊 Admin Dashboard
- **Member Management**: Add, edit, delete users
- **Role Assignment**: Promote members to admin
- **Event Management**: Create, update, delete events
- **Project Management**: Track project status
- **Announcements**: Broadcast updates to members
- **Image Uploads**: Profile pictures, event images, project images
- **Dashboard Analytics**: User counts, stats, and insights

### 👤 Member Portal
- **Personal Dashboard**: View profile and announcements
- **Profile Management**: Edit name, bio, upload profile picture
- **Event Registration**: Browse and register for upcoming events
- **Project Collaboration**: View active projects
- **Real-time Updates**: Live announcements feed

### 🌐 Public Website
- **Landing Page**: Aerospace-themed with animations
- **Members Showcase**: Dynamic member directory
- **Events Calendar**: Upcoming events display
- **Projects Gallery**: Active and completed projects
- **Contact Form**: Get in touch with the club

### 🔄 Real-Time Features
- **Live Announcements**: Instant updates via Supabase Realtime
- **Member Updates**: See changes immediately
- **Event Changes**: Auto-refresh event calendar
- **Project Status**: Track progress in real-time

### 🖼️ Cloud Storage
- **Supabase Storage Integration**
- **Profile Pictures**: User avatar uploads
- **Event Images**: Event photos and banners
- **Project Images**: Project documentation
- **Automatic URL Generation**
- **Public Access with Security**

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Modern blur effects
- **Gradient Backgrounds**: Dynamic aerospace theme
- **Smooth Animations**: Framer Motion integration
- **Fully Responsive**: Mobile, tablet, desktop
- **Dark Theme**: Aerospace-inspired color palette

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router 7
- **Animations**: Framer Motion (motion/react)
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/pnpm
- Supabase account (free tier works perfectly)
- Git

### Step 1: Clone & Install

```bash
git clone <your-repo-url>
cd aero-club-tgp
npm install
```

### Step 2: Set Up Supabase

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose a name, database password, and region
   - Wait for the project to be ready (~2 minutes)

2. **Get Your API Keys**
   - In your Supabase dashboard, go to Settings > API
   - Copy your `Project URL` and `anon/public key`

3. **Create Environment File**

```bash
cp .env.example .env
```

Edit `.env` and add your keys:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: Set Up Database

1. **Run the Schema SQL**
   - Open `supabase-schema.sql` in your code editor
   - In Supabase Dashboard, go to **SQL Editor**
   - Click **New Query**
   - Paste the entire contents of `supabase-schema.sql`
   - Click **Run** (bottom right)
   - Wait for success message

2. **Enable Email Auth**
   - Go to **Authentication > Providers**
   - Ensure **Email** is enabled
   - (Optional) Disable email confirmations for testing:
     - Go to **Authentication > Settings**
     - Under **Auth Settings**, disable "Enable email confirmations"

3. **Verify Storage Buckets**
   - Go to **Storage**
   - You should see three buckets: `profiles`, `events`, `projects`
   - All should be marked as "Public"

### Step 4: Run the Application

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 🎯 First Steps

### Create Your Admin Account

1. Go to the login page
2. Click **Sign Up** tab
3. Enter:
   - **Name**: Your name
   - **Email**: Your email
   - **Password**: At least 6 characters
4. Click **Create Account**

### Promote to Admin (via Supabase Dashboard)

Since the first user is created as 'member' by default:

1. Go to Supabase Dashboard > **Table Editor** > **users**
2. Find your user row
3. Click **Edit**
4. Change `role` from `member` to `admin`
5. Click **Save**
6. **Refresh your browser**
7. You now have admin access!

### Test the Admin Dashboard

1. Navigate to `/admin`
2. Try:
   - Adding a new member
   - Creating an event
   - Uploading an image
   - Creating an announcement

## 🗄️ Database Schema

### Tables

**users**
- `id`: UUID (references auth.users)
- `name`: TEXT
- `email`: TEXT (unique)
- `role`: TEXT (admin/member)
- `profile_image_url`: TEXT
- `bio`: TEXT
- `created_at`: TIMESTAMP

**events**
- `id`: UUID
- `title`: TEXT
- `description`: TEXT
- `date`: TIMESTAMP
- `image_url`: TEXT
- `created_at`: TIMESTAMP

**projects**
- `id`: UUID
- `title`: TEXT
- `description`: TEXT
- `status`: TEXT (planning/in-progress/completed)
- `image_url`: TEXT
- `created_at`: TIMESTAMP

**announcements**
- `id`: UUID
- `title`: TEXT
- `content`: TEXT
- `created_at`: TIMESTAMP

### Security (Row Level Security)

All tables have RLS policies:
- **Public**: Can read all data
- **Members**: Can update own profile
- **Admins**: Can create/update/delete everything

Storage buckets:
- **profiles**: Users can upload/delete own images
- **events/projects**: Only admins can upload/delete

## 🚀 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click **Import Project**
   - Select your GitHub repository
   - Click **Import**

3. **Add Environment Variables**
   - In deployment settings, go to **Environment Variables**
   - Add:
     - `VITE_SUPABASE_URL` = your Supabase URL
     - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
   - Click **Deploy**

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Follow the prompts and add your environment variables when asked.

## 📁 Project Structure

```
aero-club-tgp/
├── src/
│   ├── app/
│   │   ├── components/        # Reusable UI components
│   │   ├── context/           # Auth context
│   │   ├── data/              # Mock data (deprecated)
│   │   ├── layouts/           # Layout components
│   │   ├── pages/             # Page components
│   │   ├── routes.tsx         # React Router config
│   │   ├── types/             # TypeScript types
│   │   └── App.tsx            # Root component
│   ├── hooks/
│   │   └── useSupabase.ts     # Database hooks
│   ├── lib/
│   │   └── supabase.ts        # Supabase client
│   └── styles/                # Global styles
├── supabase-schema.sql        # Database schema
├── .env.example               # Environment template
└── README.md                  # This file
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🐛 Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution**: Make sure `.env` file exists with correct values

### Issue: "Failed to fetch"

**Solutions**:
1. Check if Supabase project is active
2. Verify API keys in `.env`
3. Check browser console for CORS errors
4. Ensure database schema was run successfully

### Issue: "Not authorized to update this row"

**Solution**: 
1. Check if RLS policies are enabled
2. Verify user role in database
3. Try logging out and back in

### Issue: "Storage bucket not found"

**Solution**:
1. Go to Supabase Dashboard > Storage
2. Manually create buckets if missing:
   - `profiles` (public)
   - `events` (public)
   - `projects` (public)
3. Re-run storage policies from SQL schema

### Issue: "User profile not found after signup"

**Solution**:
1. Check if trigger `on_auth_user_created` exists
2. Verify `handle_new_user()` function in database
3. Re-run the database schema

## 🔐 Security Best Practices

✅ **Implemented**:
- Row Level Security on all tables
- Secure password hashing (Supabase)
- Environment variable usage
- Role-based access control
- Server-side auth validation

⚠️ **For Production**:
- Enable email verification
- Set up custom SMTP (not Supabase default)
- Add rate limiting
- Implement CAPTCHA on signup
- Set up monitoring and logging
- Configure custom domain
- Enable 2FA for admin accounts

## 📚 API Reference

### Authentication

```typescript
import { useAuth } from './context/AuthContext';

const { user, login, signup, logout, isAuthenticated } = useAuth();

// Sign up
await signup('email@example.com', 'password', 'John Doe');

// Login
await login('email@example.com', 'password');

// Logout
await logout();
```

### Database Hooks

```typescript
import { useUsers, useEvents, useProjects, useAnnouncements } from '../hooks/useSupabase';

// Users
const { users, updateUser, deleteUser } = useUsers();

// Events
const { events, createEvent, updateEvent, deleteEvent } = useEvents();

// Projects
const { projects, createProject, updateProject, deleteProject } = useProjects();

// Announcements
const { announcements, createAnnouncement } = useAnnouncements();
```

### Storage

```typescript
import { uploadImage, deleteImage } from '../hooks/useSupabase';

// Upload
const url = await uploadImage('profiles', file, userId);

// Delete
await deleteImage('profiles', imageUrl);
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Backend: [Supabase](https://supabase.com)
- Icons: [Lucide](https://lucide.dev)
- Animations: [Framer Motion](https://www.framer.com/motion/)

## 💬 Support

Need help? 
- Open an issue on GitHub
- Check the [Supabase docs](https://supabase.com/docs)
- Review the troubleshooting section above

---

**Built with ❤️ for the aerospace community**

🚀 **Ready for deployment** | 🔐 **Production-ready security** | 🎨 **Modern UI/UX**
