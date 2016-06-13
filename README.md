# ppca_cs_felipe

- Projeto elaborado para a disciplina de Construção de software do PPCA UnB
- O objetivo do projeto é desenvolver um software escrito em javascript que simule a solicitação de cálculo de crédito e crie um registro da solicitação em um blockchain
- Softwares Requisitos para rodar o projeto
  - Multichain http://www.multichain.com/download-install/
  - Node.js - Instalação em https://nodejs.org/en/download/
  - MongoDB - Instalacao em http://mongodb.org/

-Passos iniciais
  - rodar npm install no diretorio
  - criar um diretorio para armazenar os dados digitados (mkdir data)
  - Iniciar o servidor HTTP (npm start)
  - Iniciar o BD 
    - acessar a pasta onde o MongoDB foi instalado
    - acessar a pasta /bin
    - executar o seguinte comando (mongod --dbpath /path-ate-a-pasta-do-app/data/
  - Iniciar o node de Multichain
    - criar o node com o comando multichain-util create chaincad
    - iniciar o node com o comando multichaind chaincad -daemon


- Por enquanto consegui 
  - Criar uma Virtual Machine no MAC OS X executando um servidor Multichain
  - Salvar stream de dados no Multichain entre dois nodes
  - Criar aplicativo simples que gera um servidor HTTP para cadastro de dados de clientes (acesso atraves do http://localhost:3000/novocadastro)
  - Criar conexao entre servidor HTTP e BD MongoDB para armazenar os dados informados no servidor
  - Acessar dados informados pelo usuario atraves do endereco http://localhost:3000/userlist
  - Inicio da integracao do multichain e do servidor http atraves do pacote https://www.npmjs.com/package/multichain-node
  
Falta:
  - integrar definitivamente o openchain à aplicação em javascript
