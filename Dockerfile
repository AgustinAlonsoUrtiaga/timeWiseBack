# Usar una imagen completa basada en Debian (bullseye)
FROM node:18-bullseye

# Instalar Python, Make y G++ para node-gyp
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar archivos de dependencias primero para aprovechar la caché
COPY package.json package-lock.json ./

# Instalar dependencias con logging detallado
RUN npm install --legacy-peer-deps --verbose

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que corre tu backend
EXPOSE 3000

# Iniciar el servidor
CMD ["npm", "start"]