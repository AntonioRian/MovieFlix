# MovieFlix: Open Movie Database (OMDb) API

Esta aplicação foi desenvolvida para integrar com a Open Movie Database (OMDb) API, fornecendo uma interface para buscar e exibir informações sobre filmes. A aplicação é containerizada usando Docker e implantada na AWS.

**Autores**: Antonio Rian de Jesus Felix, Carlos Henrique Rodrigues Paixão, Vamberto Pereira da Silva Junior, Hellen Lima Araujo.

---

## MOVIE-FLIX

<img src="src/public/img/Captura de tela Movie-Flix.png" alt="Captura de tela da aplicação Movie-Flix">

---

## Tecnologias Utilizadas no Projeto

![tecnologias](https://skillicons.dev/icons?i=nodejs,aws,docker,express&perline=8)

---

## Sumário

1. [Visão Geral](#visão-geral)
2. [Instruções de Instalação](#instruções-de-instalação)
   - [Pré-requisitos](#pré-requisitos)
   - [Instalação](#instalação)
3. [Instruções de Uso](#instruções-de-uso)
4. [Documentação da Avaliação](#documentação-da-avaliação)
5. [Docker e AWS](#docker-e-aws)

---

## Visão Geral

A aplicação permite buscar informações sobre filmes usando a OMDb API. Utiliza Express para o servidor web e Handlebars para renderização de templates.

---

## Instruções de Instalação

### Pré-requisitos
- [Node.js](https://nodejs.org/en/download/prebuilt-installer)
- [NPM](#instalação)
- [Docker](https://docs.docker.com/desktop/)

### Instalação

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/Compass-pb-aws-2024-JULHO-A/sprints-2-3-pb-aws-julho-a/tree/grupo-1

2. **Instale o Node.js e o NPM**:
   - **Windows**: Baixe e instale o [Node.js](https://nodejs.org/en/download/prebuilt-installer), que inclui o NPM.
   - **Linux**:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

3. **Instale as Dependências**:
   - No diretório do projeto, execute:
     ```bash
     npm install express express-handlebars axios
     ```

4. **Crie um Arquivo `.env`**:
   - Copie o arquivo `.env.example` para `.env` e adicione sua chave da OMDb API:
     ```
     OMDB_API_KEY=<CHAVE_API>
     PORT=3001
     ```

---

## Instruções de Uso

1. **Execute o Servidor Localmente**:

   ```bash
   npm start
   ```

   - A aplicação estará disponível em [http://localhost:3001](http://localhost:3001).

2. **Execute o projeto com Nodemon** (opcional):
   - Navegue até o diretório `src` e inicie o servidor:
     ```bash
     cd src
     nodemon app.js
     ```

---

## Documentação da Avaliação

- **Dificuldades Conhecidas**:
  - Problemas de compatibilidade com versões mais recentes do Node.js.
- **Como Utilizar o Sistema**:
  - Após a instalação e execução do projeto, use a interface para buscar informações sobre filmes. As consultas são realizadas via endpoints específicos da OMDb API.
- **URL para Acesso**:
  - A URL de acesso padrão é [http://localhost:3001](http://localhost:3001), ou conforme configurado no `app.js`.

---

## Docker e AWS

Este projeto é uma aplicação Node.js que consome a OMDb API para pesquisa de filmes. A aplicação é containerizada usando Docker e implantada na AWS.

### Configuração do Docker (Opcional)
   - Se você deseja usar Docker, certifique-se de ter o Docker e o Docker Compose instalados.
   - Construa a imagem Docker e execute o container:
     ```bash
     docker-compose up --build
     ```

---

**Observação**: Certifique-se de ter as credenciais da OMDb API configuradas no arquivo `.env` para que a aplicação funcione corretamente.
