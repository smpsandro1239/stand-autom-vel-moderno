# Plataforma de Venda e Aluguer de Veículos

## 🏗️ Arquitetura Final

A plataforma será desenvolvida seguindo uma arquitetura de **Monorepo** para garantir consistência entre o Backend, Frontend e SDK, facilitando a partilha de tipos e lógica de negócio.

### Componentes Principais:
1.  **Backend (apps/backend):** API REST desenvolvida com **NestJS**, utilizando **Prisma ORM** para interação com a base de dados **PostgreSQL**.
2.  **Frontend (apps/frontend):** Aplicação web desenvolvida com **Next.js 14 (App Router)**, focada em performance e SEO.
3.  **SDK (packages/sdk):** Cliente TypeScript para facilitar a integração entre o frontend e a API, podendo ser utilizado por outros serviços no futuro.
4.  **Shared (packages/shared):** Tipos, esquemas de validação (Zod) e utilitários partilhados.

### Stack Tecnológica:
- **Linguagem:** TypeScript
- **Backend:** NestJS, Prisma, PostgreSQL, Redis (Cache/Rate Limiting), Passport/JWT (Auth).
- **Frontend:** Next.js 14, Tailwind CSS, Shadcn UI, TanStack Query.
- **Segurança:** Helmet, CORS, Zod (Validação), Refresh Tokens Rotativos.
- **Infraestrutura:** Docker para desenvolvimento local, Pipelines CI/CD para deploy automatizado.


## 📦 Dependências Críticas

### Backend
- `@nestjs/common`, `@nestjs/core`, `@nestjs/swagger`
- `prisma`, `@prisma/client`
- `zod` (validação)
- `passport-jwt`, `bcrypt`
- `ioredis`

### Frontend
- `next` (v14+)
- `lucide-react`
- `clsx`, `tailwind-merge`
- `@tanstack/react-query`
- `axios`

### SDK
- `axios`
- `zod`
