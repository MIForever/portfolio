# Deployment Guide for GitHub Pages

## Overview
This Next.js portfolio site is configured to deploy as a static site on GitHub Pages.

## Prerequisites
- GitHub repository with your portfolio code
- GitHub Pages enabled in your repository settings

## Automatic Deployment (Recommended)

1. **Push your code to the main branch**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build your Next.js app as a static site
   - Deploy it to the `gh-pages` branch
   - Make it available at `https://yourusername.github.io/your-repo-name`

## Manual Deployment

If you prefer to deploy manually:

1. **Build the static site:**
   ```bash
   npm run build:github-pages
   ```

2. **The built files will be in the `out/` directory**

3. **Deploy the `out/` directory contents to GitHub Pages**

## Configuration

The site is configured with:
- `output: 'export'` - Generates static HTML files
- `trailingSlash: true` - Required for GitHub Pages routing
- `images.unoptimized: true` - Required for static export

## Troubleshooting

### 404 Errors
- Ensure GitHub Pages is enabled in your repository settings
- Check that the deployment is using the `gh-pages` branch
- Verify the build completed successfully in GitHub Actions

### Routing Issues
- All routes are pre-rendered as static files
- Dynamic routes need to be handled at build time
- Client-side navigation works normally

## Repository Settings

1. Go to Settings > Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `/(root)`
4. Save the configuration

Your site will be available at the URL shown in the Pages section.
