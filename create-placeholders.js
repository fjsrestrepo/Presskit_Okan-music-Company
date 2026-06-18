#!/usr/bin/env node

/**
 * Script para generar imágenes placeholder SVG para los artistas.
 * Ejecutar: node create-placeholders.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTISTS = [
  { id: 'issab', name: 'ISSAB', accent: '#D4A878' },
  { id: 'jeiry', name: 'JEIRY', accent: '#FF9408' },
  { id: 'wendy', name: 'WENDY', accent: '#B07056' },
  { id: 'luis08', name: 'LUIS 08', accent: '#DAA520' },
  { id: 'alee', name: 'ALEE', accent: '#e05050' },
  { id: 'nathalia', name: 'NATHALÍA', accent: '#45BDB0' },
  { id: 'dolche', name: 'DOLCHE', accent: '#c8e03a' }
];

const imagesDir = path.join(__dirname, 'images');

// Crear carpeta si no existe
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generar SVG placeholder para cada artista
ARTISTS.forEach(artist => {
  const svg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${artist.accent};stop-opacity:0.15" />
        <stop offset="100%" style="stop-color:#080808;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#grad)"/>
    <text x="200" y="155" font-family="'Bebas Neue', Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="${artist.accent}" letter-spacing="2">
      ${artist.name}
    </text>
    <text x="200" y="185" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="${artist.accent}" opacity="0.4">
      [Reemplazar con imagen real]
    </text>
  </svg>`;

  const filePath = path.join(imagesDir, `${artist.id}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Creado: ${artist.id}.svg`);
});

console.log('\n✅ Placeholders SVG creados en la carpeta "images/"');
console.log('📝 Reemplaza estos archivos con las imágenes reales cuando las tengas.');