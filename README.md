# Netflix Clone 2024 🎬

A modern Netflix clone built with React, featuring movie browsing, trailers, and responsive design.

## 🚀 Live Demo

[Deploy on Vercel](https://vercel.com/new) - Ready for deployment!

## ✨ Features

- 🎭 Netflix-style UI with responsive design
- 🎬 Movie browsing with multiple categories
- 🎥 YouTube trailer integration
- 🔍 Search functionality
- 📱 Mobile-friendly interface
- ⚡ Fast loading with optimized images

## 🛠️ Tech Stack

- **Frontend**: React 18, Material-UI Icons
- **Styling**: CSS3 with responsive design
- **API**: The Movie Database (TMDB)
- **Deployment**: Vercel-ready configuration

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd netflix-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your TMDB API key:
   ```
   REACT_APP_API_KEY=your_actual_api_key_here
   ```

4. **Get TMDB API Key**
   - Visit [TMDB API](https://www.themoviedb.org/settings/api)
   - Create account and request API key
   - Copy the API key to your `.env.local` file

5. **Start development server**
   ```bash
   npm start
   ```

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variable: `REACT_APP_API_KEY`
   - Deploy automatically!

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service

## 🔧 Configuration

### Environment Variables
- `REACT_APP_API_KEY` - Your TMDB API key (required)

### Project Structure
```
src/
├── Components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Banner/         # Hero banner with featured movie
│   ├── Row/            # Movie row component
│   ├── RowList/        # Collection of movie rows
│   └── Footer/         # Footer component
├── Pages/              # Page components
├── Utils/              # API configuration and requests
└── assets/             # Images and static assets
```

## 🛡️ Security

- ✅ No API keys in source code
- ✅ Environment variables properly configured
- ✅ .gitignore protects sensitive files
- ✅ Production build optimized

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with deployment, please open an issue on GitHub.

---

**Happy Coding! 🎬✨**
