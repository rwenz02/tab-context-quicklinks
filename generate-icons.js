const sharp = require('sharp');
const path = require('path');

async function convert() {
  const appPackage = path.join(__dirname, 'appPackage');

  await sharp(path.join(appPackage, 'color.svg'))
    .resize(192, 192)
    .png()
    .toFile(path.join(appPackage, 'color.png'));

  await sharp(path.join(appPackage, 'outline.svg'))
    .resize(32, 32)
    .png()
    .toFile(path.join(appPackage, 'outline.png'));

  console.log('Done: color.png (192x192) and outline.png (32x32) generated.');
}

convert().catch(err => { console.error(err); process.exit(1); });
