# Usar una imagen de Node.js con Alpine
FROM node:18-alpine

# Instalar herramientas necesarias para node-gyp
RUN apk add --no-cache python3 make g++ bash

WORKDIR /app

# Copiar archivos de dependencias primero para aprovechar la caché
COPY package.json package-lock.json ./

# Instalar dependencias con logging detallado
RUN npm install --legacy-peer-deps --verbose

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Iniciar el servidor
CMD ["npm", "start"]