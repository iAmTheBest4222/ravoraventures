# Ravora Ventures - MERN Stack Website

A professional, multi-page venture capital website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) inspired by Sequoia Capital's design excellence.

## 🚀 Features

- **Modern Design**: Clean, professional design with 60-30-10 color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Multi-page**: 9 comprehensive pages covering all aspects of the business
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Contact Forms**: Functional contact and newsletter subscription forms
- **Portfolio Management**: Dynamic portfolio showcase with filtering
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 📁 Project Structure

```
ravoraventures/
├── frontend/                 # React.js frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── common/       # Header, Footer, Navigation
│   │   │   ├── ui/          # Button, Card, Modal, Form
│   │   │   └── sections/    # Page sections
│   │   ├── pages/           # All 9 pages
│   │   ├── styles/          # CSS and styling
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   └── assets/          # Images and static files
│   └── package.json
├── backend/                 # Node.js/Express backend
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── config/              # Database configuration
│   └── server.js            # Main server file
└── README.md
```

## 🎨 Design System

### Color Scheme (60-30-10 Rule)
- **Primary (60%)**: Deep Charcoal (#1a1a1a), Pure White (#ffffff), Light Gray (#f8fafc)
- **Secondary (30%)**: Rich Navy Blue (#0f172a), Medium Gray (#64748b), Soft Gray (#e2e8f0)
- **Accent (10%)**: Vibrant Orange (#f97316), Success Green (#10b981), Warning Red (#ef4444)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Hierarchy**: Clear typography hierarchy with proper spacing

## 📱 Pages

1. **Home** (`/`) - Hero section, featured content, portfolio highlights
2. **About** (`/about`) - Company story, mission, vision, team
3. **Services** (`/services`) - Complete service breakdown
4. **Focus Areas** (`/focus`) - Investment sectors and focus areas
5. **Our Approach** (`/approach`) - 6-step process visualization
6. **For Startups** (`/startups`) - Application process and benefits
7. **For Investors** (`/investors`) - Investment opportunities and network
8. **Portfolio** (`/portfolio`) - Company showcase with filtering
9. **Contact** (`/contact`) - Contact form and information

## 🛠 Technology Stack

### Frontend
- **React.js** 19.1.1 - UI library
- **React Router** - Client-side routing
- **Framer Motion** - Animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons
- **React Hook Form** - Form handling
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email functionality
- **Express Rate Limit** - API protection
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ravoraventures
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Copy environment file
   cp env.example .env
   
   # Edit .env with your configuration
   ```

5. **Start Development Servers**

   **Frontend (Terminal 1)**
   ```bash
   cd frontend
   npm start
   ```

   **Backend (Terminal 2)**
   ```bash
   cd backend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📊 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (Admin)
- `GET /api/contact/:id` - Get single contact (Admin)
- `PUT /api/contact/:id` - Update contact (Admin)

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `DELETE /api/newsletter` - Unsubscribe from newsletter
- `GET /api/newsletter` - Get all subscribers (Admin)
- `GET /api/newsletter/stats` - Get newsletter statistics (Admin)

### Portfolio
- `GET /api/portfolio` - Get all portfolio companies
- `GET /api/portfolio/:id` - Get single portfolio company
- `GET /api/portfolio/stats/overview` - Get portfolio statistics
- `POST /api/portfolio` - Create portfolio company (Admin)
- `PUT /api/portfolio/:id` - Update portfolio company (Admin)
- `DELETE /api/portfolio/:id` - Delete portfolio company (Admin)

## 🎯 Key Features

### Frontend Features
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Form Validation**: Client-side and server-side validation
- **SEO Optimization**: Meta tags, structured data, and performance optimization
- **Accessibility**: ARIA labels, keyboard navigation, and WCAG compliance

### Backend Features
- **RESTful API**: Clean, well-documented API endpoints
- **Data Validation**: Input validation and sanitization
- **Rate Limiting**: Protection against abuse
- **Error Handling**: Comprehensive error handling and logging
- **Security**: Helmet, CORS, and other security measures

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the production app: `npm run build`
2. Deploy to Vercel or Netlify
3. Configure environment variables

### Backend (Railway/Heroku)
1. Deploy to Railway or Heroku
2. Configure MongoDB connection
3. Set up environment variables

### Database (MongoDB Atlas)
1. Create MongoDB cluster
2. Configure security settings
3. Set up database users

## 📈 Performance Optimization

- **Code Splitting**: Route-based code splitting
- **Image Optimization**: WebP format and lazy loading
- **Caching**: API response caching
- **Compression**: Gzip compression
- **CDN**: Static asset delivery

## 🔒 Security

- **Input Validation**: Server-side validation
- **Rate Limiting**: API protection
- **CORS**: Cross-origin protection
- **Helmet**: Security headers
- **Environment Variables**: Sensitive data protection

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, email info@ravoraventures.com or create an issue in the repository.

---

**Ravora Ventures** - Where Ideas Meet Capital. Where Startups Become Stories.
