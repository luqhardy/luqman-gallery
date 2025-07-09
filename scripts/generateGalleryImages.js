// This script scans /public/assets and writes the list of image files to galleryImages.json
// Run: node scripts/generateGalleryImages.js

const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');
const outputFile = path.join(__dirname, '../src/app/galleryImages.json');

const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];

fs.readdir(assetsDir, (err, files) => {
  if (err) throw err;
  const images = files.filter(f => exts.includes(path.extname(f).toLowerCase()))
    .map(f => `assets/${f}`);
  fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
  console.log(`Found ${images.length} images. Updated galleryImages.json.`);
});
