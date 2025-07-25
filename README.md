# Anthony Jimenez - Portfolio Website with AI Chatbot

A modern portfolio website featuring an integrated AI chatbot powered by OpenAI's GPT API. The website showcases Anthony's background, projects, and skills while providing visitors with an interactive AI assistant that can answer questions about his experience and expertise.

## Features

- **Modern Portfolio Design**: Clean, responsive layout showcasing personal information, projects, and skills
- **Full-Featured AI Chat Interface**: ChatGPT-style chat panel with conversation history
- **OpenAI Integration**: Powered by GPT-3.5-turbo with custom system prompt containing Anthony's context
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Chat**: Dynamic message handling with typing indicators and error handling
- **Professional UI**: Gradient backgrounds, smooth animations, and modern typography

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI Integration**: OpenAI API (GPT-3.5-turbo)
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Font Awesome

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone or download the project files**
   ```bash
   cd anthony-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Getting Your OpenAI API Key

1. Go to [OpenAI's website](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to the API section
4. Generate a new API key
5. Copy the key and paste it in your `.env` file

**Important**: Keep your API key secure and never commit it to version control.

## Project Structure

```
anthony-portfolio/
├── server.js              # Express server with OpenAI integration
├── package.json           # Dependencies and scripts
├── .env.example          # Environment variables template
├── .env                  # Your environment variables (create this)
├── README.md             # This file
└── public/               # Static files served by Express
    ├── index.html        # Main portfolio page
    ├── style.css         # Styling and responsive design
    └── script.js         # Frontend JavaScript and chat functionality
```

## Key Features Explained

### AI Chat Interface

- **System Prompt**: Contains detailed context about Anthony's background, skills, and projects
- **Conversation History**: Maintains chat history for context-aware responses
- **Error Handling**: Graceful handling of API errors and network issues
- **Typing Indicators**: Visual feedback during AI response generation
- **Character Limits**: Input validation and character counting

### Backend API

- **POST /chat**: Main endpoint for processing chat messages
- **GET /health**: Health check endpoint
- **Static File Serving**: Serves the frontend files
- **CORS Enabled**: Allows cross-origin requests
- **Error Handling**: Comprehensive error handling for various scenarios

### Frontend Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Modern UI**: Gradient backgrounds, smooth animations, and professional styling
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic updates
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## Customization

### Updating Anthony's Information

To update the AI's knowledge about Anthony, edit the `SYSTEM_PROMPT` variable in `server.js`:

```javascript
const SYSTEM_PROMPT = `You are Anthony Jimenez's AI assistant...
// Add or modify information here
`;
```

### Styling Changes

All styles are contained in `public/style.css`. The design uses:
- CSS Grid and Flexbox for layouts
- CSS custom properties for consistent theming
- Responsive breakpoints for mobile optimization
- Smooth animations and transitions

### Adding New Projects

Edit the projects section in `public/index.html` to add new project cards:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Project Name</h3>
    <p>Project description...</p>
    <div class="tech-tags">
        <span class="tag">Technology</span>
    </div>
</div>
```

## Deployment

The application can be deployed to any platform that supports Node.js:

- **Heroku**: Add a `Procfile` with `web: node server.js`
- **Vercel**: Works out of the box with Node.js
- **Railway**: Simple deployment with automatic builds
- **DigitalOcean App Platform**: Easy deployment with environment variables

Remember to set your `OPENAI_API_KEY` environment variable in your deployment platform.

## Security Considerations

- API key is stored server-side and never exposed to the frontend
- Input validation and sanitization
- Rate limiting can be added for production use
- CORS is configured for security

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this code for your own portfolio projects.
