# Gestor de Calificaciones CFGM

Aplicación web para la gestión de calificaciones, evaluaciones y actas del CFGM Actividades Comerciales.

## Características

- Gestión de alumnos y módulos.
- Calificación por Resultados de Aprendizaje (RA).
- Cálculo automático de notas (QPROV).
- Generación de boletines y actas.
- Exportación a Excel.
- Base de datos compartida (archivo JSON persistente).

## Cómo desplegar (Publicar en Internet)

Esta aplicación tiene un **Backend (Servidor Node.js)** y un **Frontend (React)**, por lo que necesita un servicio que soporte Node.js. No funcionará correctamente en servicios de solo estáticos como GitHub Pages (a menos que se refactorice).

### Opción Recomendada: Render.com (Gratis)

1.  **Sube este código a GitHub**:
    *   Crea un repositorio en GitHub.
    *   Sube todos los archivos de este proyecto.

2.  **Crea un servicio en Render**:
    *   Regístrate en [render.com](https://render.com).
    *   Haz clic en "New +" y selecciona **"Web Service"**.
    *   Conecta tu cuenta de GitHub y selecciona el repositorio que acabas de crear.

3.  **Configuración en Render**:
    *   **Name**: Elige un nombre (ej. `gestor-notas`).
    *   **Region**: Frankfurt (o la más cercana).
    *   **Branch**: `main` (o la que uses).
    *   **Root Directory**: (Déjalo en blanco).
    *   **Runtime**: **Node**.
    *   **Build Command**: `npm install && npm run build`
    *   **Start Command**: `npm start`
    *   **Plan**: Free.

4.  Haz clic en **"Create Web Service"**.
5.  Espera unos minutos. Render te dará una URL (ej. `https://gestor-notas.onrender.com`) que podrás compartir con los profesores.

### Opción Alternativa: Railway.app

Similar a Render, muy sencillo de usar.

1.  Sube el código a GitHub.
2.  En Railway, "New Project" -> "Deploy from GitHub repo".
3.  Railway detectará automáticamente que es una app Node.js y la desplegará.

## Desarrollo Local

1.  Instalar dependencias:
    ```bash
    npm install
    ```

2.  Iniciar en modo desarrollo:
    ```bash
    npm run dev
    ```

3.  Construir para producción:
    ```bash
    npm run build
    npm start
    ```
