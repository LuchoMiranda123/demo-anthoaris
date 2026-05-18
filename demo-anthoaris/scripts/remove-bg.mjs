import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inputPath = path.join(__dirname, '..', 'public', 'images', 'logo.png')
const outputPath = path.join(__dirname, '..', 'public', 'images', 'logo-transparent.png')

// Dynamic import for jimp
const { Jimp } = await import('jimp')

const img = await Jimp.read(inputPath)
const w = img.bitmap.width
const h = img.bitmap.height

// Sample background from top-left corner (should be cyan)
let bgR = img.bitmap.data[0]
let bgG = img.bitmap.data[1]
let bgB = img.bitmap.data[2]
console.log('Detected bg color:', bgR, bgG, bgB)

const threshold = 55

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const idx = (y * w + x) * 4
    const r = img.bitmap.data[idx]
    const g = img.bitmap.data[idx + 1]
    const b = img.bitmap.data[idx + 2]
    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2)
    if (dist < threshold) {
      img.bitmap.data[idx + 3] = 0
    }
  }
}

await img.write(outputPath)
console.log('Done! Saved to', outputPath)
