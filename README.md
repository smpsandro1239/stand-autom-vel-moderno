# 🚗 StandPro - Gestão Premium de Veículos

![StandPro Logo](https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/car.svg)

## 🎯 Pitch: A Revolução na Gestão de Stands
O **StandPro** não é apenas mais um software de gestão de veículos; é uma solução **full-stack premium** desenhada para elevar a eficiência de stands de automóveis e empresas de aluguer.

Num mercado competitivo, a velocidade e a confiança são fundamentais. O StandPro oferece:
- **Presença Digital Imediata:** Catálogo otimizado para SEO e performance (Next.js 14).
- **Gestão Centralizada:** Inventário de vendas e alugueres num único dashboard.
- **Segurança de Nível Bancário:** Autenticação robusta, tokens rotativos e auditoria total de ações.
- **Escalabilidade:** Arquitetura monorepo que permite crescer do SDK à aplicação mobile sem fricção.

---

## 🛠️ Stack Tecnológica

### Monorepo (NPM Workspaces)
- **Frontend:** [Next.js 14](https://nextjs.org/) (App Router), Tailwind CSS, TanStack Query, Zustand.
- **Backend:** [NestJS](https://nestjs.com/) (Fastify), Prisma ORM, PostgreSQL, Redis.
- **SDK:** TypeScript SDK nativo para integração simplificada.
- **Shared:** Pacote de tipos e validações (Zod) partilhado entre todas as apps.

### Infraestrutura & Segurança
- **CI/CD:** GitHub Actions.
- **Deploy:** Render (Automático).
- **Segurança:** Helmet, Rate Limiting, RBAC (Role Based Access Control), Audit Logs.

---

## 📸 Galeria de Screenshots

### Experiência Desktop
| Home | Catálogo | Dashboard |
|:---:|:---:|:---:|
| ![Home](./docs/screenshots/desktop/home.png) | ![Catálogo](./docs/screenshots/desktop/catalog.png) | ![Dashboard](./docs/screenshots/desktop/dashboard.png) |

### Experiência Mobile
| Home | Dashboard |
|:---:|:---:|
| ![Home](./docs/screenshots/mobile/home.png) | ![Dashboard](./docs/screenshots/mobile/dashboard.png) |

---

## 📖 Manual do Utilizador

### 1. Navegação e Exploração
- **Catálogo:** Aceda à página de "Veículos" para explorar todos os carros disponíveis. Utilize os filtros (venda/aluguer) para encontrar o que procura.
- **Detalhes:** Clique em "Ver Detalhes" para consultar especificações técnicas, quilometragem e preço.

### 2. Contacto e Interesse
- Ao encontrar um veículo, os utilizadores podem enviar uma **Lead** de interesse (venda) ou solicitar uma **Reserva** (aluguer).

---

## 👨‍💼 Manual do Administrador

### 1. Gestão de Inventário
- Aceda ao **Dashboard** após fazer login.
- Utilize o botão "Adicionar Veículo" para inserir novos carros no sistema.
- Edite ou remova veículos existentes diretamente na sua garagem virtual.

### 2. Monitorização
- Visualize o número de **Leads Ativas** e **Alugueres Ativos** em tempo real através dos cartões de métricas no topo do dashboard.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 20+
- Docker & Docker Compose

### Instalação
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o ambiente: `cp .env.example .env`.
4. Inicie a base de dados: `docker-compose up -d`.
5. Execute as migrations: `npm run prisma:deploy --workspace=apps/backend`.
6. Inicie o projeto em modo desenvolvimento: `npm run dev`.

### Documentação da API
A API do StandPro está documentada com Swagger e pode ser acedida em `http://localhost:3001/api/docs` após iniciar o backend.

---

## 🛡️ Auditoria e Logs
O sistema mantém um registo rigoroso de todas as operações sensíveis. Administradores podem consultar os logs estruturados no backend para verificar quem criou, editou ou removeu qualquer recurso, garantindo transparência total.

---

*Desenvolvido com ❤️ pela equipa StandPro.*
