# Comentários Sobre a Solução:

- Para startar os serviços, deve-se adicionar os 3 arquivos env conforme os arquivos de exemplo, e depois rodar o comando `docker compose up` na raiz do projeto;
- Optou-se por enviar uma mensagem atrelada a criação de um usuário, onde o payload é basicamente os dados do usuário (id, name, email, age, active e createdAt);
- O serviço consumidor possui uma rota `POST` para receber as mensagens do kafka e salvá-las no mongoDB, e uma rota de `GET` que lista os usuários salvos no banco (criei para validar que o usuário está sendo salvo corretamente).

##

<h1 align="center">
  <br>
  <img src="https://i.ibb.co/MD8jH60/apptrade-logo.jpg" alt="" width="200">
  <br>
  Desafio - Serviços
  <br>
</h1>

<h4 align="center">Desafio para Seleção de Desenvolvedor Back-End</h4>

<p align="center">
  <a href="#descrição">Descrição</a> •
  <a href="#requisitos">Requisitos</a> •
  <a href="#observações">Observações</a> •
  <a href="#guia">Guia</a>
</p>

## Descrição

Deverão ser desenvolvidos dois serviços que recebem dados JSON, armazenam em um sistema de mensageria para então ser consumido e armazenado em um banco NoSQL.

## Requisitos

### Serviço 01

1. Deverá ser desenvolvido em NestJS (Typescript).
2. Rest ou GraphQL.
3. Deve ter um endpoint para receber um objeto JSON.
4. Deve publicar esse objeto para um tópico do Kafka.
5. Este serviço **NÃO PODE USAR NENHUM BANCO DE DADOS**.

### Serviço 02

1. Deverá ser desenvolvido em NestJS (Typescript).
2. Este serviço deve usar um banco de dados NoSQL (MongoDB ou Cassandra).
3. Deve consumir e remover objetos no tópico do Kafka.
4. Os objetos consumidos devem ser inseridos no banco de dados.

### Infraestrutura

1. O banco e os sistemas devem estar containerizados.
2. Toda a infraestrutura deve estar online na máquina local com, no máximo, 10 comandos em qualquer máquina Linux com Docker instalado.
3. O Docker deve ser utilizado como base da infraestrutura.

## Observações

- Todos os recursos devem estar nesse único repositório.
- Não é necessário e não será avaliado nenhum recurso de Front-End.
- Os padrões de projetos e tecnologias aplicadas serão avaliadas.
- A modelagem de banco e estratégias de manipulação de dados serão avaliadas.
- Documentação não é obrigatória, mas a facilidade no uso dos recursos será avaliada e a presença de uma documentação simplificada pode impactar positivamente.
- A organização do repositório será avaliada.
- Os commits serão avaliados. Atente-se aos padrões que deseja utilizar.

## Guia

1. Faça um fork privado do repositório.
2. Desenvolva os recursos.
3. Conceda permissão de leitura para membros indicados.
4. Aguarde a avaliação.
