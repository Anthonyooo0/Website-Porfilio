class ChatInterface {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');
        this.chatStatus = document.getElementById('chatStatus');
        this.charCount = document.getElementById('charCount');
        this.conversationId = 'default';
        
        this.initializeEventListeners();
        this.updateCharCount();
    }

    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        this.chatInput.addEventListener('input', () => this.updateCharCount());
        
        this.chatInput.addEventListener('input', () => this.autoResizeInput());
    }

    updateCharCount() {
        const currentLength = this.chatInput.value.length;
        this.charCount.textContent = `${currentLength}/500`;
        
        if (currentLength > 450) {
            this.charCount.style.color = '#e53e3e';
        } else if (currentLength > 400) {
            this.charCount.style.color = '#dd6b20';
        } else {
            this.charCount.style.color = '#a0aec0';
        }
    }

    autoResizeInput() {
        this.chatInput.style.height = 'auto';
        this.chatInput.style.height = Math.min(this.chatInput.scrollHeight, 120) + 'px';
    }

    async sendMessage() {
        const message = this.chatInput.value.trim();
        
        if (!message) return;
        
        this.setInputState(false);
        
        this.addMessage(message, 'user');
        
        this.chatInput.value = '';
        this.updateCharCount();
        this.autoResizeInput();
        
        this.showTypingIndicator();
        
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    conversationId: this.conversationId
                })
            });

            const data = await response.json();
            
            this.hideTypingIndicator();
            
            if (response.ok) {
                this.addMessage(data.response, 'ai');
                this.updateStatus('Ready', 'online');
            } else {
                this.showError(data.error || 'An error occurred while processing your request.');
                this.updateStatus('Error', 'error');
            }
            
        } catch (error) {
            console.error('Chat error:', error);
            this.hideTypingIndicator();
            this.showError('Unable to connect to the server. Please check your connection and try again.');
            this.updateStatus('Offline', 'offline');
        } finally {
            this.setInputState(true);
        }
    }

    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        
        if (type === 'ai') {
            avatarDiv.innerHTML = '<i class="fas fa-robot"></i>';
        } else {
            avatarDiv.innerHTML = '<i class="fas fa-user"></i>';
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const paragraph = document.createElement('p');
        paragraph.textContent = content;
        contentDiv.appendChild(paragraph);
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span>Anthony's AI is typing</span>
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
        this.updateStatus('Thinking...', 'thinking');
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        this.chatMessages.appendChild(errorDiv);
        this.scrollToBottom();
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }

    setInputState(enabled) {
        this.chatInput.disabled = !enabled;
        this.sendButton.disabled = !enabled;
        
        if (enabled) {
            this.chatInput.focus();
        }
    }

    updateStatus(text, type) {
        const statusSpan = this.chatStatus.querySelector('span:last-child');
        const statusDot = this.chatStatus.querySelector('.status-dot');
        
        statusSpan.textContent = text;
        
        statusDot.className = 'status-dot';
        switch (type) {
            case 'online':
                statusDot.style.background = '#48bb78';
                break;
            case 'thinking':
                statusDot.style.background = '#ed8936';
                break;
            case 'error':
                statusDot.style.background = '#e53e3e';
                break;
            case 'offline':
                statusDot.style.background = '#a0aec0';
                break;
            default:
                statusDot.style.background = '#48bb78';
        }
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChatInterface();
    
    addInteractiveEnhancements();
});

function addInteractiveEnhancements() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
    
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
        });
    });
}

function formatTimestamp(date) {
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(date);
}

window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('online', () => {
    console.log('Connection restored');
});

window.addEventListener('offline', () => {
    console.log('Connection lost');
});
