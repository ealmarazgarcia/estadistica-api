# Utiliza una imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila el código TypeScript
RUN npx tsc

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 8080

# Define el comando de inicio
CMD ["node", "dist/app.js"]