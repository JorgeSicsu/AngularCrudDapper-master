# Use imagem do Node 22
FROM node:22.12.0-alpine AS build

WORKDIR /app
COPY . .

# Instala dependências
RUN npm install

# Faz build
RUN npm run build

# Serve com http-server
RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "dist/angular-dapper-crud", "-p", "8080"]
