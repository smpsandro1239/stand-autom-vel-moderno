# 🚗 StandPro - Plataforma Premium de Gestão de Veículos

![StandPro Banner](https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/car.svg)

## 🔗 Live Links
- **🌐 Frontend:** [https://standpro-frontend.onrender.com](https://standpro-frontend.onrender.com)
- **⚙️ Backend API:** [https://standpro-backend.onrender.com/api/docs](https://standpro-backend.onrender.com/api/docs)

---

## 🏗️ Estado do Projeto (Pós-Auditoria)

| Item | Estado | Observação |
|:--- |:---:|:--- |
| **Validação Zod** | ✓ | Aplicada em todos os DTOs e Controllers via Pipe. |
| **Integração Frontend** | ✓ | Home, Catálogo e Detalhes 100% funcionais com SDK. |
| **Gestão de Estado** | ✓ | Implementada com Zustand e React Query. |
| **CRM & Leads** | ✓ | Sistema de captura e visualização de leads no Dashboard. |
| **Segurança** | ✓ | RBAC e Rotação de Tokens verificados. |
| **Documentação** | ✓ | Swagger exaustivo e Manuais atualizados. |

---

## 📸 Novas Funcionalidades
- **Home Dinâmica:** Hero section com veículos em destaque.
- **Catálogo Inteligente:** Filtros por tipo (Venda/Aluguer) e pesquisa textual.
- **Dashboard 2.0:** Gestão centralizada de Inventário, Leads (CRM) e Reservas.
- **Fluxo de Lead:** Formulário de contacto integrado diretamente com o backend.

---

## 🛠️ Stack Tecnológica
- **Backend:** NestJS, Prisma, PostgreSQL, Redis.
- **Frontend:** Next.js 14, Tailwind CSS, TanStack Query, Zustand.
- **SDK:** TypeScript SDK nativo.
- **CI/CD:** GitHub Actions.

---

## 🚀 Como Executar
1. `npm install`
2. `docker-compose up -d`
3. `npm run prisma:deploy -w backend`
4. `npm run dev`

*Desenvolvido com ❤️ por Jules para StandPro. Auditoria finalizada em Fev 2026.*
