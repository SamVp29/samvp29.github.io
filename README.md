# Portafolio - Samuel Vera

Sitio personal construido con **React + Vite** para mostrar proyectos, habilidades y experiencia como desarrollador fullstack.

## Stack

- React 18 + Vite 5
- Bootstrap 5 y estilos personalizados
- Configuracion lista para GitHub Pages (`vite.config.js` con `base="/samvp29.github.io/"`)
- Docker + Docker Compose para levantar el entorno sin instalar Node

## Scripts

| Comando           | Descripcion                                     |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala dependencias                             |
| `npm run dev`     | Arranca Vite en `http://localhost:5173`          |
| `npm run build`   | Genera la carpeta `dist/` lista para produccion  |
| `npm run preview` | Sirve el build final (util para pruebas locales) |

## Uso con Docker

```bash
docker compose up --build
```

- Mapea `http://localhost:5173`
- Ejecuta `npm install` dentro del contenedor antes de correr Vite
- Usa `CHOKIDAR_USEPOLLING=true` para que HMR funcione bien en Windows y macOS

## Despliegue en GitHub Pages

1. Ejecuta `npm run build`
2. Sube el contenido de `dist/` a la rama `gh-pages` o configura GitHub Actions
3. Para un repositorio tipo `samuelvera/Portafolio`, deja el valor `base: "/Portafolio/"` como esta
4. En la configuracion de Pages selecciona `gh-pages` y la carpeta `/ (root)`

## Estructura

```
src/
 |- app.jsx          # Componentes y secciones del sitio
 |- main.jsx         # Punto de entrada de React
 |- style.css        # Estilos personalizados
public/
 |- favicon.svg
 |- projects/
```

## Contacto

Si quieres colaborar o conversar sobre un proyecto:

- samuelvera.dev@example.com
- https://github.com/samuelvera
