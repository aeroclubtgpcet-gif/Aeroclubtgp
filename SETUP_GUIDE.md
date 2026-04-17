# 🚀 Aero Club TGP - Quick Setup Guide

## ⚡ Fast Setup (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Supabase Project
1. Go to https://supabase.com
2. Click "New project"
3. Fill in:
   - **Name**: aero-club-tgp
   - **Database Password**: (save this!)
   - **Region**: Choose closest to you
4. Click "Create new project" (wait ~2 min)

### Step 3: Get API Keys
1. In Supabase Dashboard → Settings → API
2. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public** key: `eyJhbG...`

### Step 4: Set Environment Variables
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...
```

### Step 5: Run Database Schema
1. In Supabase Dashboard → **SQL Editor**
2. Click **New Query**
3. Open `supabase-schema.sql` from this project
4. **Copy entire file** and paste into SQL Editor
5. Click **Run** (bottom right corner)
6. Wait for "Success" message

### Step 6: Enable Email Auth
1. Go to **Authentication** → **Providers**
2. Make sure **Email** is enabled (toggle on)
3. **Disable email confirmation** (for testing):
   - Go to **Authentication** → **Settings**
   - Find "Enable email confirmations"
   - **Turn it OFF**

### Step 7: Verify Storage Buckets
1. Go to **Storage**
2. You should see 3 buckets:
   - ✅ profiles (public)
   - ✅ events (public)
   - ✅ projects (public)

### Step 8: Run the App
```bash
npm run dev
```

Open: http://localhost:5173

---

## 👤 Create Your First Admin Account

### Sign Up
1. Go to `/login`
2. Click **Sign Up** tab
3. Enter:
   - Name: John Doe
   - Email: admin@aeroclub.com
   - Password: password123
4. Click "Create Account"

### Make Yourself Admin
1. Go to Supabase Dashboard
2. Click **Table Editor** → **users**
3. Find your row (the one you just created)
4. Click on the row to edit
5. Change `role` from `member` to `admin`
6. Click **Save**
7. **Refresh your browser** (Ctrl+R or Cmd+R)

### Test Admin Access
1. Go to `/admin`
2. You should now see the admin dashboard!

---

## 🧪 Test Everything

### Test 1: Create an Event
1. Go to `/admin`
2. Scroll to "Manage Events"
3. Click "Add Event"
4. Fill in:
   - Title: "Test Airshow"
   - Description: "Our first event"
   - Date: (pick any future date)
5. Click "Save"
6. Go to `/events` - your event should appear!

### Test 2: Upload a Profile Picture
1. Go to `/portal`
2. Click "Edit Profile"
3. Upload an image
4. Click "Save Changes"
5. Check `/members` - your new photo should show!

### Test 3: Create an Announcement
1. Go to `/admin`
2. Scroll to "Announcements"
3. Click "New Announcement"
4. Fill in title and content
5. Click "Post"
6. Go to `/portal` - announcement appears instantly! (real-time!)

---

## 🐛 Troubleshooting

### "Missing Supabase environment variables"
**Fix**: Check that `.env` file exists and has correct values (no quotes needed)

### "Failed to create user"
**Fix**: 
1. Check email confirmation is disabled
2. Use a valid email format
3. Password must be 6+ characters

### "Not authorized"
**Fix**:
1. Make sure you changed role to `admin` in database
2. Log out and log back in
3. Hard refresh (Ctrl+Shift+R)

### "Storage bucket not found"
**Fix**: Re-run the SQL schema (Step 5) - it creates buckets automatically

### Page shows "Loading..." forever
**Fix**:
1. Open browser console (F12)
2. Check for errors
3. Verify API keys are correct in `.env`
4. Make sure Supabase project is active

---

## ✅ Final Checklist

Before deploying:
- [ ] Database schema executed successfully
- [ ] Email auth enabled
- [ ] Email confirmation disabled (for testing)
- [ ] Storage buckets created
- [ ] At least one admin user created
- [ ] Tested creating/editing/deleting data
- [ ] Images upload successfully
- [ ] Real-time updates working

---

## 🚢 Deploy to Vercel

### Quick Deploy
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# Or use Vercel CLI
npm i -g vercel
vercel --prod
```

### Add Environment Variables on Vercel
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add:
   - `VITE_SUPABASE_URL` = (your URL)
   - `VITE_SUPABASE_ANON_KEY` = (your key)
4. Redeploy

---

## 🎉 You're Done!

Your full-stack aerospace platform is now running!

**What you have:**
✅ Full authentication system
✅ Admin dashboard
✅ Member portal
✅ Real-time updates
✅ Image uploads
✅ Public website
✅ Production-ready security

**Next steps:**
- Add more members
- Create events and projects
- Customize the design
- Add custom domain
- Set up email templates
- Enable 2FA for admins

Need help? Check the main README.md or open an issue!
