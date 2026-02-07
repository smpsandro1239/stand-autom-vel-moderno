# StandPro - Ecossistema Automóvel

Plataforma completa para gestão, venda e aluguer de veículos, construída com uma arquitetura monorepo moderna e escalável.

## 🚀 Estrutura do Projeto

O projeto utiliza **NPM Workspaces** e está dividido da seguinte forma:

- **apps/backend**: API REST robusta construída com NestJS e Prisma ORM.
- **apps/frontend**: Aplicação web moderna em Next.js 14 (App Router).
- **packages/sdk**: SDK TypeScript para integração facilitada com a API.
- **packages/shared**: Tipos, DTOs e lógica de validação partilhada entre o frontend e backend.

## 🏁 Como Começar

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Iniciar Desenvolvimento**:
   ```bash
   npm run dev
   ```

## 📖 Documentação

- [Onboarding Técnico](./docs/onboarding.md)
- [Arquitetura do Sistema](./docs/architecture.md)
