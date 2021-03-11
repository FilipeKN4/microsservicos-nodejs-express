# buscar container pronto com versão alpine do node
FROM node:alpine

# Definir diretório principal da aplicação no container
WORKDIR /usr/app 


# Copiar todos os arquivos gerados após o "npm install" para dentro do container
COPY . .

# Copiar arquivos json necessários para a pasta do projeto dentro no container
# e rodar o comando de instalação das dependências adicionadas no 'package.json'
RUN npm install

# Definir a porta do container a ser utilizada para acessar a aplicação
EXPOSE 3000

# Rodar comando criado no 'package.json' para iniciar a aplicação
CMD ["npm", "start"]