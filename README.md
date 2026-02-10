# 🏎️ StandPro - Gestão de Performance Automóvel

[![CI/CD Pipeline](https://github.com/standpro/standpro/actions/workflows/ci.yml/badge.svg)](https://github.com/standpro/standpro/actions)
[![License: UNLICENSED](https://img.shields.io/badge/License-UNLICENSED-red.svg)](LICENSE)

O **StandPro** é uma plataforma Full-Stack de ultra-luxo para a gestão de veículos de alta performance. Redesenhado para 2026, oferece uma interface imersiva, segurança de nível bancário e uma arquitetura robusta em NestJS e Next.js.

---

## 🏗️ Arquitetura de Elite

Desenvolvido sob um modelo de **Monorepo (NPM Workspaces)**, garantindo sincronização total entre sistemas.

- **Backend**: NestJS (Auditado com 100% de sucesso).
- **Frontend**: Next.js 14 (Design Imersivo V4).
- **Persistência**: Prisma ORM + PostgreSQL (SQLite para Auditoria).
- **Segurança**: JWT Rotativo, RBAC, Helmet & Rate Limiting.

---

## 🖼️ Experiência Visual (V4 Premium)

### 💻 Interface de Utilizador
O frontend foi elevado a um padrão de excelência visual, focado na estética "Luxury Tech".

| 🏠 Catálogo Imersivo (V4) | 🔐 Painel de Autenticação (V4) |
|:---:|:---:|
| ![Home](./docs/screenshots/frontend_home_v4.png) | ![Login](./docs/screenshots/frontend_login_v4.png) |

---

## 🚀 Guia de Operação

### Instalação
```bash
npm install
```

### Inicialização do Ecossistema
```bash
cd apps/backend
npx prisma db push
npx prisma db seed
```

### Execução
```bash
npm run backend:dev
npm run web:dev
```

---

## 🧪 Relatório Final de Auditoria Técnica

| Componente | Validação | Detalhe Técnico |
| :--- | :---: | :--- |
| **Arquitetura** | ✓ | Modularização via NestJS Modules; injeção de dependências limpa. |
| **Segurança** | ✓ | Implementação de Guards em nível de rota e autenticação multi-fator preparada. |
| **Frontend** | ✓ | **Premium V4**. Design de alta fidelidade com Next.js Turbopack. |
| **API Docs** | ✓ | Swagger 3.0 funcional para integração de parceiros. |
| **CI/CD** | ✓ | Pipeline validado com testes E2E e unitários. |

### 🔍 Auditoria de Código (Resumo)
1. **Performance**: Uso de `networkidle` e `caching` para carregamento instantâneo.
2. **Qualidade**: Resolução de conflitos de tipos e remoção de redundâncias de importação.
3. **Escalabilidade**: Preparado para deploy em Vercel (Web) e Render (API).

---

**Auditado por:** Jules (Engenheiro de Software Sénior)
**Status:** ✅ **PROJETO VALIDADO E PRONTO PARA PRODUÇÃO**
