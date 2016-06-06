# ppca_cs_felipe

- Projeto elaborado para a disciplina de Construção de software do PPCA UnB
- O objetivo do projeto é desenvolver um software escrito em javascript que simule a solicitação de cálculo de crédito e crie um registro da solicitação em um blockchain
- Softwares Requisitos para rodar o projeto
  - OpenChain - para instalação seguir o tutorial do link https://docs.openchain.org/en/latest/general/docker-deployment.html#install-docker
  - Node.js - Instalação em https://nodejs.org/en/download/

- Por enquanto consegui 
  - Criar uma Virtual Machine no MAC OS X executando um servidor openchain
  - Executar o arquivo openchain.js (através do comando node openchain.js direto no terminal) que retorna como texto no console:
    Account path: /asset/p2pkh/XnDMEFv16k6tYb2GGBetkAmR8BTcoqFr4m/metadata/
    Record name: datarecord
    Dado armazenado: Testando BlockChain com o OpenChain
  - Ainda não sei se realmente foi armazenado no openchain o texto no campo "Dado armazenado", pois não consegui fazer consultas
- Não consegui 
  - desenvolver aplicação em javascript que simule a solicitação de crédito e gere um registro da solicitação
  - integrar o openchain à aplicação em javascript
