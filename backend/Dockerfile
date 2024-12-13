# Dockerfile para Django
FROM python:3.10-slim

# Instala dependências básicas
RUN apt-get update && apt-get install -y gcc libpq-dev

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY requirements.txt /app/

# Instala dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código da aplicação
COPY . /app/

# Expõe a porta padrão do Django
EXPOSE 8000

# Comando para iniciar o servidor
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
