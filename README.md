# Basic Chat

A basic chat application built with TypeScript, Node.js, and Express.js.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Run in development mode with TypeScript
npm run dev

# Run tests
npm test

# Type checking
npm run type-check

# Build for production
npm run build
```

## CI/CD Pipeline

This project includes automated CI/CD pipelines using GitHub Actions:

### Continuous Integration (CI)
- Runs on every pull request and push to main/master
- Executes TypeScript type checking
- Runs unit tests
- Located in `.github/workflows/ci.yml`

### Deployment to Heroku
- Runs on every push to main/master branch
- Can also be triggered manually
- Builds the TypeScript project
- Deploys to Heroku
- Located in `.github/workflows/deploy.yml`

### Heroku Setup

To set up Heroku deployment, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secrets:

- `HEROKU_API_KEY`: Your Heroku API key (get it from https://dashboard.heroku.com/account)
- `HEROKU_APP_NAME`: Your Heroku app name
- `HEROKU_EMAIL`: Your Heroku account email

### Heroku App Setup

1. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```

2. The app will automatically use the Node.js buildpack and run the build process during deployment.

## Project Structure

```
.
├── .github/workflows/    # GitHub Actions workflows
├── src/                  # Source code (TypeScript)
│   └── index.ts         # Main Express.js server
├── test/                 # Test files
├── dist/                 # Build output (generated)
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── Procfile              # Heroku process file
└── README.md            # This file
```

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with TypeScript support (tsx)
- `npm test` - Run tests
- `npm run type-check` - Run TypeScript type checking
- `npm run build` - Build TypeScript to JavaScript

## API Endpoints

Once running, the server provides these endpoints:

- `GET /` - Hello world endpoint with timestamp and environment info
- `GET /health` - Health check endpoint with uptime
- `GET /api/chat` - Chat API placeholder (coming soon!)

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure tests pass and TypeScript compiles without errors
4. Create a pull request

The CI pipeline will automatically run tests and type checking on your pull request.
