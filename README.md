# Fraud Detection in Financial Transactions

A modern, interactive web application that helps detect fraudulent financial transactions using machine learning principles and risk analysis.

## 📋 Features

- **Real-time Fraud Detection**: Instantly analyze transaction risk using smart algorithms
- **Multiple Transaction Types**: Support for UPI, Card, Net Banking, ATM, and Wallet transactions
- **Comprehensive Risk Factors**: Considers amount, time, location, device, and transaction history
- **User-Friendly Interface**: Clean and responsive design for desktop and mobile
- **Instant Results**: Get fraud risk score (0-100) with clear indicators
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries needed

## 🎯 How It Works

The fraud detection system analyzes the following factors:

1. **Amount Check**: Compares transaction amount with account balance
2. **Transaction Type**: Different types have different risk levels
3. **Transaction Time**: Flags unusual hours (late night/early morning)
4. **Customer Age**: Detects unusual age patterns
5. **Failed Transactions**: Tracks previous failed attempts
6. **Location Risk**: Analyzes geographic anomalies (0-10 scale)
7. **Device Risk**: Checks for suspicious device activity (0-10 scale)
8. **International Transactions**: Flags cross-border transactions

### Risk Score Calculation
- **0-50**: Transaction appears safe ✅
- **50-100**: High fraud risk detected ⚠️

## 🚀 Quick Start

### 1. Clone or Download the Repository
```bash
git clone https://github.com/ymuthekar08-prog/ml.git
cd ml
```

### 2. Open the Website
Simply open `index.html` in your web browser:
- Double-click `index.html`, or
- Right-click → Open with → Browser

### 3. Use the Fraud Checker
- Fill in transaction details
- Click "Predict Fraud"
- View the risk score and result

## 📁 Project Structure

```
ml/
├── index.html          # Main HTML file with form structure
├── style.css           # Responsive styling and design
├── script.js           # Fraud detection logic and interactivity
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and form structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6)**: Interactive fraud detection algorithm

## 📝 Usage Example

1. **Sample Transaction**:
   - Amount: ₹45,000
   - Type: Card
   - Hour: 23 (11 PM)
   - Age: 22
   - Balance: ₹30,000
   - Location Risk: 9/10
   - Device Risk: 8/10
   - Failed Transactions: 4
   - International: No

2. **Result**: High fraud risk detected (Score: 85+)

## 🌐 Deployment

### Deploy to GitHub Pages
1. Go to repository settings
2. Enable GitHub Pages from the `main` branch
3. Your site will be live at: `https://ymuthekar08-prog.github.io/ml/`

### Deploy to Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **Any Web Host**: Upload all files via FTP

## 🔧 Customization

### Change Risk Thresholds
Edit `script.js` line where `riskScore > 50`:
```javascript
const isFraud = riskScore > 50; // Change 50 to your threshold
```

### Modify Risk Factors
Adjust the point values in the `calculateRiskScore()` function in `script.js`

### Customize Styling
Edit `style.css` to change colors, fonts, and layout

## ✨ Features to Consider Adding

- [ ] Backend integration with real transaction data
- [ ] User authentication and transaction history
- [ ] Machine learning model integration (Python/TensorFlow)
- [ ] Database for storing predictions
- [ ] Email alerts for fraud detection
- [ ] Mobile app version
- [ ] Real-time API integration with banks
- [ ] Dark mode theme

## 📊 Risk Factor Weights

| Factor | Max Points | Description |
|--------|-----------|-------------|
| Amount | 25 | Large compared to balance |
| Transaction Type | 20 | Card transactions score highest |
| Unusual Hours | 15 | Late night transactions (10 PM - 5 AM) |
| Failed Attempts | 15 | Multiple failed transactions |
| Device Risk | 20 | Suspicious device activity |
| Location Risk | 20 | Geographic anomalies |
| Age Anomaly | 10 | Unusual age patterns |
| International | 10 | Cross-border transactions |

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📧 Support

If you find any issues or have suggestions, please open an issue on GitHub.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by **Yash Muthekar**  
GitHub: [@ymuthekar08-prog](https://github.com/ymuthekar08-prog)

---

**Note**: This is a demonstration project for educational purposes. For production use, integrate with real APIs and machine learning models for accurate fraud detection.
