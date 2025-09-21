# 🔒 Security Configuration

## ⚠️ IMPORTANT: Environment Variables Required

This application requires environment variables to function properly. **Never commit API keys or secrets to the repository.**

## 🔑 Required Environment Variables

### REACT_APP_API_KEY
- **Purpose**: TMDB (The Movie Database) API access
- **Required**: Yes
- **Where to get**: https://www.themoviedb.org/settings/api

## 🚀 Vercel Deployment Setup

### Step 1: Get Your TMDB API Key
1. Go to https://www.themoviedb.org/
2. Create a free account
3. Navigate to Settings → API
4. Request an API key (choose "Developer")
5. Copy your API key

### Step 2: Configure Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Click **Settings** tab
3. Click **Environment Variables** in sidebar
4. Add new variable:
   - **Name**: `REACT_APP_API_KEY`
   - **Value**: Your TMDB API key
   - **Environment**: Production, Preview, Development (all)
5. Click **Save**

### Step 3: Redeploy
- Push a new commit or manually redeploy in Vercel dashboard

## 🛡️ Security Best Practices

### ✅ DO:
- Use environment variables for all API keys
- Keep secrets in Vercel dashboard only
- Use different API keys for development/production
- Regularly rotate API keys

### ❌ DON'T:
- Commit API keys to repository
- Share API keys in chat/email
- Use production keys in development
- Ignore security warnings from GitGuardian

## 🚨 If You Exposed a Secret

1. **Immediately revoke** the exposed API key
2. **Generate a new** API key
3. **Update environment variables** with new key
4. **Remove from git history** (if needed)
5. **Redeploy** your application

## 📞 Support

If you need help with security setup:
1. Check Vercel documentation: https://vercel.com/docs/concepts/projects/environment-variables
2. Check TMDB API docs: https://developers.themoviedb.org/3/getting-started/introduction
