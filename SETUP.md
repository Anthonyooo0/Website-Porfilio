# Anthony's Portfolio Website with AI Chatbox

A modern, minimal portfolio website with integrated OpenAI-powered AI chatbox, inspired by tolunla.de design aesthetics.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your OpenAI API key to the `.env` file:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key_here
   PORT=3000
   ```

3. **Start the Server**
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
anthony-portfolio/
├── server.js              # Express server with OpenAI integration
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (add your API key here)
├── .env.example          # Environment variables template
├── README.md             # Project documentation
├── SETUP.md              # This setup guide
└── public/               # Frontend files
    ├── index.html        # Main HTML file
    ├── style.css         # Modern CSS with animations
    └── script.js         # Frontend JavaScript for chat
```

## 🔧 Customization

### Adding More Context to the AI
To add more information about yourself to the AI chatbox:

1. Open `server.js`
2. Find the `SYSTEM_PROMPT` variable (around line 11)
3. Add your additional context to the prompt
4. Restart the server

### Modifying the Design
- **Colors & Styling**: Edit `public/style.css`
- **Content**: Edit `public/index.html`
- **Chat Functionality**: Edit `public/script.js`

## 🎨 Design Features

- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Responsive Design**: Works perfectly on desktop and mobile
- **Subtle Animations**: Hover effects and smooth transitions
- **Left-aligned Layout**: Inspired by tolunla.de aesthetic
- **Full Chat Interface**: ChatGPT-style chat panel (not a small widget)

## 🤖 AI Chatbox Features

- **OpenAI Integration**: Uses GPT-3.5-turbo for responses
- **Conversation History**: Maintains context across messages
- **Error Handling**: Graceful handling of API errors
- **Responsive UI**: Clean chat interface that adapts to screen size

## 📝 Notes

- The AI chatbox requires a valid OpenAI API key to function
- Get your API key from: https://platform.openai.com/account/api-keys
- The server serves both the backend API and frontend files
- All your personal information is already included in the AI's system prompt
