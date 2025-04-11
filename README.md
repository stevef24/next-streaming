# Next.js Streaming Demo

This project demonstrates different approaches to data streaming in Next.js.

## Branches Overview

- `main`: Base application without streaming
- `option-1-loading`: Implements streaming using loading.tsx
- `option-2-suspense`: Implements streaming using React Suspense components

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start with the main branch:

```bash
git checkout main
npm run dev
```

4. To try different streaming approaches:

```bash
# For loading.tsx approach
git checkout option-1-loading

# For Suspense approach
git checkout option-2-suspense
```

## Features

- Base app (main branch): Standard Next.js app without streaming
- Loading approach (option-1-loading): Uses Next.js's built-in loading.tsx for streaming
- Suspense approach (option-2-suspense): Uses React Suspense boundaries for streaming

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
