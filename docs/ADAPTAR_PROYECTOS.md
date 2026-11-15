# Adaptar proyectos 2–5

1. Copia la plantilla correspondiente a `.github/workflows/deploy.yml` y reemplaza `REPO_NAME` por el nombre exacto del repositorio.
2. En Angular usa `--base-href /REPO_NAME/`; confirma la carpeta real dentro de `dist/` y ajusta `APP_NAME`.
3. En Vite configura `base: '/REPO_NAME/'` en `vite.config.ts`; luego publica `dist/`.
4. Mantén `index.html` como `404.html` para rutas SPA y activa Settings → Pages → Source: GitHub Actions.
5. Sustituye los marcadores `TODO_REEMPLAZAR...` en `src/app/data/projects.data.ts` por las URLs verificadas.
