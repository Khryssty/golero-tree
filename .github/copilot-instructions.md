# AI Agent Instructions for golero-tree

## Project Overview
This is a React + Vite project that uses the family-chart library. The project uses modern React (v19) with JavaScript and follows a minimal structure focused on fast development and performance.

## Key Technologies
- React 19.1.1 with modern features
- Vite (using rolldown-vite) for build tooling
- ESLint for code quality
- family-chart ^0.8.1 for genealogy visualization

## Project Structure
```
src/
  App.jsx        # Main application component
  App.css        # Component styles
  main.jsx       # Application entry point
  assets/        # Static assets like images
```

## Development Workflow

### Setup & Installation
```bash
npm install
```

### Development Commands
- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks

### Key Conventions
1. Uses ES modules (`type: "module"` in package.json)
2. React components are `.jsx` files
3. Vite's Fast Refresh is enabled by default

## Important Notes
- The project uses rolldown-vite (specified in package overrides) for improved build performance
- ESLint configuration is in `eslint.config.js` using the new flat config format
- React Compiler is intentionally disabled for better dev/build performance

## Integration Points
- family-chart library is used for genealogy visualization
- Static assets should be placed in either:
  - `/public` for direct static serving
  - `/src/assets` for assets that should go through the build pipeline

## Common Tasks
- To add new dependencies: `npm install [package-name]`
- To modify the Vite config: Edit `vite.config.js`
- To update ESLint rules: Modify `eslint.config.js`