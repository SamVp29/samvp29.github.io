# Imagen base con Node
FROM node:24.11.1

# Directorio de trabajo
WORKDIR /app

# Copiar definiciones de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Vite usa el puerto 5173
EXPOSE 5173

# Servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
