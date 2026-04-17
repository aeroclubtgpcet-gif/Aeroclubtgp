# 🚀 Deployment Guide - Aero Club TGP

## Vercel Deployment (Recommended)

### Method 1: GitHub Integration (Easiest)

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Aero Club TGP"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aero-club-tgp.git
git push -u origin main
```

#### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repo
5. Click **"Import"**

#### Step 3: Configure Project
- **Framework Preset**: Vite
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

#### Step 4: Add Environment Variables
Before deploying, click **"Environment Variables"**:

```
VITE_SUPABASE_URL = https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbG...your-key...
```

**Important**: Add to all environments (Production, Preview, Development)

#### Step 5: Deploy
Click **"Deploy"** and wait (~2 minutes)

#### Step 6: Test Your Deployment
1. Open the Vercel URL (e.g., `your-app.vercel.app`)
2. Test login/signup
3. Create test data as admin
4. Verify real-time updates work

---

### Method 2: Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

#### Step 2: Login
```bash
vercel login
```

#### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (select your account)
- Link to existing project? **N**
- What's your project's name? **aero-club-tgp**
- In which directory is your code located? **./  **
- Want to override settings? **N**

#### Step 4: Add Environment Variables
```bash
vercel env add VITE_SUPABASE_URL
# Paste your Supabase URL

vercel env add VITE_SUPABASE_ANON_KEY
# Paste your Supabase anon key
```

Select: **Production, Preview, Development**

#### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Enter your domain: `aeroclub.com`

### Step 2: Configure DNS
Add these records in your domain provider:

**For apex domain (aeroclub.com)**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait for DNS Propagation
- Usually takes 5-60 minutes
- Vercel will auto-detect and enable SSL

---

## Supabase Production Setup

### Enable Email Confirmations (Production)
1. Go to Supabase Dashboard
2. **Authentication** → **Settings**
3. **Enable email confirmations**: ON
4. Configure SMTP or use Supabase default

### Set Up Custom SMTP (Recommended)
1. **Authentication** → **Settings** → **SMTP**
2. Configure with:
   - **SendGrid** (recommended, free tier available)
   - **Mailgun**
   - **AWS SES**
   - Or any SMTP provider

Example with SendGrid:
```
Host: smtp.sendgrid.net
Port: 587
Username: apikey
Password: (your SendGrid API key)
Sender email: noreply@yourdomain.com
Sender name: Aero Club TGP
```

### Configure Email Templates
1. **Authentication** → **Email Templates**
2. Customize:
   - **Confirmation Email**: Welcome message
   - **Magic Link**: For passwordless login
   - **Password Reset**: Recovery email

### Row Level Security Audit
1. Go to **Database** → **Policies**
2. Verify RLS is enabled on all tables:
   - ✅ users
   - ✅ events
   - ✅ projects
   - ✅ announcements
3. Test policies with different user roles

### Storage Security
1. **Storage** → **Policies**
2. Verify policies for:
   - ✅ profiles bucket
   - ✅ events bucket
   - ✅ projects bucket

---

## Environment Variables Reference

### Required Variables
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### How to Get Values
1. **Supabase URL**: 
   - Dashboard → Settings → API → Project URL
   
2. **Supabase Anon Key**: 
   - Dashboard → Settings → API → Project API keys → anon/public

**Security Note**: 
- ✅ `anon` key is SAFE for public use
- ❌ NEVER expose `service_role` key in frontend

---

## Post-Deployment Checklist

### Functionality Tests
- [ ] User signup works
- [ ] Email confirmation sent (if enabled)
- [ ] Login works
- [ ] Admin can access `/admin`
- [ ] Members can access `/portal`
- [ ] Image uploads work
- [ ] Real-time updates work
- [ ] Public pages accessible
- [ ] Mobile responsive
- [ ] SSL/HTTPS enabled

### Performance Tests
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Images optimized
- [ ] Lazy loading works

### Security Tests
- [ ] No API keys in frontend code
- [ ] RLS policies working
- [ ] Only admins can modify data
- [ ] Users can only edit own profile
- [ ] Storage buckets secured
- [ ] HTTPS enforced
- [ ] CORS configured correctly

---

## Monitoring & Analytics

### Vercel Analytics (Free)
1. Go to your project in Vercel
2. Click **"Analytics"** tab
3. Enable **Web Analytics**
4. Add this to your site automatically

### Supabase Monitoring
1. Dashboard → **Reports**
2. Monitor:
   - API requests
   - Database size
   - Storage usage
   - Active users

### Set Up Alerts
1. **Vercel**: 
   - Project → Settings → Notifications
   - Enable deployment notifications
   
2. **Supabase**:
   - Check database size limits
   - Monitor API quota
   - Set up budget alerts

---

## Scaling Considerations

### Free Tier Limits

**Supabase (Free)**:
- Database: 500MB
- Storage: 1GB
- API Requests: 50,000/month
- Bandwidth: 2GB
- Realtime: 2 concurrent connections

**Vercel (Hobby)**:
- Bandwidth: 100GB/month
- Builds: 6000 minutes/month
- Serverless Functions: 100GB-hrs

### When to Upgrade

**Upgrade Supabase Pro ($25/mo) if:**
- Database > 500MB
- > 50K API requests/month
- Need more storage
- Need more realtime connections

**Upgrade Vercel Pro ($20/mo) if:**
- Need custom domains
- Need more bandwidth
- Need password protection
- Need more team members

---

## Backup Strategy

### Database Backups
Supabase automatically backs up your database, but for extra safety:

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-ref

# Create backup
supabase db dump -f backup.sql
```

### Restore from Backup
```bash
supabase db reset
supabase db push backup.sql
```

---

## Troubleshooting Production Issues

### Issue: White Screen on Deployment
**Causes**:
- Environment variables missing
- Build failed
- JavaScript errors

**Fix**:
1. Check Vercel build logs
2. Verify env vars are set
3. Test build locally: `npm run build && npm run preview`

### Issue: "Failed to fetch" in Production
**Causes**:
- Wrong Supabase URL
- CORS issues
- RLS blocking requests

**Fix**:
1. Check env vars are correct
2. Verify RLS policies allow public read
3. Check browser console for exact error

### Issue: Images Not Loading
**Causes**:
- Storage bucket not public
- Wrong URL format
- CORS not configured

**Fix**:
1. Make buckets public in Supabase
2. Verify URL format matches
3. Check storage policies

### Issue: Real-time Not Working
**Causes**:
- Realtime not enabled
- Incorrect subscription
- Connection limit reached

**Fix**:
1. Enable Realtime on tables
2. Check subscription code
3. Upgrade plan if needed

---

## Security Best Practices

### Production Checklist
- [ ] Enable email verification
- [ ] Use custom SMTP
- [ ] Set up rate limiting
- [ ] Enable CAPTCHA on signup
- [ ] Configure CSP headers
- [ ] Enable 2FA for admin
- [ ] Regular security audits
- [ ] Monitor logs for suspicious activity
- [ ] Keep dependencies updated
- [ ] Use environment-specific keys

### Vercel Security Headers
Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## Support & Updates

### Getting Help
- Vercel: [vercel.com/support](https://vercel.com/support)
- Supabase: [supabase.com/support](https://supabase.com/support)
- GitHub Issues: (your repo)

### Keeping Updated
```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## Success! 🎉

Your Aero Club TGP platform is now live and production-ready!

**What's Next?**
- Add custom domain
- Set up email templates
- Invite team members
- Customize branding
- Add more features
- Monitor analytics

Happy deploying! ✈️
