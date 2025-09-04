# Ravora Ventures - Vercel Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites
- Vercel account (free at vercel.com)
- GitHub account
- Node.js installed locally

### Step 1: Prepare the Repository

1. **Initialize Git Repository**
   ```bash
   cd ravoraventures
   git init
   git add .
   git commit -m "Initial commit: Ravora Ventures MERN stack website"
   ```

2. **Create GitHub Repository**
   - Go to GitHub.com
   - Create a new repository named "ravoraventures"
   - Don't initialize with README (we already have files)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/ravoraventures.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy Frontend to Vercel

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the `frontend` folder as the root directory

3. **Configure Build Settings**
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

4. **Environment Variables**
   - Add `REACT_APP_API_URL` with your backend URL
   - For now, use: `https://your-backend-url.vercel.app/api`

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

### Step 3: Deploy Backend to Vercel

1. **Create Backend Repository**
   - Create a separate GitHub repository for the backend
   - Push the backend code

2. **Deploy Backend**
   - Create a new Vercel project
   - Select the backend repository
   - Configure as Node.js project

3. **Backend Configuration**
   - **Build Command**: `npm install`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

4. **Environment Variables for Backend**
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

### Step 4: Update Frontend API URL

1. **Get Backend URL**
   - Copy your backend Vercel URL
   - Format: `https://your-backend-project.vercel.app`

2. **Update Frontend Environment**
   - Go to your frontend Vercel project
   - Go to Settings > Environment Variables
   - Update `REACT_APP_API_URL` to: `https://your-backend-project.vercel.app/api`

3. **Redeploy Frontend**
   - Trigger a new deployment
   - Your frontend will now connect to the backend

### Step 5: Set up MongoDB Atlas

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
   - Create a free account

2. **Create Cluster**
   - Create a new cluster (free tier)
   - Choose a region close to your users

3. **Get Connection String**
   - Go to Database > Connect
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

4. **Update Backend Environment**
   - Add `MONGODB_URI` to your backend Vercel environment variables

### Step 6: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your frontend Vercel project
   - Go to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - Your site will be available at `https://yourdomain.com`

## 🔧 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that all dependencies are in package.json
   - Ensure Node.js version compatibility
   - Check build logs in Vercel dashboard

2. **API Not Working**
   - Verify backend is deployed and running
   - Check CORS configuration
   - Verify environment variables

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check that CSS files are being imported
   - Verify build process includes CSS

### Environment Variables Checklist

**Frontend (.env)**
```
REACT_APP_API_URL=https://your-backend-url.vercel.app/api
```

**Backend (.env)**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ravoraventures
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
PORT=5000
```

## 📊 Monitoring

1. **Vercel Analytics**
   - Enable in Vercel dashboard
   - Monitor performance and usage

2. **Error Tracking**
   - Check Vercel function logs
   - Monitor API responses

3. **Performance**
   - Use Vercel Speed Insights
   - Monitor Core Web Vitals

## 🎉 Success!

Once deployed, your Ravora Ventures website will be live at:
- **Frontend**: `https://your-project.vercel.app`
- **Backend API**: `https://your-backend-project.vercel.app/api`

The website will be fully functional with:
- ✅ Responsive design
- ✅ Contact forms working
- ✅ Newsletter subscription
- ✅ Portfolio showcase
- ✅ All 9 pages accessible
- ✅ Smooth animations
- ✅ SEO optimized
