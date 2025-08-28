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
  
  // Copy favicon files to out directory
  const outDir = path.join(__dirname, '..', 'out')
  const faviconSrc = path.join(__dirname, '..', 'public', 'favicon.png')
  const faviconDest = path.join(outDir, 'favicon.png')
  const appleTouchSrc = path.join(__dirname, '..', 'public', 'apple-touch-icon.png')
  const appleTouchDest = path.join(outDir, 'apple-touch-icon.png')
  
  if (fs.existsSync(faviconSrc)) {
    fs.copyFileSync(faviconSrc, faviconDest)
    console.log('Copied favicon.png to out directory')
  }
  
  if (fs.existsSync(appleTouchSrc)) {
    fs.copyFileSync(appleTouchSrc, appleTouchDest)
    console.log('Copied apple-touch-icon.png to out directory')
  }
  
  // Create 404.html for GitHub Pages
  const indexPath = path.join(outDir, 'index.html')
  const notFoundPath = path.join(outDir, '404.html')
  
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath)
    console.log('Created 404.html for GitHub Pages routing')
  }
  
  // Function to recursively process all files in a directory
  function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath)
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        processDirectory(filePath)
      } else if (stat.isFile()) {
        // Process HTML, JS, CSS, and other text files
        const ext = path.extname(file).toLowerCase()
        if (['.html', '.js', '.css', '.json', '.xml', '.txt'].includes(ext)) {
          try {
            let content = fs.readFileSync(filePath, 'utf8')
            let modified = false
            
            // Replace absolute paths with GitHub Pages subdirectory paths
            // Use more specific patterns to avoid double replacement
            if (content.includes('/_next/')) {
              content = content.replace(/\/_next\//g, '/portfolio/_next/')
              modified = true
            }
            
            if (content.includes('/cursor.png')) {
              content = content.replace(/\/cursor\.png/g, '/portfolio/cursor.png')
              modified = true
            }
            
            // Fix favicon paths - be more specific to avoid double replacement
            if (content.includes('href="/favicon.ico"')) {
              content = content.replace(/href="\/favicon\.ico"/g, 'href="/portfolio/favicon.png"')
              modified = true
            }
            
            if (content.includes('href="/favicon.png"')) {
              content = content.replace(/href="\/favicon\.png"/g, 'href="/portfolio/favicon.png"')
              modified = true
            }
            
            if (content.includes('/apple-touch-icon.png')) {
              content = content.replace(/\/apple-touch-icon\.png/g, '/portfolio/apple-touch-icon.png')
              modified = true
            }
            
            if (content.includes('/xtop-logo.png')) {
              content = content.replace(/\/xtop-logo\.png/g, '/portfolio/xtop-logo.png')
              modified = true
            }
            
            if (content.includes('/soulhr-logo.png')) {
              content = content.replace(/\/soulhr-logo\.png/g, '/portfolio/soulhr-logo.png')
              modified = true
            }
            
            if (content.includes('/repliki-i-remarki.png')) {
              content = content.replace(/\/repliki-i-remarki\.png/g, '/portfolio/repliki-i-remarki.png')
              modified = true
            }
            
            if (content.includes('/ben-usps.png')) {
              content = content.replace(/\/ben-usps\.png/g, '/portfolio/ben-usps.png')
              modified = true
            }
            
            if (content.includes('/uzel-logo.png')) {
              content = content.replace(/\/uzel-logo\.png/g, '/portfolio/uzel-logo.png')
              modified = true
            }
            
            if (content.includes('/spikup-logo.png')) {
              content = content.replace(/\/spikup-logo\.png/g, '/portfolio/spikup-logo.png')
              modified = true
            }
            
            if (modified) {
              fs.writeFileSync(filePath, content)
              console.log(`Fixed asset paths in ${path.relative(outDir, filePath)}`)
            }
          } catch (error) {
            // Skip files that can't be read as text
            console.log(`Skipping binary file: ${path.relative(outDir, filePath)}`)
          }
        }
      }
    })
  }
  
  // Process all files in the out directory
  processDirectory(outDir)
  
  console.log('Build completed successfully!')
} catch (error) {
  console.error('Build failed:', error)
  process.exit(1)
}
