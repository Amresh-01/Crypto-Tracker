# Crypto Tracker - https://cryptoleads.netlify.app


![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
[![CoinGecko API](https://img.shields.io/badge/CoinGecko-API-green?style=for-the-badge)](https://www.coingecko.com/en/api)


A Real-time CryptoCurrency tracking application built with React that provides live price updates and market data using the CoinGecko API.


## 📸 Screenshots

### Desktop View
![Desktop Screenshot]
<img width="1365" height="684" alt="Screenshot 2025-08-11 192757" src="https://github.com/user-attachments/assets/33a2d25c-42f2-43cc-8737-bfc91d681f00" />
<img width="1365" height="676" alt="Screenshot 2025-08-11 192850" src="https://github.com/user-attachments/assets/28b96268-9121-433a-b112-0156edc3c371" />


### Mobile View
<img width="220" height="475" alt="Screenshot 2025-08-11 194722" src="https://github.com/user-attachments/assets/ba4a775e-aecb-43d3-8d94-c1c782df3d65" />
<img width="221" height="469" alt="Screenshot 2025-08-11 194741" src="https://github.com/user-attachments/assets/68cef77f-8479-40cf-9292-59f3553d60e1" />


### Live Demo
🚀 [View Live Application](https://cryptoleads.netlify.app/))

## 🚀 Features

- 📊 **Real-time Price Tracking**: Live cryptocurrency prices from CoinGecko API
- 🔍 **Search Functionality**: Find and track any cryptocurrency
- 📈 **Market Data**: Market cap, volume, and price change indicators
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎨 **Clean UI**: Modern and intuitive user interface

## 🛠️ Technologies Used

- **Frontend Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API**: CoinGecko API v3
- **HTTP Client**: Axios/Fetch API
- **State Management**: React Hooks (useState, useEffect)

## 📦 Installation & Setup

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amresh-01/Crypto-Tracker.git
   cd Crypto-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Install Tailwind CSS** (if not already configured)
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. **Open your browser**
   
   The application will be running at `http://localhost:5173`

## 🖥️ Usage

1. **View Cryptocurrencies**: Browse through the list of popular cryptocurrencies with real-time prices
2. **Search**: Use the search functionality to find specific coins
3. **Price Monitoring**: Monitor price changes with percentage indicators
4. **Market Data**: View market cap, volume, and other relevant market statistics

## 🌐 API Reference

This application uses the [CoinGecko API](https://www.coingecko.com/en/api/documentation) to fetch cryptocurrency data.

### Key Endpoints Used:
- `GET /coins/markets` - Fetches market data for cryptocurrencies
- `GET /coins/list` - Gets list of all available coins
- `GET /simple/price` - Gets current price of cryptocurrencies

**Note**: CoinGecko API is free and doesn't require an API key for basic usage.

## 📁 Project Structure

```
Crypto-Tracker/
├── public/
│   └── index.html
├── screenshots/
│   ├── desktop-view.png
│   ├── mobile-view.png
│   ├── search-feature.png
│   └── video-thumbnail.png
├── demo/
│   └── crypto-tracker-demo.mp4
├── src/
│   ├── components/
│   │   ├── CoinList/
│   │   ├── CoinItem/
│   │   └── SearchBar/
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 🎯 Key Features Implementation

### Real-time Data Fetching
```javascript
useEffect(() => {
  const fetchCryptoData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      const data = await response.json();
      setCryptoData(data);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  };

  fetchCryptoData();
  const interval = setInterval(fetchCryptoData, 30000); // Update every 30 seconds

  return () => clearInterval(interval);
}, []);
```

### Search Functionality
- Filter cryptocurrencies by name or symbol
- Real-time search results
- Case-insensitive matching

### Tailwind CSS Configuration

Make sure your `tailwind.config.js` is configured properly:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

And your main CSS file (`src/index.css`) includes Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📊 Data Displayed

- **Cryptocurrency Name & Symbol**
- **Current Price** (in USD)
- **24h Price Change** (percentage and absolute)
- **Market Cap**
- **24h Trading Volume**
- **Circulating Supply**

## 📷 How to Add Screenshots and Video

### Taking Screenshots

1. **Desktop Screenshots**: 
   - Take full-page screenshots at 1920x1080 resolution
   - Show the main dashboard with crypto data
   - Capture search functionality in action

2. **Mobile Screenshots**:
   - Use responsive design mode in browser dev tools
   - Take screenshots at 375x667 (iPhone SE) or similar
   - Show mobile navigation and responsive layout

### Recording Demo Video

1. **Screen Recording**:
   - Use tools like OBS Studio, Loom, or QuickTime
   - Record at 1080p resolution
   - Keep video under 2 minutes
   - Show key features: browsing, searching, real-time updates

2. **Video Optimization**:
   - Convert to MP4 format
   - Compress for web (aim for under 10MB)
   - Create a thumbnail image (1280x720)

### File Organization

```
screenshots/
├── desktop-view.png       # Main dashboard view
├── mobile-view.png        # Mobile responsive view  
├── search-feature.png     # Search functionality
└── video-thumbnail.png    # Video preview image

demo/
└── crypto-tracker-demo.mp4  # Demo video file
```

### Recommended Screenshot Content

- **Homepage**: Show the crypto list with prices and changes
- **Search Results**: Demonstrate the search functionality
- **Responsive Design**: Mobile view showing adaptability
- **Loading States**: Show how data loads and updates
- **Dark/Light Mode**: If implemented, show theme switching

## 🔧 Customization

You can customize the application by:

- Modifying the number of coins displayed per page
- Adding different currencies (EUR, GBP, etc.)
- Implementing additional chart visualizations
- Adding portfolio tracking features
- Implementing price alerts

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Amresh Kumar**
- GitHub: [@Amresh-01](https://github.com/Amresh-01)

## 🙏 Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing the comprehensive cryptocurrency API
- [React](https://reactjs.org/) for the powerful frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool

## 📞 Support

If you have any questions or run into issues, please create an issue in this repository.

---

⭐ If you found this project helpful, please give it a star on GitHub!

**Happy Coding!** 🚀
