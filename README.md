# :rocket: Backend Challenge

Esse projeto faz parte de um desafio de desenvolvimento backend, utilizando GraphQL e Node.js o objetivo é integrar a API do [Arcsecond.io](https://api.arcsecond.io/swagger/) para cumprir o objetivo de instalar Estações de carregamento de veículos espaciais em planetas com alta gravidade, de forma a aumentar a eficiência do processo.

### Tecnologias utilizadas

Utilizei as seguintes tecnologias:

- **Node**
- **Docker**
- **Apollo Server** - GraphQL server.
- **Prisma** - Database tool
- **Jest** - Testing framework

## Processo de Desenvolvimento

Segui o design pattern de Factories com services e dataSource separados. Tentei manter a estrutura de pastas o mais clara possível e separei os escopos das definições de tipos do Typescript.

**TypeGraphQL**

Iniciei o desenvolvimento utilizando [TypeGraphQL](https://typegraphql.com/) que facilita a construção do Schema GraphQL utilizando decorators do Typescript, porém, em pouco tempo se tornou um problema devido a verbosidade que ele me gerou no código.
Eu gosto bastante de utilizar em projetos maiores, com cruds e operações mais complexas, porém não se encaixou bem nesse. Então resolvi utilizar o Typescript para tipar os resolvers, tendo um pouco mais de type-safety.

**Prisma**

Optei por utilizar a nova versão do [Prisma]('https://www.prisma.io/') mesmo estando em beta pois os desenvolvedores estão colocando uma grande força de trabalho no projeto, e o mesmo deverá se tornar o standard para a stack prisma em breve.

Porém, isso acabou me gerando alguns problemas com migrations no ambiente do docker ([Issue](https://github.com/prisma/migrate/issues/343)), que resolvi temporáriamente criando um script de entrypoint no container do Postgres.

## Executando o projeto

Verifique-se de ter as últimas versões do [Docker](https://www.docker.com/) e [Docker-compose](https://docs.docker.com/compose/) instaladas.

- No diretório raiz do projeto execute: `docker-compose up -d`
- A API ficará disponível em http://localhost:3000 através do GraphQL playground.

### Testes

- Após subir o projeto seguindo o passo anterior, na raiz do projeto execute `npm t`

## Melhorias a se fazer

- **Error handling:** Melhorar o tratamento de erros facilitando a vida de um client GraphQL que implemente essa API utilizando a sintaxe `... on Error`: https://youtu.be/A5-H6MtTvqk
- **Prisma**: Rodar as migrations dentro do container, assim que a issue citada for corrigida.
- **pages?**: Um nome que deixe mais claro que o arg `pages` se define ao número de páginas buscadas na api do arcsecond, e nao que a busca nessa api será paginada
