# Stage 1: Build-Umgebung
FROM node:18-alpine AS build
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# Quellcode kopieren und App bauen
COPY . .
RUN npm run build

# Stage 2: Laufzeit-Umgebung (Nginx)
FROM nginx:stable-alpine
# HINWEIS: Wenn du Vite nutzt, ändere "build" unten zu "dist"
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]