# OKAN Music Company — Press Kit 2025–26

Sitio web profesional para la disquera independiente OKAN Music Company, desarrollado con HTML5, CSS3 y JavaScript vanilla.

## 🎨 Agregar imágenes de artistas

El proyecto está configurado para mostrar imágenes de los artistas en el roster. 

### Pasos:

1. **Extraer imágenes de los PDFs**
   - Lee el archivo `INSTRUCCIONES-IMAGENES.md` para instrucciones detalladas
   - Las imágenes deben ser PNG o JPG
   - Recomiendado: 400x300px o superior

2. **Nombrar los archivos correctamente**
   ```
   issab.png
   jeiry.png
   wendy.png
   luis08.png
   alee.png
   nathalia.png
   dolche.png
   ```

3. **Colocar en la carpeta `/images/`**
   ```
   OK PRESS/
   └── images/
       ├── issab.png
       ├── jeiry.png
       ├── wendy.png
       ├── luis08.png
       ├── alee.png
       ├── nathalia.png
       └── dolche.png
   ```

4. **Refrescar el navegador**
   - `Ctrl+R` o `Cmd+R`
   - Las imágenes aparecerán automáticamente en el roster

Si no hay imágenes, el sitio mostrará gradientes de color como fallback.

## 🚀 Quick Start

### Requisitos
- **Node.js 18+** — [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)

### Instalación

1. **Clonar o descargar el repositorio**
   ```bash
   cd "c:\Users\user\Documents\Desarrollo\OK PRESS"
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - El servidor se abre automáticamente en `http://localhost:5173`
   - Si no se abre, visita manualmente: http://localhost:5173

## 📱 Portabilidad entre dispositivos

Este proyecto está optimizado para correr en cualquier dispositivo con Node.js instalado:

- **Windows** ✓
- **macOS** ✓
- **Linux** ✓

### Cambiar de dispositivo

1. Copiar toda la carpeta `OK PRESS` al nuevo dispositivo
2. Abrir terminal en la carpeta
3. Ejecutar:
   ```bash
   npm install
   npm run dev
   ```

No necesitas configuración adicional — Vite maneja todo automáticamente.

## 📂 Estructura del Proyecto

```
OK PRESS/
├── index.html              # Archivo principal (HTML con CSS y JS integrados)
├── package.json            # Configuración de npm
├── vite.config.js          # Configuración de Vite
├── .gitignore              # Archivos a ignorar en git
├── node_modules/           # Dependencias (creadas con npm install)
└── README.md               # Este archivo
```

## 🎯 Comandos disponibles

```bash
# Iniciar servidor de desarrollo (con hot reload)
npm run dev

# Compilar para producción
npm build

# Previsualizar build de producción
npm preview
```

## 🌐 Desplegar a producción

### Opción 1: Vercel (recomendado - gratis)
1. Subir código a GitHub
2. Conectar repositorio en [vercel.com](https://vercel.com)
3. Vercel detecta automáticamente Vite y despliega

### Opción 2: Netlify (gratis)
1. Subir código a GitHub
2. Conectar repositorio en [netlify.com](https://netlify.com)
3. Configurar build: `npm build` / carpeta: `dist`

### Opción 3: Servidor propio
```bash
npm run build
# Compartir carpeta 'dist/' en tu servidor
```

## 🎨 Personalización

### Cambiar datos de artistas

Editar el array `ARTISTS` en `index.html` (línea ~350):

```javascript
const ARTISTS = [
  {
    id: "issab",
    name: "ISSAB",
    genre: "Trap · R&B · Detroit · Dancehall",
    // ... más propiedades
  },
  // Agregar más artistas aquí
];
```

### Cambiar colores

- Paleta principal: búscar `#c8e03a` (amarillo neón)
- Tema oscuro: búscar `#080808` (negro)
- Estilos CSS: sección `<style>` en `index.html`

## 🔧 Solución de problemas

### "npm: comando no encontrado"
- Instalar [Node.js](https://nodejs.org/) (incluye npm)
- Reiniciar terminal después de instalar

### Puerto 5173 ya está en uso
- Vite automáticamente intenta otro puerto (5174, 5175...)
- O terminar otros procesos usando el puerto:
  ```bash
  # Windows
  netstat -ano | findstr :5173
  taskkill /PID <PID> /F
  ```

### Cambios no se reflejan en el navegador
- Presionar `Ctrl+Shift+R` (refresh fuerzo)
- Cerrar caché del navegador

## 📊 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas 2 versiones)
- **Dispositivos**: Desktop, tablet, móvil (responsive)
- **Resoluciones**: 320px – 4K

## 📝 Notas técnicas

- **Framework**: Vite 5.0+ (herramienta de desarrollo, no necesaria en producción)
- **Dependencias**: Solo Vite (dev) — sin dependencias de producción
- **Tamaño**: ~100KB HTML (todo en un archivo)
- **Performance**: ~350ms para arrancar servidor

## 👥 Contacto

- **Booking & Prensa**: Lacoin +57 317 445 5169
- **Email**: okanmusiccompany@gmail.com
- **Ubicación**: Cali, Colombia

---

**OKAN Music Company** — 2025–26 | "Si toca el corazón, es Okan."
