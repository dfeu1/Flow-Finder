# 🚀 Supabase Setup Guide (100% Free!)

Supabase is like Firebase but completely free - no credit card required! Perfect for your class project.

## ⏱️ Total Time: 5 Minutes

---

## Step 1: Create Supabase Account

1. Go to **[supabase.com](https://supabase.com)**
2. Click **"Start your project"**
3. Sign up with **GitHub** (easiest)
4. No credit card needed! ✅

---

## Step 2: Create a New Project

1. Click **"New project"**
2. Choose your organization (or create one)
3. **Project settings:**
   - Name: `flow-finder`
   - Database Password: (generate a strong one - save it somewhere!)
   - Region: Choose closest to you (e.g., `US West` or `US East`)
4. Click **"Create new project"**
5. Wait ~2 minutes for setup ⏳

---

## Step 3: Create the Ideas Table

1. In your project, click **"Table Editor"** (left sidebar)
2. Click **"Create a new table"**
3. **Table settings:**
   - Name: `ideas`
   - Enable Row Level Security (RLS): **OFF** for now (we'll add later)
4. **Add these columns:**

| Column Name  | Type        | Default Value | Extra Settings |
|--------------|-------------|---------------|----------------|
| id           | uuid        | gen_random_uuid() | Primary, Auto |
| text         | text        | -             | Required |
| author       | text        | -             | Required |
| timestamp    | int8        | -             | Required |
| color        | text        | -             | Required |
| x            | float8      | -             | Required |
| y            | float8      | -             | Required |
| size         | text        | -             | Required |
| plantType    | text        | -             | Required |
| created_at   | timestamptz | now()         | Auto |

5. Click **"Save"**

---

## Step 4: Get Your API Credentials

1. Click **"Settings"** (gear icon in sidebar)
2. Click **"API"** in the settings menu
3. You'll see two important values:

```
Project URL: https://xxxxxxxxxxxxx.supabase.co
anon/public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Keep these handy!**

---

## Step 5: Add to Vercel

1. Go to **[vercel.com](https://vercel.com/dashboard)**
2. Click your **"flow-finder"** project
3. Go to **"Settings"** → **"Environment Variables"**
4. Add these **two** variables:

```
VITE_SUPABASE_URL = [paste your Project URL]
VITE_SUPABASE_ANON_KEY = [paste your anon/public key]
```

5. Click **"Save"** for each

---

## Step 6: Redeploy

1. In Vercel, go to **"Deployments"**
2. Click the **"..."** menu on your latest deployment
3. Click **"Redeploy"**
4. Wait ~30 seconds

---

## ✅ Test Real-Time Collaboration!

1. **Open your Vercel URL** in your browser
2. **Go to Idea Garden** and plant an idea
3. **Open the SAME URL in incognito/private mode**
4. Plant another idea there
5. **Watch them appear INSTANTLY in both windows!** 🎉

That's real-time collaboration working!

---

## 🔒 Optional: Add Security Rules (Recommended)

After testing, add Row Level Security:

1. In Supabase → **Table Editor** → **ideas table**
2. Click **"RLS"** toggle to **ON**
3. Go to **"Policies"** tab
4. Click **"New Policy"**
5. **Create two policies:**

**Policy 1: Allow Read**
- Name: `Allow public read`
- Operation: `SELECT`
- Target roles: `public`
- Policy definition: `true`

**Policy 2: Allow Insert**
- Name: `Allow public insert with limits`
- Operation: `INSERT`
- Target roles: `public`
- Policy definition:
```sql
char_length(text) <= 100 AND char_length(author) <= 30
```

6. Click **"Save"** for each

This allows anyone to read and create (but not delete) ideas!

---

## 📊 Monitor Your Database

In Supabase:
- **Table Editor** → See all ideas in real-time
- **Database** → View usage stats
- **API Docs** → Auto-generated API documentation

---

## 🎓 For Your Class

Your free tier includes:
- ✅ Unlimited API requests
- ✅ 500 MB database
- ✅ 50,000 monthly active users
- ✅ Real-time subscriptions
- ✅ Auto-scaling

**Perfect for a class project!** 🚀

---

## 🆘 Troubleshooting

**Ideas not showing up?**
- Check Table Editor in Supabase - are ideas being saved?
- Check browser console (F12) for errors
- Verify environment variables in Vercel

**Can't create table?**
- Make sure project finished initializing (~2 min)
- Try refreshing the page

**Real-time not working?**
- Check that Realtime is enabled (Settings → API → Realtime)
- Should be enabled by default

---

## 🎉 You're Done!

Your Idea Garden now has:
- ✅ Real-time collaboration
- ✅ Persistent storage
- ✅ 100% free
- ✅ No credit card required
- ✅ Professional database backend

Enjoy! 🌱✨

