# PK Handloom Website

A modern, responsive website for PK Handloom, showcasing traditional handwoven textiles with clean design and clean URLs.

## Features

- **Clean URLs**: No .html extensions, using React Router for client-side routing
- **Sticky Header**: Navigation stays at the top while scrolling
- **Responsive Design**: Works on all devices
- **Well-structured Code**: Easy to modify and maintain
- **Modern Tech Stack**: Built with React and Vite

## Pages

- **Home**: Hero section, services preview, testimonials
- **About**: Company story and values
- **Services**: Detailed service offerings
- **Products**: Product categories and featured items
- **Contact**: Contact form and information

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

For clean URLs in production, configure your hosting platform to serve `index.html` for all routes. For example:

- **Netlify**: Add a `_redirects` file with `/* /index.html 200`
- **Vercel**: No configuration needed
- **Apache**: Add `.htaccess` with `FallbackResource /index.html`
- **Nginx**: Configure try_files

## Customization

The code is structured for easy modifications:
- Components are in `src/components/`
- Pages are in `src/pages/`
- Styles are component-specific for easy editing
- Content can be updated directly in the JSX files

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS3