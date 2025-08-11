# Crypto Tracker

A real-time cryptocurrency tracking application built with React that provides live price updates and market data using the CoinGecko API.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
[![CoinGecko API](https://img.shields.io/badge/CoinGecko-API-green?style=for-the-badge)](https://www.coingecko.com/en/api)

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

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
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
├── src/
│   ├── components/
│   │   ├── CoinList/
│   │   ├── CoinItem/
│   │   └── SearchBar/
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
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

### Search Functionality
- Filter cryptocurrencies by name or symbol
- Real-time search results
- Case-insensitive matching

## 📊 Data Displayed

- **Cryptocurrency Name & Symbol**
- **Current Price** (in USD)
- **24h Price Change** (percentage and absolute)
- **Market Cap**
- **24h Trading Volume**
- **Circulating Supply**

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

**Amresh Chaurasiya**
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
