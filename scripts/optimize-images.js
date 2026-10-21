const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PRODUCTS_DIR = path.join(__dirname, "..", "public", "images", "products");
const QUALITY = 75; // good balance of quality/size for product photos
const MAX_WIDTH = 1200; // max dimension for product shots
const MAX_HEIGHT = 1600;

async function optimizeImages() {
  const files = fs.readdirSync(PRODUCTS_DIR).filter(f => f.endsWith(".webp"));
  
  console.log(`\nOptimizing ${files.length} WebP images...\n`);
  
  for (const file of files) {
    const filePath = path.join(PRODUCTS_DIR, file);
    const originalSize = fs.statSync(filePath).size;
    
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Resize if larger than max dimensions
    let resizeOpts = {};
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      resizeOpts = {
        width: Math.min(metadata.width, MAX_WIDTH),
        height: Math.min(metadata.height, MAX_HEIGHT),
        fit: "inside",
        withoutEnlargement: true,
      };
    }
    
    const buffer = await sharp(fs.readFileSync(filePath))
      .resize(resizeOpts.width ? resizeOpts : undefined)
      .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
      .toBuffer();
    
    const tmpPath = filePath + ".tmp";
    fs.writeFileSync(tmpPath, buffer);
    fs.unlinkSync(filePath);
    fs.renameSync(tmpPath, filePath);
    
    const newSize = buffer.length;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(
      `  ${file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (-${reduction}%)`
    );
  }
  
  console.log("\n✅ All images optimized!\n");
}

optimizeImages().catch(console.error);
