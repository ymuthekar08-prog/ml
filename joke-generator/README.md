# Random Joke Generator

A fun and interactive web application that generates random jokes using an external API. Get a laugh every time you click!

## 🎉 Features

- **Random Joke Generation**: Fetch random jokes from JokeAPI
- **Multiple Categories**: Choose from General, Programming, and Knock-Knock jokes
- **Single & Two-Part Jokes**: Displays both single-line and setup/punchline jokes
- **Copy to Clipboard**: Easily copy jokes to share with friends
- **Joke Counter**: Track how many jokes you've generated
- **Keyboard Shortcut**: Press Space to get a new joke instantly
- **Responsive Design**: Works perfectly on mobile and desktop
- **Error Handling**: Graceful error messages if API fails
- **Loading Animation**: Visual feedback while fetching jokes

## 🌐 API Used

**JokeAPI** - Free, open-source API for random jokes
- No authentication required
- No rate limiting for personal use
- Multiple joke categories
- Website: https://jokeapi.dev

## 🚀 Quick Start

### 1. View Online
Open `index.html` in your web browser or access the live version:
- GitHub Pages: `https://ymuthekar08-prog.github.io/ml/joke-generator/`

### 2. Local Setup
```bash
git clone https://github.com/ymuthekar08-prog/ml.git
cd ml/joke-generator
# Open index.html in your browser
```

## 📁 Project Structure

```
joke-generator/
├── index.html      # HTML structure with form and joke display
├── style.css       # Responsive styling and animations
├── script.js       # Joke API integration and logic
└── README.md       # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and form structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Async/await for API calls, DOM manipulation
- **JokeAPI**: External REST API for joke data

## 📖 How It Works

1. **API Integration**: The app fetches jokes from JokeAPI v2
2. **Category Selection**: Users can filter jokes by category
3. **Async Fetching**: Uses `fetch()` with async/await for smooth loading
4. **Error Handling**: Catches and displays errors gracefully
5. **Copy Functionality**: Uses Clipboard API to copy jokes
6. **Counter**: Tracks total jokes loaded in the session

## 🎯 Available Categories

| Category | Description |
|----------|------------|
| Random | Any random joke |
| General | General jokes |
| Programming | Tech and programming jokes |
| Knock-Knock | Classic knock-knock jokes |

## 🎮 How to Use

1. **Click "Get Joke"** to fetch a random joke
2. **Select a Category** to filter jokes
3. **Click "Copy Joke"** to copy the text to clipboard
4. **Press Space** on your keyboard as a shortcut
5. **Watch the counter** to see how many you've loaded

## 💡 Features Explained

### Joke Types
- **Single-part**: Simple one-liner jokes
- **Two-part**: Setup followed by a punchline

### Error Handling
- Displays user-friendly error messages
- Retry mechanism - just click again
- Network error detection

### Keyboard Shortcut
Press `Space` while on the page to instantly fetch a new joke!

### Copy to Clipboard
- Click "Copy Joke" to copy the current joke
- Visual feedback confirming the copy action
- Automatic reset after 2 seconds

## 🎨 Design Features

- **Modern Gradient Theme**: Purple to pink gradient
- **Smooth Animations**: Transitions and loading spinner
- **Responsive Layout**: Mobile-first design approach
- **Accessibility**: Proper button states and focus management
- **Visual Feedback**: Active states and loading indicators

## 📱 Responsive Design

- **Desktop**: Full-width optimized layout
- **Tablet**: Adjusted spacing and text sizes
- **Mobile**: Single-column layout with touch-friendly buttons

## 🔧 Customization

### Change API Categories
Edit `script.js` line with categories in `categorySelect`:
```javascript
// Add more options in index.html
<option value="your-category">Your Category</option>
```

### Change Colors
Edit `style.css` gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change API Endpoint
Modify `script.js`:
```javascript
const JOKE_API_URL = 'https://v2.jokeapi.dev/joke';
```

## 📊 API Response Structure

```json
{
  "type": "single",
  "joke": "Why did the scarecrow win an award? He was outstanding in his field!",
  "error": false
}
```

Or for two-part jokes:
```json
{
  "type": "twopart",
  "setup": "Why did the programmer quit his job?",
  "delivery": "Because he didn't get arrays!",
  "error": false
}
```

## 🌍 Deployment Options

### GitHub Pages (Recommended)
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Your site: `https://yourusername.github.io/ml/joke-generator/`

### Other Platforms
- **Netlify**: Drag and drop folder
- **Vercel**: Connect GitHub repo
- **Firebase Hosting**: Deploy via CLI
- **Any Static Host**: Upload HTML, CSS, JS files

## 🐛 Troubleshooting

### Jokes not loading?
- Check internet connection
- Verify JokeAPI is accessible (https://jokeapi.dev)
- Check browser console for errors (F12)
- Try refreshing the page

### Copy not working?
- Ensure HTTPS is used (required for Clipboard API)
- Check browser permissions
- Try using Ctrl+C after selection as fallback

### Slow loading?
- Check network speed
- Try a different category
- Clear browser cache
- Reload the page

## 🚀 Future Enhancements

- [ ] Add favorites/bookmarks feature
- [ ] Save jokes to local storage
- [ ] Share on social media
- [ ] Dark mode theme
- [ ] Joke history
- [ ] Rate jokes (thumbs up/down)
- [ ] Search functionality
- [ ] Multiple API sources
- [ ] Custom joke upload
- [ ] Internationalization (i18n)

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **JokeAPI**: https://jokeapi.dev - Free joke API
- **Design Inspiration**: Modern web UI/UX practices
- **Author**: Yash Muthekar

---

**Enjoy the laughs!** 😂 Don't forget to share your favorite jokes with friends!
