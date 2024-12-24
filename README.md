```markdown
# BigData-FE

**BigData-FE** is a frontend project designed to handle big data visualizations and user interfaces. It is built with modern tools such as React, TypeScript, Tailwind CSS, and Vite for an optimized development and production environment.

## Project Structure

The project uses the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool for web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: Superset of JavaScript to add type safety to the project.
- **ESLint**: For maintaining code quality.
- **Lightweight Charts**: For creating beautiful and interactive charts.
- **React Router**: For navigation and routing.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v16.0.0 or newer
- **npm**: v8.0.0 or newer

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Youssif-Salama/bigData.fe.git
   cd bigdata-fe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Scripts

The following scripts are available in the project:

- **`dev`**: Starts the development server.
  ```bash
  npm run dev
  ```

- **`build`**: Builds the project for production.
  ```bash
  npm run build
  ```

- **`lint`**: Lints the code using ESLint.
  ```bash
  npm run lint
  ```

- **`preview`**: Previews the production build.
  ```bash
  npm run preview
  ```

## Folder Structure

```
bigdata-fe/
├── src/               # Source code
│   ├── components/    # Reusable React components
│   ├── pages/         # Page components for routing
│   ├── styles/        # Tailwind CSS styles and custom CSS
│   ├── utils/         # Utility functions
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── package.json       # Project metadata and dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.ts     # Vite configuration
```

## Key Features

- **Lightweight Charts**: For rendering data visualizations.
- **React Router**: For seamless navigation between pages.
- **ESLint & TypeScript**: Ensure code quality and type safety.
- **Tailwind CSS**: Flexible styling options.
- **Vite**: Ultra-fast development server and build system.

## Dependencies

### Production

- `react`, `react-dom`: Core React libraries.
- `react-router-dom`: For navigation.
- `axios`: For making HTTP requests.
- `react-helmet`: Manage document head metadata.
- `lightweight-charts`: Data visualization.

### Development

- `vite`, `@vitejs/plugin-react-swc`: Development tooling.
- `eslint`: Linting tool.
- `typescript`, `typescript-eslint`: TypeScript support.
- `tailwindcss`, `autoprefixer`, `postcss`: Styling.

## Contributing

Contributions are welcome! Feel free to fork the project and submit a pull request. Please ensure code quality by running the linting and build scripts before submitting your changes.