# Arquitetura do Sistema - StandPro

O StandPro utiliza uma arquitetura monorepo moderna para maximizar a reutilização de código e manter a consistência entre o backend e o frontend.

## Visão Geral

A solução está estruturada em três camadas principais:

### 1. Backend (NestJS)
- **Framework**: NestJS para uma estrutura modular e tipada.
- **Persistência**: PostgreSQL gerido via Prisma ORM.
- **Caching/Sessões**: Redis para armazenamento de refresh tokens rotativos.
- **Segurança**: Autenticação JWT com RBAC (Role-Based Access Control) e Rate Limiting.

### 2. Frontend (Next.js 14)
- **Framework**: Next.js com App Router.
- **Estado**: Zustand para gestão de estado global (auth).
- **Data Fetching**: TanStack Query para sincronização eficiente com a API.
- **Estilização**: Tailwind CSS para uma UI responsiva e moderna.

### 3. Shared & SDK
- **Shared**: Definição centralizada de DTOs, Enums e Schemas Zod.
- **SDK**: Cliente HTTP encapsulado que expõe os recursos da API de forma intuitiva para o frontend.

## Fluxo de Dados

1. O Utilizador interage com o Frontend.
2. O Frontend utiliza o SDK para disparar pedidos HTTP.
3. O Backend valida o pedido usando Pipes Zod.
4. O Service executa a lógica de negócio e interage com o Prisma.
5. A resposta é enviada de volta e o TanStack Query atualiza a UI.

## Infraestrutura

- **CI/CD**: GitHub Actions para builds e testes automatizados.
- **Ambiente**: Totalmente contentorizado com Docker para paridade entre desenvolvimento e produção.
