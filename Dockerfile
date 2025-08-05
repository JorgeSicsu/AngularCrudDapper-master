# Usa imagem oficial com Node 20
FROM node:20.19.0

# Diretório de trabalho no container
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala dependências
RUN npm install --legacy-peer-deps

# Gera build de produção
RUN npm run build

# Instala o servidor HTTP
RUN npm install -g http-server

# Expõe a porta do Railway
EXPOSE 8080

# Comando para servir o app Angular
CMD ["http-server", "dist/angular-dapper-crud", "-p", "8080"]
