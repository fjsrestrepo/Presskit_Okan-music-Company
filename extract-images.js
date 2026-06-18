const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

// Mapeo de archivos PDF a artistas
const pdfFiles = {
  'c:\\Users\\user\\Desktop\\OKAN\\ISSAB PROPUESTA VISUAL.pdf': 'issab',
  'c:\\Users\\user\\Desktop\\OKAN\\JEIRY PROPUESTA VISUAL.pdf': 'jeiry',
  'c:\\Users\\user\\Desktop\\OKAN\\WENDY propuesta visual (1).pdf': 'wendy',
  'c:\\Users\\user\\Desktop\\OKAN\\LUIS 08  PROPUESTA VISUAL.pdf': 'luis08',
  'c:\\Users\\user\\Desktop\\OKAN\\ALEE PROPUESTA VISUAL.pdf': 'alee',
  'c:\\Users\\user\\Desktop\\OKAN\\NATHALÍA PROPUESTA VISUAL.pdf': 'nathalia'
};

const imagesDir = path.join(__dirname, 'images');

// Crear carpeta de imágenes si no existe
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Carpeta de imágenes creada:', imagesDir);
}

// Función para procesar PDFs
async function extractImagesFromPDFs() {
  console.log('Iniciando extracción de imágenes de PDFs...\n');

  for (const [pdfPath, artistId] of Object.entries(pdfFiles)) {
    try {
      console.log(`Procesando: ${path.basename(pdfPath)}`);
      
      if (!fs.existsSync(pdfPath)) {
        console.warn(`⚠️ Archivo no encontrado: ${pdfPath}`);
        continue;
      }

      const pdfBytes = fs.readFileSync(pdfPath);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      
      // Intentar extraer imágenes embebidas
      // Nota: pdf-lib no tiene soporte directo para extraer imágenes
      // Esto es una limitación conocida
      
      console.log(`✓ PDF cargado: ${pdfDoc.getPageCount()} páginas`);
      
    } catch (error) {
      console.error(`❌ Error procesando ${artistId}:`, error.message);
    }
  }

  console.log('\n⚠️ Nota: pdf-lib no puede extraer imágenes directamente de PDFs.');
  console.log('Solución alternativa: Copiar imágenes manualmente o usar herramientas externas.');
}

extractImagesFromPDFs().catch(console.error);
