# Coders Portfolio - Frontend

Modern portfolio platform for developers to showcase their coding achievements across multiple platforms.

## Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6

## Getting Started

### Prerequisites

- Node.js 18+ or Yarn
- Clerk account (for authentication)

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create `.env.local` file:
```bash
cp .env.example .env.local
```

3. Add your Clerk publishable key to `.env.local`:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
VITE_API_URL=http://localhost:5000
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── features/        # Feature-specific components
├── pages/               # Page components
│   └── profiles/        # Platform profile pages
├── lib/
│   ├── api/            # API client and React Query hooks
│   └── utils.ts        # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── main.tsx            # Application entry point
```

## Features

- 🔐 Authentication with Clerk
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Fully responsive design
- ⚡ Fast development with Vite HMR
- 🔄 Data fetching with TanStack Query
- 🛣️ Client-side routing with React Router

## Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
- `VITE_API_URL` - Backend API URL (default: http://localhost:5000)

## License

MIT
