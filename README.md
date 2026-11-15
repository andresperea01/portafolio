# Dev Portfolio Project

Portafolio digital de **Andres David Perea Herrera**, desarrollado con Angular standalone y publicado en [GitHub Pages](https://andresperea01.github.io/portafolio/).

| Proyecto | Repositorio | Aplicación |
|---|---|---|
| Portafolio Angular | [GitHub](https://github.com/andresperea01/portafolio) | [Pages](https://andresperea01.github.io/portafolio/) |
| Laboratorio de pipelines | [GitHub](https://github.com/alejandrobarco01-coder/laboratorio-pipelines) | TODO: URL por confirmar |
| Taller patrones de diseño | [GitHub](https://github.com/alejandrobarco01-coder/taller-patrones-de-dise-o) | TODO: URL por confirmar |
| Taller Arquitectura 3 | [GitHub](https://github.com/andresperea01/Taller-Arquitectura-3) | TODO: URL por confirmar |
| Proyecto 5 | TODO: seleccionar repositorio | TODO: publicar |

## Ejecutar localmente
`npm ci` y `npm start`. Calidad: `npm run lint`, `npm run test:ci`, `ng build --configuration production`.

## Arquitectura
Los modelos y contenidos están en `src/app/data`; las features viven en `features/profile` y `features/projects`; los componentes reutilizables en `shared/components`. Se usa `withHashLocation()` para GitHub Pages.

## CI/CD
El workflow ejecuta lint, pruebas, build con `--base-href /portafolio/`, copia `404.html`, sube el artefacto, despliega con Pages y verifica HTTP 200 y el título. En el repositorio: Settings → Pages → Source: **GitHub Actions**.

## Conventional Commits
Ejemplos: `feat(profile): add professional profile`, `fix: correct base href`, `docs: update readme`, `ci: configure pages`, `test: add project card coverage`.
