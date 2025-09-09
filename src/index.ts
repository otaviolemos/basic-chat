import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Hello World endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World from Basic Chat!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// Chat endpoint placeholder
app.get('/api/chat', (req, res) => {
  res.json({ 
    message: 'Chat API endpoint - Coming soon!',
    version: '1.0.0'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});

export default app;
