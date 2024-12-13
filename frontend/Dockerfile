# Dockerfile para React com Vite
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json (se existir)
COPY package*.json ./

# Limpa o cache do npm e instala as dependências
RUN npm cache clean --force && npm install

# Copia todo o código fonte
COPY . .

# Expõe a porta 5173 (porta padrão do Vite)
EXPOSE 5173

# Comando para iniciar o Vite
CMD ["npm", "run", "dev"]
