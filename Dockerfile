FROM node:18-bullseye

WORKDIR /app

# Instalar herramientas de compilación
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps --verbose

COPY . .

EXPOSE 3000

CMD ["npm", "start"]