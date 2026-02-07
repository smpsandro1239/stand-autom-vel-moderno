# Documentação de Deploy - StandPro

A plataforma StandPro é implementada utilizando o **Render** para todos os serviços e infraestrutura.

## Infraestrutura

Os seguintes serviços estão configurados no Render:

1. **standpro-backend** (Web Service): API NestJS.
2. **standpro-frontend** (Web Service): Aplicação Next.js.
3. **standpro-redis** (Key-Value): Armazenamento de sessões e cache.
4. **PostgreSQL** (Managed Database): Base de dados principal.

## Variáveis de Ambiente

### Backend
- `DATABASE_URL`: String de conexão com o PostgreSQL.
- `REDIS_URL`: URL de conexão com o Redis (ex: `redis://red-xxx:6379`).
- `JWT_SECRET`: Chave secreta para tokens de acesso.
- `REFRESH_TOKEN_SECRET`: Chave secreta para tokens de atualização.

### Frontend
- `NEXT_PUBLIC_API_URL`: URL da API Backend (ex: `https://standpro-backend.onrender.com`).

## Fluxo de CI/CD

O deploy é automático e disparado por commits na branch `main`.

1. **Trigger**: Push para a branch `main`.
2. **Build**:
   - Backend: `npm install && npm run build -w backend`
   - Frontend: `npm install && npm run build -w frontend`
3. **Deploy**: O Render executa o comando de início (`npm run start -w ...`) após o build bem-sucedido.

## Comandos de Manutenção

Para migrações de base de dados em produção, execute via SSH ou consola do Render:
```bash
npm run prisma:migrate -w backend
```
