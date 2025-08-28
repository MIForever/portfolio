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
  
  // Fix asset paths in HTML files
  const htmlFiles = ['index.html', '404.html']
  htmlFiles.forEach(fileName => {
    const filePath = path.join(outDir, fileName)
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8')
      
      // Replace absolute paths with relative paths
      content = content.replace(/\/_next\//g, './_next/')
      content = content.replace(/\/cursor\.png/g, './cursor.png')
      content = content.replace(/\/favicon\.ico/g, './favicon.ico')
      content = content.replace(/\/apple-touch-icon\.png/g, './apple-touch-icon.png')
      
      fs.writeFileSync(filePath, content)
      console.log(`Fixed asset paths in ${fileName}`)
    }
  })
  
  console.log('Build completed successfully!')
} catch (error) {
  console.error('Build failed:', error)
  process.exit(1)
}
