# Usar una imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias usando npm
RUN npm install --legacy-peer-deps --verbose

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que correrá tu servidor
EXPOSE 3000

# Comando para iniciar tu servidor
CMD ["npm", "start"]