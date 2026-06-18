# 📸 Guía para extraer imágenes de PDFs

## Opción 1: Usar herramienta online (MÁS FÁCIL)

1. Abre https://smallpdf.com/es/pdf-a-imagen
2. Sube cada PDF:
   - `ISSAB PROPUESTA VISUAL.pdf`
   - `JEIRY PROPUESTA VISUAL.pdf`
   - `WENDY propuesta visual (1).pdf`
   - `LUIS 08  PROPUESTA VISUAL.pdf`
   - `ALEE PROPUESTA VISUAL.pdf`
   - `NATHALÍA PROPUESTA VISUAL.pdf`

3. Descarga la imagen (primera página)
4. Renombra el archivo según el artista:
   - `issab.png`
   - `jeiry.png`
   - `wendy.png`
   - `luis08.png`
   - `alee.png`
   - `nathalia.png`

5. Copia todos los PNGs a la carpeta: `images/`

## Opción 2: Adobe Reader (si tienes instalado)

1. Abre cada PDF con Adobe Reader
2. Click derecho en la página → "Guardar imagen como..."
3. Selecciona formato PNG
4. Renombra según los artistas
5. Copia a la carpeta `images/`

## Opción 3: Windows + PowerShell (si tienes Poppler instalado)

```powershell
# Instalar Poppler (requiere Chocolatey)
choco install poppler

# Luego ejecutar en el directorio de PDFs:
pdftoppm -png -f 1 -l 1 "ISSAB PROPUESTA VISUAL.pdf" issab
pdftoppm -png -f 1 -l 1 "JEIRY PROPUESTA VISUAL.pdf" jeiry
pdftoppm -png -f 1 -l 1 "WENDY propuesta visual (1).pdf" wendy
pdftoppm -png -f 1 -l 1 "LUIS 08  PROPUESTA VISUAL.pdf" luis08
pdftoppm -png -f 1 -l 1 "ALEE PROPUESTA VISUAL.pdf" alee
pdftoppm -png -f 1 -l 1 "NATHALÍA PROPUESTA VISUAL.pdf" nathalia
```

## 📁 Estructura final

Después de extraer las imágenes, debe verse así:

```
OK PRESS/
├── images/
│   ├── issab.png
│   ├── jeiry.png
│   ├── wendy.png
│   ├── luis08.png
│   ├── alee.png
│   └── nathalia.png
├── index.html
├── package.json
└── ... (otros archivos)
```

## ✅ Luego ejecutar

```bash
npm run dev
```

Las imágenes aparecerán automáticamente en el roster de artistas.
