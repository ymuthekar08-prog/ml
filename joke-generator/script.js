// JokeAPI Configuration
const JOKE_API_URL = 'https://v2.jokeapi.dev/joke';

// DOM Elements
const jokeDisplay = document.getElementById('jokeDisplay');
const getJokeBtn = document.getElementById('getJokeBtn');
const copyBtn = document.getElementById('copyBtn');
const categorySelect = document.getElementById('categorySelect');
const jokeCount = document.getElementById('jokeCount');

// State
let currentJoke = '';
let jokesLoaded = 0;

// Event Listeners
getJokeBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyToClipboard);
categorySelect.addEventListener('change', fetchJoke);

// Fetch Joke from API
async function fetchJoke() {
  const category = categorySelect.value;
  
  // Show loading state
  jokeDisplay.innerHTML = '<div class="loading"></div><p class="loading-text">Loading joke...</p>';
  getJokeBtn.disabled = true;
  copyBtn.disabled = true;

  try {
    // Build API URL based on category
    let url = JOKE_API_URL;
    
    if (category !== 'random') {
      url += `/${category}`;
    } else {
      url += '/Any';
    }

    // Add query parameter to exclude certain flags
    url += '?type=single';

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    // Check if error from API
    if (data.error) {
      throw new Error('Could not fetch joke');
    }

    // Display joke
    displayJoke(data);
    
    // Increment counter
    jokesLoaded++;
    jokeCount.textContent = jokesLoaded;
    
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeDisplay.innerHTML = `<p class="error-text">❌ Oops! Could not load joke. Please try again!</p>`;
  } finally {
    getJokeBtn.disabled = false;
    copyBtn.disabled = false;
  }
}

// Display Joke
function displayJoke(data) {
  jokeDisplay.classList.add('active');
  
  if (data.type === 'single') {
    // Single-part joke
    currentJoke = data.joke;
    jokeDisplay.innerHTML = `<p class="joke-text">${escapeHtml(data.joke)}</p>`;
  } else if (data.type === 'twopart') {
    // Two-part joke (setup and delivery)
    currentJoke = `${data.setup}\n\n${data.delivery}`;
    jokeDisplay.innerHTML = `
      <div>
        <p class="joke-text">${escapeHtml(data.setup)}</p>
        <p class="joke-punchline">${escapeHtml(data.delivery)}</p>
      </div>
    `;
  }

  // Enable copy button
  copyBtn.disabled = false;

  // Remove active class after animation
  setTimeout(() => {
    jokeDisplay.classList.remove('active');
  }, 500);
}

// Copy to Clipboard
function copyToClipboard() {
  if (!currentJoke) return;

  navigator.clipboard.writeText(currentJoke).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '✓ Copied!';
    
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
    alert('Could not copy to clipboard');
  });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Load initial joke on page load
window.addEventListener('load', () => {
  fetchJoke();
});

// Keyboard shortcut - Press Space to get new joke
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && e.target === document.body) {
    e.preventDefault();
    fetchJoke();
  }
});
