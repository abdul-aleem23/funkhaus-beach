# Funkhaus Beach Volleyball

A modern, responsive website for Berlin's premier beach volleyball destination. Built with React, Vite, Tailwind CSS, and Framer Motion for smooth animations and professional user experience.

## 🏐 Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Professional page transitions and micro-interactions using Framer Motion
- **Modern UI** - Clean design with custom typography (Akira + Open Sans fonts)
- **Smooth Navigation** - Seamless scrolling between sections with custom offset handling
- **Professional Content** - Focused on beach volleyball community and business collaboration
- **Performance Optimized** - Fast loading with optimized animations and single-trigger effects

## 🚀 Quick Start

### Prerequisites
- Node.js (Latest LTS version)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd funkhaus-beach
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## 🛠️ Development Commands

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🎨 Design System

### Color Palette
- **Primary Navy**: #012169 (headings, accents)
- **Primary Yellow**: #FEDD00 (buttons, highlights)
- **Light Gray**: #f8f9fa (section backgrounds)
- **White**: #ffffff (card backgrounds)
- **Text**: Black and gray variations

### Typography
- **Headlines**: Akira Expanded (bold, modern)
- **Body Text**: Open Sans (clean, readable)

### Animations
- **Page Load**: Staggered component reveals (0.2-0.8s durations)
- **Scroll Triggered**: Elements animate on viewport entry
- **Interactions**: Button hovers, card lifts, smooth transitions
- **Navigation**: Custom smooth scrolling between sections

## 🏗️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.3
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion
- **Icons**: Custom SVG icons
- **Images**: Optimized Unsplash photography

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation with animations
│   ├── Hero.jsx        # Landing section
│   ├── Cards.jsx       # Testimonials
│   ├── Gallery.jsx     # Image carousel
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Site footer
├── utils/              # Utility functions
│   └── smoothScroll.js # Custom scroll navigation
├── assets/             # Static assets
│   └── plogo.svg      # Brand logo
├── App.jsx            # Main application
├── index.css          # Global styles
└── main.jsx           # Application entry point
```

## 🌟 Key Features

- **Mobile-First Responsive Design** - Optimized layouts for all screen sizes
- **Professional Animations** - Smooth, performance-optimized transitions
- **Accessibility Ready** - Semantic HTML and keyboard navigation support
- **Modern Development** - ES6+, React hooks, and modern build tools
- **SEO Friendly** - Clean markup and semantic structure
- **Fast Performance** - Optimized images, efficient animations, and minimal bundle size

## 🚀 Deployment

The project is production-ready and can be deployed to any static hosting service:

```bash
npm run build  # Generates optimized production build in /dist
```

**Built for Berlin's beach volleyball community** 🏐
