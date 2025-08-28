const fs = require('fs')
const path = require('path')

// Build the project
const { execSync } = require('child_process')

console.log('Building for GitHub Pages...')

try {
  // Run the build
  execSync('npm run build', { stdio: 'inherit' })
  
  // Create .nojekyll file
  const nojekyllPath = path.join(__dirname, '..', 'out', '.nojekyll')
  fs.writeFileSync(nojekyllPath, '')
  console.log('Created .nojekyll file')
  
  // Create 404.html for GitHub Pages
  const outDir = path.join(__dirname, '..', 'out')
  const indexPath = path.join(outDir, 'index.html')
  const notFoundPath = path.join(outDir, '404.html')
  
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath)
    console.log('Created 404.html for GitHub Pages routing')
  }
  
  console.log('Build completed successfully!')
} catch (error) {
  console.error('Build failed:', error)
  process.exit(1)
}
