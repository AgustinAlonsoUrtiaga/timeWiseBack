# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de dependencia (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia todo el código fuente al contenedor
COPY . .

# Expone el puerto en el que tu aplicación se ejecuta (ajústalo si es necesario)
EXPOSE 3000

# Define una variable de entorno para producción
ENV NODE_ENV=production

# Comando para iniciar la aplicación
CMD ["npm", "start"]